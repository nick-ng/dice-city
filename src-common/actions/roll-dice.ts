import { produce } from "immer";

import type { Action, GameData, City } from "~common/types/index.js";
import {
  establishmentReference,
  landmarkReference,
} from "../constants/buildings.js";

export const rollDiceAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  let error = undefined;
  const newGameData = produce(gameData, (draftGameData) => {
    if (action.type !== "roll-dice") {
      error = "not roll-dice";
      return;
    }

    const { payload, playerId } = action;
    const { diceCount } = payload;

    if (diceCount < 1 || diceCount > 2) {
      error = "invalid diceCount";
      return;
    }

    const { gameState } = draftGameData;
    const { publicState } = gameState;
    const { players, common } = publicState;
    const playerState = players[playerId];

    if (!playerState) {
      error = "invalid playerId";
      return;
    }

    const { activePlayerId, turnPhase } = common;

    if (turnPhase !== "before-roll") {
      error = "can only build in build phase";
      return;
    }

    if (activePlayerId !== playerId) {
      error = "can only build on your turn";
      return;
    }

    const { city } = playerState;
    const { landmarks } = city;
    if (diceCount !== 1 && !landmarks.trainStation) {
      error = "can only roll 1 dice without a train station";
      return;
    }

    common.turnPhase = "after-roll";
  });

  return {
    gameData: newGameData,
    error,
  };
};
