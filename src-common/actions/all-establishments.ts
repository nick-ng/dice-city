import type { GameData } from "~common/types/index.js";

import { blueEstablishmentsAction } from "./blue-establishments.js";
import { greenEstablishmentsAction } from "./green-establishments.js";
import { purpleEstablishmentsAction } from "./purple-establishments.js";
import { redEstablishmentsAction } from "./red-establishments.js";

export const allEstablishmentsAction = (
	gameData: GameData
): { gameData: GameData; error?: string } => {
	let error: string | undefined = undefined;

	error = redEstablishmentsAction(gameData).error;

	if (error) {
		console.error("error processing red establishments", error);

		return {
			gameData,
			error,
		};
	}

	error = greenEstablishmentsAction(gameData).error;

	if (error) {
		console.error("error processing green establishments", error);

		return {
			gameData,
			error,
		};
	}

	error = blueEstablishmentsAction(gameData).error;

	if (error) {
		console.error("error processing blue establishments", error);

		return { gameData, error };
	}

	return purpleEstablishmentsAction(gameData);
};
