import z from "zod";
import {} from "./game.js";

export const buildEstablishmentPayloadSchema = z.object({
  establishmentId: z.string(),
});

export const rollPayloadSchema = z.object({
  diceCount: z.union([z.literal(1), z.literal(2)]),
});

export const actionSchema = z.object({
  playerId: z.string(),
  payload: z.union([buildEstablishmentPayloadSchema, rollPayloadSchema]),
});
