import { createClient2 } from "../redis";
import type { GameData } from "../../dist-common/game-types";
import type { ActionIncomingMessageObject } from "../../dist-common/game-action-types";
import type { DefaultStreamMessageType } from "../../dist-common/redis-types";
import { randomString } from "../../dist-common/utils";
import Game from "./game-class";
import StreamHelper from "../redis/stream-helper";

export const SHORT_TTL = 60 * 60; // 1 hour in seconds
export const LONG_TTL = 36 * 60 * 60; // 36 hours in seconds

const REDIS_XTRIM_THRESHOLD = 20; // maximum number of items in the stream
const REDIS_XTRIM_LIMIT = 5;
const ACTION_MULTIPLIER = 1;

export const getRedisKeys = (gameId: string) => {
  const baseKey = `game:${gameId.replaceAll(/[^a-z0-9\-]/g, "-")}`.slice(0, 45);
  return {
    state: `${baseKey}-state`,
    action: `${baseKey}-action`,
  };
};

export const client = createClient2("Redis Client");
export const xReadClient = createClient2("xRead Client");

export const streamHelper = new StreamHelper(client, xReadClient);

const expireGT = async (key: string, ttl: number) => {
  const existingTtl = await client.ttl(key);

  if (existingTtl > ttl) {
    return;
  }

  return client.expire(key, ttl);
};

export const getFullId = async (
  shortGameId: string
): Promise<string | null> => {
  const cleanedShortId = shortGameId
    .toUpperCase()
    .replaceAll("O", "0")
    .replaceAll("I", "1")
    .replaceAll("Z", "2");
  return client.get(`short-id:${cleanedShortId.toUpperCase()}`);
};

export const makeShortId = async (fullId: string): Promise<string> => {
  for (let n = 0; n < 2000; n++) {
    const characterCount = Math.min(Math.floor(Math.sqrt(n + 1)) + 1, 35);
    const tempId = randomString(characterCount);
    const existingKey = await getFullId(tempId);

    if (existingKey === null) {
      await client.set(`short-id:${tempId}`, fullId);
      await expireGT(`short-id:${tempId}`, 5 * LONG_TTL);
      return tempId;
    }
  }

  return fullId;
};

export const saveGame = async (gameData: GameData, useLongTTL?: boolean) => {
  await client.xAdd(
    getRedisKeys(gameData.id).state,
    "*",
    {
      data: JSON.stringify(gameData),
    },
    {
      TRIM: {
        strategy: "MAXLEN",
        strategyModifier: "~",
        threshold: REDIS_XTRIM_THRESHOLD,
        limit: REDIS_XTRIM_LIMIT,
      },
    }
  );
  if (useLongTTL) {
    expireGT(getRedisKeys(gameData.id).state, LONG_TTL);
  } else {
    expireGT(getRedisKeys(gameData.id).state, SHORT_TTL);
  }
};

export const findGame = async (gameId: string) => {
  const res = (await client.xRevRange(getRedisKeys(gameId).state, "+", "-", {
    COUNT: 1,
  })) as DefaultStreamMessageType[];

  if (res.length > 0) {
    client.xTrim(getRedisKeys(gameId).state, "MAXLEN", REDIS_XTRIM_THRESHOLD, {
      LIMIT: REDIS_XTRIM_LIMIT,
      strategyModifier: "~",
    });
    return new Game(JSON.parse(res[0].message.data));
  }

  return null;
};

export const gameStreamEntries = (gameId: string) => {
  return client.xLen(getRedisKeys(gameId).state);
};

export const addAction = async (
  actionMessageObject: ActionIncomingMessageObject
) => {
  await client.xAdd(
    getRedisKeys(actionMessageObject.gameId).action,
    "*",
    {
      data: JSON.stringify(actionMessageObject),
    },
    {
      TRIM: {
        strategy: "MAXLEN",
        strategyModifier: "~",
        threshold: Math.ceil(REDIS_XTRIM_THRESHOLD * ACTION_MULTIPLIER),
        limit: REDIS_XTRIM_LIMIT,
      },
    }
  );
  expireGT(getRedisKeys(actionMessageObject.gameId).action, LONG_TTL);
};
