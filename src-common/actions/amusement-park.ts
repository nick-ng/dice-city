import type { GameData } from "~common/types/index.js";

import { landmarkReference } from "~common/constants/buildings.js";
import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";

export const amusementParkRollHandler = (gameData: GameData): GameData => {
	const { activePlayerId, diceRolls, autoActions } =
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
		autoActions.push({
			action: "amusement-park",
			playerId: activePlayerId,
		});
	}

	return gameData;
};

export const amusementParkTurnHandler = (gameData: GameData): GameData => {
	const { activePlayerId, autoActions, turnOrder } =
		gameData.gameState.publicState.common;

	const currentPlayerIndex = turnOrder.findIndex((p) => p === activePlayerId);

	gameData.gameState.publicState.common.turnPhase = "before-roll";

	const amusementParkPendingActionIndex = autoActions.findIndex(
		(p) => p.action === "amusement-park" && p.playerId === activePlayerId,
	);

	gameData.gameState.publicState.common.turn =
		gameData.gameState.publicState.common.turn + 1;

	gameData.gameState.publicState.common.turnEvents.push(
		`id:${Date.now()}:Turn ${gameData.gameState.publicState.common.turn}`,
	);

	if (amusementParkPendingActionIndex < 0) {
		const nextPlayerIndex = (currentPlayerIndex + 1) % turnOrder.length;

		gameData.gameState.publicState.common.activePlayerId =
			turnOrder[nextPlayerIndex];

		gameData.gameState.publicState.common.turnEvents.push(
			`id:${Date.now()}:It is %${turnOrder[nextPlayerIndex]}%'s turn`,
		);
	} else {
		autoActions.splice(amusementParkPendingActionIndex, 1);

		gameData.gameState.publicState.common.turnEvents.push(
			`id:${Date.now()}:%${activePlayerId}% gets another turn because of their ${
				landmarkReference.amusementPark.display
			}`,
		);
	}

	trimTurnEvents(gameData.gameState.publicState.common.turnEvents);

	return gameData;
};
