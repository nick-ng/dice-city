import type { GameData, Action } from "~common/types/index.js";

export interface StateAction {
  tags: string[];
  display: string;
  startingData: GameData;
  action: Action;
}
