import assert from "node:assert";
import type { MainGameState } from "src-common/game-types";

import { getPowerDownDecisionOrder } from "../../../../src-common/utils";
import Game from "../../game-class";
import finishSettingRegisters from "../finish-setting-registers";

const gameData0 = require("./finish-setting-registers-data/game-data-0.json");
const gameData1 = require("./finish-setting-registers-data/game-data-1.json");
const gameData2 = require("./finish-setting-registers-data/game-data-2.json");

describe("Finish setting registers action", () => {
  it("should reset power down decisions after last person submits program.", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData0)));

    assert.strictEqual(3, testGame.gameState.finishedProgrammingPlayers.length);

    const { message, automaticAction } = finishSettingRegisters(testGame, {
      type: "finish-setting-registers",
      playerId: "loahc8dw-1sc7-sbmn-fngz-3a6si14x4wvx",
    });

    const unfinishedPlayers = (
      testGame.gameState as MainGameState
    ).seatOrder.filter(
      (id) => !testGame.gameState.finishedProgrammingPlayers.includes(id)
    );

    assert.strictEqual("OK", message);
    assert.strictEqual(4, testGame.gameState.finishedProgrammingPlayers.length);
    assert.strictEqual(undefined, automaticAction);
    assert.deepStrictEqual([], unfinishedPlayers);

    assert.strictEqual(3, testGame.gameState.poweringDownNextTurn.length);
    assert.strictEqual(1, getPowerDownDecisionOrder(testGame.gameState).length);

    done();
  });

  it("should start a timer when 1 player finishes programming - timerStart: first", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData1)));

    assert.strictEqual(0, testGame.gameState.finishedProgrammingPlayers.length);

    const result1 = finishSettingRegisters(testGame, {
      type: "finish-setting-registers",
      playerId: "b5794db6-14aa-4eb4-ae5e-ae4829e1cc8d",
    });

    assert.strictEqual("OK", result1.message);
    assert.strictEqual(1, testGame.gameState.finishedProgrammingPlayers.length);
    assert.strictEqual(
      "force-set-registers",
      result1.automaticAction?.action.type
    );
    assert.strictEqual(30000, result1.automaticAction?.delay);

    const result2 = finishSettingRegisters(testGame, {
      type: "finish-setting-registers",
      playerId: "409b6578-8f27-40ae-8152-35e50bd01516",
    });

    assert.strictEqual("OK", result2.message);
    assert.strictEqual(2, testGame.gameState.finishedProgrammingPlayers.length);
    assert.strictEqual(undefined, result2.automaticAction);

    done();
  });

  it("should start a timer when 1 player hasn't finished programming - timerStart: penultimate", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData2)));

    assert.strictEqual(0, testGame.gameState.finishedProgrammingPlayers.length);

    const result1 = finishSettingRegisters(testGame, {
      type: "finish-setting-registers",
      playerId: "b5794db6-14aa-4eb4-ae5e-ae4829e1cc8d",
    });

    assert.strictEqual("OK", result1.message);
    assert.strictEqual(1, testGame.gameState.finishedProgrammingPlayers.length);
    assert.strictEqual(undefined, result1.automaticAction);

    const result2 = finishSettingRegisters(testGame, {
      type: "finish-setting-registers",
      playerId: "409b6578-8f27-40ae-8152-35e50bd01516",
    });

    assert.strictEqual("OK", result2.message);
    assert.strictEqual(2, testGame.gameState.finishedProgrammingPlayers.length);
    assert.strictEqual(undefined, result2.automaticAction);

    const result3 = finishSettingRegisters(testGame, {
      type: "finish-setting-registers",
      playerId: "loahc8dw-1sc7-sbmn-fngz-3a6si14x4wvx",
    });

    assert.strictEqual("OK", result3.message);
    assert.strictEqual(3, testGame.gameState.finishedProgrammingPlayers.length);
    assert.strictEqual(
      "force-set-registers",
      result3.automaticAction?.action.type
    );
    assert.strictEqual(30000, result3.automaticAction?.delay);

    done();
  });
});
