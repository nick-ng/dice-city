import dotenv from "dotenv";
dotenv.config();

import http from "node:http";
import { randomUUID } from "node:crypto";
import express from "express";

import { performAction } from "~common/actions/index.js";

import { getClient, getXReadClient, getGameWorkerKey } from "./redis/index.js";

const INSTANCE_ID = randomUUID();

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const games: string[] = [];

const report = async () => {
  const redis = getClient();

  for (;;) {
    console.log("games", games);
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
