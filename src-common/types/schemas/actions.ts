import z from "zod";

const playerId = z.string();

export const buildEstablishmentSchema = z.object({
  playerId,
  type: z.literal("build"),
  isServer: z.optional(z.literal(false)),
  payload: z.object({
    buildingKey: z.string(),
  }),
});

export const rollSchema = z.object({
  playerId,
  type: z.literal("roll-dice"),
  isServer: z.optional(z.literal(false)),
  payload: z.object({
    diceCount: z.union([z.literal(1), z.literal(2)]),
  }),
});

export const establishmentsSchema = z.object({
  playerId: z.optional(z.never()),
  type: z.enum(["green-establishments", "blue-establishments"]),
  isServer: z.literal(true),
  payload: z.optional(z.any()),
});

export const actionSchema = z.union([
  buildEstablishmentSchema,
  rollSchema,
  establishmentsSchema,
]);
