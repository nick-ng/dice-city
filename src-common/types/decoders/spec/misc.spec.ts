import assert from "node:assert";
import { isRight, isLeft } from "fp-ts/Either";

import { uuidishDecoder } from "../misc";

describe("Uuid decoder", () => {
  it("should accept uuids-ish strings", (done) => {
    const a = uuidishDecoder.decode("12345678-1234-1234-1234-123456789abc");
    assert(isRight(a));

    const b = uuidishDecoder.decode("ABcDEfgH-iJkL-mNop-qrSt-UVwxYz012345");
    assert(isRight(b));
    done();
  });

  it("should reject non uuids-ish strings", (done) => {
    const a = uuidishDecoder.decode("12345678-1234-1234-1234-123456789abcd");
    assert(isLeft(a));

    const b = uuidishDecoder.decode("ABc-DEfgH-iJkL-mNop-qrSt-UVwxYz-0345");
    assert(isLeft(b));
    done();
  });
});
