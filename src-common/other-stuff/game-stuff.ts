import { randomUUID } from "node:crypto";

import type { GameData } from "~common/types/index.js";

// @todo(nick-ng): time limit on turns
export const createGameFromHostId = (
	hostId: string,
	hostName: string,
	hostPassword: string,
): GameData => {
	const gameId = randomUUID();
	return {
		gameDetails: {
			hostId,
			id: gameId,
			players: [
				{
					id: hostId,
					name: hostName,
				},
			],
			isPublic: false,
		},
		gameSettings: {
			landmarks: [
				"radioTower",
				"amusementPark",
				"shoppingMall",
				"trainStation",
				"harbour",
				"cityHall",
				"airport",
			],
			timeLimitSeconds: 999,
			timeLimitType: "off",
			startingMoney: 3,
			supplyType: "hybrid",
		},
		gameState: {
			publicState: {
				common: {
					turn: 0,
					activePlayerId: "",
					diceRolls: [],
					harbourExtra: 0,
					processedEstablishments: [],
					supply: {},
					turnEvents: [],
					turnPhase: "lobby",
					turnOrder: [],
					pendingActions: [],
					autoActions: [],
				},
				players: {
					[hostId]: {
						playerId: hostId,
						city: {
							landmarks: {},
							establishments: {},
						},
						money: 0,
					},
				},
			},
			secretState: {
				common: { deck: [] },
			},
		},
		lastActionId: `${Date.now()}-0`,
		playersSecrets: {
			[hostId]: { password: hostPassword },
		},
	};
};

export const getPlayerGameData = (gameData: GameData): GameData => {
	return {
		gameDetails: gameData.gameDetails,
		gameSettings: gameData.gameSettings,
		gameState: {
			publicState: gameData.gameState.publicState,
			secretState: {
				common: { deck: [] },
			},
		},
		lastActionId: "",
		playersSecrets: {},
	};
};
