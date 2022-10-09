import type { SetRegisterAction } from "../../../dist-common/game-action-types";
import canSetRegister from "../../../dist-common/action-validators/can-set-register";
import type Game from "../game-class";

const setRegister = (
  game: Game,
  action: SetRegisterAction
): { game: Game; message: string } => {
  const { gameState, playerSecrets } = game;
  if (gameState.state !== "main") {
    return {
      game,
      message: "You can't do that right now.",
    };
  }

  const { playerId, cardId, registerIndex } = action;
  const { cardsInHand, programRegisters } = playerSecrets[playerId];
  const { robots, finishedProgrammingPlayers } = gameState;

  const { canPerform, message } = canSetRegister(
    cardId,
    registerIndex,
    cardsInHand,
    programRegisters,
    robots.find((r) => r.playerId === playerId)!,
    finishedProgrammingPlayers
  );
  if (!canPerform) {
    return {
      game,
      message,
    };
  }

  playerSecrets[playerId].cardsInHand = playerSecrets[
    playerId
  ].cardsInHand.filter((a) => a !== cardId);

  const existingCardInRegister =
    playerSecrets[playerId].programRegisters[registerIndex];
  if (existingCardInRegister !== null) {
    playerSecrets[playerId].cardsInHand.push(existingCardInRegister);
  }

  playerSecrets[playerId].programRegisters[registerIndex] = cardId;

  return {
    game,
    message: "OK",
  };
};

export default setRegister;
