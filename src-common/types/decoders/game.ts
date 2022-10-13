import {
  array,
  boolean,
  intersect,
  literal,
  number,
  string,
  struct,
  record,
  union,
  parse,
  failure,
  success,
} from "io-ts/Decoder";
import { pipe } from "fp-ts/function";

import { uuidishDecoder } from "./misc";

export const playerDecoder = struct({
  id: uuidishDecoder,
  name: string,
});

export const gameDetailsDecoder = struct({
  id: uuidishDecoder,
  players: array(playerDecoder),
  hostId: uuidishDecoder,
});

export const gameSettingsDecoder = struct({
  timeLimitSeconds: number,
  timeLimitType: literal("off", "on"),
});

export const gameStateDecoder = struct({});

export const gameSecretsDecoder = struct({
  remainingDeck: array(uuidishDecoder),
});

export const playerSecretsDecoder = struct({
  password: uuidishDecoder,
});

export const playersSecretsDecoder = record(playerSecretsDecoder);

export const gameData = struct({
  gameDetails: gameDetailsDecoder,
  gameSettings: gameSettingsDecoder,
  gameState: gameStateDecoder,
  gameSecrets: gameSecretsDecoder,
  playersSecrets: playersSecretsDecoder,
  lastActionId: string,
});

/**
 * const a = {
  gameDetails: {
    id: 'a',
    players: [
      {
        id: 'a',
        name: 'b',
      }
    ],
    hostId: 'a',

  },
  gameSettings: {
    timeLimitSeconds: 100,
    timeLimitType: 'off',
  },
  gameState: {

  },
  gameSecrets: {
    remainingDeck: []
  },
  playersSecrets: {
    ["player-id"]: {
      password: 'b',
    }
  },
  lastActionId: '0-0'
}
 */
