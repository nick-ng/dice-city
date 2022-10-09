import type {
  AutomaticAction,
  PowerDownNextTurnAction,
} from "../../../dist-common/game-action-types";
import type { MainGameState } from "../../../dist-common/game-types";
import { getPowerDownDecisionOrder } from "../../../dist-common/utils";
import canPowerDownRobot from "../../../dist-common/action-validators/can-power-down";

import Game, { TURN_PHASES } from "../game-class";

const powerDownNextTurn = (
  game: Game,
  action: PowerDownNextTurnAction
): { game: Game; message: string; automaticAction?: AutomaticAction } => {
  const { gameState, gameSettings } = game;
  const { canPerform, message } = canPowerDownRobot(action.playerId, gameState);

  if (!canPerform) {
    return {
      game,
      message,
    };
  }

  const { poweringDownNextTurn, seatOrder } = gameState as MainGameState;
  const { type, turn, ...decision } = action;

  if (typeof turn === "number" && turn !== gameState.turn) {
    return {
      game,
      message: "OK",
    };
  }

  poweringDownNextTurn.push(decision);

  if (poweringDownNextTurn.length === seatOrder.length) {
    gameState.turnPhase = TURN_PHASES.processRegisters;
    return {
      game,
      message: "OK",
      automaticAction: {
        action: { playerId: "server", type: "process-registers" },
        delay: 500,
      },
    };
  }

  getPowerDownDecisionOrder(gameState);
  const powerDownOrder = getPowerDownDecisionOrder(gameState);
  if (gameSettings.timerStart !== "never" && powerDownOrder.length > 0) {
    return {
      game,
      message: "OK",
      automaticAction: {
        action: {
          playerId: powerDownOrder[0],
          type: "force-skip-power-down",
          turn: gameState.turn,
        },
        delay: gameSettings.timerSeconds * 1000,
      },
    };
  }

  return {
    game,
    message: "OK",
  };
};

export default powerDownNextTurn;
