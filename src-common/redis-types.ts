import type { ActionIncomingMessageObject } from "./game-action-types";

export interface DefaultStreamMessageType {
  id: string;
  message: { data: string };
}

export interface Listener {
  streamKey: string;
  id: string;
  fetchOnAdd: boolean;
  lastOnly: boolean;
  updateHandler(
    message: string,
    messageObject: ActionIncomingMessageObject | null,
    lastMessageId: string
  ): void;
}
