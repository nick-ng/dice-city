import dotenv from "dotenv";
dotenv.config();

import express from "express";
import compression from "compression";
import path from "path";
import http from "http";
import cors from "cors";

import gameRouter from "./game/game-router";
import GameWebSocketServer from "./game/game-websocket";
import { streamHelper } from "./game/game-redis";
import { checkStats } from "./game/game-server";

const app = express();
const server = http.createServer(app);

new GameWebSocketServer(
  {
    server,
    maxPayload: 51200, // 50 KB
  },
  streamHelper
);

const port = process.env.PORT || 8080;
app.set("port", port);

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(compression());
app.use(express.json());

app.get("/api/server-stats", async (_req, res) => {
  try {
    res.json(await checkStats());
  } catch (e) {
    res.sendStatus(500);
  }
});

app.use("/api/game", gameRouter);

// serve static files
app.use(express.static(path.resolve(process.cwd(), "dist-front")));
app.use(express.static(path.resolve(process.cwd(), "static")));

if (process.env.NODE_ENV !== "production") {
  console.info("Dev environment");
  app.use(express.static(path.resolve(process.cwd(), "dev-tools")));
}

app.get("/server-stats", (_req, res) => {
  res.sendFile(path.resolve(process.cwd(), "other-html", "server-stats.html"));
});

// redirect all other requests to index.html
app.use((_req, res) => {
  res.sendFile(path.resolve(process.cwd(), "static", "index.html"));
});

// starting listening
server.listen(app.get("port"), () => {
  console.info(
    `${new Date().toLocaleTimeString()} Website server listening on ${app.get(
      "port"
    )}.`
  );
});
