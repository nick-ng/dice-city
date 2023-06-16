import type { GameData } from "~common/types/index.js";

export const checkVictory = (
	gameData: GameData
): { gameData: GameData; gameOver: boolean } => {
	const { gameState, gameSettings } = gameData;
	const { publicState } = gameState;
	const { common, players: playerStates } = publicState;

	const { landmarks } = gameSettings;

	const temp = Object.values(playerStates).map((p) => p.city.landmarks);

	let gameOver = false;

	for (let i = 0; i < temp.length; i++) {
		const landmarkCount = Object.values(temp[i]).reduce(
			(accumulator, current) => {
				if (current) {
					return accumulator + 1;
				}

				return accumulator;
			},
			0
		);

		if (landmarkCount === landmarks.length) {
			common.turnPhase = "end";
			gameOver = true;
			break;
		}
	}

	return { gameData, gameOver };
};
