import type {
  AutomaticAction,
  ForceSpawnRobotAction,
} from "dist-common/game-action-types";

import { shuffle } from "../../../dist-common/card-map";
import {
  isRobotCorporeal,
  isMapItemImpassable,
} from "../../../dist-common/utils";
import Game, { TURN_PHASES } from "../game-class";

const SPAWN_LOCATION_OFFSETS = [
  { x: -1, y: -1 },
  { x: -1, y: 0 },
  { x: -1, y: 1 },
  { x: 0, y: -1 },
  // { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: -1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
] as const;

const forceSpawnRobot = (
  game: Game,
  action: ForceSpawnRobotAction
): {
  game: Game;
  message: string;
  automaticAction?: AutomaticAction;
} => {
  const { gameState, gameSettings } = game;
  if (gameState.state !== "main") {
    return {
      game,
      message: "You can't do that right now.",
    };
  }

  if (
    gameState.turn > action.turn ||
    gameState.turnPhase !== TURN_PHASES.afterCleanUp
  ) {
    return {
      game,
      message: "OK",
    };
  }

  const { robots } = gameState;
  const robot = robots.find((r) => r.playerId === action.playerId);

  if (!robot) {
    return {
      game,
      message: "OK",
    };
  }

  const { map } = gameSettings;
  const archiveItem = map.items.find((mi) => mi.id === robot.archiveMarkerId);

  if (!archiveItem) {
    return {
      game,
      message: "OK",
    };
  }

  const shuffledOffsets = [{ x: 0, y: 0 }, ...shuffle(SPAWN_LOCATION_OFFSETS)];

  const remainingSpawnLocations = shuffledOffsets
    .map((offset) => ({
      x: archiveItem.x + offset.x,
      y: archiveItem.y + offset.y,
    }))
    .filter((coords) => {
      const corporealRobot = robots.find(
        (r) =>
          isRobotCorporeal(r) &&
          r.position.x === coords.x &&
          r.position.y === coords.y
      );
      if (corporealRobot) {
        return false;
      }
      const impassableItem = map.items.find(
        (mi) =>
          isMapItemImpassable(mi) && mi.x === coords.x && mi.y === coords.y
      );
      if (impassableItem) {
        return false;
      }
      const isOutOfBounds =
        coords.x < 0 ||
        coords.y < 0 ||
        coords.x >= map.width ||
        coords.y >= map.height;

      if (isOutOfBounds) {
        return false;
      }

      return true;
    });

  const randomSpawn = remainingSpawnLocations[0];

  if (!randomSpawn) {
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
        playerId: action.playerId,
        type: "spawn-robot",
        facing: "up",
        x: randomSpawn.x,
        y: randomSpawn.y,
        powerDown: false,
        turn: gameState.turn,
      },
      delay: 0,
    },
  };
};

export default forceSpawnRobot;
