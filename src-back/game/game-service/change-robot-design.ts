import type { Robot } from "dist-common/game-types";

import { saveGame, findGame } from "../game-redis";

export const changeRobotDesign = async (
  gameId: string,
  playerId: string,
  playerPassword: string,
  newRobotDesign: Robot["design"]
) => {
  const game = await findGame(gameId);
  if (!game) {
    return { code: 404 };
  }

  if (!game.isPlayer(playerId, playerPassword)) {
    return { code: 401 };
  }

  if (game.gameState.state !== "lobby") {
    return { code: 400 };
  }

  const { robots } = game.gameState;
  const robot = robots.find((r) => r.playerId === playerId);

  if (!robot) {
    return {
      code: 400,
    };
  }

  if (robot.design === newRobotDesign) {
    return {
      code: 200,
      gameData: game.getGameDataForPlayer(playerId, playerPassword),
    };
  }

  if (
    newRobotDesign !== "random" &&
    robots.map((r) => r.design).includes(newRobotDesign)
  ) {
    return { code: 400 };
  }

  robot.design = newRobotDesign;

  saveGame(game.getGameData());

  return {
    code: 200,
    gameData: game.getGameDataForPlayer(playerId, playerPassword),
  };
};
