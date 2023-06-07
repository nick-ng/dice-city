import type { Action, GameData } from "~common/types/index.js";
import { establishmentReference } from "~common/constants/buildings.js";

export const blueEstablishmentsAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  if (action.type !== "blue-establishments") {
    return {
      gameData,
      error: "not blue-establishments",
    };
  }

  const { isServer } = action;

  if (!isServer) {
    return {
      gameData,
      error: "only server can disptach blue-establishments",
    };
  }

  const { gameState } = gameData;
  const { publicState } = gameState;
  const { diceRolls, processedEstablishments, turnEvents } = publicState.common;

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
        case "forest":
          if (establishment.activationNumbers.includes(diceTotal)) {
            moneyPerEstablishment = 1;
            singularName = "forest";
            pluralName = "forests";

            processedEstablishments.push(establishmentKey);
          }
          break;
        case "mine":
          if (establishment.activationNumbers.includes(diceTotal)) {
            moneyPerEstablishment = 5;
            singularName = "mine";
            pluralName = "mines";

            processedEstablishments.push(establishmentKey);
          }
          break;
        case "appleOrchard":
          if (establishment.activationNumbers.includes(diceTotal)) {
            moneyPerEstablishment = 3;
            singularName = "apple orchard";
            pluralName = "apple orchards";

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
            } from the bank through their ${establishmentCount} ${
              establishmentCount === 1 ? singularName : pluralName
            }`
          );
        }
      });
    });

  return {
    gameData,
  };
};
