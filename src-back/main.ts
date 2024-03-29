import dotenv from "dotenv";
dotenv.config();

import path from "node:path";
import http from "node:http";
import { URL } from "node:url";
import { randomUUID } from "node:crypto";

import express from "express";
import compression from "compression";
import cors from "cors";
import { WebSocketServer } from "ws";

import { cookieParse } from "~common/utils/index.js";

import { getClient } from "./redis/index.js";
import GameConductor from "./game/game-conductor.js";
import gameRouter from "./game/game-router.js";

const INSTANCE_ID = randomUUID();

const app = express();
const server = http.createServer(app);

getClient();

const gameConductors: GameConductor[] = [];

if (process.env.NODE_ENV === "development") {
	let prevLog = "";

	setInterval(() => {
		const newLog = `${INSTANCE_ID.slice(0, 8)} gameConductors.length: ${
			gameConductors.length
		}
  ${gameConductors
		.map(
			(gc) =>
				`${gc.gameId?.slice(0, 8)} (${gc.players
					.map((p) => p.playerId.slice(0, 8))
					.join(", ")})`
		)
		.join("\n  ")}`;

		if (newLog !== prevLog) {
			prevLog = newLog;
			console.debug(newLog);
		}
	}, 99);
}

const websocketServer = new WebSocketServer({
	noServer: true, // manually upgrade connections below
	maxPayload: 51200, // 50 KB
});

const locks: { [key: string]: boolean } = {};

const sleep = (ms: number) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(null);
		}, ms);
	});

server.on("upgrade", (request, socket, head) => {
	if (!request.url) {
		socket.destroy();
		return;
	}

	const urlObject = new URL(request.url, "http://home");
	const matches = urlObject.pathname.match(/\/game\/(?<gameId>[0-9a-z-]+)/i);
	const cookies = cookieParse(request.headers.cookie);

	const playerId = cookies?.dicecityplayerid;

	if (!matches?.groups?.gameId || !playerId) {
		console.debug(
			"Not enough information to connect to websocket",
			request.url
		);
		console.debug("matches", JSON.stringify(matches, null, "  "));
		console.debug("cookies", cookies);

		socket.destroy();
		return;
	}

	const gameId = matches.groups.gameId;

	websocketServer.handleUpgrade(
		request,
		socket,
		head,
		async (websocketConnection) => {
			while (locks[gameId]) {
				console.info(locks[gameId], "is locked");
				await sleep(100);
			}

			locks[gameId] = true;

			const existingGameConductor = gameConductors.find(
				(gameConductor) => gameConductor.gameId === gameId
			);

			if (existingGameConductor) {
				locks[gameId] = false;
				existingGameConductor.addPlayer(playerId, websocketConnection);
			} else {
				let blankGameConductor = gameConductors.find(
					(gameConductor) => !gameConductor.gameId
				);

				const needNewGameConductor = !blankGameConductor;

				if (!blankGameConductor) {
					blankGameConductor = new GameConductor();
				}

				await blankGameConductor.loadGame(gameId);

				if (blankGameConductor.gameData) {
					blankGameConductor.addPlayer(playerId, websocketConnection);

					if (needNewGameConductor) {
						gameConductors.push(blankGameConductor);
					}
				}
			}

			console.debug(
				new Date().toISOString(),
				"gameConductors.length",
				gameConductors.length
			);

			locks[gameId] = false;
		}
	);
});

websocketServer.on("error", (error) => {
	console.error("WebSocket Error", error);
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
		new Date().toISOString(),
		"Web server listening on",
		app.get("port")
	);
});
