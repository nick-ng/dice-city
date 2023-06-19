import type { Action, GameData } from "~common/types/index.js";

import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";
import { rollDice } from "./roll-dice.js";
import { verifyPassword } from "./verify-password.js";

export const rerollDiceAction = (
	gameData: GameData,
	action: Action,
	skipUpdate = false
): { gameData: GameData; error?: string } => {
	if (action.type !== "reroll-dice") {
		return { gameData, error: "not reroll-dice" };
	}

	const { validPassword } = verifyPassword(gameData, action);

	if (!skipUpdate && !validPassword) {
		return {
			gameData,
			error: "Invalid password",
		};
	}

	const { gameState } = gameData;
	const { publicState } = gameState;
	const { common } = publicState;
	const { activePlayerId, pendingActions, turnPhase, diceRolls } = common;

	if (turnPhase !== "before-roll") {
		return { gameData, error: "You cannot re-roll dice right now." };
	}

	if (action.playerId !== activePlayerId) {
		return { gameData, error: "You can only re-roll dice on your turn." };
	}

	const radioTowerActionIndex = pendingActions.findIndex(
		(p) => p.action === "radio-tower" && p.playerId === activePlayerId
	);

	if (radioTowerActionIndex < 0) {
		return { gameData, error: "You cannot re-roll dice right now." };
	}

	if (skipUpdate) {
		return { gameData };
	}

	pendingActions.splice(radioTowerActionIndex, 1);
	common.turnPhase = "after-roll";

	const { payload } = action;
	const { skip } = payload;

	if (skip) {
		return { gameData };
	}

	const diceCount = diceRolls.length;

	common.diceRolls = rollDice(diceCount, gameData, 6);

	if (diceCount === 1) {
		common.turnEvents.push(
			`%${activePlayerId}% re-rolled and got a ${common.diceRolls[0]}`
		);
	} else {
		const rollTotal = common.diceRolls.reduce((prev, curr) => prev + curr, 0);
		common.turnEvents.push(
			`%${activePlayerId}% re-rolled and got a ${rollTotal} (${common.diceRolls.join(
				" + "
			)})`
		);
	}

	trimTurnEvents(common.turnEvents);

	return {
		gameData,
	};
};
