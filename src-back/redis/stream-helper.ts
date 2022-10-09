import type {
  Listener,
  DefaultStreamMessageType,
} from "../../dist-common/redis-types";
import type { ActionIncomingMessageObject } from "../../dist-common/game-action-types";

import { RedisClient2 } from "../redis";

export default class StreamHelper {
  regularClient: RedisClient2;
  xReadClient: RedisClient2;
  listeners: Listener[];
  listening: boolean;
  lastIds: {
    [name: string]: string;
  };

  constructor(regularClient: RedisClient2, xReadClient: RedisClient2) {
    if (regularClient === xReadClient) {
      throw new Error("regularClient and xReadClient have to be different");
    }
    this.regularClient = regularClient;
    this.xReadClient = xReadClient;

    this.lastIds = {};

    this.listeners = [];
    this.listening = false;
  }

  static sendMessage = (
    message: DefaultStreamMessageType,
    interestedListeners: Listener[],
    lastMessageId: string
  ) => {
    let dataObject: ActionIncomingMessageObject | null = null;

    try {
      dataObject = JSON.parse(message.message.data);
    } catch (_e) {
      dataObject = null;
    }

    interestedListeners.forEach((listener) =>
      listener.updateHandler(message.message.data, dataObject, lastMessageId)
    );
  };

  addListener = async (newListener: Listener): Promise<void> => {
    this.listeners.push(newListener);

    if (!this.listening) {
      this.listen();
    } else if (typeof this.xReadClient.id === "string") {
      this.regularClient.sendCommand([
        "CLIENT",
        "UNBLOCK",
        this.xReadClient.id,
      ]);
    }

    const { fetchOnAdd, streamKey } = newListener;
    if (fetchOnAdd) {
      const res = (await this.regularClient.xRevRange(streamKey, "+", "-", {
        COUNT: 1,
      })) as DefaultStreamMessageType[];

      if (res.length > 0) {
        StreamHelper.sendMessage(res[0], [newListener], res[0].id);
      } else {
        const valueType = await this.regularClient.type(streamKey);

        if (valueType !== "stream") {
          StreamHelper.sendMessage(
            { id: "0", message: { data: "not-found" } },
            [newListener],
            "0"
          );
        }
      }
    }
  };

  removeListener = (id: string): void => {
    this.listeners = this.listeners.filter((a) => a.id !== id);

    if (process.env.NODE_ENV !== "production") {
      console.debug(
        new Date().toLocaleTimeString(),
        "stream listeners removed. total:",
        this.listeners.length
      );
    }
  };

  xRead = async () => {
    const streamKeys = this.listeners.map((listener) => listener.streamKey);
    const uniqueStreamKeys = [...new Set(streamKeys)];

    return this.xReadClient.xRead(
      uniqueStreamKeys.map((streamKey) => {
        if (!this.lastIds[streamKey]) {
          this.lastIds[streamKey] = "$";
        }

        return {
          key: streamKey,
          id: this.lastIds[streamKey],
        };
      }),
      { BLOCK: 10000, COUNT: 100 }
    );
  };

  listen = async () => {
    while (this.listeners.length > 0) {
      this.listening = true;
      const res = (await this.xRead()) as
        | {
            name: string;
            messages: DefaultStreamMessageType[];
          }[]
        | null;

      res?.forEach((event) => {
        const { name, messages } = event;

        if (messages.length === 0) {
          return;
        }

        const lastMessage: DefaultStreamMessageType =
          messages[messages.length - 1];
        this.lastIds[name] = lastMessage.id;

        const lastOnlyListeners = this.listeners.filter(
          (listener) => listener.streamKey === name && listener.lastOnly
        );

        StreamHelper.sendMessage(
          lastMessage,
          lastOnlyListeners,
          lastMessage.id
        );

        const everyListeners = this.listeners.filter(
          (listener) => listener.streamKey === name && !listener.lastOnly
        );

        messages.forEach((message) => {
          StreamHelper.sendMessage(message, everyListeners, message.id);
        });
      });
    }

    this.listening = false;
  };
}
