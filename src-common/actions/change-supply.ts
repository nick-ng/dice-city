import type { Action, GameData } from "~common/types/index.js";

import { verifyPassword } from "./verify-password.js";

export const changeSupplyAction = (
	gameData: GameData,
	action: Action
): { gameData: GameData; error?: string } => {
	if (action.type !== "change-supply") {
		return {
			gameData,
			error: "not change-supply",
		};
	}

	const { isHost, validPassword } = verifyPassword(gameData, action);

	if (!validPassword) {
		return {
			gameData,
			error: "Invalid password",
		};
	}

	if (!isHost) {
		return {
			gameData,
			error: "Only the host can start the game",
		};
	}

	return { gameData };
};
