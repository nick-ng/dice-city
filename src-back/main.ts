import dotenv from "dotenv";
dotenv.config();

import express from "express";
import compression from "compression";
import path from "path";
import http from "http";
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
  server,
  maxPayload: 51200, // 50 KB
});

websocketServer.on("connection", (websocketConnection) => {
  websocketConnection.on("message", async (buffer) => {
    let jsonObject = {};

    try {
      jsonObject = JSON.parse(buffer.toString());
    } catch (e) {
      if (e instanceof Error) {
        console.error("error parsing incoming message", e);
      }
    }

    const result = webSocketClientToServerMessageSchema.safeParse(jsonObject);
    if (!result.success) {
      console.error("error!", JSON.stringify(result.error, null, "  "));
      console.log("original websocket buffer", buffer.toString());
    } else {
      const { type } = result.data;

      switch (type) {
        case "connect":
          const { playerId, payload } = result.data;
          const { gameId } = payload;

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
          break;
        default:
          console.info("success", result.data);
      }
    }
  });
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
