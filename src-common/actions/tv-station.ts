import type { Action, GameData } from "~common/types/index.js";

import { establishmentReference } from "~common/constants/buildings.js";
import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";
import { verifyPassword } from "./verify-password.js";

const TV_STATION_COINS = 5;

export const tvStationAction = (
	gameData: GameData,
	action: Action,
	skipUpdate = false
): { gameData: GameData; error?: string } => {
	if (action.type !== "tv-station") {
		return {
			gameData,
			error: "not tv-station",
		};
	}

	const { gameState } = gameData;
	const { publicState } = gameState;
	const { common, players: playerStates } = publicState;
	const { activePlayerId, turnEvents, turnPhase, pendingActions } = common;

	if (activePlayerId !== action.playerId) {
		return {
			gameData,
			error: "It's not your turn.",
		};
	}

	const { validPassword } = verifyPassword(gameData, action);

	if (!skipUpdate && !validPassword) {
		return {
			gameData,
			error: "Invalid password",
		};
	}

	if (turnPhase !== "after-roll") {
		return {
			gameData,
			error: "You only use the TV Station after rolling the dice.",
		};
	}

	const tvStationActionIndex = pendingActions.findIndex(
		(p) => p.action === "tv-station" && p.playerId === action.playerId
	);

	if (tvStationActionIndex < 0) {
		return {
			gameData,
			error: "No pending TV Station action to do.",
		};
	}

	const pendingTvStation = pendingActions[tvStationActionIndex];

	if (!pendingTvStation || pendingTvStation.playerId !== action.playerId) {
		return {
			gameData,
			error: "Something went wrong",
		};
	}

	const { payload } = action;

	const opponentState = playerStates[payload.opponentId];

	if (!opponentState) {
		return {
			gameData,
			error: "The chosen player isn't in this game.",
		};
	}

	if (skipUpdate) {
		return {
			gameData,
		};
	}

	const { city } = playerStates[activePlayerId];

	const establishmentCount = city.establishments["tvStation"]?.length || 0;

	const maxMoney = TV_STATION_COINS * establishmentCount;

	if (maxMoney === 0) {
		return {
			gameData,
		};
	}

	if (opponentState.money === 0) {
		turnEvents.push(
			`id:${Date.now()}:%${activePlayerId}% couldn't collect any coins from %${
				payload.opponentId
			}% - ${establishmentCount} ${
				establishmentCount === 1
					? establishmentReference.tvStation.display
					: establishmentReference.tvStation.pluralDisplay
			}`
		);
	} else if (opponentState.money < maxMoney) {
		turnEvents.push(
			`id:${Date.now()}:%${activePlayerId}% collected ${opponentState.money} ${
				opponentState.money === 1 ? "coin" : "coins"
			} from %${payload.opponentId}% - ${establishmentCount} ${
				establishmentCount === 1
					? establishmentReference.tvStation.display
					: establishmentReference.tvStation.pluralDisplay
			}`
		);

		playerStates[activePlayerId].money += opponentState.money;
		opponentState.money = 0;
	} else {
		turnEvents.push(
			`id:${Date.now()}:%${activePlayerId}% collected ${maxMoney} ${
				maxMoney === 1 ? "coin" : "coins"
			} from %${payload.opponentId}% - ${establishmentCount} ${
				establishmentCount === 1
					? establishmentReference.tvStation.display
					: establishmentReference.tvStation.pluralDisplay
			}`
		);

		playerStates[activePlayerId].money += maxMoney;
		opponentState.money -= maxMoney;
	}

	pendingActions.splice(tvStationActionIndex, 1);

	if (pendingActions.length === 0) {
		common.turnPhase = "before-build";

		if (city.landmarks.cityHall && playerStates[activePlayerId].money === 0) {
			playerStates[activePlayerId].money = 1;

			turnEvents.push(
				`id:${Date.now()}:%${activePlayerId}% got 1 coin from their City Hall`
			);
		}
	}

	trimTurnEvents(turnEvents);

	return { gameData };
};
