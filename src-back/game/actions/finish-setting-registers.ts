import type {
  AutomaticAction,
  FinishSettingRegistersAction,
} from "../../../dist-common/game-action-types";
import type { ProgramCardInstruction } from "../../../dist-common/game-types";
import canSubmitProgram from "../../../dist-common/action-validators/can-submit-program";
import { getPowerDownDecisionOrder } from "../../../dist-common/utils";

import Game, { TURN_PHASES } from "../game-class";

const PROGRAM_REGISTER_COUNT = 5;

const finishSettingRegisters = (
  game: Game,
  action: FinishSettingRegistersAction
): {
  game: Game;
  message: string;
  automaticAction?: AutomaticAction;
} => {
  const { gameState, playerSecrets, gameSecrets, gameSettings } = game;
  if (gameState.state !== "main") {
    return {
      game,
      message: "You can't do that right now.",
    };
  }

  const { playerId } = action;
  const { canPerform } = canSubmitProgram(
    playerId,
    gameState,
    playerSecrets[playerId]?.programRegisters
  );

  /**
   * This doesn't return if canPerform is true because the server might be
   * trying to resume the game.
   */
  if (canPerform) {
    gameState.finishedProgrammingPlayers = [
      ...new Set([...gameState.finishedProgrammingPlayers, playerId]),
    ];
  }

  const { cardMap, robots, seatOrder } = gameState;

  const nonOperatingRobots = robots.filter(
    (r) => !["ok", "powered-down"].includes(r.status)
  );
  const remainingPlayers = seatOrder.filter(
    (id) =>
      !gameState.finishedProgrammingPlayers.includes(id) &&
      !nonOperatingRobots.map((r) => r.playerId).includes(id)
  );
  const okRobots = robots.filter((r) => "ok" === r.status);
  if (remainingPlayers.length > 0) {
    switch (gameSettings.timerStart) {
      case "first":
        if (remainingPlayers.length + 1 === okRobots.length) {
          return {
            game,
            message: "OK",
            automaticAction: {
              action: {
                playerId: "server",
                type: "force-set-registers",
                turn: gameState.turn,
              },
              delay: gameSettings.timerSeconds * 1000,
            },
          };
        }
        break;
      case "penultimate":
        if (remainingPlayers.length === 1) {
          return {
            game,
            message: "OK",
            automaticAction: {
              action: {
                playerId: "server",
                type: "force-set-registers",
                turn: gameState.turn,
              },
              delay: gameSettings.timerSeconds * 1000,
            },
          };
        }
        break;
      case "never":
      default:
    }

    return {
      game,
      message: "OK",
    };
  }

  gameSecrets.instructionQueue = [];

  for (let register = 0; register < PROGRAM_REGISTER_COUNT; register++) {
    const nthRegisters: ProgramCardInstruction[] = [];

    Object.entries(playerSecrets).forEach((entry) => {
      const [playerId, value] = entry;

      const robot = robots.find((r) => r.playerId === playerId);
      if (robot && robot.status !== "ok") {
        return;
      }

      const { programRegisters } = value;
      const programCardId = programRegisters[register]!;
      const programCard = cardMap[programCardId];
      nthRegisters.push({
        type: "program-card-instruction",
        playerId,
        payload: {
          ...programCard,
        },
        register,
      });
    });

    // 4. Complete Registers
    gameSecrets.instructionQueue = gameSecrets.instructionQueue.concat([
      // A. Reveal Program Cards
      // B. Robots Move
      ...nthRegisters.sort(
        (a, b) => (b.payload.priority || 0) - (a.payload.priority || 0)
      ),
      // C. Board Elements Move
      // C1. Express conveyor belts move 1 space
      {
        type: "conveyors-move-instruction",
        payload: { minSpeed: 2 },
        register,
      },
      // C2. Express conveyor belts and normal conveyor belts move 1 space
      {
        type: "conveyors-move-instruction",
        payload: { minSpeed: 1 },
        register,
      },
      // C3. Pushers push if active
      // C4. Gears rotate 90 degrees
      {
        type: "gears-turn",
        register,
      },
      // D. Lasers Fire
      {
        type: "lasers-fire-instruction",
        payload: { shooter: "map" },
        register,
      },
      {
        type: "lasers-fire-instruction",
        payload: { shooter: "robots" },
        register,
      },
      // E. Touch Checkpoints
      { type: "touch-checkpoint-instruction", register },
    ]);
  }

  gameState.poweringDownNextTurn = [];
  gameState.robots.forEach((robot) => {
    if (robot.damagePoints === 0) {
      gameState.poweringDownNextTurn.push({
        playerId: robot.playerId,
        decision: "no",
      });
    }
  });

  if (
    gameState.robots.every(
      (robot) =>
        (robot.status === "ok" && robot.damagePoints === 0) ||
        robot.status === "powered-down" ||
        !seatOrder.includes(robot.playerId)
    )
  ) {
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

  gameState.turnPhase = TURN_PHASES.announcePowerDown;

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

export default finishSettingRegisters;
