import type { GameData } from "~common/types/index.js";

import { landmarkReference } from "~common/constants/buildings.js";
import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";

export const amusementParkRollHandler = (gameData: GameData): GameData => {
	const { activePlayerId, diceRolls, pendingActions } =
		gameData.gameState.publicState.common;

	const activePlayerState =
		gameData.gameState.publicState.players[activePlayerId];

	const haveAmusementPark = activePlayerState.city.landmarks.amusementPark;

	const uniqueDiceRolls = new Set(diceRolls);

	if (
		haveAmusementPark &&
		diceRolls.length > 1 &&
		uniqueDiceRolls.size < diceRolls.length
	) {
		pendingActions.push({
			action: "amusement-park",
			playerId: activePlayerId,
		});
	}

	return gameData;
};

export const amusementParkTurnHandler = (gameData: GameData): GameData => {
	const { activePlayerId, pendingActions, turnOrder } =
		gameData.gameState.publicState.common;

	const currentPlayerIndex = turnOrder.findIndex((p) => p === activePlayerId);

	gameData.gameState.publicState.common.turnPhase = "before-roll";

	const amusementParkPendingActionIndex = pendingActions.findIndex(
		(p) => p.action === "amusement-park" && p.playerId === activePlayerId
	);

	if (amusementParkPendingActionIndex < 0) {
		const nextPlayerIndex = (currentPlayerIndex + 1) % turnOrder.length;

		gameData.gameState.publicState.common.activePlayerId =
			turnOrder[nextPlayerIndex];

		gameData.gameState.publicState.common.turnEvents.push(
			`It is %${turnOrder[nextPlayerIndex]}%'s turn`
		);
	} else {
		pendingActions.splice(amusementParkPendingActionIndex, 1);

		gameData.gameState.publicState.common.turnEvents.push(
			`%${activePlayerId}% gets another turn because of their ${landmarkReference.amusementPark.display}`
		);
	}

	trimTurnEvents(gameData.gameState.publicState.common.turnEvents);

	return gameData;
};
