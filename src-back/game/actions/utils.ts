import type { Robot } from "../../../dist-common/game-types";

export const isRobotDestroyed = (robot: Robot): boolean => {
  const { status } = robot;
  return ["falling", "destroyed"].includes(status);
};

export const destroyRobots = (robots: Robot[]) => {
  for (const robot of robots) {
    if (robot.damagePoints >= 10 || ["falling"].includes(robot.status)) {
      robot.status = "destroyed";
    }
  }
};

export const damageRobot = (robot: Robot) => {
  robot.damagePoints = Math.min(robot.damagePoints + 1, 10);
  if (robot.damagePoints > 4) {
    const regsiterDamage = robot.damagePoints - 4;
    if (regsiterDamage >= 5) {
      robot.lockedRegisters = [0, 1, 2, 3, 4];
      return;
    }
    while (regsiterDamage > robot.lockedRegisters.length) {
      const unlockedRegisters = [0, 1, 2, 3, 4].filter(
        (rg) => !robot.lockedRegisters.includes(rg)
      );
      if (unlockedRegisters.length > 0) {
        robot.lockedRegisters = robot.lockedRegisters.concat(
          Math.max(...unlockedRegisters)
        );
      }
    }
  }
};

export const repairRobot = (robot: Robot) => {
  robot.damagePoints = Math.max(robot.damagePoints - 1, 0);

  const regsiterDamage = robot.damagePoints - 4;

  if (regsiterDamage <= 0) {
    robot.lockedRegisters = [];
    return;
  }

  while (regsiterDamage < robot.lockedRegisters.length) {
    const existingLockedRegisters = robot.lockedRegisters.sort((a, b) => a - b);

    if (existingLockedRegisters.length > 0) {
      robot.lockedRegisters = robot.lockedRegisters.filter(
        (lr) => lr !== existingLockedRegisters[0]
      );
    }
  }
};

export const setRobotDamage = (robot: Robot, newDamage: number) => {
  if (newDamage <= 4) {
    robot.damagePoints = newDamage;
    robot.lockedRegisters = [];
    return;
  }

  while (newDamage < robot.damagePoints) {
    repairRobot(robot);
  }

  while (newDamage > robot.damagePoints) {
    damageRobot(robot);
  }
};
