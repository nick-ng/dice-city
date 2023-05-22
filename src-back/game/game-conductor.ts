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
import { jsonSafeParse } from "~common/utils/index.js";

import {
  getClient as getRedisClient,
  getGameStateKey,
  getGameActionKey,
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

    const res1 = jsonSafeParse(message.data);

    if (!res1.success) {
      console.error(`Game data string isn't json: ${message.data}`);
      return false;
    }

    const res2 = gameDataSchema.safeParse(res1.json);

    if (!res2.success) {
      return false;
    }

    this.gameId = gameId;
    this.gameData = res2.data;

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
      const res1 = jsonSafeParse(buffer.toString());

      if (!res1.success) {
        console.error("incoming message isn't a json string", res1.error);
        return;
      }

      const res2 = webSocketClientToServerMessageSchema.safeParse(res1.json);
      if (!res2.success) {
        console.error("error!", JSON.stringify(res2.error, null, "  "));
        console.log("original websocket buffer", buffer.toString());
        return;
      }
      const { type } = res2.data;

      switch (type) {
        case "pong":
          player.latency = Date.now() - player.lastPing;
          break;
        case "join":

        default:
          console.info("success", res2.data);
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
