import type { Action, GameData } from "~common/types/index.js";
import {
	establishmentReference,
	landmarkReference,
} from "../constants/buildings.js";

// @todo(nick-ng): log action in turn events
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

	const { supply, activePlayerId, turnPhase } = common;

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

	if (!buildingKey) {
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

		if (establishment.tag === "major" && city.establishments[buildingKey]) {
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
	}

	return { gameData };
};
