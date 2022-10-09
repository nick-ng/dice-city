import type { Robot, OnePlayerSecrets, Player, GameState } from "./game-types";

interface BasicAction {
  playerId: string;
  type: string;
  turn?: GameState["turn"];
}

export interface StartAction extends BasicAction {
  type: "start";
}

export interface DealProgramCardsAction extends BasicAction {
  type: "deal-program-cards";
}

export interface SetRegisterAction extends BasicAction {
  type: "set-register";
  cardId: string | null;
  registerIndex: number;
}

export interface SetManyRegisterAction extends BasicAction {
  type: "set-many-registers";
  programRegisters: OnePlayerSecrets["programRegisters"];
  cardsInHand: OnePlayerSecrets["cardsInHand"];
  setRegisterTimestamp: number;
}

export interface FinishSettingRegistersAction extends BasicAction {
  type: "finish-setting-registers";
}

export interface ForceSetRegistersAction extends BasicAction {
  type: "force-set-registers";
  turn: GameState["turn"];
}

export interface ForceSkipPowerDownAction extends BasicAction {
  type: "force-skip-power-down";
  turn: GameState["turn"];
  playerId: Player["id"];
}

export interface PowerDownNextTurnAction extends BasicAction {
  type: "power-down-next-turn";
  decision: "yes" | "no";
}

export interface ProcessRegisterAction extends BasicAction {
  type: "process-registers";
}

export interface CleanUpAction extends BasicAction {
  type: "clean-up";
}

export interface ForceSpawnRobotAction extends BasicAction {
  type: "force-spawn-robot";
  turn: GameState["turn"];
  playerId: Player["id"];
}

export interface SpawnRobotAction extends BasicAction {
  type: "spawn-robot";
  facing: Robot["position"]["facing"];
  x: Robot["position"]["x"];
  y: Robot["position"]["y"];
  powerDown: boolean;
}

export type GameAction =
  | StartAction
  | DealProgramCardsAction
  | SetRegisterAction
  | SetManyRegisterAction
  | FinishSettingRegistersAction
  | ForceSetRegistersAction
  | ForceSkipPowerDownAction
  | PowerDownNextTurnAction
  | ProcessRegisterAction
  | CleanUpAction
  | ForceSpawnRobotAction
  | SpawnRobotAction;

interface BasicIncomingMessageObject {
  playerId: string;
  password: string;
  gameId: string;
}

interface ListenIncomingMessageObject extends BasicIncomingMessageObject {
  type: "listen";
}

interface JoinIncomingMessageObject extends BasicIncomingMessageObject {
  type: "join";
}

export interface ActionIncomingMessageObject
  extends BasicIncomingMessageObject {
  type: "action";
  action: GameAction;
}

export type WebsocketIncomingMessageObject =
  | ListenIncomingMessageObject
  | JoinIncomingMessageObject
  | ActionIncomingMessageObject;

export interface AutomaticAction {
  action: GameAction;
  delay: number;
}
