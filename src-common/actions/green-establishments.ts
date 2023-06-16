import type { GameData, EstablishmentList } from "~common/types/index.js";

import { establishmentReference } from "~common/constants/buildings.js";
import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";

const countTagsInEstablishments = (
	establishments: EstablishmentList,
	tag: string
): number => {
	let tagCount = 0;
	const establishmentsEntries = Object.entries(establishments);

	for (let n = 0; n < establishmentsEntries.length; n++) {
		const key = establishmentsEntries[n][0];
		const establishmentDetails = establishmentReference[key];
		if (establishmentDetails?.tag === tag) {
			const establishmentCounts = establishmentsEntries[n][1].length;
			tagCount += establishmentCounts;
		}
	}

	return tagCount;
};

export const greenEstablishmentsAction = (
	gameData: GameData
): { gameData: GameData; error?: string } => {
	const { gameState } = gameData;
	const { publicState } = gameState;
	const {
		diceRolls,
		activePlayerId,
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

	let diceTotal = 0;
	for (let n = 0; n < diceRolls.length; n++) {
		diceTotal += diceRolls[n];
	}

	const activePlayerState = publicState.players[activePlayerId];
	const { city } = activePlayerState;
	const { establishments, landmarks } = city;
	const haveShoppingMall = landmarks.shoppingMall;

	Object.entries(establishmentReference)
		.filter(([_, establishment]) => establishment.colour === "green")
		.forEach(([establishmentKey, establishment]) => {
			if (processedEstablishments.includes(establishmentKey)) {
				return;
			}

			const establishmentCount = establishments[establishmentKey]?.length || 0;

			if (establishmentCount < 1) {
				return;
			}

			switch (establishmentKey) {
				case "bakery":
					if (establishment.activationNumbers.includes(diceTotal)) {
						const moneyPerEstablishment = haveShoppingMall ? 2 : 1;
						const moneyReceived = moneyPerEstablishment * establishmentCount;
						activePlayerState.money += moneyReceived;

						processedEstablishments.push(establishmentKey);

						turnEvents.push(
							`%${activePlayerId}% collected ${moneyReceived} ${
								moneyReceived === 1 ? "coin" : "coins"
							} from the bank - ${establishmentCount} ${
								establishmentCount === 1
									? establishment.display
									: establishment.pluralDisplay
							}`
						);
					}
					break;
				case "convenienceStore":
					if (establishment.activationNumbers.includes(diceTotal)) {
						const moneyPerEstablishment = haveShoppingMall ? 4 : 3;
						const moneyReceived = moneyPerEstablishment * establishmentCount;
						activePlayerState.money += moneyReceived;

						processedEstablishments.push(establishmentKey);

						turnEvents.push(
							`%${activePlayerId}% collected ${moneyReceived} ${
								moneyReceived === 1 ? "coin" : "coins"
							} from the bank - ${establishmentCount} ${
								establishmentCount === 1
									? establishment.display
									: establishment.pluralDisplay
							}`
						);
					}
					break;
				case "cheeseFactory":
					if (establishment.activationNumbers.includes(diceTotal)) {
						const cowsCount = countTagsInEstablishments(establishments, "cow");

						const moneyPerEstablishment = 3 * cowsCount;
						const moneyReceived = moneyPerEstablishment * establishmentCount;
						activePlayerState.money += moneyReceived;

						processedEstablishments.push(establishmentKey);

						turnEvents.push(
							`%${activePlayerId}% collected ${moneyReceived} ${
								moneyReceived === 1 ? "coin" : "coins"
							} from the bank - ${establishmentCount} ${
								establishmentCount === 1
									? establishment.display
									: establishment.pluralDisplay
							}`
						);
					}
					break;
				case "furnitureFactory":
					if (establishment.activationNumbers.includes(diceTotal)) {
						const cogCount = countTagsInEstablishments(establishments, "cog");

						const moneyPerEstablishment = 3 * cogCount;
						const moneyReceived = moneyPerEstablishment * establishmentCount;
						activePlayerState.money += moneyReceived;

						processedEstablishments.push(establishmentKey);

						turnEvents.push(
							`%${activePlayerId}% collected ${moneyReceived} ${
								moneyReceived === 1 ? "coin" : "coins"
							} from the bank - ${establishmentCount} ${
								establishmentCount === 1
									? establishment.display
									: establishment.pluralDisplay
							}`
						);
					}
					break;
				case "fruitAndVegetableMarket":
					if (establishment.activationNumbers.includes(diceTotal)) {
						const cogCount = countTagsInEstablishments(establishments, "wheat");

						const moneyPerEstablishment = 2 * cogCount;
						const moneyReceived = moneyPerEstablishment * establishmentCount;
						activePlayerState.money += moneyReceived;

						processedEstablishments.push(establishmentKey);

						turnEvents.push(
							`%${activePlayerId}% collected ${moneyReceived} ${
								moneyReceived === 1 ? "coin" : "coins"
							} from the bank - ${establishmentCount} ${
								establishmentCount === 1
									? establishment.display
									: establishment.pluralDisplay
							}`
						);
					}
					break;
				default:
					console.info("couldn't handle green establishment", establishmentKey);
			}
		});

	trimTurnEvents(turnEvents);

	return {
		gameData,
	};
};
