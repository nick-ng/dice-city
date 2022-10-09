import type { MainGameState, MapItem } from "dist-common/game-types";
import type {
  AutomaticAction,
  CleanUpAction,
} from "dist-common/game-action-types";

import { getRespawnOrder } from "../../../dist-common/utils";
import type Game from "../game-class";

import { TURN_PHASES } from "../game-class";
import { isRobotDestroyed, setRobotDamage, repairRobot } from "./utils";

const cleanUp = (
  game: Game,
  _action: CleanUpAction
): {
  game: Game;
  message: string;
  automaticAction?: AutomaticAction;
} => {
  const { gameState, gameSettings } = game;
  const { robots, seatOrder, poweringDownNextTurn } =
    gameState as MainGameState;
  // 10. repair and draw option cards in seat order
  for (const robot of robots) {
    if (isRobotDestroyed(robot)) {
      continue;
    }
    const { position } = robot;

    const cellItems = gameSettings.map.items.filter(
      (item) =>
        item.x === position.x &&
        item.y === position.y &&
        ["flag", "repair"].includes(item.type)
    ) as MapItem[];

    if (cellItems.length === 0) {
      continue;
    }

    repairRobot(robot);
  }

  // 20. discard program cards from non-locked registers

  // 30. respawn robots
  for (const playerId of seatOrder) {
    const robot = robots.find((r) => r.playerId === playerId)!;
    if (isRobotDestroyed(robot) && robot.lives > 0) {
      robot.status = "stand-by";
      setRobotDamage(robot, 2);
      const powerDownDecision = poweringDownNextTurn.find(
        (decision) => decision.playerId === robot.playerId
      );
      if (powerDownDecision) {
        powerDownDecision.decision = "no";
      }
    }
  }

  // 40. Power on robots
  // TODO: Players decide if they will power on robot
  robots.forEach((robots) => {
    if (robots.status === "powered-down") {
      robots.status = "ok";
    }
  });

  game.gameState.turnPhase = TURN_PHASES.afterCleanUp;

  const respawnOrder = getRespawnOrder(robots, seatOrder);
  if (respawnOrder.length > 0) {
    if (gameSettings.timerStart === "never") {
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
          playerId: respawnOrder[0],
          type: "force-spawn-robot",
          turn: gameState.turn,
        },
        delay: gameSettings.timerSeconds * 1000 * 3,
      },
    };
  }

  return {
    game,
    message: "OK",
    automaticAction: {
      action: { playerId: "server", type: "deal-program-cards" },
      delay: 0,
    },
  };
};

export default cleanUp;
