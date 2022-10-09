import type {
  Robot,
  MapItem,
  StraightConveyorMapItem,
  CurvedConveyorMapItem,
} from "dist-common/game-types";

const movementDirectionMap = {
  up: { xd: 0, yd: -1 },
  right: { xd: 1, yd: 0 },
  down: { xd: 0, yd: 1 },
  left: { xd: -1, yd: 0 },
} as const;

const fromDirectionMap = {
  up: "down",
  right: "left",
  down: "up",
  left: "right",
} as const;

const clockwiseMap = {
  direction: "fromDirection",
  up: "right",
  right: "down",
  down: "left",
  left: "up",
} as const;

const counterClockwiseMap = {
  direction: "fromDirection",
  up: "left",
  right: "up",
  down: "right",
  left: "down",
} as const;

export const conveyorsMove = (
  robots: Robot[],
  mapItems: MapItem[],
  minSpeed: number
) => {
  // 10. Create temporary copy of all robots
  const tempRobots = robots.map((r) => ({
    playerId: r.playerId,
    x: r.position.x,
    y: r.position.y,
    facing: r.position.facing,
  }));
  console.debug(
    "conveyorsMove - tempRobots",
    JSON.stringify(tempRobots, null, "  ")
  );

  // 20. Move all temporary robots on conveyors minus walls
  const maybeMovedRobots = [];
  for (const tempRobot of tempRobots) {
    const conveyorItem = mapItems.find(
      (mi) =>
        ["straight-conveyor", "curved-conveyor"].includes(mi.type) &&
        (mi as StraightConveyorMapItem | CurvedConveyorMapItem).speed >=
          minSpeed &&
        mi.x === tempRobot.x &&
        mi.y === tempRobot.y
    ) as StraightConveyorMapItem | undefined;

    if (conveyorItem) {
      const { xd, yd } = movementDirectionMap[conveyorItem.direction];
      tempRobot.x = tempRobot.x + xd;
      tempRobot.y = tempRobot.y + yd;

      const destinationConveyor = mapItems.find(
        (mi) =>
          ["curved-conveyor"].includes(mi.type) &&
          mi.x === tempRobot.x &&
          mi.y === tempRobot.y
      ) as CurvedConveyorMapItem | undefined;

      if (
        destinationConveyor &&
        destinationConveyor.fromDirection.includes(
          fromDirectionMap[conveyorItem.direction]
        )
      ) {
        const { direction } = destinationConveyor;
        const isCounterClockwise =
          counterClockwiseMap[direction] ===
          fromDirectionMap[conveyorItem.direction];

        const isClockwise =
          clockwiseMap[direction] === fromDirectionMap[conveyorItem.direction];

        if (isCounterClockwise) {
          tempRobot.facing = counterClockwiseMap[tempRobot.facing];
        }

        if (isClockwise) {
          tempRobot.facing = clockwiseMap[tempRobot.facing];
        }
      }

      maybeMovedRobots.push(tempRobot);
    }
  }
  console.debug(
    "conveyorsMove - maybeMovedRobots",
    JSON.stringify(maybeMovedRobots, null, "  ")
  );

  // 30. Check which temporary robots don't overlap other temporary robots
  const movedRobots = [];
  for (const tempRobot of maybeMovedRobots) {
    const otherTempRobots = tempRobots.filter(
      (tr) => tr.playerId !== tempRobot.playerId
    );

    if (
      !otherTempRobots.some(
        (otr) => otr.x === tempRobot.x && otr.y === tempRobot.y
      )
    ) {
      movedRobots.push(tempRobot);
    }
  }
  console.debug(
    "conveyorsMove - movedRobots",
    JSON.stringify(movedRobots, null, "  ")
  );

  // 40. Update position of robots that did move
  movedRobots.forEach((mr) => {
    const robot = robots.find((r) => r.playerId === mr.playerId);
    if (robot) {
      robot.position.x = mr.x;
      robot.position.y = mr.y;
      robot.position.facing = mr.facing;
    }
  });
  console.debug("conveyorsMove - robots", JSON.stringify(robots, null, "  "));

  return movedRobots.length > 0;
};
