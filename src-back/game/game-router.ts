import http from "node:http";

import { Router } from "express";

import type { NewGameResponse } from "~common/types/index.js";

import { newGameRequestSchema } from "~common/types/schemas/message.js";
import { createGameFromHostId } from "~common/other-stuff/game-stuff.js";

import { getClient, getGameStateKey } from "../redis/index.js";

const gameWorkers: string[] = [];

const checkWorkers = async () => {
  for (let i = 1; i < 1000; i++) {
    try {
      const a = new Promise((resolve, reject) => {
        try {
          http.get(`http://worker:8080/stats`, (res) => {
            let data = "";
            res.on("data", (chunk) => {
              data += chunk;
            });

            res.on("end", () => {
              resolve(data);
            });

            res.on("error", () => {
              reject("something went wrong");
            });
          });
        } catch (e) {
          console.log(e);
          reject(e);
        }
      });

      console.log("a", await a);
      break;
    } catch (e) {
      console.log("e", e);
    }
  }
};

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

  checkWorkers();
});

export default router;
