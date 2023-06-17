import type { GameData, Action } from "../types/index.js";

import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";

import { joinAction } from "./join.js";
import { startAction } from "./start.js";
import { rollDiceAction } from "./roll-dice.js";
import { rerollDiceAction } from "./reroll-dice.js";
import { buildAction } from "./build.js";
import { blueEstablishmentsAction } from "./blue-establishments.js";
import { greenEstablishmentsAction } from "./green-establishments.js";
import { redEstablishmentsAction } from "./red-establishments.js";
import { allEstablishmentsAction } from "./all-establishments.js";
import { tvStationAction } from "./tv-station.js";
import { businessCentreAction } from "./business-centre.js";
import { radioTowerHandler } from "./radio-tower.js";
import { checkVictory } from "./check-victory.js";

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

			if (radioTowerHandler(gameData).requireInput) {
				return { gameData };
			}

			return allEstablishmentsAction(gameData);
		case "reroll-dice":
			tempResult = rerollDiceAction(gameData, action);

			if (tempResult.error) {
				return tempResult;
			}

			return allEstablishmentsAction(gameData);
		case "build":
			tempResult = buildAction(gameData, action);

			if (tempResult.error) {
				return tempResult;
			}

			const { gameData: newGameData, gameOver } = checkVictory(
				tempResult.gameData
			);

			if (gameOver) {
				return { gameData: newGameData };
			}

			// @todo(nick-ng): put these in the build action?
			const turnOrder =
				tempResult.gameData.gameState.publicState.common.turnOrder;
			const activePlayerId =
				tempResult.gameData.gameState.publicState.common.activePlayerId;
			const currentPlayerIndex = turnOrder.findIndex(
				(p) => p === activePlayerId
			);

			// @todo(nick-ng): handle amusement park
			const nextPlayerIndex = (currentPlayerIndex + 1) % turnOrder.length;

			// @todo(nick-ng): better way to advance game state
			tempResult.gameData.gameState.publicState.common.activePlayerId =
				turnOrder[nextPlayerIndex];
			tempResult.gameData.gameState.publicState.common.turnPhase =
				"before-roll";

			tempResult.gameData.gameState.publicState.common.turnEvents.push(
				`It is %${turnOrder[nextPlayerIndex]}%'s turn`
			);

			trimTurnEvents(
				tempResult.gameData.gameState.publicState.common.turnEvents
			);

			// @todo(nick-ng): replenish supply from deck

			return tempResult;
		case "red-establishments":
			return redEstablishmentsAction(gameData);
		case "green-establishments":
			return greenEstablishmentsAction(gameData);
		case "blue-establishments":
			return blueEstablishmentsAction(gameData);
		case "tv-station":
			return tvStationAction(gameData, action);
		case "business-centre":
			return businessCentreAction(gameData, action);
		default:
			console.error("No handler for action", JSON.stringify(action));
			return { gameData, error: "no such action" };
	}
};
