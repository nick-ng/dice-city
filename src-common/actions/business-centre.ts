import type { PlayerAction, GameData } from "~common/types/index.js";

import { establishmentReference } from "~common/constants/buildings.js";
import { trimTurnEvents } from "~common/other-stuff/browser-safe-stuff.js";
import { verifyPassword } from "./verify-password.js";

// @todo(nick-ng): show cards when you hover the buttons.
export const businessCentreAction = (
	gameData: GameData,
	action: PlayerAction,
	skipUpdate = false
): { gameData: GameData; error?: string } => {
	if (action.type !== "business-centre") {
		return {
			gameData,
			error: "not business-centre",
		};
	}

	const { validPassword } = verifyPassword(gameData, action);

	if (!skipUpdate && !validPassword) {
		return {
			gameData,
			error: "Invalid password",
		};
	}

	const { payload } = action;
	const { myOffer, opponentOffer } = payload;

	const { gameState } = gameData;
	const { publicState } = gameState;
	const { common, players: playerStates } = publicState;
	const { activePlayerId, turnEvents, turnPhase, pendingActions } = common;

	if (action.playerId !== activePlayerId) {
		return {
			gameData,
			error: "It isn't your turn.",
		};
	}

	if (turnPhase !== "after-roll") {
		return {
			gameData,
			error: "You only use the Business Centre after rolling the dice.",
		};
	}

	const businessCentreActionIndex = pendingActions.findIndex(
		(p) => p.action === "business-centre" && p.playerId === action.playerId
	);

	if (businessCentreActionIndex < 0) {
		return {
			gameData,
			error: "No pending Business Centre action to do.",
		};
	}

	// skip trading if you don't want to. Japanese version allows you to skip.
	if (action.playerId === payload.opponentId) {
		if (skipUpdate) {
			return {
				gameData,
			};
		}

		pendingActions.splice(businessCentreActionIndex, 1);

		if (pendingActions.length === 0) {
			common.turnPhase = "before-build";

			if (
				playerStates[activePlayerId].city.landmarks.cityHall &&
				playerStates[activePlayerId].money === 0
			) {
				playerStates[activePlayerId].money = 1;

				trimTurnEvents(
					turnEvents,
					`%${activePlayerId}% got 1 coin from their City Hall`
				);
			}
		}

		return {
			gameData,
		};
	}

	const majorEstablishments = Object.values(establishmentReference)
		.filter((e) => e.tag === "major")
		.map((o) => o.key);

	if (
		majorEstablishments.includes(myOffer) ||
		majorEstablishments.includes(opponentOffer)
	) {
		return {
			gameData,
			error: "Cannot trade %%major% establishments",
		};
	}

	const tradableEstablishments = Object.values(establishmentReference)
		.filter((e) => e.tag !== "major")
		.map((o) => o.key);

	if (!tradableEstablishments.includes(myOffer)) {
		return {
			gameData,
			error: "You have to offer one of your non-%%major% establishments.",
		};
	}

	const myEstablishments = playerStates[action.playerId].city.establishments;

	if (!myEstablishments[myOffer] || myEstablishments[myOffer].length === 0) {
		return {
			gameData,
			error: `You don't have any ${establishmentReference[myOffer].pluralDisplay}.`,
		};
	}

	if (!payload.opponentId) {
		return {
			gameData,
			error: "You need to choose an opponent's non-%%major% establishment.",
		};
	}

	const opponentEstablishments =
		playerStates[payload.opponentId].city.establishments;

	if (
		!opponentEstablishments[opponentOffer] ||
		opponentEstablishments[opponentOffer].length === 0
	) {
		return {
			gameData,
			error: `%${payload.opponentId}% doesn't have any ${establishmentReference[opponentOffer].pluralDisplay}.`,
		};
	}

	if (skipUpdate) {
		return {
			gameData,
		};
	}

	const myCard = myEstablishments[myOffer].pop();
	const opponentCard = opponentEstablishments[opponentOffer].pop();

	if (!myCard || !opponentCard) {
		console.error(
			"Something went wrong when performing business centre action",
			myCard,
			opponentCard
		);

		return {
			gameData,
			error: "Something went wrong when performing business centre action",
		};
	}

	if (!Array.isArray(myEstablishments[opponentOffer])) {
		myEstablishments[opponentOffer] = [];
	}

	myEstablishments[opponentOffer].push(opponentCard);

	if (!Array.isArray(opponentEstablishments[myOffer])) {
		opponentEstablishments[myOffer] = [];
	}

	opponentEstablishments[myOffer].push(myCard);

	trimTurnEvents(
		turnEvents,
		`%${action.playerId}% traded their ${establishmentReference[myOffer].display} for %${payload.opponentId}%'s ${establishmentReference[opponentOffer].display} - ${establishmentReference.businessCentre.display}`
	);

	pendingActions.splice(businessCentreActionIndex, 1);

	if (pendingActions.length === 0) {
		common.turnPhase = "before-build";

		if (
			playerStates[activePlayerId].city.landmarks.cityHall &&
			playerStates[activePlayerId].money === 0
		) {
			playerStates[activePlayerId].money = 1;

			trimTurnEvents(
				turnEvents,
				`%${activePlayerId}% got 1 coin from their City Hall`
			);
		}
	}

	return { gameData };
};
