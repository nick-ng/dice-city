import z from "zod";

import { supplyTypeSchema } from "./game.js";

export const joinSchema = z.object({
	type: z.literal("join"),
	isServer: z.optional(z.literal(false)),
	payload: z.object({
		playerName: z.string(),
	}),
	playerId: z.string(),
	playerPassword: z.string(),
});

export const changeSupplySchema = z.object({
	type: z.literal("change-supply"),
	isServer: z.optional(z.literal(false)),
	payload: z.object({
		supplyType: supplyTypeSchema,
	}),
	playerId: z.string(),
	playerPassword: z.string(),
});

export const startSchema = z.object({
	type: z.literal("start"),
	isServer: z.optional(z.literal(false)),
	payload: z.optional(z.object({})),
	playerId: z.string(),
	playerPassword: z.string(),
});

export const rollSchema = z.object({
	type: z.literal("roll-dice"),
	isServer: z.optional(z.literal(false)),
	payload: z.object({
		diceCount: z.union([z.literal(1), z.literal(2)]),
	}),
	playerId: z.string(),
	playerPassword: z.string(),
});

export const rerollSchema = z.object({
	type: z.literal("reroll-dice"),
	isServer: z.optional(z.literal(false)),
	payload: z.object({
		skip: z.boolean(),
	}),
	playerId: z.string(),
	playerPassword: z.string(),
});

export const harbourChangeRollSchema = z.object({
	type: z.literal("harbour-change-roll"),
	isServer: z.optional(z.literal(false)),
	payload: z.object({
		skip: z.boolean(),
	}),
	playerId: z.string(),
	playerPassword: z.string(),
});

export const establishmentsSchema = z.object({
	playerId: z.optional(z.never()),
	type: z.enum([
		"red-establishments",
		"green-establishments",
		"blue-establishments",
		"purple-establishments",
	]),
	isServer: z.literal(true),
	payload: z.optional(z.any()),
});

export const tvStationSchema = z.object({
	type: z.literal("tv-station"),
	isServer: z.optional(z.literal(false)),
	payload: z.object({
		opponentId: z.string(),
	}),
	playerId: z.string(),
	playerPassword: z.string(),
});

export const businessCentreSchema = z.object({
	type: z.literal("business-centre"),
	isServer: z.optional(z.literal(false)),
	payload: z.object({
		opponentId: z.string(),
		myOffer: z.string(),
		opponentOffer: z.string(),
	}),
	playerId: z.string(),
	playerPassword: z.string(),
});

export const buildEstablishmentSchema = z.object({
	type: z.literal("build"),
	isServer: z.optional(z.literal(false)),
	payload: z.object({
		buildingKey: z.string(),
	}),
	playerId: z.string(),
	playerPassword: z.string(),
});

export const playerActionsSchema = z.union([
	joinSchema,
	changeSupplySchema,
	startSchema,
	rollSchema,
	rerollSchema,
	harbourChangeRollSchema,
	tvStationSchema,
	businessCentreSchema,
	buildEstablishmentSchema,
]);

export const actionSchema = z.union([
	playerActionsSchema,
	establishmentsSchema,
]);
