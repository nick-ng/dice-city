import type { GameData, Action } from "../types/index.js";
import { buildAction } from "./build.js";

/**
 * If performAction gets called, the game has already verified the player's identity
 */
export const performAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  switch (action.type) {
    case "build":
      return buildAction(gameData, action);
    default:
      console.error("No handler for action", action.type, action);
      return { gameData, error: "no such action" };
  }
};
