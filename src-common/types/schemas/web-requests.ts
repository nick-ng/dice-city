import z from "zod";

export const newGameRequestSchema = z.object({
  gameId: z.string(),
});
