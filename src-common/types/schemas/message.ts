import z from "zod";

import { playerActionsSchema } from "./actions.js";
import { playerGameDataSchema } from "./game.js";

export const newGameRequestSchema = z.object({
  playerId: z.string(),
});

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

export const webSocketClientToServerPingMessageSchema = z.object({
  type: z.literal("pong"),
});

export const webSocketClientToServerConnectMessageSchema = z.object({
  type: z.literal("connect"),
  payload: z.object({
    gameId: z.string(),
  }),
});

export const webSocketClientToServerMessageSchema = z.intersection(
  z.union([
    webSocketClientToServerPingMessageSchema,
    webSocketClientToServerConnectMessageSchema,
    playerActionsSchema,
  ]),
  z.object({
    playerId: z.string(),
    playerPassword: z.string(),
  })
);

export const startGameStreamObjectSchema = z.object({
  gameId: z.string(),
  workerId: z.string(),
});
