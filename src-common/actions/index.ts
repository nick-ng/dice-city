import type { GameData, Action } from "../types/index.js";

import { joinAction } from "./join.js";
import { rollDiceAction } from "./roll-dice.js";
import { buildAction } from "./build.js";
import { blueEstablishmentsAction } from "./blue-establishments.js";
import { greenEstablishmentsAction } from "./green-establishments.js";

export const performAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  if (!action.isServer && action.type !== "join") {
    if (!gameData.gameDetails.players.find((p) => p.id === action.playerId)) {
      return {
        gameData,
        error: "you aren't in this game",
      };
    }

    const serverPlayerPassword =
      gameData.playersSecrets[action.playerId]?.password;

    if (
      !serverPlayerPassword ||
      action.playerPassword !== serverPlayerPassword
    ) {
      return {
        gameData,
        error: "wrong password",
      };
    }
  }

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
