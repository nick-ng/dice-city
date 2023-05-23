import dotenv from "dotenv";
dotenv.config();

import http from "node:http";
import express from "express";

import { performAction } from "~common/actions/index.js";

import { getClient, getXReadClient } from "./redis/index.js";

const app = express();
const server = http.createServer(app);

app.set("port", 8080);

app.use(express.json());

app.get("/stats", (_req, res) => {
  console.log("/stats");

  res.json({
    games: 0,
  });
});

app.post("/start-game/:id", (req, res) => {
  const { body, params } = req;

  console.log("params", params);
  console.log("body", body);

  res.sendStatus(200);
});

server.listen(app.get("port"), () => {
  console.info(
    new Date().toISOString(),
    "Worker listening on",
    app.get("port"),
    process.env.NODE_ENV,
    process.env.TS_NODE_PROJECT
  );
});
