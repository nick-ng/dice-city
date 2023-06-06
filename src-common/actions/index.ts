import { produce } from "immer";

import type { GameData, Action } from "../types/index.js";

import { joinAction } from "./join.js";
import { startAction } from "./start.js";
import { rollDiceAction } from "./roll-dice.js";
import { buildAction } from "./build.js";
import { blueEstablishmentsAction } from "./blue-establishments.js";
import { greenEstablishmentsAction } from "./green-establishments.js";

export const performAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  if (!action.isServer && action.type !== "join") {
    if (!gameData.gameDetails.players.find((p) => p.id === action.playerId)) {
      return {
        gameData,
        error: "you aren't in this game",
      };
    }

    const serverPlayerPassword =
      gameData.playersSecrets[action.playerId]?.password;

    if (
      !serverPlayerPassword ||
      action.playerPassword !== serverPlayerPassword
    ) {
      return {
        gameData,
        error: "wrong password",
      };
    }
  }

  // @todo(nick-ng): way to advance game state i.e. after-roll to before-build
  // @todo(nick-ng): check if a player has all 4 landmarks after building
  // @todo(nick-ng): remove produce from all actions. front-end can use immer if necessary
  // @todo(nick-ng): handle mutating gameData

  let tempResult: { gameData: GameData; error?: string } = { gameData };

  switch (action.type) {
    case "join":
      return joinAction(gameData, action);
    case "start":
      return startAction(gameData, action);
    case "roll-dice":
      tempResult = rollDiceAction(gameData, action);

      if (tempResult.error) {
        return tempResult;
      }

      // @todo(nick-ng): red establishments go here

      // @todo(nick-ng): do server actions need an action object?
      tempResult = greenEstablishmentsAction(tempResult.gameData, {
        type: "green-establishments",
        isServer: true,
      });

      if (tempResult.error) {
        console.error(
          "error when auto green-establishments:",
          tempResult.error
        );
        return tempResult;
      }

      tempResult = blueEstablishmentsAction(tempResult.gameData, {
        type: "blue-establishments",
        isServer: true,
      });

      if (tempResult.error) {
        console.error("error when auto blue-establishments:", tempResult.error);
        return tempResult;
      }

      // @todo(nick-ng): purple establishments go here

      // @todo(nick-ng): remove once you can handle purple establishments
      tempResult.gameData = produce(tempResult.gameData, (draftGameData) => {
        draftGameData.gameState.publicState.common.turnPhase = "before-build";
      });

      return tempResult;
    case "build":
      tempResult = buildAction(gameData, action);

      if (!tempResult.error) {
        // @todo(nick-ng): put in the build action?
        const turnOrder =
          tempResult.gameData.gameState.publicState.common.turnOrder;
        const activePlayerId =
          tempResult.gameData.gameState.publicState.common.activePlayerId;
        const currentPlayerIndex = turnOrder.findIndex(
          (p) => p === activePlayerId
        );
        const nextPlayerIndex = (currentPlayerIndex + 1) % turnOrder.length;

        tempResult.gameData = produce(tempResult.gameData, (draftGameData) => {
          draftGameData.gameState.publicState.common.activePlayerId =
            turnOrder[nextPlayerIndex];
          draftGameData.gameState.publicState.common.turnPhase = "before-roll";
        });
      }

      return tempResult;
    case "green-establishments":
      return greenEstablishmentsAction(gameData, action);
    case "blue-establishments":
      return blueEstablishmentsAction(gameData, action);
    default:
      console.error("No handler for action", action);
      return { gameData, error: "no such action" };
  }
};
