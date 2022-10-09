import { useState, useEffect } from "react";

import type {
  ActionIncomingMessageObject,
  AutomaticAction,
} from "dist-common/game-action-types";
import type { GameData, PlayerGameData } from "dist-common/game-types";

import { getMissionData } from "../missions";
import { getPlayerData } from "./utils";

declare const API_ORIGIN: string;

export const usePracticeGameData = (
  playerId: string,
  missionName?: string
): {
  gameData: PlayerGameData;
  fullGameData: GameData;
  sendViaWebSocket: (messageObject: ActionIncomingMessageObject) => void;
  missionHeading: string;
  missionObjectives: string[];
  nextMission?: string;
} => {
  const { missionHeading, missionObjectives, nextMission, ...missionData } =
    getMissionData(playerId, missionName);
  const [gameData, setGameData] = useState<GameData>(missionData.gameData);

  const sendViaWebSocket = (
    messageObject: ActionIncomingMessageObject,
    newerGameData?: GameData
  ) => {
    const { action } = messageObject;
    setTimeout(async () => {
      const tic = Date.now();
      const res = await fetch(`${API_ORIGIN}/api/game/advance-game-state`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          gameData: newerGameData || gameData,
          action,
        }),
      });
      const requestTime = Date.now() - tic;

      const { gameData: newGameData, automaticAction } = (await res.json()) as {
        gameData: GameData;
        automaticAction?: AutomaticAction;
      };

      setGameData(newGameData);

      if (automaticAction) {
        setTimeout(() => {
          sendViaWebSocket(
            {
              playerId: "server",
              password: newGameData.gameSecrets.password,
              gameId: newGameData.id,
              type: "action",
              action: automaticAction.action,
            },
            newGameData
          );
        }, automaticAction.delay - 2 * requestTime);
      }
    }, 1);
  };

  useEffect(() => {
    const { missionHeading, missionObjectives, nextMission, ...missionData } =
      getMissionData(playerId, missionName);
    setGameData(missionData.gameData);
  }, [missionName]);

  useEffect(() => {
    sendViaWebSocket({
      playerId: "server",
      password: gameData.gameSecrets.password,
      gameId: gameData.id,
      type: "action",
      action: {
        playerId: "server",
        type: "deal-program-cards",
      },
    });
  }, [gameData.gameSettings.map.name]);

  return {
    gameData: getPlayerData(gameData, playerId),
    fullGameData: gameData,
    sendViaWebSocket,
    missionHeading,
    missionObjectives,
    nextMission,
  };
};
