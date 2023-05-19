import dotenv from "dotenv";
dotenv.config();

import express from "express";
import compression from "compression";
import path from "node:path";
import http from "node:http";
import { URL } from "node:url";
import cors from "cors";

import { WebSocketServer } from "ws";

import type { WebSocketServerToClientMessage } from "../dist-common/types/index.js";
import { webSocketClientToServerMessageSchema } from "../dist-common/types/schemas/message.js";

import { createGameFromHostId } from "../dist-common/other-stuff/game-stuff.js";
import GameConductor from "./game/game-conductor.js";
import gameRouter from "./game/game-router.js";

const app = express();
const server = http.createServer(app);

const gameConductors: GameConductor[] = [];

const websocketServer = new WebSocketServer({
  noServer: true, // manually upgrade connections below
  maxPayload: 51200, // 50 KB
});

server.on("upgrade", (request, socket, head) => {
  if (!request.url) {
    socket.destroy();
    return;
  }

  const urlObject = new URL(request.url, "http://home");
  const matches = urlObject.pathname.match(/\/game\/(?<gameId>[0-9a-z-]+)/i);
  const searchParams = urlObject.searchParams;
  const playerId = searchParams.get("playerid");

  if (!matches?.groups?.gameId || !playerId) {
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
