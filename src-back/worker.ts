import dotenv from "dotenv";
dotenv.config();

import { randomUUID } from "node:crypto";

import { startGameStreamObjectSchema } from "~common/types/schemas/message.js";
import { playerActionsSchema } from "~common/types/schemas/actions.js";
import { performAction } from "~common/actions/index.js";
import { jsonSafeParseS } from "~common/utils/index.js";

import type { GameData } from "~common/types/index.js";

import {
	MAX_GAME_AGE_SECONDS,
	xAddExpire,
	addXRead,
	getClient,
	getListeners,
	getGameActionKey,
	getGameStateKey,
	removeXRead,
} from "./redis/index.js";
import { gameDataSchema } from "~common/types/schemas/game.js";

const INSTANCE_ID = randomUUID();

const sleep = (ms: number) =>
	new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});

const games: { [gameId: string]: { gameData: GameData; listenerId: string } } =
	{};

addXRead({
	streamKey: "games",
	messageCallback: async ({ message }) => {
		const res = jsonSafeParseS(startGameStreamObjectSchema, message.data);

		if (!res.success) {
			console.error("error when parsing start game stream message", res.error);
			return;
		}

		const { gameId, workerId } = res.data;

		if (workerId !== `worker:${INSTANCE_ID}`) {
			// This game isn't for this worker to handle.
			return;
		}

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

		const { lastActionId } = gameRes.data;
		const actionKey = getGameActionKey(gameId);

		const allListeners = getListeners();

		if (allListeners.map((a) => a.streamKey).includes(actionKey)) {
			console.debug("already listening to", actionKey);
			return;
		}

		const listenerId = addXRead({
			streamKey: getGameActionKey(gameId),
			lastId: lastActionId,
			messageCallback: async (redisStreamData) => {
				const res = jsonSafeParseS(
					playerActionsSchema,
					redisStreamData.message.data
				);

				if (!res.success) {
					console.error("couldn't parse message", res.error);
					return;
				}

				const error = performAction(games[gameId].gameData, res.data).error;

				games[gameId].gameData.lastActionId = redisStreamData.id;

				if (error) {
					console.debug(
						"redis stream message data",
						redisStreamData.message.data
					);
					console.error("error when performing action", error);
					return;
				}

				xAddExpire(
					getGameStateKey(gameId),
					"*",
					{
						data: JSON.stringify(games[gameId].gameData),
					},
					{
						TRIM: {
							strategy: "MAXLEN",
							strategyModifier: "~",
							threshold: 10,
							limit: 3,
						},
					}
				);
			},
		});

		games[gameId] = { gameData: gameRes.data, listenerId };
	},
});

// @todo(nick-ng): check for "orphaned" games when starting up.
const main = async () => {
	const redis = getClient();
	for (;;) {
		Object.entries(games).forEach(([gameId, value]) => {
			const [msString, _n] = value.gameData.lastActionId.split("-");

			const lastActionTimestampMs = parseInt(msString, 10);

			const gameAgeSeconds = (Date.now() - lastActionTimestampMs) / 1000;

			if (gameAgeSeconds > MAX_GAME_AGE_SECONDS) {
				removeXRead(value.listenerId);
				delete games[gameId];
			}
		});

		redis.set(`worker:${INSTANCE_ID}`, Object.keys(games).length, {
			EX: 15,
		});

		await sleep(9000 + 1000 * Math.random());
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
