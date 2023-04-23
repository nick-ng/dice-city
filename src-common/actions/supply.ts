import { produce } from "immer";

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
  return produce({ supply: currentSupply, deck: remainingDeck }, (s) => {
    while (s.deck.length > 0) {
      const cardId = s.deck.shift();
      if (!cardId) {
        return;
      }
      addCardToSupply(s.supply, cardId);
    }
  });
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
