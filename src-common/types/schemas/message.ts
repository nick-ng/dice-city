import z from "zod";

import { playerGameDataSchema } from "./game.js";

export const newGameResponseSchema = z.object({
  gameId: z.string(),
});

export const webSocketServerToClientNotFoundMessageSchema = z.object({
  type: z.literal("not-found"),
});

export const webSocketServerToClientGameDataMessageSchema = z.object({
  type: z.literal("game-data"),
  payload: z.object({
    playerGameData: playerGameDataSchema,
    latency: z.optional(z.number()),
  }),
});

export const webSocketServerToClientPingMessageSchema = z.object({
  type: z.literal("ping"),
  payload: z.optional(
    z.object({
      latency: z.optional(z.number()),
    })
  ),
});

export const webSocketServerToClientMessageSchema = z.union([
  webSocketServerToClientNotFoundMessageSchema,
  webSocketServerToClientGameDataMessageSchema,
  webSocketServerToClientPingMessageSchema,
]);
