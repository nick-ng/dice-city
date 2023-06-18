import type { GameData, Action } from "../types/index.js";

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
import {
	amusementParkRollHandler,
	amusementParkTurnHandler,
} from "./amusement-park.js";

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

			amusementParkRollHandler(gameData);

			return allEstablishmentsAction(gameData);
		case "reroll-dice":
			tempResult = rerollDiceAction(gameData, action);

			if (tempResult.error) {
				return tempResult;
			}

			amusementParkRollHandler(gameData);

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

			amusementParkTurnHandler(gameData);

			const { pendingActions } = gameData.gameState.publicState.common;

			if (pendingActions.length > 0) {
				console.error(
					"Unfinished pending actions some how",
					JSON.stringify(pendingActions)
				);

				pendingActions.splice(0, pendingActions.length);
			}

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
