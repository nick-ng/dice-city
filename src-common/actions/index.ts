import type { GameData, Action } from "../types/index.js";

import { joinAction } from "./join.js";
import { startAction } from "./start.js";
import { rollDiceAction } from "./roll-dice.js";
import { buildAction } from "./build.js";
import { blueEstablishmentsAction } from "./blue-establishments.js";
import { greenEstablishmentsAction } from "./green-establishments.js";
import { redEstablishmentsAction } from "./red-establishments.js";
import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";

export const performAction = (
	gameData: GameData,
	action: Action
): { gameData: GameData; error?: string } => {
	if (!action.isServer && action.type !== "join") {
		if (!gameData.gameDetails.players.find((p) => p.id === action.playerId)) {
			return {
				gameData,
				error: "you aren't in this game",
			};
		}

		const serverPlayerPassword =
			gameData.playersSecrets[action.playerId]?.password;

		if (
			!serverPlayerPassword ||
			action.playerPassword !== serverPlayerPassword
		) {
			return {
				gameData,
				error: "wrong password",
			};
		}
	}

	// @todo(nick-ng): better way to advance game state i.e. after-roll to before-build
	// @todo(nick-ng): check if a player has all 4 landmarks after building
	let tempResult: { gameData: GameData; error?: string } = { gameData };

	switch (action.type) {
		case "join":
			return joinAction(gameData, action);
		case "start":
			return startAction(gameData, action);
		case "roll-dice":
			tempResult = rollDiceAction(gameData, action);

			if (tempResult.error) {
				return tempResult;
			}

			tempResult = redEstablishmentsAction(gameData);
			if (tempResult.error) {
				console.error("error when auto red-establishments:", tempResult.error);
				return tempResult;
			}

			tempResult = greenEstablishmentsAction(gameData);

			if (tempResult.error) {
				console.error(
					"error when auto green-establishments:",
					tempResult.error
				);
				return tempResult;
			}

			tempResult = blueEstablishmentsAction(gameData);

			if (tempResult.error) {
				console.error("error when auto blue-establishments:", tempResult.error);
				return tempResult;
			}

			// @todo(nick-ng): purple establishments go here

			// @todo(nick-ng): remove once you can handle purple establishments
			tempResult.gameData.gameState.publicState.common.turnPhase =
				"before-build";

			if (tempResult.error) {
				return tempResult;
			}

			return tempResult;
		case "build":
			tempResult = buildAction(gameData, action);

			if (!tempResult.error) {
				// @todo(nick-ng): put these in the build action?
				const turnOrder =
					tempResult.gameData.gameState.publicState.common.turnOrder;
				const activePlayerId =
					tempResult.gameData.gameState.publicState.common.activePlayerId;
				const currentPlayerIndex = turnOrder.findIndex(
					(p) => p === activePlayerId
				);
				const nextPlayerIndex = (currentPlayerIndex + 1) % turnOrder.length;

				tempResult.gameData.gameState.publicState.common.activePlayerId =
					turnOrder[nextPlayerIndex];
				tempResult.gameData.gameState.publicState.common.turnPhase =
					"before-roll";

				trimTurnEvents(
					tempResult.gameData.gameState.publicState.common.turnEvents
				);
				tempResult.gameData.gameState.publicState.common.turnEvents.push(
					`It is %${turnOrder[nextPlayerIndex]}%'s turn`
				);

				// @todo(nick-ng): replenish supply from deck
			}

			return tempResult;
		case "red-establishments":
			return redEstablishmentsAction(gameData);
		case "green-establishments":
			return greenEstablishmentsAction(gameData);
		case "blue-establishments":
			return blueEstablishmentsAction(gameData);
		default:
			console.error("No handler for action", action);
			return { gameData, error: "no such action" };
	}
};
