import type { GameData } from "~common/types/index.js";

import { establishmentReference } from "~common/constants/buildings.js";
import {
	getPlayerOrderStartingFromPlayer,
	trimTurnEvents,
} from "~common/other-stuff/browser-safe-stuff.js";

export const redEstablishmentsAction = (
	gameData: GameData
): { gameData: GameData; error?: string } => {
	const { gameState } = gameData;
	const { publicState } = gameState;
	const { players: playerStates, common } = publicState;
	const {
		diceRolls,
		activePlayerId,
		processedEstablishments,
		turnEvents,
		turnPhase,
		turnOrder,
	} = common;

	if (turnPhase !== "after-roll") {
		return {
			gameData,
			error: "Red establishments are only processed in the after-roll phase.",
		};
	}

	let diceTotal = 0;
	for (let n = 0; n < diceRolls.length; n++) {
		diceTotal += diceRolls[n];
	}

	const otherPlayerIds = getPlayerOrderStartingFromPlayer(
		turnOrder,
		activePlayerId,
		false
	);

	Object.entries(establishmentReference)
		.filter(([_, establishment]) => establishment.colour === "red")
		.forEach(([establishmentKey, establishment]) => {
			if (processedEstablishments.includes(establishmentKey)) {
				return;
			}

			if (!establishment.activationNumbers.includes(diceTotal)) {
				return;
			}

			let moneyPerEstablishment = 0;
			let shoppingMallExtra = 0;

			switch (establishmentKey) {
				case "cafe":
					moneyPerEstablishment = 1;
					shoppingMallExtra = 1;

					break;
				case "familyRestaurant":
					moneyPerEstablishment = 2;
					shoppingMallExtra = 1;

					break;
				default:
					console.error(
						"Unknown red establishment",
						establishmentKey,
						establishment
					);
					return;
			}

			const activePlayerState = playerStates[activePlayerId];

			otherPlayerIds.forEach((otherPlayerId) => {
				const otherPlayerState = playerStates[otherPlayerId];
				const { city } = otherPlayerState;
				const { establishments, landmarks } = city;

				const establishmentCount =
					establishments[establishmentKey]?.length || 0;

				if (establishmentCount === 0) {
					return;
				}

				let moneyPer = moneyPerEstablishment;
				if (landmarks.shoppingMall) {
					moneyPer += shoppingMallExtra;
				}

				const totalMoney = moneyPer * establishmentCount;

				if (activePlayerState.money === 0) {
					trimTurnEvents(turnEvents);
					turnEvents.push(
						`%${otherPlayerId}% couldn't collect any coins from %${activePlayerId}% - ${establishmentCount} ${
							establishmentCount === 1
								? establishment.display
								: establishment.pluralDisplay
						}`
					);

					return;
				}

				if (activePlayerState.money < totalMoney) {
					trimTurnEvents(turnEvents);
					turnEvents.push(
						`%${otherPlayerId}% collected ${activePlayerState.money} ${
							activePlayerState.money === 1 ? "coin" : "coins"
						} from %${activePlayerId}% - ${establishmentCount} ${
							establishmentCount === 1
								? establishment.display
								: establishment.pluralDisplay
						}`
					);

					otherPlayerState.money += activePlayerState.money;
					activePlayerState.money = 0;
				} else {
					trimTurnEvents(turnEvents);
					turnEvents.push(
						`%${otherPlayerId}% collected ${totalMoney} ${
							totalMoney === 1 ? "coin" : "coins"
						} from %${activePlayerId}% - ${establishmentCount} ${
							establishmentCount === 1
								? establishment.display
								: establishment.pluralDisplay
						}`
					);

					otherPlayerState.money += totalMoney;
					activePlayerState.money -= totalMoney;
				}
			});

			processedEstablishments.push(establishmentKey);
		});

	return { gameData };
};
