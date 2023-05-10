import { useState, useEffect, useRef } from "react";

import type { PlayerGameData, PlayerAction } from "~common/types/index.js";
import { webSocketServerToClientMessageSchema } from "~common/types/schemas/message.js";

declare const API_ORIGIN: string;
const WEBSOCKET_URL = (API_ORIGIN || location.origin).replace(/^http/i, "ws");

const isNewWebSocketNeeded = (webSocket: WebSocket | null): boolean =>
  !webSocket ||
  WebSocket.CLOSING === webSocket.readyState ||
  WebSocket.CLOSED === webSocket.readyState;

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
  const getNewWebSocketRef = useRef((_jsonString?: string) => {});
  const [playerGameData, setPlayerGameData] = useState<PlayerGameData | null>(
    null
  );
  const [connectionStatus, setConnectionStatus] = useState<
    "not-connected" | "connected" | "not-found"
  >("not-connected");
  const [latency, setLatency] = useState(0);

  const sendViaWebSocketRef = useRef((messageObject: PlayerAction) => {
    const messageJSONString = JSON.stringify(messageObject);
    if (isNewWebSocketNeeded(webSocketRef.current)) {
      getNewWebSocketRef.current(messageJSONString);
    } else {
      webSocketRef.current?.send(messageJSONString);
    }
  });

  useEffect(() => {
    reOpenWebSocketRef.current = true;
    getNewWebSocketRef.current = (messageJSONString?: string) => {
      if (!isNewWebSocketNeeded(webSocketRef.current)) {
        return;
      }

      console.info(
        new Date().toLocaleTimeString(),
        "Getting a new WebSocket connection"
      );
      webSocketRef.current = new WebSocket(WEBSOCKET_URL);

      const onOpenWebSocketMessage = {
        playerId: playerDetails.id,
        password: playerDetails.password,
        gameId,
        type: "listen",
      };

      webSocketRef.current.addEventListener("open", () => {
        console.info(
          new Date().toLocaleTimeString(),
          "WebSocket connection opened"
        );
        webSocketRef.current?.send(JSON.stringify(onOpenWebSocketMessage));

        if (messageJSONString) {
          setTimeout(() => {
            webSocketRef.current?.send(messageJSONString);
          }, 20);
        }
      });

      webSocketRef.current.addEventListener(
        "message",
        (webSocketMessageEvent) => {
          const { data } = webSocketMessageEvent;
          const result = webSocketServerToClientMessageSchema.safeParse(
            webSocketMessageEvent.data
          );

          if (!result.success) {
            console.error(
              new Date().toLocaleTimeString(),
              "Unexpected data from WebSocket",
              data
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
              webSocketRef.current?.send("pong");
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
