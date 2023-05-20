import { createClient } from "redis";

export type RedisClient2 = ReturnType<typeof createClient> & {
  id?: string;
};

const clients: { [name: string]: RedisClient2 } = {};

export const createClient2 = (name: string): RedisClient2 => {
  const newClient = createClient({
    url: process.env.REDIS_URL || "redis://redis",
  }) as RedisClient2;

  newClient.id = undefined;

  newClient.connect();
  const tic = Date.now();

  newClient.on("error", (err) => {
    console.error(`${new Date().toISOString()}: ${name} Error`, err);
    if (err.code === "ECONNREFUSED") {
      newClient.id = undefined;
    }
  });
  newClient.on("connect", async () => {
    newClient.id = (await newClient.clientId()).toString(10);
    console.info(
      `${new Date().toISOString()}: ${name} Connected. ID: ${
        newClient.id
      }. Took ${Date.now() - tic} ms to connect.`
    );
  });

  return newClient;
};

export const getClient = (name = "default") => {
  if (!clients[name]) {
    clients[name] = createClient2(name);
  }

  return clients[name];
};

export const getGameStateKey = (gameId: string) => `game:${gameId}-state`;

export const getGameActionKey = (gameId: string) => `game:${gameId}-action`;
