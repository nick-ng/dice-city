import dotenv from "dotenv";
dotenv.config();

import express from "express";
import compression from "compression";
import path from "node:path";
import http from "node:http";
import { URL } from "node:url";
import { randomUUID } from "node:crypto";
import cors from "cors";

import { WebSocketServer } from "ws";

import { getClient } from "./redis/index.js";
import GameConductor from "./game/game-conductor.js";
import gameRouter from "./game/game-router.js";

const app = express();
const server = http.createServer(app);

getClient("default");

const gameConductors: GameConductor[] = [];

setInterval(() => {
  console.log("gameConductors.length", randomUUID(), gameConductors.length);
  console.log(
    gameConductors.map((gc) => `${gc.gameId} (${gc.players.length})`)
  );
}, 7777);

const websocketServer = new WebSocketServer({
  noServer: true, // manually upgrade connections below
  maxPayload: 51200, // 50 KB
});

let lock: string | null = null;

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });

server.on("upgrade", async (request, socket, head) => {
  if (!request.url) {
    socket.destroy();
    return;
  }

  const urlObject = new URL(request.url, "http://home");
  const matches = urlObject.pathname.match(/\/game\/(?<gameId>[0-9a-z-]+)/i);
  const searchParams = urlObject.searchParams;
  const playerId = searchParams.get("playerid");

  while (lock) {
    console.log("locked by", lock);
    await sleep(10);
  }

  lock = playerId;

  if (!matches?.groups?.gameId || !playerId) {
    console.log("bye", request.url);
    socket.destroy();
    return;
  }

  const gameId = matches.groups.gameId;

  websocketServer.handleUpgrade(
    request,
    socket,
    head,
    async (websocketConnection) => {
      const existingGameConductor = gameConductors.find(
        (gameConductor) => gameConductor.gameId === gameId
      );

      if (existingGameConductor) {
        lock = null;
        existingGameConductor.addPlayer(playerId, websocketConnection);
      } else {
        let blankGameConductor = gameConductors.find(
          (gameConductor) => gameConductor.gameId === gameId
        );

        const needNewGameConductor = !blankGameConductor;

        if (needNewGameConductor) {
          blankGameConductor = new GameConductor();
        }

        let tempGameConductor = new GameConductor();
        await tempGameConductor.loadGame(gameId);

        if (tempGameConductor.gameData) {
          tempGameConductor.addPlayer(playerId, websocketConnection);

          if (needNewGameConductor) {
            gameConductors.push(tempGameConductor);
          }
        }
      }
      lock = null;
    }
  );
});

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

app.use("/api/game", gameRouter);

// redirect all other requests to index.html
app.use((_req, res) => {
  res.sendFile(path.resolve(process.cwd(), "dist-front", "index.html"));
});

// starting listening
server.listen(app.get("port"), () => {
  console.info(
    `${new Date().toLocaleTimeString()} Website server listening on ${app.get(
      "port"
    )}.`
  );
});
