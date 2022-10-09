import type {
  AutomaticAction,
  ForceSetRegistersAction,
} from "dist-common/game-action-types";

import { shuffle } from "../../../dist-common/card-map";

import setRegister from "./set-register";
import finishSettingRegisters from "./finish-setting-registers";

import Game, { TURN_PHASES } from "../game-class";

const forceSetRegisters = (
  game: Game,
  action: ForceSetRegistersAction
): {
  game: Game;
  message: string;
  automaticAction?: AutomaticAction;
} => {
  const { gameState, playerSecrets } = game;
  if (gameState.state !== "main") {
    return {
      game,
      message: "You can't do that right now.",
    };
  }

  if (
    gameState.turn > action.turn ||
    gameState.turnPhase !== TURN_PHASES.programRobots
  ) {
    return {
      game,
      message: "OK",
    };
  }

  const { robots, seatOrder } = gameState;

  const nonOperatingRobots = robots.filter(
    (r) => !["ok", "powered-down"].includes(r.status)
  );
  const remainingPlayers = seatOrder.filter(
    (id) =>
      !gameState.finishedProgrammingPlayers.includes(id) &&
      !nonOperatingRobots.map((r) => r.playerId).includes(id)
  );

  for (const playerId of remainingPlayers) {
    const robot = robots.find((r) => r.playerId === playerId);
    const currentPlayerSecrets = playerSecrets[playerId];
    if (!robot || !currentPlayerSecrets) {
      console.error(
        "[force-set-register]: Couldn't find player's secrets and/or robot.",
        {
          playerId,
          robots,
          playerSecrets,
        }
      );
      continue;
    }

    const { programRegisters, cardsInHand } = currentPlayerSecrets;
    const shuffledCardsInHand = shuffle(cardsInHand);

    currentPlayerSecrets.setRegisterTimestamp =
      currentPlayerSecrets.setRegisterTimestamp + 1;
    programRegisters.forEach((register, i) => {
      if (typeof register === "string") {
        return;
      }

      const { message } = setRegister(game, {
        playerId,
        type: "set-register",
        cardId: shuffledCardsInHand.pop()!,
        registerIndex: i,
      });

      if (message !== "OK") {
        console.error("[force-set-register]: Couldn't set register.", {
          playerId,
          type: "set-register",
          cardId: shuffledCardsInHand.pop()!,
          registerIndex: i,
        });
      }
    });

    const { message, automaticAction } = finishSettingRegisters(game, {
      playerId,
      type: "finish-setting-registers",
    });

    if (automaticAction) {
      return {
        game,
        message,
        automaticAction,
      };
    }
  }

  return {
    game,
    message: "OK",
  };
};

export default forceSetRegisters;
