import { Router } from "express";

import type { NewGameResponse } from "~common/types/index.js";

import { jsonSafeParseS } from "~common/utils/index.js";
import { gameDataSchema } from "~common/types/schemas/game.js";
import { newGameRequestSchema } from "~common/types/schemas/message.js";
import { createGameFromHostId } from "~common/other-stuff/game-stuff.js";

import {
	getClient,
	xAddExpire,
	getGameStateKey,
	getGameId,
} from "../redis/index.js";

const router = Router();

router.get("/", async (_req, res, _next) => {
	const games: { gameId: string; playerCount: number }[] = [];

	const redisClient = getClient();

	for await (const gameStateKey of redisClient.scanIterator({
		MATCH: "game:*:state",
	})) {
		const temp = await redisClient.xRevRange(gameStateKey, "+", "-", {
			COUNT: 1,
		});

		if (!temp[0]) {
			continue;
		}

		const { message } = temp[0];

		const res = jsonSafeParseS(gameDataSchema, message.data);

		if (!res.success) {
			continue;
		}

		const { gameDetails, gameState } = res.data;
		const { turnPhase } = gameState.publicState.common;

		if (turnPhase !== "lobby") {
			continue;
		}

		const { players, isPublic } = gameDetails;

		if (!isPublic) {
			continue;
		}

		games.push({
			gameId: getGameId(gameStateKey),
			playerCount: players.length,
		});
	}

	res.json(games);
});

router.post("/", async (req, res, _next) => {
	const { body } = req;

	const result = newGameRequestSchema.safeParse(body);

	if (!result.success) {
		res.statusMessage = `bad request. ${JSON.stringify(result.error)}`;
		res.status(400).end();
		return;
	}

	const { playerId, playerName, playerPassword } = result.data;

	const newGame = createGameFromHostId(playerId, playerName, playerPassword);

	const stateRedisKey = getGameStateKey(newGame.gameDetails.id);
	await xAddExpire(
		stateRedisKey,
		"*",
		{ data: JSON.stringify(newGame) },
		{
			TRIM: {
				strategy: "MAXLEN",
				strategyModifier: "~",
				threshold: 10,
				limit: 3,
			},
		}
	);

	res.json({
		gameId: newGame.gameDetails.id,
	} as NewGameResponse);
});

export default router;
