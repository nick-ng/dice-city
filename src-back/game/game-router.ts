import { Router } from "express";

import type { NewGameResponse } from "~common/types/index.js";

import { newGameRequestSchema } from "../../src-common/types/schemas/message.js";
import { createGameFromHostId } from "../../src-common/other-stuff/game-stuff.js";

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

  // 10 Make a new game
  const newGame = createGameFromHostId(result.data.playerId);

  // 20 Store game in redis
  const stateRedisKey = getGameStateKey(newGame.gameDetails.id);
  await getClient().xAdd(stateRedisKey, "*", { data: JSON.stringify(newGame) });

  // 30 Send game id
  res.json({
    gameId: newGame.gameDetails.id,
  } as NewGameResponse);
});

export default router;
