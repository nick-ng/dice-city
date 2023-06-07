import seedrandom from "seedrandom";

import { allNouns } from "./nouns.js";
import { allAdjectives } from "./adjectives.js";

const adjectiveCount = 2;

export const getName = (seed: string, name = "", showName = false) => {
  if (name && showName) {
    return name;
  }

  const rng = seedrandom(seed);

  const nounIndex = Math.floor(allNouns.length * rng());
  const noun = allNouns[nounIndex];

  const adjectives: (typeof allAdjectives)[number][] = [];

  for (let n = 0; n < adjectiveCount; n++) {
    const remainingAdjectives = allAdjectives.filter((adjective) => {
      const { type, value } = adjective;

      return (
        !adjectives.map((a) => a.type).includes(type) &&
        !adjectives.map((a) => a.value).includes(value)
      );
    });

    const index = Math.floor(remainingAdjectives.length * rng());
    adjectives.push(remainingAdjectives[index]);
  }

  return [
    ...adjectives.sort((a, b) => a.order - b.order).map(({ value }) => value),
    noun,
  ].join("");
};
