import type { GameData, EstablishmentList } from "~common/types/index.js";

import { establishmentReference } from "~common/constants/buildings.js";
import {
	getPlayerOrderStartingFromPlayer,
	trimTurnEvents,
} from "~common/other-stuff/browser-safe-stuff.js";

export const purpleEstablishmentsAction = (
	gameData: GameData
): { gameData: GameData; error?: string } => {
	const { gameState } = gameData;
	const { publicState } = gameState;
	const { players: playerStates, common } = publicState;
	const {
		diceRolls,
		activePlayerId,
		processedEstablishments,
		turnEvents,
		turnPhase,
		turnOrder,
		pendingActions,
	} = common;

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

	let nextPhase: GameData["gameState"]["publicState"]["common"]["turnPhase"] =
		"before-build";

	Object.entries(establishmentReference)
		.filter(([_, establishment]) => establishment.colour === "purple")
		.forEach(([establishmentKey, establishment]) => {
			if (processedEstablishments.includes(establishmentKey)) {
				return;
			}

			if (!establishment.activationNumbers.includes(diceTotal)) {
				return;
			}

			const activePlayerState = playerStates[activePlayerId];
			const { city } = activePlayerState;
			const { establishments } = city;
			const establishmentCount = establishments[establishmentKey]?.length || 0;

			switch (establishmentKey) {
				case "stadium":
					if (establishmentCount === 0) {
						return;
					}

					const moneyPerOpponent = 2 * establishmentCount;

					const opponentIds = getPlayerOrderStartingFromPlayer(
						turnOrder,
						activePlayerId,
						false
					);
					for (let i = 0; i < opponentIds.length; i++) {
						const opponentState = playerStates[opponentIds[i]];

						if (opponentState.money === 0) {
							trimTurnEvents(turnEvents);
							turnEvents.push(
								`%${activePlayerId}% couldn't collect any coins from %${
									opponentIds[i]
								}% - ${establishmentCount} ${
									establishmentCount === 1
										? establishment.display
										: establishment.pluralDisplay
								}`
							);
						} else if (opponentState.money < moneyPerOpponent) {
							trimTurnEvents(turnEvents);
							turnEvents.push(
								`%${activePlayerId}% collected ${opponentState.money} ${
									opponentState.money === 1 ? "coin" : "coins"
								} from %${opponentIds[i]}% - ${establishmentCount} ${
									establishmentCount === 1
										? establishment.display
										: establishment.pluralDisplay
								}`
							);

							activePlayerState.money += opponentState.money;
							opponentState.money = 0;
						} else {
							trimTurnEvents(turnEvents);
							turnEvents.push(
								`%${activePlayerId}% collected ${moneyPerOpponent} ${
									moneyPerOpponent === 1 ? "coin" : "coins"
								} from %${opponentIds[i]}% - ${establishmentCount} ${
									establishmentCount === 1
										? establishment.display
										: establishment.pluralDisplay
								}`
							);

							activePlayerState.money += moneyPerOpponent;
							opponentState.money -= moneyPerOpponent;
						}
					}

					break;
				case "tvStation":
					if (establishmentCount > 0) {
						nextPhase = "after-roll";

						pendingActions.push({
							playerId: activePlayerId,
							action: "tv-station",
						});
					}

					break;
				case "businessCentre":
					// @todo(nick-ng): handle business centre
					break;
				default:
					console.error(
						"Unknown purple establishment",
						establishmentKey,
						establishment
					);
					return;
			}

			processedEstablishments.push(establishmentKey);
		});

	common.turnPhase = nextPhase;

	return { gameData };
};
