import assert from "node:assert";

import { getDeck } from "../../../../src-common/constants/buildings.js";
import { shuffle } from "../../../../src-common/utils/shuffle.js";

import { totalSupply } from "../supply.js";

describe("total supply", () => {
  it("should use all remaining cards", (done) => {
    const deck = shuffle(getDeck("base"));
    const after = totalSupply({}, deck);

    assert.equal(0, after.deck.length);

    done();
  });

  it("shouldn't mutate the deck", (done) => {
    const deck = getDeck("base");
    const intialDeckLength = deck.length;
    totalSupply({}, deck);

    assert.equal(intialDeckLength, deck.length);

    done();
  });
});
