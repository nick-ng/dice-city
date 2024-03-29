import seedrandom from "seedrandom";

import { allNouns } from "./nouns.js";
import { allAdjectives } from "./adjectives.js";

const adjectiveCount = 2;

export const getRandomName = (seed: string, adjectiveCount = 2): string => {
	const rng = seedrandom(seed);

	const nounIndex = Math.floor(allNouns.length * rng());
	const noun = allNouns[nounIndex];

	const adjectives: (typeof allAdjectives)[number][] = [];

	const usedTypes: string[] = [];

	for (let n = 0; n < adjectiveCount; n++) {
		const remainingAdjectives = allAdjectives.filter((adjective) => {
			const { type, value } = adjective;

			return (
				!usedTypes.includes(type) &&
				!adjectives.map((a) => a.value).includes(value)
			);
		});

		const index = Math.floor(remainingAdjectives.length * rng());

		if (!remainingAdjectives[index].allowMultiple) {
			usedTypes.push(remainingAdjectives[index].type);
		}

		adjectives.push(remainingAdjectives[index]);
	}

	return [
		...adjectives.sort((a, b) => a.order - b.order).map(({ value }) => value),
		noun,
	].join("");
};

// @todo(nick-ng): handle plural adjectives? put nouns in [singular, plural] arrays
export const getName = (
	seed: string,
	name?: string | null,
	showName = false
): string => {
	if (name && showName) {
		return name;
	}

	return getRandomName(seed, adjectiveCount);
};

export const replaceName = (
	data: {
		id: string;
		name?: string | null;
	}[],
	showName: boolean,
	playerId: string,
	text: string
): string =>
	data.reduce(
		(accumulator, { id, name }) =>
			accumulator.replaceAll(
				`%${id}%`,
				getName(id, name, showName || id === playerId)
			),
		text
	);
