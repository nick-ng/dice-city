import { randomUUID } from "crypto";
import type { GameData, GameSettings } from "../../../dist-common/game-types";
import type {
  GameAction,
  ActionIncomingMessageObject,
  AutomaticAction,
} from "../../../dist-common/game-action-types";

import { toAmbidextrousQuote } from "../../../dist-common/utils";
import { getMap } from "../../../dist-common/maps";
import { parseMap } from "../../../dist-common/maps/parse-map";

import Game from "../game-class";
import { saveGame, findGame, makeShortId, addAction } from "../game-redis";
import { sendStartGameAction } from "../game-server";

export const newGame = async (
  playerId: string,
  playerName: string,
  playerPassword: string
) => {
  const gameId = randomUUID();
  const shortId = await makeShortId(gameId);

  const game = new Game({ host: playerId, id: gameId, shortId });
  game.addPlayer(playerId, playerName, playerPassword);

  await saveGame(game.getGameData());

  return {
    code: 200,
    gameData: game.getGameDataForPlayer(playerId, playerPassword),
  };
};

export const joinGame = async (
  gameId: string,
  playerId: string,
  playerName: string,
  playerPassword: string
) => {
  const game = await findGame(gameId);

  if (!game) {
    return { code: 404 };
  }

  const result = game.addPlayer(playerId, playerName, playerPassword);
  if (result.type !== "success") {
    return {
      code: 400,
      message: result.message,
    };
  }

  saveGame(game.getGameData());

  return {
    code: 200,
    gameData: game.getGameDataForPlayer(playerId, playerPassword),
  };
};

export const changeGameSettings = async (
  gameId: string,
  playerId: string,
  playerPassword: string,
  someGameSettings: Partial<GameSettings>
) => {
  const game = await findGame(gameId);
  if (!game) {
    return { code: 404 };
  }

  if (!game.isHost(playerId, playerPassword)) {
    return { code: 401 };
  }

  game.gameSettings = { ...game.gameSettings, ...someGameSettings };

  saveGame(game.getGameData());

  return {
    code: 200,
    gameData: game.getGameDataForPlayer(playerId, playerPassword),
  };
};

export const changeMap = async (
  gameId: string,
  playerId: string,
  playerPassword: string,
  mapName: string,
  mapJSON?: string
) => {
  const game = await findGame(gameId);
  if (!game) {
    return { code: 404 };
  }

  if (!game.isHost(playerId, playerPassword)) {
    return { code: 400 };
  }

  let tempMap = null;

  if (mapName === "custom") {
    const { map, errors } = parseMap(toAmbidextrousQuote(mapJSON || ""));

    if (!map) {
      return { code: 400, message: errors.join("; ") };
    }

    tempMap = map;
  }

  const map = tempMap || getMap(mapName);

  game.gameSettings = { ...game.gameSettings, map };

  saveGame(game.getGameData());

  return {
    code: 200,
    gameData: game.getGameDataForPlayer(playerId, playerPassword),
  };
};

export const getGame = async (
  gameId: string,
  playerId: string,
  playerPassword: string
) => {
  const game = await findGame(gameId);

  if (!game) {
    return { code: 404 };
  }

  return {
    code: 200,
    gameData: game.getGameDataForPlayer(playerId, playerPassword),
  };
};

export const playGame = (
  game: Game,
  actionObject: ActionIncomingMessageObject,
  performAction: (
    nextAction: ActionIncomingMessageObject
  ) => void | Promise<void>
): {
  game: Game;
  type: string;
  message: string;
  automaticAction?: AutomaticAction;
} => {
  const { action, playerId, password } = actionObject;

  const { type, message, automaticAction } = game.gameAction(
    playerId,
    password,
    action
  );

  game.resumeAction = null;

  if (automaticAction) {
    const { action, delay } = automaticAction;
    const fullAutomaticActionObject: ActionIncomingMessageObject = {
      playerId: "server",
      password: game.gameSecrets.password,
      gameId: game.id,
      type: "action",
      action,
    };

    game.resumeAction = fullAutomaticActionObject;
    setTimeout(() => {
      performAction(fullAutomaticActionObject);
    }, Math.max(delay, 20));
  }

  return { game, type, message, automaticAction };
};

export const startGame = async (
  gameId: string,
  playerId: string,
  playerPassword: string
) => {
  const game = await findGame(gameId);

  if (!game) {
    return { code: 404 };
  }

  const { message } = playGame(
    game,
    {
      playerId,
      password: playerPassword,
      gameId: gameId,
      type: "action",
      action: {
        playerId,
        type: "start",
      },
    },
    (nextAction) => {
      addAction(nextAction);
    }
  );

  if (message.toUpperCase() !== "OK") {
    return {
      code: 400,
      message,
      gameData: game.getGameDataForPlayer(playerId, playerPassword),
    };
  }

  await saveGame(game.getGameData(), true);
  await sendStartGameAction(game.id);

  return {
    code: 200,
    message,
    gameData: game.getGameDataForPlayer(playerId, playerPassword),
  };
};

export const stepGame = (
  gameData: GameData,
  action: GameAction
): { gameData: GameData; automaticAction?: AutomaticAction } => {
  const game = new Game(gameData);

  const { automaticAction } = playGame(
    game,
    {
      playerId: action.playerId,
      password: action.playerId,
      gameId: game.id,
      type: "action",
      action,
    },
    (_nextAction) => {}
  );

  return { gameData: game.getGameData(), automaticAction };
};
