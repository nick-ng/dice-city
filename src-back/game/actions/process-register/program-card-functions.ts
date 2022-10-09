import type { MapItem, Robot } from "dist-common/game-types";
import { isRobotDestroyed } from "../utils";

const rotateMap: Readonly<any> = {
  "Rotate Left": {
    up: "left",
    left: "down",
    down: "right",
    right: "up",
  },
  "Rotate Right": {
    up: "right",
    right: "down",
    down: "left",
    left: "up",
  },
  "U-Turn": {
    up: "down",
    down: "up",
    left: "right",
    right: "left",
  },
};

export const rotateRobot = (
  robot: Robot,
  action: "Rotate Left" | "Rotate Right" | "U-Turn"
): void => {
  robot.position.facing = rotateMap[action][robot.position.facing];
};

const movementDirectionMap = {
  up: { xd: 0, yd: -1 },
  right: { xd: 1, yd: 0 },
  down: { xd: 0, yd: 1 },
  left: { xd: -1, yd: 0 },
};

/**
 * Check which robots will be affected by a push.
 *
 * If a push isn't possible because of a wall or similar, returns false.
 */
const pushRobots = (
  robots: Robot[],
  direction: { xd: number; yd: number },
  affectedCell: { x: number; y: number }, // map cell being pushed
  mapItems: MapItem[]
): boolean => {
  // Figure out if a robot is affected by the push
  const affectedRobot = robots.find((robot) => {
    const { position, status } = robot;
    return (
      !isRobotDestroyed(robot) &&
      !["falling", "destroyed", "stand-by"].includes(status) &&
      affectedCell.x === position.x &&
      affectedCell.y === position.y
    );
  });

  if (!affectedRobot) {
    return true; // Nothing happened but you can push.
  }

  const { position } = affectedRobot;

  // 10. calculate the pushed robot's destination
  const nextPosition = {
    x: position.x + direction.xd,
    y: position.y + direction.yd,
  };

  // 20. check if it will be stopped by a wall
  const blockingWall = mapItems.find(
    (mi) =>
      mi.type === "wall" &&
      ((mi.x === position.x &&
        mi.y === position.y &&
        mi.x1 === nextPosition.x &&
        mi.y1 === nextPosition.y) ||
        (mi.x1 === position.x &&
          mi.y1 === position.y &&
          mi.x === nextPosition.x &&
          mi.y === nextPosition.y))
  );

  if (blockingWall) {
    return false; // the robot can't be pushed.
  }

  // 30. check if you need to push a robot out of the destination square (and push)
  if (!pushRobots(robots, direction, nextPosition, mapItems)) {
    return false; // the robot couldn't be pushed so you need to stay put.
  }

  // 40. update robot's position
  affectedRobot.position.x = nextPosition.x;
  affectedRobot.position.y = nextPosition.y;

  return true;
};

export const moveRobotOne = (
  robot: Robot,
  robots: Robot[],
  action: "Move 1" | "Move 2" | "Move 3" | "Back Up",
  mapItems: MapItem[]
): void => {
  const { xd, yd } = movementDirectionMap[robot.position.facing];

  const step = action === "Back Up" ? -1 : 1;

  pushRobots(
    robots,
    { xd: xd * step, yd: yd * step },
    { x: robot.position.x, y: robot.position.y },
    mapItems
  );
};
