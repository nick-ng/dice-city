import { produce } from "immer";

import type { Action, GameData } from "~common/types/index.js";
import { establishmentReference } from "~common/constants/buildings.js";

export const greenEstablishmentsAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  let error = undefined;
  const newGameData = produce(gameData, (draftGameData) => {
    if (action.type !== "green-establishments") {
      error = "not green-establishments";
      return;
    }

    const { isServer } = action;

    if (!isServer) {
      error = "only server can disptach green-establishments";
      return;
    }

    const { gameState } = draftGameData;
    const { publicState } = gameState;
    const { diceRolls, activePlayerId, processedEstablishments, turnEvents } =
      publicState.common;
    const activePlayerState = publicState.players[activePlayerId];

    const diceTotal = diceRolls.reduce((prev, curr) => prev + curr, 0);

    const { city } = activePlayerState;
    const { establishments, landmarks } = city;
    const haveShoppingMall = landmarks.shoppingMall;

    Object.entries(establishmentReference)
      .filter(([_, establishment]) => establishment.colour === "green")
      .forEach(([establishmentKey, establishment]) => {
        if (processedEstablishments.includes(establishmentKey)) {
          return;
        }

        const establishmentCount =
          establishments[establishmentKey]?.length || 0;

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
                } from the bank through their ${
                  establishmentCount === 1 ? "bakery" : "bakeries"
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
                } from the bank through their convenience ${
                  establishmentCount === 1 ? "store" : "stores"
                }`
              );
            }
            break;
          default:
            console.info(
              "couldn't handle green establishment",
              establishmentKey
            );
        }
      });
  });

  return {
    gameData: newGameData,
    error,
  };
};
