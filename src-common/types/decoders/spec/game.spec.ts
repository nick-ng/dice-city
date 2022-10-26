import assert from "node:assert";
import { isRight, isLeft } from "fp-ts/Either";

import { playerDecoder } from "../game.js";

describe("player decoder", () => {
  it("should accept complete players objects", (done) => {
    const alice = {
      id: "12345678-1234-1234-1234-123456789abc",
      name: "Alice",
    };
    const a = playerDecoder.decode(alice);
    assert(isRight(a));
    assert.deepEqual(alice, a.right);

    const bob = {
      id: "ABcDEfgH-iJkL-mNop-qrSt-UVwxYz012345",
      name: "Bob",
    };
    assert(isRight(playerDecoder.decode(bob)));

    const carol = {
      id: "ABcDEfgH-iJkL-mNop-qrSt-UVwxYz012345",
      name: "Carol",
      favouriteColour: "blue",
    };
    assert(isRight(playerDecoder.decode(carol)));

    done();
  });

  it("should reject incomplete or wrong player objects", (done) => {
    const alice = {
      id: "12-45678-1234-1234-1234-123456789abc",
      name: "Alice",
    };
    assert(isLeft(playerDecoder.decode(alice)));

    const bob = {
      name: "Bob",
    };
    assert(isLeft(playerDecoder.decode(bob)));

    done();
  });
});
