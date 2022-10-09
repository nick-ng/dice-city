import assert from "node:assert";
import { difference } from "lodash";

import Game from "../../game-class";
import setManyRegisters from "../set-many-registers";

const gameData0 = require("./set-many-registers-data/game-data-0.json");

// Good robot: c87fc696-4d44-4695-8939-de70de6a9d35
// Broken robot: loahc8dw-1sc7-sbmn-fngz-3a6si14x4wvx

describe("Set many registers action", () => {
  it("should let you update cards if you have them and you do it after the last set.", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData0)));
    const { message: message1 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        null,
        null,
      ],
      cardsInHand: [
        "program-card-12",
        "program-card-06",
        "program-card-04",
        "program-card-40",
        "program-card-57",
        "program-card-11",
      ],
      setRegisterTimestamp: 1000000,
    });

    const onePlayerSecrets1 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      ["program-card-10", "program-card-19", "program-card-79", null, null],
      onePlayerSecrets1.programRegisters
    );
    assert.deepStrictEqual(
      [],
      difference(
        [
          "program-card-12",
          "program-card-06",
          "program-card-04",
          "program-card-40",
          "program-card-57",
          "program-card-11",
        ],
        onePlayerSecrets1.cardsInHand
      )
    );
    assert.strictEqual("OK", message1);

    const { message: message2 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        "program-card-57",
        null,
      ],
      cardsInHand: [
        "program-card-12",
        "program-card-06",
        "program-card-04",
        "program-card-40",
        "program-card-11",
      ],
      setRegisterTimestamp: 2000000,
    });

    const onePlayerSecrets2 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        "program-card-57",
        null,
      ],
      onePlayerSecrets2.programRegisters
    );
    assert.deepStrictEqual(
      [],
      difference(
        [
          "program-card-12",
          "program-card-06",
          "program-card-04",
          "program-card-40",
          "program-card-11",
        ],
        onePlayerSecrets2.cardsInHand
      )
    );
    assert.strictEqual("OK", message2);

    done();
  });

  it("shouldn't let you update cards if the new timestamp is earlier.", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData0)));
    const { message: message1 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        null,
        null,
      ],
      cardsInHand: [
        "program-card-12",
        "program-card-06",
        "program-card-04",
        "program-card-40",
        "program-card-57",
        "program-card-11",
      ],
      setRegisterTimestamp: 2000000,
    });

    const onePlayerSecrets1 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      ["program-card-10", "program-card-19", "program-card-79", null, null],
      onePlayerSecrets1.programRegisters
    );
    assert.strictEqual("OK", message1);

    const { message: message2 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        "program-card-57",
        null,
      ],
      cardsInHand: [
        "program-card-12",
        "program-card-06",
        "program-card-04",
        "program-card-40",
        "program-card-11",
      ],
      setRegisterTimestamp: 2000000,
    });

    const onePlayerSecrets2 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      ["program-card-10", "program-card-19", "program-card-79", null, null],
      onePlayerSecrets2.programRegisters
    );
    assert.strictEqual("Skipping old action.", message2);

    const { message: message3 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        "program-card-57",
        null,
      ],
      cardsInHand: [
        "program-card-12",
        "program-card-06",
        "program-card-04",
        "program-card-40",
        "program-card-11",
      ],
      setRegisterTimestamp: 1000000,
    });

    const onePlayerSecrets3 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      ["program-card-10", "program-card-19", "program-card-79", null, null],
      onePlayerSecrets3.programRegisters
    );
    assert.strictEqual("Skipping old action.", message3);

    done();
  });

  it("shouldn't let you update cards if you use cards you don't have.", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData0)));
    const { message: message1 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-01",
        null,
        null,
      ],
      cardsInHand: [
        "program-card-12",
        "program-card-06",
        "program-card-04",
        "program-card-40",
        "program-card-57",
        "program-card-11",
      ],
      setRegisterTimestamp: 1000000,
    });

    const onePlayerSecrets1 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      [null, null, null, null, null],
      onePlayerSecrets1.programRegisters
    );
    assert.strictEqual("Incorrect cards in hand & registers.", message1);

    const { message: message2 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        null,
        null,
      ],
      cardsInHand: [
        "program-card-01",
        "program-card-06",
        "program-card-04",
        "program-card-40",
        "program-card-57",
        "program-card-11",
      ],
      setRegisterTimestamp: 1000000,
    });

    const onePlayerSecrets2 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      [null, null, null, null, null],
      onePlayerSecrets2.programRegisters
    );
    assert.strictEqual("Incorrect cards in hand & registers.", message2);

    done();
  });

  it("shouldn't let you update cards if you use duplicate cards.", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData0)));
    const { message: message1 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-19",
        null,
        null,
      ],
      cardsInHand: [
        "program-card-12",
        "program-card-06",
        "program-card-04",
        "program-card-40",
        "program-card-57",
        "program-card-11",
      ],
      setRegisterTimestamp: 1000000,
    });

    const onePlayerSecrets1 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      [null, null, null, null, null],
      onePlayerSecrets1.programRegisters
    );
    assert.strictEqual("Incorrect cards in hand & registers.", message1);

    const { message: message2 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        null,
        null,
      ],
      cardsInHand: [
        "program-card-12",
        "program-card-12",
        "program-card-04",
        "program-card-40",
        "program-card-57",
        "program-card-11",
      ],
      setRegisterTimestamp: 1000000,
    });

    const onePlayerSecrets2 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      [null, null, null, null, null],
      onePlayerSecrets2.programRegisters
    );
    assert.strictEqual("Incorrect cards in hand & registers.", message2);

    const { message: message3 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        null,
        null,
      ],
      cardsInHand: [
        "program-card-12",
        "program-card-79",
        "program-card-04",
        "program-card-40",
        "program-card-57",
        "program-card-11",
      ],
      setRegisterTimestamp: 1000000,
    });

    const onePlayerSecrets3 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      [null, null, null, null, null],
      onePlayerSecrets3.programRegisters
    );
    assert.strictEqual("Incorrect cards in hand & registers.", message3);

    done();
  });

  it("shouldn't let you update cards if you use too many cards.", (done) => {
    const testGame = new Game(JSON.parse(JSON.stringify(gameData0)));
    const { message: message1 } = setManyRegisters(testGame, {
      type: "set-many-registers",
      playerId: "c87fc696-4d44-4695-8939-de70de6a9d35",
      programRegisters: [
        "program-card-10",
        "program-card-19",
        "program-card-79",
        null,
        null,
      ],
      cardsInHand: [
        "program-card-79",
        "program-card-12",
        "program-card-06",
        "program-card-04",
        "program-card-40",
        "program-card-57",
        "program-card-11",
      ],
      setRegisterTimestamp: 1000000,
    });

    const onePlayerSecrets1 =
      testGame.playerSecrets["c87fc696-4d44-4695-8939-de70de6a9d35"];

    assert.deepEqual(
      [null, null, null, null, null],
      onePlayerSecrets1.programRegisters
    );
    assert.strictEqual("Incorrect cards in hand & registers.", message1);

    done();
  });
});
