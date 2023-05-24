import dotenv from "dotenv";
dotenv.config();

import http from "node:http";
import { randomUUID } from "node:crypto";
import express from "express";

import { performAction } from "~common/actions/index.js";

import {
  addXRead,
  getClient,
  getListeners,
  getXReadClient,
  getGameWorkerKey,
} from "./redis/index.js";

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
  messageCallback: async (data) => {
    console.log("data", data);
  },
});

const report = async () => {
  for (;;) {
    const allListeners = getListeners();
    console.log(
      "games",
      allListeners
        .filter((a) => a.streamKey !== "games")
        .map((a) => a.streamKey.replace("game:", "").replace("-action", ""))
    );
    await sleep(6000);
  }
};

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
