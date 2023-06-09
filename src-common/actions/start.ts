import type { Action, GameData } from "~common/types/index.js";

import { shuffle } from "~common/utils/shuffle.js";
import { getDeck } from "~common/constants/buildings.js";
import { verifyPassword } from "./verify-password.js";
import { getSupply } from "./supply.js";

export const startAction = (
	gameData: GameData,
	action: Action,
	skipUpdate = false
): { gameData: GameData; error?: string } => {
	if (action.type !== "start") {
		return {
			gameData,
			error: "not start",
		};
	}

	const { isHost, validPassword } = verifyPassword(gameData, action);

	if (!skipUpdate && !validPassword) {
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

	const { gameState, gameDetails, gameSettings } = gameData;
	const { publicState, secretState } = gameState;
	const { common } = publicState;
	const { turnPhase } = common;
	const { players } = gameDetails;

	if (turnPhase !== "lobby") {
		return {
			gameData,
			error: "The game has already started",
		};
	}

	if (players.length < 2) {
		return {
			gameData,
			error: "Playing by yourself would be too lonely.",
		};
	}

	if (skipUpdate) {
		return {
			gameData,
		};
	}

	common.turnPhase = "before-roll";
	common.turnOrder = shuffle(players.map((p) => p.id));
	common.activePlayerId = common.turnOrder[0];
	const deck = getDeck("base");
	const temp = getSupply({}, deck);
	common.supply = temp.supply;
	secretState.common.deck = temp.deck;

	for (let i = 0; i < players.length; i++) {
		const { id } = players[i];
		publicState.players[id].money = gameSettings.startingMoney;
		publicState.players[id].city.establishments = {
			wheatField: [`wheatField:${id}`],
			ranch: [`ranch:${id}`],
		};
		for (let j = 0; j < gameSettings.landmarks.length; j++) {
			const landmark = gameSettings.landmarks[j];
			publicState.players[id].city.landmarks[landmark] = false;
		}
	}

	return {
		gameData,
	};
};
