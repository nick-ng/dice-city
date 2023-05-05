import { produce } from "immer";

import type { Action, GameData } from "~common/types/index.js";
import { establishmentReference } from "~common/constants/buildings.js";

export const blueEstablishmentsAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  let error = undefined;
  const newGameData = produce(gameData, (draftGameData) => {
    if (action.type !== "blue-establishments") {
      error = "not blue-establishments";
      return;
    }

    const { isServer } = action;

    if (!isServer) {
      error = "only server can disptach blue-establishments";
      return;
    }

    const { gameState } = draftGameData;
    const { publicState } = gameState;
    const { diceRolls, processedEstablishments, turnEvents } =
      publicState.common;

    const diceTotal = diceRolls.reduce((prev, curr) => prev + curr, 0);

    Object.entries(establishmentReference)
      .filter(([_, establishment]) => establishment.colour === "blue")
      .forEach(([establishmentKey, establishment]) => {
        if (processedEstablishments.includes(establishmentKey)) {
          return;
        }

        let moneyPerEstablishment = 0;
        let singularName = "";
        let pluralName = "";

        switch (establishmentKey) {
          case "wheatField":
            if (establishment.activationNumbers.includes(diceTotal)) {
              moneyPerEstablishment = 1;
              singularName = "wheat field";
              pluralName = "wheat fields";

              processedEstablishments.push(establishmentKey);
            }
            break;
          case "ranch":
            if (establishment.activationNumbers.includes(diceTotal)) {
              moneyPerEstablishment = 1;
              singularName = "ranch";
              pluralName = "ranches";

              processedEstablishments.push(establishmentKey);
            }
            break;
          default:
            console.info(
              "couldn't handle blue establishment",
              establishmentKey
            );
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
              } from the bank through their ${establishmentCount} ${
                establishmentCount === 1 ? singularName : pluralName
              }`
            );
          }
        });
      });
  });

  return {
    gameData: newGameData,
    error,
  };
};
