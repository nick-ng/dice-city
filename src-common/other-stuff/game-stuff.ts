import { randomUUID } from "node:crypto";

import type { GameData } from "~common/types/index.js";

export const createGameFromHostId = (
	hostId: string,
	hostName: string,
	hostPassword: string
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
			],
			timeLimitSeconds: 999,
			timeLimitType: "off",
			startingMoney: 3,
		},
		gameState: {
			publicState: {
				common: {
					activePlayerId: "",
					diceRolls: [],
					processedEstablishments: [],
					supply: {},
					turnEvents: [],
					turnPhase: "lobby",
					turnOrder: [],
					pendingActions: [],
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
				common: {
					deck: [],
				},
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
				common: {
					deck: [],
				},
			},
		},
		lastActionId: "",
		playersSecrets: {},
	};
};
