import seedrandom from "seedrandom";

import type { Action, GameData } from "~common/types/index.js";

import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";

const rollDice = (count: 1 | 2, gameData: GameData, sides = 6): number[] => {
	const rng = seedrandom(`${gameData.gameDetails.id}-${gameData.lastActionId}`);

	const result = new Array(count).fill(0).map(() => {
		const die = new Array(sides).fill(0).map((_, i) => ({
			face: i + 1,
			sortIndex: rng(), // Does this cause the results to be uniform even if rng() is biased?
		}));

		return die.sort((a, b) => a.sortIndex - b.sortIndex)[0].face;
	});

	return result;
};

export const rollDiceAction = (
	gameData: GameData,
	action: Action,
	skipUpdate = false
): { gameData: GameData; error?: string } => {
	if (action.type !== "roll-dice") {
		return { gameData, error: "not roll-dice" };
	}

	const { payload, playerId } = action;
	const { diceCount } = payload;

	if (diceCount < 1 || diceCount > 2) {
		return {
			gameData,
			error: "invalid diceCount",
		};
	}

	const { gameState } = gameData;
	const { publicState } = gameState;
	const { players, common } = publicState;
	const playerState = players[playerId];

	if (!playerState) {
		return {
			gameData,
			error: "invalid playerId",
		};
	}

	const { activePlayerId, turnPhase } = common;

	if (turnPhase !== "before-roll") {
		return {
			gameData,
			error: "You can only roll dice in roll dice phase.",
		};
	}

	if (activePlayerId !== playerId) {
		return {
			gameData,
			error: "You can only roll dice on your turn.",
		};
	}

	const { city } = playerState;
	const { landmarks } = city;
	if (diceCount !== 1 && !landmarks.trainStation) {
		return {
			gameData,
			error: "You can only roll 1 dice if you don't have a train station.",
		};
	}

	if (skipUpdate) {
		return { gameData };
	}

	common.turnPhase = "after-roll";
	common.diceRolls = rollDice(diceCount, gameData, 6);
	common.processedEstablishments = [];

	if (diceCount === 1) {
		common.turnEvents.push(
			`%${activePlayerId}% rolled a ${common.diceRolls[0]}`
		);
	} else {
		const rollTotal = common.diceRolls.reduce((prev, curr) => prev + curr, 0);
		common.turnEvents.push(
			`%${activePlayerId}% rolled a ${rollTotal} (${common.diceRolls.join(
				" + "
			)})`
		);
	}

	trimTurnEvents(common.turnEvents);

	return {
		gameData,
	};
};
