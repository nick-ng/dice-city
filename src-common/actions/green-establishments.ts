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
    const { diceRolls, activePlayerId, processedEstablishments } =
      publicState.common;
    const activePlayerState = publicState.players[activePlayerId];

    const diceTotal = diceRolls.reduce((prev, curr) => prev + curr, 0);

    Object.entries(establishmentReference)
      .filter(([_, establishment]) => establishment.colour === "green")
      .forEach(([establishmentKey, establishment]) => {
        switch (establishmentKey) {
          case "bakery":
            if (establishment.activationNumbers.includes(diceTotal)) {
              const establishmentCount =
                activePlayerState.city.establishments[establishmentKey].length;
              activePlayerState.money += establishmentCount;
              processedEstablishments.push(establishmentKey);
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
