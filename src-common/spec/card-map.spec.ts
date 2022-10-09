import assert from "node:assert";
import { getCardMap } from "../card-map";

describe("getCardMap", () => {
  it("should have the correct distribution of cards", (done) => {
    const cardMap = getCardMap();

    const cards = Object.values(cardMap);

    assert.strictEqual(
      cards.filter(({ action }) => action === "Move 1").length,
      18
    );
    assert.strictEqual(
      cards.filter(({ action }) => action === "Move 2").length,
      12
    );
    assert.strictEqual(
      cards.filter(({ action }) => action === "Move 3").length,
      6
    );
    assert.strictEqual(
      cards.filter(({ action }) => action === "Back Up").length,
      6
    );
    assert.strictEqual(
      cards.filter(({ action }) => action === "Rotate Right").length,
      18
    );
    assert.strictEqual(
      cards.filter(({ action }) => action === "Rotate Left").length,
      18
    );
    assert.strictEqual(
      cards.filter(({ action }) => action === "U-Turn").length,
      6
    );

    done();
  });
});
