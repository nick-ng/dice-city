import http from "http";
import { randomUUID } from "crypto";
import { WebSocketServer, ServerOptions, WebSocket as WebSocketType } from "ws";

import type {
  ActionIncomingMessageObject,
  WebsocketIncomingMessageObject,
} from "../../dist-common/game-action-types";
import { decodeGameData } from "../../dist-common/decoders/game";
import { sleep } from "../../dist-common/utils";

import StreamHelper from "../redis/stream-helper";
import { addAction, getRedisKeys } from "./game-redis";
import Game from "./game-class";

interface WebSocketServerOptionsWithServer extends ServerOptions {
  server: ReturnType<typeof http.createServer>;
}

interface Connection {
  webSocketConnection: WebSocketType;
  id: string;
  playerId: string;
  playerPassword: string;
  gameId: string;
  lastPingTimeStamp: number;
  otherThing: number;
}

const makeUpdateHandler =
  (connection: Connection) =>
  (
    message: string | null,
    messageObject: ActionIncomingMessageObject | null
  ) => {
    if (message === "not-found") {
      connection.webSocketConnection.send("not-found");
    }

    let gameData;
    try {
      gameData = decodeGameData(messageObject);

      if (!gameData) {
        return;
      }
    } catch (e) {
      console.error("Caught error when decoding game", e);
      return;
    }

    const game = new Game(gameData);

    const outGoingMessage = {
      type: "game-data",
      payload: game.getGameDataForPlayer(
        connection.playerId,
        connection.playerPassword
      ),
    };

    connection.webSocketConnection.send(JSON.stringify(outGoingMessage));
  };

export default class GameWebSocketServer {
  webSocketServer: WebSocketServer;
  connections: Connection[];
  streamHelper: StreamHelper;
  pinging: boolean;

  constructor(
    options: WebSocketServerOptionsWithServer,
    streamHelper: StreamHelper
  ) {
    this.webSocketServer = new WebSocketServer(options);
    this.connections = [];
    this.streamHelper = streamHelper;
    this.pinging = false;

    this.webSocketServer.on("connection", (webSocketConnection) => {
      webSocketConnection.on("message", (buffer) => {
        if (buffer.toString() === "pong") {
          const connection = this.connections.find(
            (connection) =>
              connection.webSocketConnection === webSocketConnection
          );

          if (!connection) {
            return;
          }

          connection.webSocketConnection.send(
            JSON.stringify({
              type: "latency",
              payload: {
                roundTripTime: Date.now() - connection.lastPingTimeStamp,
              },
            })
          );

          return;
        }

        try {
          const data = JSON.parse(
            buffer.toString()
          ) as WebsocketIncomingMessageObject;
          this.messageHandler(data, webSocketConnection);
        } catch (e) {
          if (
            e instanceof SyntaxError &&
            e.message.match(/^Unexpected token \S+ in JSON/)
          ) {
            const errorMessage = "All messages must be JSON strings.";
            webSocketConnection.send(errorMessage);
            webSocketConnection.close(1003, errorMessage);
          }

          if (e instanceof Error) {
            const errorMessage = `Bad request: ${e.message}`;
            webSocketConnection.send(errorMessage);
            webSocketConnection.close(1003, errorMessage);
          }
        }
      });
    });
  }

  messageHandler = (
    data: WebsocketIncomingMessageObject,
    webSocketConnection: WebSocketType
  ) => {
    if (data.type === "listen") {
      this.registerListener(data, webSocketConnection);
      return;
    }

    const playerGameListener = this.connections.find((connection) => {
      return (
        connection.playerId === data.playerId &&
        connection.gameId &&
        data.gameId
      );
    });

    if (!playerGameListener) {
      webSocketConnection.send("You need to listen to the game first.");
      return;
    }

    switch (data.type) {
      case "join":
        break;
      case "action":
        this.playGameListener(data);
        break;
      default:
        console.debug(
          "Unhandled websocket message",
          JSON.stringify(data, null, "  ")
        );
    }
  };

  registerListener = (
    data: WebsocketIncomingMessageObject,
    webSocketConnection: WebSocketType
  ) => {
    const id = randomUUID();

    const connection: Connection = {
      id,
      webSocketConnection,
      playerId: data.playerId,
      playerPassword: data.password,
      gameId: data.gameId,
      lastPingTimeStamp: 0,
      otherThing: 0,
    };

    this.connections.push(connection);

    const { state: gameStateKey } = getRedisKeys(data.gameId);

    this.streamHelper.addListener({
      id,
      streamKey: gameStateKey,
      fetchOnAdd: true,
      lastOnly: true,
      updateHandler: makeUpdateHandler(connection),
    });

    webSocketConnection.onclose = () => {
      this.connections = this.connections.filter(
        (connection) => connection.id !== id
      );
      this.streamHelper.removeListener(id);

      if (process.env.NODE_ENV !== "production") {
        console.debug(
          new Date().toLocaleTimeString(),
          "WebSocket disconnected. total:",
          this.connections.length
        );
      }
    };

    if (!this.pinging) {
      this.startPing();
    }

    if (process.env.NODE_ENV !== "production") {
      console.debug(
        new Date().toLocaleTimeString(),
        "WebSocket connected. total:",
        this.connections.length
      );
    }
  };

  playGameListener = (data: ActionIncomingMessageObject) => {
    addAction(data);
  };

  startPing = async () => {
    while (this.connections.length > 0) {
      this.pinging = true;

      this.connections.forEach((connection) => {
        connection.lastPingTimeStamp = Date.now();
        connection.webSocketConnection.send("ping");
      });

      await sleep(Math.min(this.connections.length * 5000, 50000));
    }

    this.pinging = false;
  };
}
