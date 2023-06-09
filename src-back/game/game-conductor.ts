import { randomUUID } from "node:crypto";
import { WebSocket as WebSocketType } from "ws";

import type {
	GameData,
	WebSocketServerToClientMessage,
	StartGameStreamObject,
} from "~common/types/index.js";

import { gameDataSchema } from "~common/types/schemas/game.js";
import { webSocketClientToServerMessageSchema } from "~common/types/schemas/message.js";
import { jsonSafeParseS } from "~common/utils/index.js";
import { getPlayerGameData } from "~common/other-stuff/game-stuff.js";

import {
	getClient as getRedisClient,
	getGameStateKey,
	getGameActionKey,
	addXRead,
	xAddExpire,
} from "../redis/index.js";

/**
 * Handles websocket stuff for a game
 */
export default class GameConductor {
	gameId: string | null;
	gameData: GameData | null;
	players: {
		uuid: string;
		playerId: string;
		socket: WebSocketType;
		lastPing: number;
		latency: number;
		pingCounter: number;
	}[];

	constructor() {
		this.gameId = null;
		this.gameData = null;
		this.players = [];
	}

	async loadGame(gameId: string) {
		if (gameId !== this.gameId) {
			this.players = [];
		}

		const redis = getRedisClient();

		const temp = await redis.xRevRange(getGameStateKey(gameId), "+", "-", {
			COUNT: 1,
		});

		if (temp.length === 0) {
			return false;
		}

		const { message } = temp[0];

		const res = jsonSafeParseS(gameDataSchema, message.data);

		if (!res.success) {
			console.error(`couldn't parse game data ${message.data}`);
			return false;
		}

		this.gameId = gameId;
		this.gameData = res.data;

		const workers = [];
		for await (const key of redis.scanIterator({
			MATCH: "worker:*",
		})) {
			const tempGameCount = await redis.get(key);
			workers.push({
				id: key,
				gameCount: tempGameCount ? parseInt(tempGameCount, 10) : 0,
			});
		}

		if (workers.length === 0) {
			console.error(`no workers!?`);
			return false;
		}

		workers.sort((a, b) => a.gameCount - b.gameCount);

		const startGameMessage: StartGameStreamObject = {
			gameId: this.gameId,
			workerId: workers[0].id,
		};

		redis.xAdd(
			"games",
			"*",
			{
				data: JSON.stringify(startGameMessage),
			},
			{
				TRIM: {
					strategy: "MAXLEN",
					strategyModifier: "~",
					threshold: 100,
				},
			}
		);

		addXRead({
			streamKey: getGameStateKey(this.gameId),
			lastId: "0",
			messageCallback: (redisStreamData) => {
				const res = jsonSafeParseS(
					gameDataSchema,
					redisStreamData.message.data
				);

				if (!res.success) {
					return;
				}

				this.updateGameData(res.data);
			},
		});

		return true;
	}

	addPlayer(playerId: string, socket: WebSocketType) {
		const uuid = randomUUID();

		const player = {
			uuid,
			playerId,
			socket,
			lastPing: 0,
			latency: 0,
			pingCounter: 0,
		};

		if (!this.gameData) {
			console.error("no game data", this.gameId);
			return;
		}

		this.players.push(player);
		socket.send(
			JSON.stringify({
				type: "game-data",
				payload: {
					playerGameData: getPlayerGameData(this.gameData),
				},
			} as WebSocketServerToClientMessage)
		);

		if (process.env.NODE_ENV === "development") {
			console.debug(
				"players",
				this.players.map((p) => p.playerId)
			);
		}

		socket.on("message", async (buffer) => {
			const res = jsonSafeParseS(
				webSocketClientToServerMessageSchema,
				buffer.toString()
			);
			if (!res.success) {
				console.error("error!", JSON.stringify(res.error, null, "  "));
				console.error("original websocket buffer", buffer.toString());
				return;
			}
			const { type } = res.data;

			switch (type) {
				case "pong":
					player.latency = Date.now() - player.lastPing;
					break;
				default:
					console.info("success", res.data);
					if (!this.gameId) {
						console.error(
							"got websocket message but no game id",
							buffer.toString()
						);
						break;
					}

					xAddExpire(
						getGameActionKey(this.gameId),
						"*",
						{
							data: JSON.stringify(res.data),
						},
						{
							TRIM: {
								strategy: "MAXLEN",
								strategyModifier: "~",
								threshold: 50,
								limit: 3,
							},
						}
					);
			}
		});

		socket.on("close", () => {
			for (let n = 0; n < this.players.length; n++) {
				if (this.players[n].uuid === uuid) {
					this.players.splice(n, 1);
					break;
				}
			}

			console.debug(
				"players",
				this.players.map((p) => p.playerId)
			);

			if (this.players.length === 0) {
				this.gameId = null;
				this.gameData = null;
			}
		});
	}

	updateGameData(newGameData: GameData) {
		try {
			this.gameData = newGameData;

			for (let n = 0; n < this.players.length; n++) {
				const player = this.players[n];

				player.pingCounter += 1;

				if (player.pingCounter % 20 === 0) {
					player.pingCounter = 0;
					player.lastPing = Date.now();
					player.socket.send(
						JSON.stringify({
							type: "ping",
							payload: {
								latency: player.latency,
							},
						} as WebSocketServerToClientMessage)
					);
				}

				player.socket.send(
					JSON.stringify({
						type: "game-data",
						payload: {
							playerGameData: getPlayerGameData(newGameData),
							latency: player.latency,
						},
					} as WebSocketServerToClientMessage)
				);
			}
		} catch (e) {
			console.error(
				"error when updating game data",
				newGameData,
				this.gameData?.gameDetails.id
			);
		}
	}
}
