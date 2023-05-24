import { randomUUID } from "node:crypto";
import { WebSocket as WebSocketType } from "ws";

import type {
  GameData,
  PlayerGameData,
  WebSocketServerToClientMessage,
} from "~common/types/index.js";

import {
  gameDataSchema,
  playerGameDataSchema,
} from "~common/types/schemas/game.js";
import { webSocketClientToServerMessageSchema } from "~common/types/schemas/message.js";
import { jsonSafeParse, jsonSafeParseS } from "~common/utils/index.js";

import {
  getClient as getRedisClient,
  getGameStateKey,
  getGameActionKey,
  getGameWorkerKey,
} from "../redis/index.js";

/**
 * Handles websocket stuff for a game
 */
export default class GameConductor {
  gameId: string | null;
  gameData: GameData | null;
  players: {
    uuid: string;
    playerId: string;
    socket: WebSocketType;
    lastPing: number;
    latency: number;
    pingCounter: number;
  }[];

  constructor() {
    this.gameId = null;
    this.gameData = null;
    this.players = [];
  }

  async loadGame(gameId: string) {
    if (gameId !== this.gameId) {
      this.players = [];
    }

    const redis = getRedisClient();

    const temp = await redis.xRevRange(getGameStateKey(gameId), "+", "-", {
      COUNT: 1,
    });

    if (temp.length === 0) {
      return false;
    }

    const { message } = temp[0];

    const res = jsonSafeParseS(gameDataSchema, message.data);

    if (!res.success) {
      console.error(`couldn't parse game data ${message.data}`);
      return false;
    }

    this.gameId = gameId;
    this.gameData = res.data;

    redis.xAdd("games", "*", {
      data: JSON.stringify({ gameId: this.gameId }),
    });

    return true;
  }

  addPlayer(playerId: string, socket: WebSocketType) {
    const uuid = randomUUID();

    const player = {
      uuid,
      playerId,
      socket,
      lastPing: 0,
      latency: 0,
      pingCounter: 0,
    };

    this.players.push(player);

    const result = playerGameDataSchema.safeParse(this.gameData);

    if (result.success) {
      socket.send(
        JSON.stringify({
          type: "game-data",
          payload: {
            playerGameData: result.data,
          },
        } as WebSocketServerToClientMessage)
      );
    } else {
      console.error(
        "error parsing game data",
        this.gameId,
        JSON.stringify(result.error)
      );
    }

    console.debug(
      "players",
      this.players.map((p) => p.playerId)
    );

    socket.on("message", async (buffer) => {
      const res = jsonSafeParseS(
        webSocketClientToServerMessageSchema,
        buffer.toString()
      );
      if (!res.success) {
        console.error("error!", JSON.stringify(res.error, null, "  "));
        console.log("original websocket buffer", buffer.toString());
        return;
      }
      const { type } = res.data;

      switch (type) {
        case "pong":
          player.latency = Date.now() - player.lastPing;
          break;
        case "join":
          // todo(nick): move this to worker
          const redis = getRedisClient();

          const { payload } = res.data;
          const {} = payload;

        default:
          console.info("success", res.data);
      }
    });

    socket.on("close", () => {
      for (let n = 0; n < this.players.length; n++) {
        if (this.players[n].uuid === uuid) {
          this.players.splice(n, 1);
          break;
        }
      }

      console.debug(
        "players",
        this.players.map((p) => p.playerId)
      );

      if (this.players.length === 0) {
        this.gameId = null;
        this.gameData = null;
      }
    });
  }

  updateGameData(newGameDataUnknown: GameData) {
    try {
      const newGameData = gameDataSchema.parse(newGameDataUnknown);
      this.gameData = newGameData;

      for (let n = 0; n < this.players.length; n++) {
        const player = this.players[n];
        const playerGameData: PlayerGameData =
          playerGameDataSchema.parse(newGameData);

        player.pingCounter += 1;

        if (player.pingCounter % 20 === 0) {
          player.pingCounter = 0;
          player.lastPing = Date.now();
          player.socket.send(
            JSON.stringify({
              type: "ping",
              payload: {
                latency: player.latency,
              },
            } as WebSocketServerToClientMessage)
          );
        }

        player.socket.send(
          JSON.stringify({
            type: "game-data",
            payload: {
              playerGameData,
              latency: player.latency,
            },
          } as WebSocketServerToClientMessage)
        );
      }
    } catch (e) {
      console.error(
        "error when updating game data",
        newGameDataUnknown,
        this.gameData?.gameDetails.id
      );
    }
  }
}
