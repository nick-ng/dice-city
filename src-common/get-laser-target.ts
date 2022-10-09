import type { Position, Robot, MapItemNoId, WallMapItem } from "./game-types";

import { isRobotCorporeal } from "./utils";

export const directionMap = {
  up: { xd: 0, yd: -1 },
  right: { xd: 1, yd: 0 },
  down: { xd: 0, yd: 1 },
  left: { xd: -1, yd: 0 },
} as const;

export const getLaserTarget = (
  position: Position,
  robots: Robot[],
  mapItems: MapItemNoId[],
  includeWalls: boolean
): Robot | WallMapItem | null => {
  const { xd, yd } = directionMap[position.facing];

  let parallel: "x" | "y" = "y";
  let perpendicular: "x" | "y" = "x";
  let paralleld: number = yd;

  if (["left", "right"].includes(position.facing)) {
    parallel = "x";
    perpendicular = "y";
    paralleld = xd;
  }

  const parallel1 = `${parallel}1` as const;
  const perpendicular1 = `${perpendicular}1` as const;

  const blockingWalls = mapItems.filter((mi) => {
    return (
      mi.type === "wall" &&
      mi[perpendicular] === position[perpendicular] &&
      mi[perpendicular1] === position[perpendicular]
    );
  }) as WallMapItem[];

  const blockingRobots = robots.filter((r) => {
    return (
      r.position[perpendicular] === position[perpendicular] &&
      isRobotCorporeal(r)
    );
  });

  type Thing = { playerId: string; x: number; y: number };
  const blockingThings = blockingWalls
    .map((wall) => ({
      playerId: null as string | null,
      [perpendicular]: wall[perpendicular],
      [parallel]: (wall[parallel] + (wall as WallMapItem)[parallel1]) * 0.5,
    }))
    .concat(
      blockingRobots.map((r) => ({
        playerId: r.playerId,
        [perpendicular]: r.position[perpendicular],
        [parallel]: r.position[parallel],
      }))
    )
    .filter(
      // Only include things in front of laser
      (a) =>
        (a as Thing)[parallel] * paralleld >= position[parallel] * paralleld
    )
    .sort(
      // Sort things by distance from laser
      (a, b) => paralleld * ((a as Thing)[parallel] - (b as Thing)[parallel])
    ) as Thing[];

  if (blockingThings.length > 0) {
    const blockingThing = blockingThings[0];
    const targetRobot = robots.find(
      (r) => r.playerId === blockingThing.playerId
    );

    if (targetRobot) {
      return targetRobot;
    }

    if (includeWalls) {
      return (
        blockingWalls.find(
          (w) =>
            Math.abs(w[parallel] - blockingThing[parallel]) < 0.6 &&
            Math.abs(w[parallel1] - blockingThing[parallel]) < 0.6
        ) || null
      );
    }
  }

  return null;
};
