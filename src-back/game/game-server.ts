import type { ActionIncomingMessageObject } from "../../dist-common/game-action-types";
import { sleep } from "../../dist-common/utils";

import {
  streamHelper,
  client as redisClient,
  findGame,
  getRedisKeys as getGameKeys,
  saveGame,
  getRedisKeys,
  gameStreamEntries,
  addAction,
} from "./game-redis";
import type Game from "./game-class";
import { playGame } from "./game-service";

const STATS_REPORT_DELAY_MS = 1000;
const APM_WEIGHT = 3;
const FREE_HEAP_WEIGHT = 3;
export const GAME_STARTER_KEY = "game-starter";

const getStatsKey = (id: string) => `stats:${id}`;

export default class GameServer {
  id: string;
  allGames: Game[];
  statsKey: string;
  actionCount: number;
  actionCountLastReset: number;
  averageActionsPerMinute: number;

  constructor(id: string) {
    this.id = id;
    this.allGames = [];
    this.statsKey = getStatsKey(id);
    this.actionCount = 0;
    this.actionCountLastReset = Date.now();
    this.averageActionsPerMinute = 0;

    this.reportStats();
    this.resumeAndListenForGames();
  }

  getActionStats = () => {
    const tempActionCount = this.actionCount;
    const tempActionCountLastReset = this.actionCountLastReset;
    this.actionCount = 0;
    this.actionCountLastReset = Date.now();
    const elapsed = this.actionCountLastReset - tempActionCountLastReset;
    const newAPM = (tempActionCount / (elapsed + Number.MIN_VALUE)) * 1000 * 60;

    const ratio = 2 / 50; // Smoothing / (1 + Periods)
    this.averageActionsPerMinute =
      newAPM * ratio + this.averageActionsPerMinute * (1 - ratio);

    return {
      actionCount: tempActionCount,
      elapsed,
      actionsPerMinute: this.averageActionsPerMinute,
    };
  };

  resumeAndListenForGames = async () => {
    const gameStartRequests = await redisClient.xRevRange(
      GAME_STARTER_KEY,
      "+",
      "-"
    );
    console.debug(
      "resumeAndListenForGames - gameStartRequests",
      gameStartRequests,
      gameStartRequests.length
    );

    // Wait for client to connect before blocking with xRead
    while (typeof streamHelper.xReadClient.id === "undefined") {
      await sleep(100);
    }

    console.debug("resumeAndListenForGames - resuming in progress games");
    let counter = 0;
    gameStartRequests?.forEach((gameStartRequest) => {
      counter++;
      this.handleGameStart(gameStartRequest.message.data);
      console.debug(
        "resumeAndListenForGames - stats after starting game",
        counter,
        JSON.stringify(this.getStats(), null, "  ")
      );
    });
    console.debug("resumeAndListenForGames - resumed # games", counter);

    console.debug("resumeAndListenForGames - adding GAME_STARTER_KEY listener");
    streamHelper.addListener({
      streamKey: GAME_STARTER_KEY,
      id: this.id,
      fetchOnAdd: false,
      lastOnly: false,
      updateHandler: this.gameStartListener,
    });
  };

  handleGameStart = async (gameStartRequestJSONString: string) => {
    const gameStartRequestData = JSON.parse(gameStartRequestJSONString);
    console.debug(
      "handleGameStart - gameStartRequestData",
      gameStartRequestData
    );
    const { gameId } = gameStartRequestData;
    console.debug("handleGameStart - gameId", gameId);

    if (this.allGames.map((a) => a.id).includes(gameId)) {
      return;
    }

    const game = await findGame(gameId);

    if (game !== null && game.gameState.state !== "over") {
      console.debug("handleGameStart - found game", gameId);
      this.allGames.push(game);

      const updateHandler = this.makeActionListener(game);

      streamHelper.addListener({
        streamKey: getGameKeys(game.id).action,
        id: game.id,
        fetchOnAdd: true,
        lastOnly: false,
        updateHandler,
      });

      if (game.resumeAction) {
        updateHandler("", game.resumeAction, "$");
      }
    }
  };

  makeActionListener =
    (game: Game) =>
    (
      _message: string | null,
      messageObject: ActionIncomingMessageObject | null,
      lastActionId: string
    ) => {
      if (messageObject === null) {
        console.debug(
          "updateHandler - no message object",
          game.id,
          _message,
          lastActionId
        );
        return;
      }
      this.actionCount += 1;

      console.debug("updateHandler - messageObject", game.id, messageObject);
      const { type, message } = playGame(game, messageObject, (nextAction) => {
        console.debug("updateHandler - nextAction", game.id, nextAction);
        addAction(nextAction);
      });

      console.debug(
        "updateHandler - nextAction result",
        game.id,
        type,
        message
      );
      if (type !== "success") {
        return;
      }

      game.lastActionId = lastActionId;
      saveGame(game.getGameData(), true);

      if (game.gameState.state === "over") {
        streamHelper.removeListener(game.id);
        this.allGames = this.allGames.filter((gameB) => gameB.id !== game.id);
      }
    };

  gameStartListener = (message: string) => {
    this.handleGameStart(message);

    const ids = [...streamHelper.listeners]
      .map((a) => a.id)
      .filter((a) => a !== this.id);

    ids.forEach(async (id) => {
      const { state: stateKey, action: actionKey } = getRedisKeys(id);
      const keyExists = await redisClient.exists(stateKey);

      if (keyExists > 0) {
        return;
      }

      redisClient.del(actionKey);
      streamHelper.removeListener(id);
    });
  };

  getStats = () => {
    const memoryUsage = process.memoryUsage();
    return {
      id: this.id,
      memoryUsage,
      heapFree: memoryUsage.heapTotal - memoryUsage.heapUsed,
      games: this.allGames.length,
      timestamp: Date.now(),
      ...this.getActionStats(),
    };
  };

  reportStats = async () => {
    redisClient.set(this.statsKey, JSON.stringify(this.getStats()));
    redisClient.expire(this.statsKey, (STATS_REPORT_DELAY_MS * 10) / 1000);

    setTimeout(() => {
      this.reportStats();
    }, STATS_REPORT_DELAY_MS + Math.random() * 0.1 * STATS_REPORT_DELAY_MS);
  };
}

const redisStats = {
  lastFetch: 0,
  gameStreamEntries: 0,
  games: 0,
  totalAllocated: 0,
  peakAllocated: 0,
};

export const checkStats = async () => {
  let serverStats = [];

  for await (const key of redisClient.scanIterator({
    TYPE: "string",
    MATCH: getStatsKey("*"),
  })) {
    try {
      const statsJSONString = await redisClient.get(key);
      if (typeof statsJSONString === "string") {
        const stats = JSON.parse(statsJSONString);
        serverStats.push(stats);

        if (
          !stats.timestamp ||
          stats.timestamp > Date.now() + 11 * STATS_REPORT_DELAY_MS
        ) {
          redisClient.del(key);
        }
      }
    } catch (e) {
      console.info("error on", key);
      console.error("Error when checking stats", e);
    }
  }

  if (Date.now() - redisStats.lastFetch > 10 * STATS_REPORT_DELAY_MS) {
    const gameStartRequests = await redisClient.xRevRange(
      GAME_STARTER_KEY,
      "+",
      "-"
    );
    redisStats.games = 0;
    redisStats.gameStreamEntries = 0;

    const stats = await redisClient.memoryStats();
    redisStats.peakAllocated = stats.peakAllocated;
    redisStats.totalAllocated = stats.totalAllocated;

    for (const gameStartRequest of gameStartRequests) {
      try {
        const gameStartRequestData = JSON.parse(gameStartRequest.message.data);
        const { gameId } = gameStartRequestData;
        const gameLength = await gameStreamEntries(gameId);
        redisStats.gameStreamEntries += gameLength;
        if (gameLength > 0) {
          redisStats.games++;
        }
      } catch (e) {
        console.error("error when fetching game entries stats", e);
      }
    }
  }

  return { serverStats, redisStats };
};

export const sendStartGameAction = async (gameId: string) => {
  try {
    const { serverStats } = await checkStats();

    let serverId = Math.random() > 0.5 ? "first" : "last";
    if (serverStats.length > 0) {
      serverId = serverStats.sort((a, b) => {
        const aa =
          FREE_HEAP_WEIGHT * a.heapFree - APM_WEIGHT * a.actionsPerMinute;
        const bb =
          FREE_HEAP_WEIGHT * b.heapFree - APM_WEIGHT * b.actionsPerMinute;

        return aa - bb;
      })[0].id;
    }

    redisClient.xAdd(
      GAME_STARTER_KEY,
      "*",
      {
        data: JSON.stringify({
          gameId,
          serverId,
        }),
      },
      {
        TRIM: {
          strategy: "MAXLEN",
          strategyModifier: "~",
          threshold: 100,
        },
      }
    );

    return true;
  } catch (e) {
    console.error("Error when starting game", e);
    return false;
  }
};
