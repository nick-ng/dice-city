import type { GameData, Action } from "../types/index.js";

import { joinAction } from "./join.js";
import { rollDiceAction } from "./roll-dice.js";
import { buildAction } from "./build.js";
import { blueEstablishmentsAction } from "./blue-establishments.js";
import { greenEstablishmentsAction } from "./green-establishments.js";

/**
 * If performAction gets called, the game has already verified the player's identity
 */
export const performAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  switch (action.type) {
    case "join":
      return joinAction(gameData, action);
    case "roll-dice":
      return rollDiceAction(gameData, action);
    case "build":
      return buildAction(gameData, action);
    case "green-establishments":
      return greenEstablishmentsAction(gameData, action);
    case "blue-establishments":
      return blueEstablishmentsAction(gameData, action);
    default:
      console.error("No handler for action", action);
      return { gameData, error: "no such action" };
  }
};
