import assert from "node:assert";

import { getDeck } from "../../constants/buildings.js";
import { shuffle } from "../../utils/shuffle.js";

import { totalSupply } from "../supply.js";

describe("total supply", () => {
  it("should use all remaining cards", (done) => {
    const deck = shuffle(getDeck("base"));
    const after = totalSupply({}, deck);

    assert.equal(0, after.deck.length);

    done();
  });
});
