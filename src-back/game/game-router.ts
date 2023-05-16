import { Router } from "express";

import type { NewGameResponse } from "~common/types/index.js";

import { newGameRequestSchema } from "../../dist-common/types/schemas/message.js";
import { createGameFromHostId } from "../../dist-common/other-stuff/game-stuff.js";

import { getClient } from "../redis/index.js";

const router = Router();

router.post("/", async (req, res, _next) => {
  const { body } = req;

  const result = newGameRequestSchema.safeParse(body);

  if (!result.success) {
    res.statusMessage = `bad request. ${JSON.stringify(result.error)}`;
    res.status(400).end();
    return;
  }

  console.log("body", body);
  // 10 Make a new game
  const newGame = createGameFromHostId(result.data.playerId);

  const gameId = newGame.gameDetails.id;
  const stateRedisKey = `game:${gameId}-state`;
  const actionRedisKey = `game:${gameId}-action`;

  // 20 Store game in redis
  await getClient().xAdd(stateRedisKey, "*", { data: JSON.stringify(newGame) });

  // 30 Send game id
  res.json({
    gameId: newGame.gameDetails.id,
  } as NewGameResponse);
});

export default router;
