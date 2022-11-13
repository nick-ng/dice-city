import type { Establishment } from "~common/types/index.js";

export const sortEstablishments = (
  a: Establishment,
  b: Establishment
): number => {
  const aActivation = (
    a.activationNumbers.reduce((prev, curr) => prev + curr, 0) /
    a.activationNumbers.length
  ).toFixed(2);
  const bActivation = (
    b.activationNumbers.reduce((prev, curr) => prev + curr, 0) /
    b.activationNumbers.length
  ).toFixed(2);

  const padLength = Math.max(
    ...[aActivation, bActivation].map((c) => c.length)
  );

  const aString = `${aActivation.padStart(padLength, "0")}_${a.display}`;
  const bString = `${bActivation.padStart(padLength, "0")}_${b.display}`;
  return aString.localeCompare(bString);
};
