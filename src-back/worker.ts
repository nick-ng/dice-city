import dotenv from "dotenv";
dotenv.config();

import http from "node:http";
import { randomUUID } from "node:crypto";
import express from "express";

import { startGameStreamObjectSchema } from "~common/types/schemas/message.js";
import { actionSchema } from "~common/types/schemas/actions.js";
import { performAction } from "~common/actions/index.js";
import { jsonSafeParseS } from "~common/utils/index.js";

import type { GameData } from "~common/types/index.js";

import {
  addXRead,
  getClient,
  getListeners,
  getXReadClient,
  getGameActionKey,
  getGameWorkerKey,
  getGameStateKey,
  getGameId,
} from "./redis/index.js";
import { gameDataSchema } from "~common/types/schemas/game.js";

const INSTANCE_ID = randomUUID();

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const games: { [gameId: string]: GameData } = {};

const gameListenerUUID = addXRead({
  streamKey: "games",
  messageCallback: async ({ message }) => {
    const res = jsonSafeParseS(startGameStreamObjectSchema, message.data);

    if (!res.success) {
      console.error("error when parsing start game stream message", res.error);
      return;
    }

    const { gameId, workerId } = res.data;

    if (workerId !== `worker:${INSTANCE_ID}`) {
      console.log("test", res.data);
      return;
    }

    const redis = getClient();

    const temp = await redis.xRevRange(getGameStateKey(gameId), "+", "-", {
      COUNT: 1,
    });

    if (temp.length === 0) {
      return;
    }

    const gameRes = jsonSafeParseS(gameDataSchema, temp[0]?.message.data);

    if (!gameRes.success) {
      console.error(`couldn't parse game data ${temp[0]?.message.data}`);
      return;
    }

    const { lastActionId } = gameRes.data;
    const actionKey = getGameActionKey(gameId);

    const allListeners = getListeners();

    if (allListeners.map((a) => a.streamKey).includes(actionKey)) {
      console.log("already listening to", actionKey);
      return;
    }

    games[gameId] = gameRes.data;

    // @todo(nick-ng): remove this listener when the game is finished or some time has passed
    addXRead({
      streamKey: getGameActionKey(gameId),
      lastId: lastActionId,
      messageCallback: async (redisStreamData) => {
        const res = jsonSafeParseS(actionSchema, redisStreamData.message.data);

        if (!res.success) {
          console.error("couldn't parse message", res.error);
          return;
        }

        // @todo(nick-ng): account for mutated game state
        const { gameData, error } = performAction(games[gameId], res.data);

        if (error) {
          console.error("error when performing action", error);
          return;
        }

        gameData.lastActionId = redisStreamData.id;

        games[gameId] = gameData;

        getClient().xAdd(getGameStateKey(gameId), "*", {
          data: JSON.stringify(gameData),
        });
      },
    });
  },
});

const report = async () => {
  const redis = getClient();
  for (;;) {
    const allListeners = getListeners();

    const gameIds = allListeners
      .filter((a) => a.streamKey !== "games")
      .map((a) => getGameId(a.streamKey));

    redis.set(`worker:${INSTANCE_ID}`, gameIds.length, {
      EX: 10,
    });

    await sleep(9000);
  }
};

report();

// @todo(nick-ng): check for "orphaned" games when starting up.
const main = async () => {
  for (;;) {
    await sleep(100);
  }
};

main();

console.info(
  new Date().toISOString(),
  "Worker",
  INSTANCE_ID,
  process.env.NODE_ENV,
  process.env.TS_NODE_PROJECT
);
