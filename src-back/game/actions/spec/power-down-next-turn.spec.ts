import assert from "node:assert";

import Game from "../../game-class";
import powerDownNextTurn from "../power-down-next-turn";

const gameData1 = require("./power-down-next-turn-data/game-data-1.json");

describe("Powering down action", () => {
  it("should process the next turn when everyone else is powered down or finished programming and you choose yes", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData1)));

    assert.strictEqual(3, testGame.gameState.poweringDownNextTurn.length);

    const { message, automaticAction } = powerDownNextTurn(testGame, {
      type: "power-down-next-turn",
      playerId: "409b6578-8f27-40ae-8152-35e50bd01516",
      decision: "yes",
    });

    assert.strictEqual("OK", message);
    assert.deepEqual(
      {
        action: {
          playerId: "server",
          type: "process-registers",
        },
        delay: 500,
      },
      automaticAction
    );

    done();
  });

  it("should process the next turn when everyone else is powered down or finished programming and you choose no", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData1)));

    assert.strictEqual(3, testGame.gameState.poweringDownNextTurn.length);

    const { message, automaticAction } = powerDownNextTurn(testGame, {
      type: "power-down-next-turn",
      playerId: "409b6578-8f27-40ae-8152-35e50bd01516",
      decision: "no",
    });

    assert.strictEqual("OK", message);
    assert.deepEqual(
      {
        action: {
          playerId: "server",
          type: "process-registers",
        },
        delay: 500,
      },
      automaticAction
    );

    done();
  });
});
