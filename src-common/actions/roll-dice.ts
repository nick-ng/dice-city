import { produce } from "immer";
import seedrandom from "seedrandom";

import type { Action, GameData, City } from "~common/types/index.js";

const rollDice = (count: 1 | 2, gameData: GameData, sides = 6): number[] => {
  const rng = seedrandom(`${gameData.gameDetails.id}-${gameData.lastActionId}`);

  const result = new Array(count).fill(0).map(() => {
    const die = new Array(sides).fill(0).map((_, i) => ({
      face: i + 1,
      sortIndex: rng(), // Does this cause the results to be uniform even if rng() is biased?
    }));

    return die.sort((a, b) => a.sortIndex - b.sortIndex)[0].face;
  });

  return result;
};

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
      error = "can only roll dice in roll dice phase";
      return;
    }

    console.log(activePlayerId, playerId);
    if (activePlayerId !== playerId) {
      error = "can only roll dice on your turn";
      return;
    }

    const { city } = playerState;
    const { landmarks } = city;
    if (diceCount !== 1 && !landmarks.trainStation) {
      error = "can only roll 1 dice without a train station";
      return;
    }

    common.turnPhase = "after-roll";
    common.diceRolls = rollDice(diceCount, gameData, 6);
  });

  return {
    gameData: newGameData,
    error,
  };
};
