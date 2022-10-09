import type { SetManyRegisterAction } from "dist-common/game-action-types";
import { symmetricDifference } from "../../../dist-common/utils";
import type Game from "../game-class";

const setManyRegisters = (
  game: Game,
  action: SetManyRegisterAction
): { game: Game; message: string } => {
  const { gameState, playerSecrets } = game;
  if (gameState.state !== "main") {
    return {
      game,
      message: "You can't do that right now.",
    };
  }

  const {
    playerId,
    cardsInHand: newCardsInHand,
    programRegisters: newProgramRegisters,
    setRegisterTimestamp: newSetRegisterTimestamp,
  } = action;
  const { cardsInHand, programRegisters, setRegisterTimestamp } =
    playerSecrets[playerId];
  const { robots, finishedProgrammingPlayers } = gameState;

  if (finishedProgrammingPlayers.includes(playerId)) {
    return {
      game,
      message: "You have already submitted your program.",
    };
  }

  if (setRegisterTimestamp >= newSetRegisterTimestamp) {
    return {
      game,
      message: "Skipping old action.",
    };
  }

  const robot = robots.find((r) => r.playerId === playerId);
  if (!robot || robot.status !== "ok") {
    return {
      game,
      message: "Your robot isn't ok.",
    };
  }

  for (const registerIndex of robot.lockedRegisters) {
    if (
      newProgramRegisters[registerIndex] !== programRegisters[registerIndex]
    ) {
      return {
        game,
        message: `Register ${registerIndex} is locked.`,
      };
    }
  }

  if (newProgramRegisters.length !== 5) {
    return {
      game,
      message: `Incorrect number of program registers.`,
    };
  }

  const prevTotalCards = [...cardsInHand, ...programRegisters].filter((a) => a);
  const prevUniqueCards = new Set(prevTotalCards);
  const nextTotalCards = [...newCardsInHand, ...newProgramRegisters].filter(
    (a) => a
  );
  const nextUniqueCards = new Set(nextTotalCards);
  const difference = symmetricDifference(prevUniqueCards, nextUniqueCards);
  if (nextTotalCards.length !== nextUniqueCards.size || difference.size > 0) {
    return {
      game,
      message: `Incorrect cards in hand & registers.`,
    };
  }

  playerSecrets[playerId].cardsInHand = newCardsInHand;
  playerSecrets[playerId].programRegisters = newProgramRegisters;
  playerSecrets[playerId].setRegisterTimestamp = newSetRegisterTimestamp;

  return {
    game,
    message: "OK",
  };
};

export default setManyRegisters;
