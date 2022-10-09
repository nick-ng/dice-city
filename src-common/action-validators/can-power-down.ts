import type { GameState } from "../game-types";
import { getPowerDownDecisionOrder } from "../utils";

export const canPowerDownRobot = (
  playerId: string,
  gameState: GameState
):
  | { canPerform: true; message?: never }
  | { canPerform: false; message: string } => {
  if (gameState.state !== "main") {
    return {
      canPerform: false,
      message: "The game isn't in progress.",
    };
  }

  const {
    robots,
    finishedProgrammingPlayers,
    seatOrder,
    poweringDownNextTurn,
  } = gameState;
  if (!playerId || !robots || !seatOrder) {
    return { canPerform: false, message: "Missing parameters." };
  }

  /**
   * You cannot power down if any of the following are:
   * - 1 or more players hasn't finished programming
   * - your program isn't damaged
   * - you already decided whether to power down your robot
   */

  if (finishedProgrammingPlayers.length < seatOrder.length) {
    return {
      canPerform: false,
      message: "Everyone hasn't finished setting their registers.",
    };
  }

  if (poweringDownNextTurn.find((decision) => decision.playerId === playerId)) {
    return {
      canPerform: false,
      message: "You've already decided whether you will powerdown.",
    };
  }

  const powerDownOrder = getPowerDownDecisionOrder(gameState);

  if (powerDownOrder[0] !== playerId) {
    return { canPerform: false, message: "You can't power down your robot." };
  }

  return { canPerform: true };
};

export default canPowerDownRobot;
