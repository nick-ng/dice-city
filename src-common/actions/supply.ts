import type { Deck, Supply } from "~common/types/index.js";

const addCardToSupply = (supply: Supply, cardId: string): void => {
	const cardKey = cardId.split(":")[0];

	if (!supply[cardKey]) {
		supply[cardKey] = [cardId];
	} else {
		supply[cardKey] = [...supply[cardKey], cardId];
	}
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

export const getSupply = (
	currentSupply: Supply,
	remainingDeck: Deck,
	supplyStyle: "total" | "hybrid" = "hybrid"
) => {
	switch (supplyStyle) {
		case "hybrid":
		case "total":
		default:
			return totalSupply(currentSupply, remainingDeck);
	}
};
