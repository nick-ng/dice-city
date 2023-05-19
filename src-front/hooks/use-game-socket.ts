import { useState, useEffect, useRef } from "react";

import type {
  PlayerGameData,
  PlayerAction,
  WebSocketClientToServerMessage,
} from "~common/types/index.js";
import { webSocketServerToClientMessageSchema } from "~common/types/schemas/message.js";

declare const __API_ORIGIN__: string;
const WEBSOCKET_URL = (__API_ORIGIN__ || location.origin).replace(
  /^http/i,
  "ws"
);

const isNewWebSocketNeeded = (webSocket: WebSocket | null): boolean =>
  !webSocket ||
  WebSocket.CLOSING === webSocket.readyState ||
  WebSocket.CLOSED === webSocket.readyState;

const safeSend = (
  websocket: WebSocket | null,
  messageObject: WebSocketClientToServerMessage
): void => {
  websocket?.send(JSON.stringify(messageObject));
};

export const useGameSocket = (
  gameId: string,
  playerDetails: {
    id: string;
    password: string;
  }
): {
  playerGameData: PlayerGameData | null;
  connectionStatus: string;
  latency: number;
  sendViaWebSocket(playerAction: PlayerAction): void;
} => {
  const reOpenWebSocketRef = useRef(false);
  const webSocketRef = useRef<WebSocket | null>(null);
  const getNewWebSocketRef = useRef(
    (_messageObject?: WebSocketClientToServerMessage) => {}
  );
  const [playerGameData, setPlayerGameData] = useState<PlayerGameData | null>(
    null
  );
  const [connectionStatus, setConnectionStatus] = useState<
    "not-connected" | "connected" | "not-found"
  >("not-connected");
  const [latency, setLatency] = useState(0);

  const sendViaWebSocketRef = useRef((messageObject: PlayerAction) => {
    const fullMessageObject: WebSocketClientToServerMessage = {
      ...messageObject,
      playerId: playerDetails.id,
      playerPassword: playerDetails.password,
    };

    if (isNewWebSocketNeeded(webSocketRef.current)) {
      getNewWebSocketRef.current(fullMessageObject);
    } else {
      safeSend(webSocketRef.current, fullMessageObject);
    }
  });

  useEffect(() => {
    reOpenWebSocketRef.current = true;
    getNewWebSocketRef.current = (
      messageObject?: WebSocketClientToServerMessage
    ) => {
      if (!isNewWebSocketNeeded(webSocketRef.current)) {
        return;
      }

      console.info(
        new Date().toLocaleTimeString(),
        "Getting a new WebSocket connection"
      );

      webSocketRef.current = new WebSocket(
        `${WEBSOCKET_URL}/game/${gameId}?playerid=${playerDetails.id}`
      );

      webSocketRef.current.addEventListener("open", () => {
        console.info(
          new Date().toLocaleTimeString(),
          "WebSocket connection opened"
        );

        if (messageObject) {
          setTimeout(() => {
            safeSend(webSocketRef.current, messageObject);
          }, 20);
        }
      });

      webSocketRef.current.addEventListener(
        "message",
        (webSocketMessageEvent) => {
          const { data } = webSocketMessageEvent;
          const result = webSocketServerToClientMessageSchema.safeParse(
            JSON.parse(data)
          );

          if (!result.success) {
            console.error(
              new Date().toLocaleTimeString(),
              "Unexpected data from WebSocket",
              JSON.stringify(result.error, null, "  ")
            );
            return;
          }

          const message = result.data;

          switch (message.type) {
            case "not-found":
              setPlayerGameData(null);
              setConnectionStatus("not-found");
              setLatency(0);
              return;
            case "ping":
              safeSend(webSocketRef.current, {
                type: "pong",
                playerId: playerDetails.id,
                playerPassword: playerDetails.password,
              });
              break;
            case "game-data":
              const playerGameData = message.payload.playerGameData;
              if (playerGameData.gameDetails.id === gameId) {
                setPlayerGameData(playerGameData);
                setConnectionStatus("connected");
              }
              break;
            default:
          }

          if (message.payload?.latency) {
            setLatency(message.payload?.latency);
          }
        }
      );

      webSocketRef.current.addEventListener("close", () => {
        setConnectionStatus("not-connected");
        if (reOpenWebSocketRef.current) {
          console.info(
            new Date().toLocaleTimeString(),
            "WebSocket connection lost"
          );
          getNewWebSocketRef.current();
        } else {
          console.info(
            new Date().toLocaleTimeString(),
            "WebSocket connection closed"
          );
        }
      });
    };

    getNewWebSocketRef.current();

    return () => {
      console.info(
        new Date().toLocaleTimeString(),
        "Closing WebSocket connection"
      );
      reOpenWebSocketRef.current = false;
      webSocketRef.current?.close();
      webSocketRef.current = null;
    };
  }, [gameId, playerDetails.id, playerDetails.password]);

  return {
    playerGameData,
    connectionStatus,
    latency,
    sendViaWebSocket: sendViaWebSocketRef.current,
  };
};
