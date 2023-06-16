import type { GameData } from "~common/types/index.js";
import { establishmentReference } from "~common/constants/buildings.js";
import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";

export const blueEstablishmentsAction = (
	gameData: GameData
): { gameData: GameData; error?: string } => {
	const { gameState } = gameData;
	const { publicState } = gameState;
	const { diceRolls, processedEstablishments, turnEvents, turnPhase } =
		publicState.common;

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

	Object.entries(establishmentReference)
		.filter(([_, establishment]) => establishment.colour === "blue")
		.forEach(([establishmentKey, establishment]) => {
			if (processedEstablishments.includes(establishmentKey)) {
				return;
			}

			let moneyPerEstablishment = 0;

			switch (establishmentKey) {
				case "wheatField":
					// @todo(nick-ng): check dice activation numbers once before the switch statement
					if (establishment.activationNumbers.includes(diceTotal)) {
						moneyPerEstablishment = 1;

						processedEstablishments.push(establishmentKey);
					}
					break;
				case "ranch":
					if (establishment.activationNumbers.includes(diceTotal)) {
						moneyPerEstablishment = 1;

						processedEstablishments.push(establishmentKey);
					}
					break;
				case "forest":
					if (establishment.activationNumbers.includes(diceTotal)) {
						moneyPerEstablishment = 1;

						processedEstablishments.push(establishmentKey);
					}
					break;
				case "mine":
					if (establishment.activationNumbers.includes(diceTotal)) {
						moneyPerEstablishment = 5;

						processedEstablishments.push(establishmentKey);
					}
					break;
				case "appleOrchard":
					if (establishment.activationNumbers.includes(diceTotal)) {
						moneyPerEstablishment = 3;

						processedEstablishments.push(establishmentKey);
					}
					break;
				default:
					console.info("couldn't handle blue establishment", establishmentKey);
					return;
			}

			if (moneyPerEstablishment === 0) {
				return;
			}

			Object.values(publicState.players).forEach((player) => {
				const { city } = player;
				const { establishments } = city;
				const establishmentCount =
					establishments[establishmentKey]?.length || 0;

				if (establishmentCount < 1) {
					return;
				}

				const moneyReceived = establishmentCount * moneyPerEstablishment;
				player.money += moneyReceived;

				if (moneyReceived > 0) {
					turnEvents.push(
						`%${player.playerId}% collected ${moneyReceived} ${
							moneyReceived === 1 ? "coin" : "coins"
						} from the bank - ${establishmentCount} ${
							establishmentCount === 1
								? establishment.display
								: establishment.pluralDisplay
						}`
					);
					trimTurnEvents(turnEvents);
				}
			});
		});

	return {
		gameData,
	};
};
