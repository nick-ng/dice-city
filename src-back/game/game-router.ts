import { Router } from "express";

import type { NewGameResponse } from "~common/types/index.js";

import { newGameRequestSchema } from "~common/types/schemas/message.js";
import { createGameFromHostId } from "~common/other-stuff/game-stuff.js";

import { getClient, getGameStateKey } from "../redis/index.js";

const router = Router();

router.post("/", async (req, res, _next) => {
  const { body } = req;

  const result = newGameRequestSchema.safeParse(body);

  if (!result.success) {
    res.statusMessage = `bad request. ${JSON.stringify(result.error)}`;
    res.status(400).end();
    return;
  }

  const newGame = createGameFromHostId(result.data.playerId);

  const stateRedisKey = getGameStateKey(newGame.gameDetails.id);
  await getClient().xAdd(stateRedisKey, "*", { data: JSON.stringify(newGame) });

  res.json({
    gameId: newGame.gameDetails.id,
  } as NewGameResponse);
});

export default router;
