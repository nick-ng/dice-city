import type { GameData, Action } from "~common/types/index.js";

export interface TestScenario {
  tags: string[];
  display: string;
  startingData: GameData;
  action: Action;
}
