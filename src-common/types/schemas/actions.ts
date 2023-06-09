import z from "zod";

export const joinSchema = z.object({
	type: z.literal("join"),
	isServer: z.optional(z.literal(false)),
	payload: z.object({
		playerName: z.string(),
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

export const establishmentsSchema = z.object({
	playerId: z.optional(z.never()),
	type: z.enum(["green-establishments", "blue-establishments"]),
	isServer: z.literal(true),
	payload: z.optional(z.any()),
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
	startSchema,
	rollSchema,
	buildEstablishmentSchema,
]);

export const actionSchema = z.union([
	playerActionsSchema,
	establishmentsSchema,
]);
