import type { Robot, MapItem, GearMapItem } from "dist-common/game-types";

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

export const gearsTurn = (robots: Robot[], mapItems: MapItem[]) => {
  let turned = false;
  for (const robot of robots) {
    const gearMapItem =
      (mapItems.find(
        (mi) =>
          mi.type === "gear" &&
          mi.x === robot.position.x &&
          mi.y === robot.position.y
      ) as GearMapItem) || undefined;

    if (gearMapItem) {
      turned = true;
      if (gearMapItem.direction === "clockwise") {
        robot.position.facing = clockwiseMap[robot.position.facing];
      } else {
        robot.position.facing = counterClockwiseMap[robot.position.facing];
      }
    }
  }

  return turned;
};
