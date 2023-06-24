import type { GameData, Action } from "~common/types/index.js";

import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";
import { verifyPassword } from "./verify-password.js";

export const harbourRollHandler = (
	gameData: GameData
): { gameData: GameData; requireInput: boolean } => {
	const { gameState } = gameData;
	const { publicState } = gameState;
	const { common, players: playerStates } = publicState;
	const { activePlayerId, pendingActions } = common;

	const activePlayerState = playerStates[activePlayerId];

	if (!activePlayerState) {
		console.error(
			"no active player state",
			activePlayerId,
			JSON.stringify(playerStates)
		);
		return { gameData, requireInput: false };
	}

	const { city } = activePlayerState;
	const diceRoll = common.diceRolls.reduce(
		(accumulator, dieRoll) => accumulator + dieRoll,
		0
	);

	if (city.landmarks.harbour && diceRoll >= 10) {
		pendingActions.push({
			playerId: activePlayerId,
			action: "harbour",
		});

		common.turnPhase = "before-roll";

		return { gameData, requireInput: true };
	}

	return { gameData, requireInput: false };
};

export const harbourChangeHandler = (
	gameData: GameData,
	action: Action
): { gameData: GameData; error?: string } => {
	if (action.type !== "harbour-change-roll") {
		return {
			gameData,
			error: "not harbour-change-roll",
		};
	}

	const { validPassword } = verifyPassword(gameData, action);

	if (!validPassword) {
		return {
			gameData,
			error: "Invalid password",
		};
	}

	const { gameState } = gameData;
	const { publicState } = gameState;
	const { common } = publicState;
	const { activePlayerId, pendingActions, turnPhase, diceRolls } = common;

	if (turnPhase !== "before-build") {
		return { gameData, error: "You cannot use your Harbour right now." };
	}

	if (action.playerId !== activePlayerId) {
		return { gameData, error: "You can only use your Harbour on your turn." };
	}

	const harbourActionIndex = pendingActions.findIndex(
		(p) => p.action === "harbour" && p.playerId === activePlayerId
	);

	if (harbourActionIndex < 0) {
		return { gameData, error: "You cannot use your Harbour right now." };
	}

	pendingActions.splice(harbourActionIndex, 1);
	common.turnPhase = "after-roll";

	if (action.payload.skip) {
		common.harbourExtra = 0;

		return { gameData };
	}

	const diceRoll = diceRolls.reduce((a, r) => a + r, 0);

	// This should always happen
	if (diceRoll >= 10) {
		common.harbourExtra = 2;
	}

	common.turnEvents.push(
		`%${activePlayerId}% changed the dice total from ${diceRoll} to ${
			diceRoll + common.harbourExtra
		} with their Harbour.`
	);

	trimTurnEvents(common.turnEvents);

	return { gameData };
};
