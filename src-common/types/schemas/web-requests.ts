import z from "zod";

export const newGameResponseSchema = z.object({
  gameId: z.string(),
});
