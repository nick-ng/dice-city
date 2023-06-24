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
		harbourExtra,
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

	const diceRoll =
		diceRolls.reduce((accumulator, dieRoll) => accumulator + dieRoll, 0) +
		harbourExtra;

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

			if (!establishment.activationNumbers.includes(diceRoll)) {
				return;
			}

			const establishmentCount = establishments[establishmentKey]?.length || 0;

			if (establishmentCount < 1) {
				return;
			}

			let moneyPerEstablishment = 0;

			switch (establishmentKey) {
				case "bakery": {
					moneyPerEstablishment = haveShoppingMall ? 2 : 1;

					break;
				}
				case "convenienceStore": {
					moneyPerEstablishment = haveShoppingMall ? 4 : 3;

					break;
				}
				case "cheeseFactory": {
					const cowsCount = countTagsInEstablishments(establishments, "cow");

					moneyPerEstablishment = 3 * cowsCount;

					break;
				}
				case "furnitureFactory": {
					const cogCount = countTagsInEstablishments(establishments, "cog");

					moneyPerEstablishment = 3 * cogCount;

					break;
				}
				case "fruitAndVegetableMarket": {
					const wheatCount = countTagsInEstablishments(establishments, "wheat");

					moneyPerEstablishment = 2 * wheatCount;

					break;
				}
				case "flowerShop": {
					const moneyPerFlowerGarden = haveShoppingMall ? 2 : 1;
					const flowerGardenCount = establishments.flowerGarden?.length || 0;

					moneyPerEstablishment = moneyPerFlowerGarden * flowerGardenCount;

					break;
				}
				case "foodWarehouse": {
					const cupCount = countTagsInEstablishments(establishments, "cup");

					moneyPerEstablishment = 2 * cupCount;

					break;
				}
				default:
					console.error(
						"Unknown green establishment",
						establishmentKey,
						establishment
					);

					return;
			}

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
		});

	trimTurnEvents(turnEvents);

	return {
		gameData,
	};
};
