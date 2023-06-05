import type { Action, GameData } from "~common/types/index.js";

export const verifyPassword = (
  gameData: GameData,
  action: Action
): {
  validPassword: boolean;
  isHost: boolean;
} => {
  if (action.isServer) {
    return {
      isHost: false,
      validPassword: false,
    };
  }

  const { gameDetails, playersSecrets } = gameData;
  const { playerId, playerPassword } = action;

  return {
    isHost: playerId === gameDetails.hostId,
    validPassword: !!(
      playersSecrets[playerId].password &&
      playersSecrets[playerId].password === playerPassword
    ),
  };
};
