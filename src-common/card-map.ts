import type { ProgramCard } from "./game-types";

const cardList: readonly ProgramCard["action"][] = Object.freeze([
  // 1 - 6 (6)
  "U-Turn",
  "U-Turn",
  "U-Turn",
  "U-Turn",
  "U-Turn",
  "U-Turn",
  // 7 - 42 (36)
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  "Rotate Left",
  "Rotate Right",
  // 43 - 48 (6)
  "Back Up",
  "Back Up",
  "Back Up",
  "Back Up",
  "Back Up",
  "Back Up",
  // 49 - 66 (18)
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  "Move 1",
  // 67 - 78 (12)
  "Move 2",
  "Move 2",
  "Move 2",
  "Move 2",
  "Move 2",
  "Move 2",
  "Move 2",
  "Move 2",
  "Move 2",
  "Move 2",
  "Move 2",
  "Move 2",
  // 79 - 84 (6)
  "Move 3",
  "Move 3",
  "Move 3",
  "Move 3",
  "Move 3",
  "Move 3",
]);

export const getCardMap = (): { [cardId: string]: ProgramCard } => {
  return cardList.reduce((prev, curr, i) => {
    const priority = i + 1;
    const id = `program-card-${priority.toString().padStart(2, "0")}`;

    prev[id] = {
      id,
      action: curr,
      priority,
    };

    return prev;
  }, {} as { [cardId: string]: ProgramCard });
};

export const shuffle = <T>(inputArray: readonly T[]): T[] =>
  inputArray
    .map((data) => ({
      data,
      sortValue: Math.random(),
    }))
    .sort((a, b) => a.sortValue - b.sortValue)
    .map(({ data }) => data);
