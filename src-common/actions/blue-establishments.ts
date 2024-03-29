import type { GameData } from "~common/types/index.js";
import { establishmentReference } from "~common/constants/buildings.js";
import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";

import { rollDice } from "~common/actions/roll-dice.js";

export const blueEstablishmentsAction = (
	gameData: GameData
): { gameData: GameData; error?: string } => {
	const { gameState } = gameData;
	const { publicState } = gameState;
	const {
		diceRolls,
		harbourExtra,
		processedEstablishments,
		turnEvents,
		turnPhase,
	} = publicState.common;

	if (turnPhase !== "after-roll") {
		return {
			gameData,
			error: "Red establishments are only processed in the after-roll phase.",
		};
	}

	const diceRoll =
		diceRolls.reduce((accumulator, dieRoll) => accumulator + dieRoll, 0) +
		harbourExtra;

	let shouldExplainTunaBoat = false;
	let tunaBoatRolls: number[] = [];

	Object.entries(establishmentReference)
		.filter(([_, establishment]) => establishment.colour === "blue")
		.forEach(([establishmentKey, establishment]) => {
			if (processedEstablishments.includes(establishmentKey)) {
				return;
			}

			if (!establishment.activationNumbers.includes(diceRoll)) {
				return;
			}

			let moneyPerEstablishment = 0;
			let needHarbour = false;

			switch (establishmentKey) {
				case "wheatField": {
					moneyPerEstablishment = 1;

					break;
				}
				case "ranch": {
					moneyPerEstablishment = 1;

					break;
				}
				case "forest": {
					moneyPerEstablishment = 1;

					break;
				}
				case "mine": {
					moneyPerEstablishment = 5;

					break;
				}
				case "appleOrchard": {
					moneyPerEstablishment = 3;

					break;
				}
				case "flowerGarden": {
					moneyPerEstablishment = 1;

					break;
				}
				case "mackerelBoat": {
					moneyPerEstablishment = 3;
					needHarbour = true;

					break;
				}
				case "tunaBoat": {
					tunaBoatRolls = rollDice(2);

					const diceRoll = tunaBoatRolls.reduce(
						(accumulator, roll) => accumulator + roll,
						0
					);

					shouldExplainTunaBoat = true;

					moneyPerEstablishment = diceRoll;

					break;
				}
				default: {
					console.info("couldn't handle blue establishment", establishmentKey);

					return;
				}
			}

			processedEstablishments.push(establishmentKey);

			if (moneyPerEstablishment === 0) {
				return;
			}

			Object.values(publicState.players).forEach((player) => {
				const { city } = player;
				const { establishments, landmarks } = city;
				const establishmentCount =
					establishments[establishmentKey]?.length || 0;

				if (establishmentCount < 1) {
					return;
				}

				if (needHarbour && !landmarks.harbour) {
					return;
				}

				const moneyReceived = establishmentCount * moneyPerEstablishment;
				player.money += moneyReceived;

				if (moneyReceived > 0) {
					if (shouldExplainTunaBoat) {
						turnEvents.push(
							`id:${Date.now()}:Rolled ${tunaBoatRolls.join(
								" + "
							)} = ${moneyPerEstablishment} for Tuna Boats`
						);

						shouldExplainTunaBoat = false;
					}

					turnEvents.push(
						`id:${Date.now()}:%${player.playerId}% collected ${moneyReceived} ${
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
