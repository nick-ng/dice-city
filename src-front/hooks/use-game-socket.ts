import { useState, useEffect, useRef } from "react";

import type { GameData, PlayerAction } from "~common/types/index.js";
import { gameDataSchema } from "~common/types/schemas/game.js";

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
  gameData: GameData | null;
  connectionStatus: number | string;
  sendViaWebSocket(playerAction: PlayerAction): void;
} => {
  const reOpenWebSocketRef = useRef(false);
  const webSocketRef = useRef<WebSocket | null>(null);
  const getNewWebSocketRef = useRef((_jsonString?: string) => {});
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<number | string>(
    "not-connected"
  );

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
          if (typeof data !== "string") {
            console.error(
              new Date().toLocaleTimeString(),
              "Unexpected data from WebSocket",
              data
            );
            return;
          }

          if (data === "ping") {
            webSocketRef.current?.send("pong");
            return;
          }

          if (data === "not-found") {
            setGameData(null);
            setConnectionStatus("not-found");
            return;
          }

          try {
            const dataObject = JSON.parse(data);
            switch (dataObject.type) {
              case "game-data":
                const gameData = gameDataSchema.parse(dataObject.payload);
                if (gameData.gameDetails.id === gameId) {
                  setGameData(gameData);
                  setConnectionStatus((prevConnectionStatus) =>
                    typeof prevConnectionStatus === "string"
                      ? 0
                      : prevConnectionStatus
                  );
                }
                return;
              case "latency":
                setConnectionStatus(dataObject.payload.roundTripTime);
            }
          } catch (e) {
            console.error(
              new Date().toLocaleTimeString(),
              "Other error from WebSocket",
              e
            );
          }
        }
      );

      webSocketRef.current.addEventListener("close", () => {
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
    gameData,
    connectionStatus,
    sendViaWebSocket: sendViaWebSocketRef.current,
  };
};
