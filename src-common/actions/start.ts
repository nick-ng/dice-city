import { produce } from "immer";

import type { Action, GameData } from "~common/types/index.js";

import { shuffle } from "~common/utils/shuffle.js";
import { getDeck } from "~common/constants/buildings.js";
import { verifyPassword } from "./verify-password.js";
import { getSupply } from "./supply.js";

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
    const { gameState, gameDetails, gameSettings } = draftGameData;
    const { publicState, secretState } = gameState;
    const { common } = publicState;
    const { turnPhase } = common;
    const { players } = gameDetails;

    if (turnPhase !== "lobby") {
      error = "game has already started";
      return;
    }

    if (players.length < 2) {
      error = "playing by yourself is a bit too lonely.";
      return;
    }

    common.turnPhase = "before-roll";
    common.turnOrder = shuffle(players.map((p) => p.id));
    common.activePlayerId = common.turnOrder[0];
    const deck = getDeck("base");
    const temp = getSupply({}, deck);
    common.supply = temp.supply;
    secretState.common.deck = temp.deck;

    for (let i = 0; i < players.length; i++) {
      const { id } = players[i];
      publicState.players[id].money = gameSettings.startingMoney;
      publicState.players[id].city.establishments = {
        wheatField: [`wheatField:${id}`],
        ranch: [`ranch:${id}`],
      };
    }
  });

  return {
    gameData: newGameData,
    error,
  };
};
