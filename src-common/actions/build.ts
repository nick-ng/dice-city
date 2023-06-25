import type { Action, GameData } from "~common/types/index.js";

import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";
import {
	establishmentReference,
	landmarkReference,
} from "../constants/buildings.js";
import { verifyPassword } from "./verify-password.js";

export const buildAction = (
	gameData: GameData,
	action: Action,
	skipUpdate = false
): { gameData: GameData; error?: string } => {
	if (action.type !== "build") {
		return {
			gameData,
			error: "not build",
		};
	}

	const { validPassword } = verifyPassword(gameData, action);

	if (!skipUpdate && !validPassword) {
		return {
			gameData,
			error: "Invalid password",
		};
	}

	const { payload, playerId } = action;
	const { buildingKey } = payload;

	const { gameState, gameSettings } = gameData;
	const { publicState } = gameState;
	const { players, common } = publicState;
	const playerState = players[playerId];

	if (!playerState) {
		return {
			gameData,
			error: "invalid playerId",
		};
	}

	const { supply, activePlayerId, turnPhase, turnEvents } = common;

	if (turnPhase !== "before-build") {
		return {
			gameData,
			error: "You can only build in build phase.",
		};
	}

	if (activePlayerId !== playerId) {
		return {
			gameData,
			error: "You can only build on your turn.",
		};
	}

	// skip building
	if (!buildingKey) {
		if (playerState.city.landmarks.airport) {
			const airportCoins = 10;

			playerState.money = playerState.money + airportCoins;

			trimTurnEvents(
				turnEvents,
				`%${
					action.playerId
				}% skipped building anything and collected ${airportCoins} coins from their ${
					landmarkReference.airport?.display || "Airport"
				}`
			);
		} else {
			trimTurnEvents(
				turnEvents,
				`%${action.playerId}% skipped building anything.`
			);
		}

		return { gameData };
	}

	const establishment = establishmentReference[buildingKey];
	const landmark = landmarkReference[buildingKey];

	if (!establishment && !landmark) {
		return {
			gameData,
			error: "invalid buildingKey",
		};
	}

	const { city } = playerState;
	if (establishment) {
		if (playerState.money < establishment.cost) {
			return {
				gameData,
				error: `You don't have enough money to build a ${establishment.display}`,
			};
		}

		if (
			establishment.tag === "major" &&
			city.establishments[buildingKey]?.length >= 1
		) {
			return {
				gameData,
				error: "cannot have more than one of each %%major% building",
			};
		}

		if (supply[buildingKey].length === 0) {
			return {
				gameData,
				error: "no more establishments in supply",
			};
		}

		if (skipUpdate) {
			return { gameData };
		}

		const tempEstablishmentId = supply[buildingKey].pop();

		if (!tempEstablishmentId) {
			return {
				gameData,
				error: "something went wrong",
			};
		}

		if (!city.establishments[buildingKey]) {
			city.establishments[buildingKey] = [];
		}

		city.establishments[buildingKey].push(tempEstablishmentId);
		playerState.money = playerState.money - establishment.cost;
		common.turnPhase = "after-build";

		trimTurnEvents(
			turnEvents,
			`%${action.playerId}% built ${establishment.determiner} ${establishment.display}.`
		);
	} else if (landmark) {
		if (playerState.money < landmark.cost) {
			return {
				gameData,
				error: "not enough money",
			};
		}

		const { landmarks } = gameSettings;

		if (!landmarks.includes(buildingKey)) {
			return {
				gameData,
				error: "landmark not available",
			};
		}

		if (city.landmarks[buildingKey]) {
			return {
				gameData,
				error: "landmark already built",
			};
		}

		if (skipUpdate) {
			return { gameData };
		}

		city.landmarks[buildingKey] = true;
		playerState.money = playerState.money - landmark.cost;

		trimTurnEvents(
			turnEvents,
			`%${action.playerId}% built ${landmark.determiner} ${landmark.display}`
		);
	}

	return { gameData };
};
