import z from "zod";

const tags = z.enum([
	"major",
	"cup",
	"bread",
	"wheat",
	"cow",
	"cog",
	"factory",
	"fruit",
]);

const colour = z.enum(["blue", "green", "red", "purple"]);

export const landmarkSchema = z.object({
	key: z.string(),
	display: z.string(),
	tag: tags,
	picture: z.array(z.string()),
	cost: z.number(),
	effect: z.string(),
});

const establishmentOnly = z.object({
	colour,
	activationNumbers: z.array(z.number()),
	pluralDisplay: z.string(),
});

export const establishmentSchema = landmarkSchema.merge(establishmentOnly);

export const establishmentListSchema = z.record(
	z.string(),
	z.array(z.string())
);

export const supplySchema = z.record(z.string(), z.array(z.string()));

export const buildingSchema = landmarkSchema.merge(establishmentOnly.partial());

export const deckSchema = z.array(z.string());

export const citySchema = z.object({
	establishments: establishmentListSchema,
	landmarks: z.record(z.string(), z.boolean()),
});

export const playerSchema = z.object({
	id: z.string(),
	name: z.string(),
});

export const playerSecretsSchema = z.object({
	password: z.string(),
});

const publicStateSchema = z.object({
	common: z.object({
		supply: establishmentListSchema,
		turnOrder: z.array(z.string()),
		activePlayerId: z.string(),
		turnPhase: z.enum([
			"lobby",
			"before-roll",
			"after-roll",
			"before-build",
			"after-build",
			"end",
		]),
		pendingActions: z.array(
			z.object({
				playerId: z.string(),
				action: z.enum([
					"tv-station",
					"business-centre",
					"radio-tower",
					"amusement-park",
				]),
			})
		),
		diceRolls: z.array(z.number()),
		processedEstablishments: z.array(z.string()),
		turnEvents: z.array(z.string()),
	}),
	players: z.record(
		z.string(),
		z.object({
			playerId: z.string(),
			city: citySchema,
			money: z.number(),
		})
	),
});

const secretStateSchema = z.object({
	common: z.object({
		deck: z.array(z.string()),
	}),
});

export const gameDetailsSchema = z.object({
	id: z.string(),
	players: z.array(playerSchema),
	hostId: z.string(),
	shortId: z.optional(z.string()),
	isPublic: z.optional(z.boolean()),
});

export const supplyTypeSchema = z.enum(["total", "variable", "hybrid"]);

export const gameSettingsSchema = z.object({
	landmarks: z.array(z.string()),
	timeLimitSeconds: z.number(),
	timeLimitType: z.enum(["off", "on"]),
	startingMoney: z.number(),
	supplyType: supplyTypeSchema,
});

export const gameStateSchema = z.object({
	publicState: publicStateSchema,
	secretState: secretStateSchema,
});

export const playerGameStateSchema = z.object({
	publicState: publicStateSchema,
	secretState: secretStateSchema.omit({ common: true }),
});

export const gameDataSchema = z.object({
	gameDetails: gameDetailsSchema,
	gameSettings: gameSettingsSchema,
	gameState: gameStateSchema,
	playersSecrets: z.record(z.string(), playerSecretsSchema),
	lastActionId: z.string(),
});
