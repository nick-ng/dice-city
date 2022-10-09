import type { OnePlayerSecrets, GameState } from "../game-types";

const canSubmitProgram = (
  playerId: string,
  gameState: GameState,
  programRegisters?: OnePlayerSecrets["programRegisters"]
):
  | { canPerform: true; message?: never }
  | { canPerform: false; message: string } => {
  const { robots } = gameState;
  const robot = robots?.find((r) => r.playerId === playerId);
  if (!programRegisters || !robot) {
    return { canPerform: false, message: "Invalid inputs." };
  }

  if (robot.status !== "ok") {
    return { canPerform: false, message: "Robot not in functional state." };
  }

  if (programRegisters.some((register) => register === null)) {
    return { canPerform: false, message: "Some registers are still empty." };
  }

  return { canPerform: true };
};

export default canSubmitProgram;
