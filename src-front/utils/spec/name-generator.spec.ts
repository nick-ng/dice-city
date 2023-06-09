import assert from "node:assert";
import { randomUUID } from "crypto";

import { getName } from "../name-generator.js";

const BENCHMARK_TIMEOUT = 10000;

describe("Name generator", () => {
	it("should always return the same name for the same seed", (done) => {
		const seed = "12345678-1234-1234-1234-123456789abc";
		const name1 = getName(seed);
		assert(typeof name1 === "string");

		const name2 = getName(seed);
		assert.equal(name1, name2);

		done();
	});

	/**
	 * Benchmarks
	 * Don't get run on CI
	 */
	if (process.env.NODE_ENV !== "development") {
		return;
	}

	it("should have enough entrophy 1", function (done) {
		this.timeout(BENCHMARK_TIMEOUT);
		const tic = Date.now();

		let counter = 0;
		while (Date.now() - tic < BENCHMARK_TIMEOUT - 50) {
			counter++;

			const uniqueNames = new Set();
			for (let n = 0; n < 4; n++) {
				uniqueNames.add(getName(randomUUID()));
			}

			if (uniqueNames.size < 4) {
				console.info(
					`Generated ${counter} sets of 4 names before a duplicate:`
				);
				uniqueNames.forEach((n) => console.info(n));
				return done();
			}
		}

		console.info("Couldn't generate a set with a duplicate");

		done();
	});

	it("should have enough entrophy 2", function (done) {
		this.timeout(BENCHMARK_TIMEOUT);
		const tic = Date.now();

		let counter = 0;
		const uniqueNames = new Set();
		while (Date.now() - tic < BENCHMARK_TIMEOUT - 50) {
			counter++;
			uniqueNames.add(getName(randomUUID()));
		}

		console.info(
			`Generated ${uniqueNames.size}/${counter} (${
				(uniqueNames.size / counter) * 100
			}%) unique names`
		);

		done();
	});
});
