import type { GameData } from "~common/types/index.js";

export const radioTowerHandler = (
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

	if (city.landmarks.radioTower) {
		pendingActions.push({
			playerId: activePlayerId,
			action: "radio-tower",
		});

		common.turnPhase = "after-roll";

		return { gameData, requireInput: true };
	}

	return { gameData, requireInput: false };
};
