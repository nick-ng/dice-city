import assert from "node:assert";
import { MainGameState } from "src-common/game-types";
import { canPowerDownRobot } from "../can-power-down";

describe("Can power down Action validator", () => {
  it("should return true if your robot is damaged and all robots are fully programmed", (done) => {
    const playerId = "1234";
    const playerId2 = "5678";
    const gameState = {
      state: "main",
      seatOrder: [playerId, playerId2],
      finishedProgrammingPlayers: [playerId, playerId2],
      poweringDownNextTurn: [],
      flagsTouched: { [playerId]: 0, [playerId2]: 0 },
      robots: [
        {
          playerId,
          status: "ok",
          damagePoints: 1,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 2,
            y: 2,
            facing: "up",
          },
          archiveMarkerId: 2,
          design: 0,
        },
        {
          playerId: playerId2,
          status: "ok",
          damagePoints: 0,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 3,
            y: 3,
            facing: "up",
          },
          archiveMarkerId: 3,
          design: 1,
        },
      ],
    } as unknown as MainGameState;

    const result = canPowerDownRobot(playerId, gameState);
    assert.strictEqual(result.canPerform, true);

    done();
  });

  it("should return false if your robot is damaged and all robots are fully programmed but you already decided to power down", (done) => {
    const playerId1 = "1234";
    const playerId2 = "5678";
    const gameState = {
      state: "main",
      seatOrder: [playerId1, playerId2],
      finishedProgrammingPlayers: [playerId1, playerId2],
      poweringDownNextTurn: [{ playerId: playerId1, decision: "yes" }],
      flagsTouched: { [playerId1]: 0, [playerId2]: 0 },
      robots: [
        {
          playerId: playerId1,
          status: "ok",
          damagePoints: 1,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 2,
            y: 2,
            facing: "up",
          },
          archiveMarkerId: 2,
          design: "outset",
        },
        {
          playerId: playerId2,
          status: "ok",
          damagePoints: 0,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 3,
            y: 3,
            facing: "up",
          },
          archiveMarkerId: 3,
          design: "double",
        },
      ],
    } as unknown as MainGameState;

    const result = canPowerDownRobot(playerId1, gameState);
    assert.strictEqual(result.canPerform, false);

    done();
  });

  it("should return false if your robot is damaged and all robots are fully programmed but you already decided not to power down", (done) => {
    const playerId1 = "1234";
    const playerId2 = "5678";
    const gameState = {
      state: "main",
      seatOrder: [playerId1, playerId2],
      finishedProgrammingPlayers: [playerId1, playerId2],
      poweringDownNextTurn: [{ playerId: playerId1, decision: "no" }],
      flagsTouched: { [playerId1]: 0, [playerId2]: 0 },
      robots: [
        {
          playerId: playerId1,
          status: "ok",
          damagePoints: 1,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 2,
            y: 2,
            facing: "up",
          },
          archiveMarkerId: 2,
          design: "outset",
        },
        {
          playerId: playerId2,
          status: "ok",
          damagePoints: 0,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 3,
            y: 3,
            facing: "up",
          },
          archiveMarkerId: 3,
          design: "double",
        },
      ],
    } as unknown as MainGameState;

    const result = canPowerDownRobot(playerId1, gameState);
    assert.strictEqual(result.canPerform, false);

    done();
  });

  it("should return false if player isn't damaged", (done) => {
    const playerId = "1234";
    const playerId2 = "5678";
    const gameState = {
      state: "main",
      seatOrder: [playerId, playerId2],
      finishedProgrammingPlayers: [playerId, playerId2],
      poweringDownNextTurn: [],
      flagsTouched: { [playerId]: 0, [playerId2]: 0 },
      robots: [
        {
          playerId,
          status: "ok",
          damagePoints: 0,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 2,
            y: 2,
            facing: "up",
          },
          archiveMarkerId: 2,
          design: "outset",
        },
        {
          playerId: playerId2,
          status: "ok",
          damagePoints: 0,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 3,
            y: 3,
            facing: "up",
          },
          archiveMarkerId: 3,
          design: "double",
        },
      ],
    } as unknown as MainGameState;

    const result = canPowerDownRobot(playerId, gameState);
    assert.strictEqual(result.canPerform, false);

    done();
  });

  it("should return false if you haven't finished programming your robot", (done) => {
    const playerId = "1234";
    const playerId2 = "5678";
    const gameState = {
      state: "main",
      seatOrder: [playerId, playerId2],
      finishedProgrammingPlayers: [playerId2],
      poweringDownNextTurn: [],
      flagsTouched: { [playerId]: 0, [playerId2]: 0 },
      robots: [
        {
          playerId,
          status: "ok",
          damagePoints: 1,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 2,
            y: 2,
            facing: "up",
          },
          archiveMarkerId: 2,
          design: "outset",
        },
        {
          playerId: playerId2,
          status: "ok",
          damagePoints: 0,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 3,
            y: 3,
            facing: "up",
          },
          archiveMarkerId: 3,
        },
      ],
    } as unknown as MainGameState;

    const result = canPowerDownRobot(playerId, gameState);
    assert.strictEqual(result.canPerform, false);

    done();
  });

  it("should return false if someone else hasn't finished programming their robot", (done) => {
    const playerId = "1234";
    const playerId2 = "5678";
    const gameState = {
      state: "main",
      seatOrder: [playerId, playerId2],
      finishedProgrammingPlayers: [playerId],
      poweringDownNextTurn: [],
      flagsTouched: { [playerId]: 0, [playerId2]: 0 },
      robots: [
        {
          playerId,
          status: "ok",
          damagePoints: 1,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 2,
            y: 2,
            facing: "up",
          },
          archiveMarkerId: 2,
          design: "outset",
        },
        {
          playerId: playerId2,
          status: "ok",
          damagePoints: 0,
          lockedRegisters: [],
          lives: 3,
          position: {
            x: 3,
            y: 3,
            facing: "up",
          },
          archiveMarkerId: 3,
          design: "double",
        },
      ],
    } as unknown as MainGameState;

    const result = canPowerDownRobot(playerId, gameState);
    assert.strictEqual(result.canPerform, false);

    done();
  });
});
