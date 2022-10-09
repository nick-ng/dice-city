import type { PlayerGameData, GameData } from "dist-common/game-types";

export const getPlayerData = (
  gameData: GameData,
  playerId: string
): PlayerGameData => {
  const {
    id,
    shortId,
    host,
    maxPlayers,
    players,
    gameSettings,
    playerSecrets,
    gameState,
  } = gameData;

  return {
    id,
    shortId,
    host,
    maxPlayers,
    players,
    gameSettings,
    yourSecrets: playerSecrets[playerId],
    gameState,
    resumeAction: null,
  };
};
