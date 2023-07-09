import type { Action, GameData } from "~common/types/index.js";

import { verifyPassword } from "./verify-password.js";

export const changePublicAction = (
	gameData: GameData,
	action: Action
): { gameData: GameData; error?: string } => {
	if (action.type !== "change-public") {
		return {
			gameData,
			error: "not change-public",
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
			error: "Only the host can make the game public",
		};
	}

	const { gameState, gameDetails } = gameData;
	const { publicState } = gameState;
	const { common } = publicState;
	const { turnPhase } = common;

	if (turnPhase !== "lobby") {
		return {
			gameData,
			error: "The game has already started",
		};
	}

	gameDetails.isPublic = action.payload.isPublic;

	return { gameData };
};
