import { WebSocket as WebSocketType } from "ws";
import { randomUUID } from "node:crypto";

import type {
  GameData,
  PlayerGameData,
  WebSocketServerToClientMessage,
} from "~common/types/index.js";

import {
  gameDataSchema,
  playerGameDataSchema,
} from "../../src-common/types/schemas/game.js";
import { webSocketClientToServerMessageSchema } from "../../src-common/types/schemas/message.js";

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

    try {
      const result = gameDataSchema.safeParse(JSON.parse(message.data));

      if (!result.success) {
        return false;
      }

      this.gameId = gameId;
      this.gameData = result.data;

      return true;
    } catch (e) {
      console.error(`Error parsing game data string ${message.data}`);
    }
  }

  addPlayer(playerId: string, socket: WebSocketType) {
    const uuid = randomUUID();
    this.players.push({
      uuid,
      playerId,
      socket,
      lastPing: 0,
      latency: 0,
      pingCounter: 0,
    });

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
      let jsonObject = {};

      try {
        jsonObject = JSON.parse(buffer.toString());
      } catch (e) {
        if (e instanceof Error) {
          console.error("error parsing incoming message", e);
        }
      }

      const result = webSocketClientToServerMessageSchema.safeParse(jsonObject);
      if (!result.success) {
        console.error("error!", JSON.stringify(result.error, null, "  "));
        console.log("original websocket buffer", buffer.toString());
      } else {
        const { type } = result.data;

        switch (type) {
          default:
            console.info("success", result.data);
        }
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
