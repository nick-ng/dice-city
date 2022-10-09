import type { Robot, MapItem, LaserMapItem } from "dist-common/game-types";

import { getLaserTarget } from "../../../../dist-common/get-laser-target";

import { damageRobot } from "../utils";

export const shootRobotLasers = (
  robots: Robot[],
  mapItems: MapItem[]
): boolean => {
  let shotsFired = false;
  for (const robot of robots) {
    if (robot.status !== "ok") {
      continue;
    }

    const { position } = robot;

    const targetRobot = getLaserTarget(
      position,
      robots.filter((r) => r.playerId !== robot.playerId),
      mapItems,
      false
    ) as Robot | null;

    if (targetRobot) {
      shotsFired = true;
      damageRobot(targetRobot);
      robot.laser = {
        height: robot.position.y - targetRobot.position.y,
        width: robot.position.x - targetRobot.position.x,
      };
    }
  }

  return shotsFired;
};

export const shootMapLasers = (
  robots: Robot[],
  mapItems: MapItem[]
): boolean => {
  let shotsFired = false;
  const laserMapItems = mapItems.filter(
    (mi) => mi.type === "laser"
  ) as LaserMapItem[];

  for (const laserMapItem of laserMapItems) {
    const { x, y, direction, count } = laserMapItem;

    const targetRobot = getLaserTarget(
      { x, y, facing: direction },
      robots,
      mapItems,
      false
    ) as Robot | null;

    if (targetRobot) {
      shotsFired = true;
      for (let n = 0; n < count; n++) {
        damageRobot(targetRobot);
      }
    }
  }

  return shotsFired;
};
