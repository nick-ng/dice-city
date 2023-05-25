import dotenv from "dotenv";
dotenv.config();

import http from "node:http";
import { randomUUID } from "node:crypto";
import express from "express";

import { startGameStreamObjectSchema } from "~common/types/schemas/message.js";
import { performAction } from "~common/actions/index.js";
import { jsonSafeParseS } from "~common/utils/index.js";

import {
  addXRead,
  getClient,
  getListeners,
  getXReadClient,
  getGameActionKey,
  getGameWorkerKey,
  getGameStateKey,
} from "./redis/index.js";
import { gameDataSchema } from "~common/types/schemas/game.js";

const INSTANCE_ID = randomUUID();

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const games: string[] = [];

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

    console.log("start game", gameId);

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

    let gameData = gameRes.data;

    const { lastActionId } = gameData;

    addXRead({
      streamKey: getGameActionKey(gameId),
      lastId: lastActionId,
      messageCallback: async (data) => {
        console.log("action-received", gameData.gameDetails.id, data);
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
      .map((a) => a.streamKey.replace("game:", "").replace("-action", ""));

    console.log(
      new Date().toISOString(),
      "games",
      allListeners
        .filter((a) => a.streamKey !== "games")
        .map((a) => a.streamKey.replace("game:", "").replace("-action", ""))
    );

    redis.set(`worker:${INSTANCE_ID}`, gameIds.length, {
      EX: 10,
    });

    await sleep(9000);
  }
};

report();

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
