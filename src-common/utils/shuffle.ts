export const shuffle = <T>(inputArray: readonly T[]): T[] =>
	inputArray
		.map((data) => ({
			data,
			sortValue: Math.random(),
		}))
		.sort((a, b) => a.sortValue - b.sortValue)
		.map(({ data }) => data);

export const rollDice = (sideCount: number = 6): number => {
	const rolled = shuffle([...Array(sideCount).keys()]);
	return rolled[0] + 1;
};
