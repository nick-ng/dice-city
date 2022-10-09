import { useState, useEffect, useRef } from "react";

import type { WebsocketIncomingMessageObject } from "dist-common/game-action-types";
import type { PlayerGameData, PlayerDetails } from "dist-common/game-types";

declare const API_ORIGIN: string;
const WEBSOCKET_URL = (API_ORIGIN || location.origin).replace(/^http/i, "ws");

const isNewWebSocketNeeded = (webSocket: WebSocket | null): boolean =>
  !webSocket ||
  [WebSocket.CLOSING, WebSocket.CLOSED].includes(webSocket.readyState);

type GameData = PlayerGameData | "not-found" | "loading";

export const useGameSocket = (
  gameId: string,
  playerDetails: PlayerDetails
): {
  gameData: GameData;
  roundTripTime: number;
  sendViaWebSocket(messageObject: WebsocketIncomingMessageObject): void;
} => {
  const reOpenWebSocketRef = useRef(false);
  const webSocketRef = useRef<WebSocket | null>(null);
  const getNewWebSocketRef = useRef((_jsonString?: string) => {});
  const [gameData, setGameData] = useState<GameData>("loading");
  const [roundTripTime, setRoundTripTime] = useState(0);

  const sendViaWebSocketRef = useRef(
    (messageObject: WebsocketIncomingMessageObject) => {
      const messageJSONString = JSON.stringify(messageObject);
      if (isNewWebSocketNeeded(webSocketRef.current)) {
        getNewWebSocketRef.current(messageJSONString);
      } else {
        webSocketRef.current?.send(messageJSONString);
      }
    }
  );

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
        playerId: playerDetails.playerId,
        password: playerDetails.playerPassword,
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
            setGameData("not-found");
            return;
          }

          try {
            const dataObject = JSON.parse(data);
            switch (dataObject.type) {
              case "game-data":
                if (dataObject.payload.id === gameId) {
                  setGameData(dataObject.payload);
                }
                return;
              case "latency":
                setRoundTripTime(dataObject.payload.roundTripTime);
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
  }, []);

  return {
    gameData,
    roundTripTime,
    sendViaWebSocket: sendViaWebSocketRef.current,
  };
};
