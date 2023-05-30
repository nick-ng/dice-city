import { produce } from "immer";

import type { Action, GameData } from "~common/types/index.js";

import { shuffle } from "~common/utils/shuffle.js";
import { verifyPassword } from "./verify-password.js";

export const startAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  if (action.type !== "start") {
    return {
      gameData,
      error: "not start",
    };
  }

  const { isHost, validPassword } = verifyPassword(gameData, action);

  if (!validPassword) {
    return {
      gameData,
      error: "invalid password",
    };
  }

  if (!isHost) {
    return {
      gameData,
      error: "only the host can start the game",
    };
  }

  let error = undefined;
  const newGameData = produce(gameData, (draftGameData) => {
    const { gameState, gameDetails } = draftGameData;
    const { common } = gameState.publicState;
    const { turnPhase } = common;
    const { players } = gameDetails;

    if (turnPhase !== "lobby") {
      error = "game has already started";
      return;
    }

    common.turnPhase = "before-roll";
    common.turnOrder = shuffle(players.map((p) => p.id));
  });

  return {
    gameData: newGameData,
    error,
  };
};
