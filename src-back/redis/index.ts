import { randomUUID } from "node:crypto";
import { createClient } from "redis";

export type RedisClient2 = ReturnType<typeof createClient> & {
  id?: string;
};

type messageCallbackParams = {
  id: string;
  message: {
    data: string;
  };
};

const clients: { [name: string]: RedisClient2 } = {};

const listeners: {
  uuid: string;
  streamKey: string;
  lastId: string;
  messageCallback: (data: messageCallbackParams) => void | Promise<void>;
}[] = [];

let isListening = false;

export const getListeners = () => listeners;

export const getGameStateKey = (gameId: string) => `game:${gameId}-state`;

export const getGameActionKey = (gameId: string) => `game:${gameId}-action`;

export const getGameWorkerKey = (gameId: string) => `game:${gameId}-worker`;

export const getClient = (name = "default"): RedisClient2 => {
  if (clients[name]) {
    return clients[name];
  }

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

export const getXReadClient = (): RedisClient2 => {
  return getClient("xRead");
};

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const unblockReadClient = () => {
  const readClient = getXReadClient();

  if (readClient.id) {
    const normalClient = getClient();
    normalClient.sendCommand(["CLIENT", "UNBLOCK", readClient.id]);
  }
};

const listen = async () => {
  const readClient = getXReadClient();

  for (;;) {
    if (listeners.length === 0) {
      return;
    }
    // listen
    const streams: { [key: string]: { streamKey: string; lastId: string } } =
      listeners.reduce((prev, curr) => {
        const { lastId, streamKey } = curr;
        return {
          ...prev,
          [streamKey]: {
            streamKey,
            lastId,
          },
        };
      }, {});

    const res = await readClient.xRead(
      Object.keys(streams).map((streamKey) => {
        return {
          key: streamKey,
          id: streams[streamKey]?.lastId || "$",
        };
      }),
      { BLOCK: 10000, COUNT: 100 }
    );

    if (res && res.length > 0) {
      for (let i = 0; i < res.length; i++) {
        const { name, messages } = res[i];

        for (let j = 0; j < messages.length; j++) {
          const { id, message } = messages[j];

          const data = message?.data;

          for (let k = 0; k < listeners.length; k++) {
            if (listeners[k].streamKey === name) {
              listeners[k].lastId = id;

              if (typeof data === "string") {
                listeners[k].messageCallback({
                  id,
                  message: {
                    data,
                  },
                });
              }
            }
          }
        }
      }
    }

    // wait a bit
    await sleep(1);
  }
};

export const addXRead = ({
  streamKey,
  lastId,
  messageCallback,
}: {
  streamKey: string;
  lastId?: string;
  messageCallback: (data: messageCallbackParams) => void | Promise<void>;
}): string => {
  const uuid = randomUUID();

  listeners.push({
    uuid,
    streamKey,
    lastId: lastId || "$",
    messageCallback,
  });

  if (isListening) {
    unblockReadClient();
  }

  listen();

  return uuid;
};

export const removeXRead = (uuid: string): void => {
  const i = listeners.findIndex((listener) => listener.uuid === uuid);

  listeners.splice(i, 1);

  listen();
};
