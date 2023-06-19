import type { Deck, Supply } from "~common/types/index.js";

import { establishmentReference } from "../constants/buildings.js";

const addCardToSupply = (supply: Supply, cardId: string): void => {
	const cardKey = cardId.split(":")[0];

	if (!supply[cardKey]) {
		supply[cardKey] = [];
	}

	supply[cardKey].push(cardId);
};

export const totalSupply = (
	currentSupply: Supply,
	remainingDeck: Deck
): { supply: Supply; deck: Deck } => {
	while (remainingDeck.length > 0) {
		const cardId = remainingDeck.shift();
		if (!cardId) {
			break;
		}
		addCardToSupply(currentSupply, cardId);
	}

	return {
		supply: currentSupply,
		deck: remainingDeck,
	};
};

export const variableSupply = (
	supply: Supply,
	deck: Deck,
	piles = 10
): { supply: Supply; deck: Deck } => {
	while (Object.values(supply).filter((s) => s.length > 0).length < piles) {
		const cardId = deck.shift();

		if (!cardId) {
			break;
		}

		addCardToSupply(supply, cardId);
	}

	return {
		supply,
		deck,
	};
};

export const hybridSupply = (
	currentSupply: Supply,
	remainingDeck: Deck
): { supply: Supply; deck: Deck } => {
	const lowSupply: Supply = {};
	const highSupply: Supply = {};
	const majorSupply: Supply = {};

	Object.entries(currentSupply).forEach(
		([establishmentKey, establishmentList]) => {
			const establishment = establishmentReference[establishmentKey];

			if (!establishmentReference) {
				throw new Error(`No establishment reference ${establishmentKey}`);
			}

			if (establishment.tag === "major") {
				majorSupply[establishmentKey] = establishmentList;
			} else if (Math.max(...establishment.activationNumbers) <= 6) {
				lowSupply[establishmentKey] = establishmentList;
			} else {
				highSupply[establishmentKey] = establishmentList;
			}
		}
	);

	const lowDeck: string[] = [];
	const highDeck: string[] = [];
	const majorDeck: string[] = [];

	for (let i = 0; i < remainingDeck.length; i++) {
		const [key] = remainingDeck[i].split(":");
		const establishment = establishmentReference[key];

		if (!establishment) {
			console.error("Invalid establishment key", remainingDeck[i]);
			continue;
		}

		if (establishment.tag === "major") {
			majorDeck.push(remainingDeck[i]);
		} else if (Math.max(...establishment.activationNumbers) <= 6) {
			lowDeck.push(remainingDeck[i]);
		} else {
			highDeck.push(remainingDeck[i]);
		}
	}

	variableSupply(lowSupply, lowDeck, 5);
	variableSupply(highSupply, highDeck, 5);
	variableSupply(majorSupply, majorDeck, 2);

	return {
		deck: [...lowDeck, ...highDeck, ...majorDeck],
		supply: {
			...lowSupply,
			...highSupply,
			...majorSupply,
		},
	};
};

// @todo(nick-ng): add hybrid supply
export const getSupply = (
	currentSupply: Supply,
	remainingDeck: Deck,
	supplyStyle: "total" | "variable" | "hybrid" = "hybrid"
) => {
	switch (supplyStyle) {
		case "total":
			return totalSupply(currentSupply, remainingDeck);
		case "variable":
			return variableSupply(currentSupply, remainingDeck);
		case "hybrid":
		default:
			return hybridSupply(currentSupply, remainingDeck);
	}
};
