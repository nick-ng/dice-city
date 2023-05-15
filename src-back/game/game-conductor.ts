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

/**
 * Handles websocket stuff for a game
 */
export default class GameConductor {
  gameData: GameData;
  players: {
    playerId: string;
    socket: WebSocketType;
    lastPing: number;
    latency: number;
    pingCounter: number;
  }[];

  constructor(gameData?: GameData | null, hostId?: string) {
    if (gameData) {
      this.gameData = gameData;
    } else {
      throw new Error("Must have either gameData or hostId to make a game");
    }

    this.players = [];
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
        this.gameData.gameDetails.id
      );
    }
  }
}
