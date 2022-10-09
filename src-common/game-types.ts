import D from "io-ts/Decoder";

import type { ActionIncomingMessageObject } from "./game-action-types";

import {
  basicMapItemDecoder,
  curvedConveyorMapItemDecoder,
  dockMapItemDecoder,
  flagMapItemDecoder,
  gearMapItemDecoder,
  laserMapItemDecoder,
  pitMapItemDecoder,
  powerUpMapItemDecoder,
  pusherMapItemDecoder,
  repairMapItemDecoder,
  straightConveyorMapItemDecoder,
  wallMapItemDecoder,
  mapItemNoIdDecoder,
  mapItemDecoder,
  mapNoIdDecoder,
  mapDecoder,
} from "./decoders/map";

export interface Scores {
  [index: string]: number;
}

export interface ProgramCard {
  id: string;
  action:
    | "Move 1"
    | "Move 2"
    | "Move 3"
    | "Back Up"
    | "Rotate Right"
    | "Rotate Left"
    | "U-Turn";
  priority: number;
}

export interface Position {
  x: number;
  y: number;
  facing: "up" | "down" | "left" | "right";
}

export interface Robot {
  playerId: string;
  status:
    | "ok"
    | "falling"
    | "destroyed"
    | "stand-by"
    | "powered-down"
    | "powered-on";
  damagePoints: number;
  lockedRegisters: number[];
  lives: number;
  position: Position;
  archiveMarkerId: number;
  design:
    | "random"
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | "#ffffff"
    | "#000000"
    | "#808080"
    | "dotted"
    | "dashed"
    | "double"
    | "ridge"
    | "outset";
  laser?: {
    height: number;
    width: number;
  } | null;
}

export interface ProgramCardInstruction {
  type: "program-card-instruction";
  playerId: string;
  payload: ProgramCard;
  register: number;
}

export interface ConveyorsMoveInstruction {
  type: "conveyors-move-instruction";
  playerId?: never;
  payload: {
    minSpeed: number;
  };
  register: number;
}

export interface GearsTurnInstruction {
  type: "gears-turn";
  playerId?: never;
  register: number;
}

export interface LasersFireInstruction {
  type: "lasers-fire-instruction";
  playerId?: never;
  payload: {
    shooter: "map" | "robots";
  };
  register: number;
}

export interface TouchCheckpointsInstruction {
  type: "touch-checkpoint-instruction";
  playerId?: never;
  payload?: never;
  register: number;
}

export type InstructionItem =
  | ProgramCardInstruction
  | ConveyorsMoveInstruction
  | GearsTurnInstruction
  | LasersFireInstruction
  | TouchCheckpointsInstruction;

export interface YesNoDecision {
  playerId: string;
  decision: "yes" | "no" | "undecided";
}

export interface LobbyGameState {
  state: "lobby";
  finishedProgrammingPlayers: string[];
  poweringDownNextTurn: YesNoDecision[];
  flagsTouched: { [playerId: string]: number };
  robots: Robot[];
  turn: number;
  turnPhase: number;
  animations: ("map-laser" | "robot-laser")[];
}

export type MainGameState = Omit<LobbyGameState, "state"> & {
  state: "main";
  seatOrder: string[];
  cardMap: { [cardId: string]: ProgramCard };
  discardedCards: string[];
};

export type OverGameState = Omit<MainGameState, "state"> & {
  state: "over";
};

export type GameState = LobbyGameState | MainGameState | OverGameState;

export interface OnePlayerSecrets {
  password: string;
  programRegisters: [
    string | null,
    string | null,
    string | null,
    string | null,
    string | null
  ];
  setRegisterTimestamp: number;
  cardsInHand: string[];
}

export type BasicMapItem = D.TypeOf<typeof basicMapItemDecoder>;
export type DockMapItem = D.TypeOf<typeof dockMapItemDecoder>;
export type FlagMapItem = D.TypeOf<typeof flagMapItemDecoder>;
export type WallMapItem = D.TypeOf<typeof wallMapItemDecoder>;
export type StraightConveyorMapItem = D.TypeOf<
  typeof straightConveyorMapItemDecoder
>;
export type CurvedConveyorMapItem = D.TypeOf<
  typeof curvedConveyorMapItemDecoder
>;
export type PitMapItem = D.TypeOf<typeof pitMapItemDecoder>;
export type GearMapItem = D.TypeOf<typeof gearMapItemDecoder>;
export type LaserMapItem = D.TypeOf<typeof laserMapItemDecoder>;
export type PusherMapItem = D.TypeOf<typeof pusherMapItemDecoder>;
export type RepairMapItem = D.TypeOf<typeof repairMapItemDecoder>;
export type PowerUpMapItem = D.TypeOf<typeof powerUpMapItemDecoder>;

export type MapItemNoId = D.TypeOf<typeof mapItemNoIdDecoder>;
export type MapItem = D.TypeOf<typeof mapItemDecoder>;
export type MapNoId = D.TypeOf<typeof mapNoIdDecoder>;
export type Map = D.TypeOf<typeof mapDecoder>;

export interface GameSettings {
  map: Map;
  timerStart: "never" | "first" | "penultimate";
  timerSeconds: number;
}

export interface PlayerSecrets {
  [key: string]: OnePlayerSecrets;
}

export interface GameSecrets {
  password: string;
  remainingDeck: string[];
  instructionQueue: InstructionItem[];
}

export interface Player {
  id: string;
  name: string;
}

export type Players = Player[];

export interface GameData {
  id: string;
  shortId: string;
  host: string;
  maxPlayers: number;
  players: Players;
  gameSettings: GameSettings;
  gameSecrets: GameSecrets;
  playerSecrets: PlayerSecrets;
  gameState: GameState;
  lastActionId: string;
  gameServer: string | null;
  resumeAction: ActionIncomingMessageObject | null;
}

export type InitObject = Partial<GameData> & {
  host: string;
  id: string;
  shortId: string;
};

export type PlayerGameData = Omit<
  GameData,
  "gameSecrets" | "playerSecrets" | "lastActionId" | "gameServer"
> & { yourSecrets: OnePlayerSecrets };

export interface PlayerDetails {
  playerName: string;
  playerId: string;
  playerPassword: string;
}
