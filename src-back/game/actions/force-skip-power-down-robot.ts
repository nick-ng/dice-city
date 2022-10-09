import type {
  AutomaticAction,
  ForceSkipPowerDownAction,
} from "dist-common/game-action-types";

import Game, { TURN_PHASES } from "../game-class";

const forceSkipPowerDown = (
  game: Game,
  action: ForceSkipPowerDownAction
): {
  game: Game;
  message: string;
  automaticAction?: AutomaticAction;
} => {
  const { gameState } = game;
  if (gameState.state !== "main") {
    return {
      game,
      message: "You can't do that right now.",
    };
  }

  if (
    gameState.turn > action.turn ||
    gameState.turnPhase !== TURN_PHASES.announcePowerDown
  ) {
    return {
      game,
      message: "OK",
    };
  }

  return {
    game,
    message: "OK",
    automaticAction: {
      action: {
        type: "power-down-next-turn",
        decision: "no",
        playerId: action.playerId,
        turn: gameState.turn,
      },
      delay: 0,
    },
  };
};

export default forceSkipPowerDown;
