import { produce } from "immer";

import type { Action, GameData } from "~common/types/index.js";

export const joinAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  if (action.type !== "join") {
    return {
      gameData,
      error: "not join",
    };
  }

  let error = undefined;
  const newGameData = produce(gameData, (draftGameData) => {
    const { payload, playerId, playerPassword } = action;
    const { playerName } = payload;

    if (!playerId || !playerName || !playerPassword) {
      error = "missing player info";
      return;
    }

    const { gameState, playersSecrets, gameDetails } = draftGameData;
    const { publicState } = gameState;
    const { common } = publicState;

    if (common.turnPhase !== "lobby") {
      error = "can only join a game that is in the lobby phase";
      return;
    }

    if (gameDetails.players.find((p) => p.id === playerId)) {
      error = "you are already in this game";
      return;
    }

    gameDetails.players.push({
      id: playerId,
      name: playerName,
    });

    playersSecrets[playerId] = { password: playerPassword };

    publicState.players[playerId] = {
      playerId,
      city: {
        landmarks: {},
        establishments: {},
      },
      money: 0,
    };
  });

  return { gameData: newGameData, error };
};
