import z from "zod";

const playerId = z.string();

export const buildEstablishmentSchema = z.object({
  playerId,
  type: z.literal("build-establishment"),
  payload: z.object({
    establishmentKey: z.string(),
  }),
});

export const rollSchema = z.object({
  playerId,
  type: z.literal("roll-dice"),
  payload: z.object({
    diceCount: z.union([z.literal(1), z.literal(2)]),
  }),
});

export const actionSchema = z.union([buildEstablishmentSchema, rollSchema]);
