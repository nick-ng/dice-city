import type {
  AutomaticAction,
  SpawnRobotAction,
} from "../../../dist-common/game-action-types";

import canSpawnRobot from "../../../dist-common/action-validators/can-spawn-robot";
import { getRespawnOrder } from "../../../dist-common/utils";
import Game, { TURN_PHASES } from "../game-class";
import { setRobotDamage } from "./utils";

const spawnRobot = (
  game: Game,
  action: SpawnRobotAction
): { game: Game; message: string; automaticAction?: AutomaticAction } => {
  const { gameState, gameSettings } = game;
  if (gameState.state !== "main") {
    return {
      game,
      message: "Not the main game state",
    };
  }

  const { robots, seatOrder, finishedProgrammingPlayers, turn } = gameState;
  const { playerId, facing, x, y, powerDown } = action;

  if (typeof action.turn === "number" && action.turn !== turn) {
    return { game, message: "OK" };
  }

  const { canPerform, message } = canSpawnRobot(playerId, robots, seatOrder);

  if (!canPerform) {
    return {
      game,
      message,
    };
  }

  const robot = robots.find((r) => r.playerId === playerId)!;
  const { map } = gameSettings;

  const archiveMarker = map.items.find(
    (mi) => mi.id === robot.archiveMarkerId
  )!;

  const isOccupied = robots.find(
    (r) =>
      r.status === "ok" &&
      r.playerId !== playerId &&
      r.position.x === archiveMarker.x &&
      r.position.y === archiveMarker.y
  );
  if (isOccupied) {
    const isAdjacentToArchiveMarker =
      Math.abs(x - archiveMarker.x) <= 1 &&
      Math.abs(y - archiveMarker.y) <= 1 &&
      (x !== archiveMarker.x || y !== archiveMarker.y);
    const cellItemTypes = map.items
      .filter((mi) => mi.x === x && mi.y === y)
      .map((mi) => mi.type);
    const isOutOfBounds = x < 0 || y < 0 || x >= map.width || y >= map.height;
    const isSquareValid =
      isAdjacentToArchiveMarker &&
      !isOutOfBounds &&
      !cellItemTypes.includes("pit");

    if (!isSquareValid) {
      return {
        game,
        message: "You can't respawn there.",
      };
    }

    robot.position.x = x;
    robot.position.y = y;
  } else {
    robot.position.x = archiveMarker.x;
    robot.position.y = archiveMarker.y;
  }

  robot.position.facing = facing;
  robot.status = powerDown ? "powered-down" : "ok";
  robot.lives = robot.lives - 1;
  if (powerDown) {
    setRobotDamage(robot, 0);
    finishedProgrammingPlayers.push(robot.playerId);
  }

  const respawnOrder = getRespawnOrder(robots, seatOrder);
  if (respawnOrder.length > 0) {
    if (gameSettings.timerStart === "never") {
      return { game, message: "OK" };
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

  gameState.turnPhase = TURN_PHASES.dealCards;

  return {
    game,
    message: "OK",
    automaticAction: {
      action: { playerId: "server", type: "deal-program-cards" },
      delay: 0,
    },
  };
};

export default spawnRobot;
