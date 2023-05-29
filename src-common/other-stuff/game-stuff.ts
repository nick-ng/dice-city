import { randomUUID } from "node:crypto";

import type { GameData } from "~common/types/index.js";

export const createGameFromHostId = (hostId: string): GameData => {
  const gameId = randomUUID();
  return {
    gameDetails: { hostId, id: gameId, players: [], isPublic: false },
    gameSettings: {
      landmarks: [],
      timeLimitSeconds: 999,
      timeLimitType: "off",
      startingMoney: 3,
    },
    gameState: {
      publicState: {
        common: {
          activePlayerId: "",
          diceRolls: [],
          processedEstablishments: [],
          supply: {},
          turnEvents: [],
          turnPhase: "lobby",
        },
        players: {},
      },
      secretState: {
        common: {
          deck: [],
        },
      },
    },
    lastActionId: "",
    playersSecrets: {},
  };
};
