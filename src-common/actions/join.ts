import type { Action, GameData } from "~common/types/index.js";

const MAX_PLAYERS = 5;

export const joinAction = (
	gameData: GameData,
	action: Action,
	skipUpdate = false
): { gameData: GameData; error?: string } => {
	if (action.type !== "join") {
		return {
			gameData,
			error: "not join",
		};
	}

	const { payload, playerId, playerPassword } = action;
	const { playerName } = payload;

	if (!playerName) {
		return {
			gameData,
			error: "You need to enter a name in the top left corner",
		};
	}

	if (!playerId || !playerPassword) {
		return {
			gameData,
			error: "missing player info",
		};
	}

	const { gameState, playersSecrets, gameDetails } = gameData;
	const { publicState } = gameState;
	const { common } = publicState;

	if (common.turnPhase !== "lobby") {
		return {
			gameData,
			error: "can only join a game that is in the lobby phase",
		};
	}

	if (gameDetails.players.find((p) => p.id === playerId)) {
		return {
			gameData,
			error: "You are already in this game",
		};
	}

	if (gameDetails.players.length >= MAX_PLAYERS) {
		return {
			gameData,
			error: "The game is full",
		};
	}

	if (skipUpdate) {
		return {
			gameData,
		};
	}

	gameDetails.players.push({
		id: playerId,
		name: playerName,
	});

	playersSecrets[playerId] = { password: playerPassword };

	publicState.players[playerId] = {
		playerId,
		city: {
			landmarks: {},
			establishments: {},
		},
		money: 0,
	};

	return { gameData };
};
