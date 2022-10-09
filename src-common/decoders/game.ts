import type { GameData } from "../game-types";

export const decodeGameData = (data: any): GameData | null => {
  if (
    data &&
    typeof data === "object" &&
    typeof data.id === "string" &&
    typeof data.host === "string" &&
    typeof data.maxPlayers === "number" &&
    Array.isArray(data.players) &&
    typeof data.gameSettings === "object" &&
    typeof data.gameSecrets === "object" &&
    typeof data.gameState === "object"
  ) {
    return data;
  }

  return null;
};
