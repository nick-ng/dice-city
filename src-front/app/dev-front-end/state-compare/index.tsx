import { useState } from "react";

import type { GameData, Action } from "~common/types/index.js";
import { gameDataSchema } from "~common/types/schemas/game.js";
import { performAction } from "~common/actions/index.js";

import { buildTests } from "~common/actions/test-data/build-test.js";
import { buildTests2 } from "~common/actions/test-data/build-test-2.js";
import { rollDiceTests } from "~common/actions/test-data/roll-dice-test.js";
import { rollDiceTests2 } from "~common/actions/test-data/roll-dice-test-2.js";
import { greenBakery0 } from "~common/actions/test-data/green-bakery-test-0.js";
import { greenBakery } from "~common/actions/test-data/green-bakery-test.js";
import { greenBakery2 } from "~common/actions/test-data/green-bakery-test-2.js";
import { greenBakery3 } from "~common/actions/test-data/green-bakery-test-3.js";
import { greenConvenienceStore } from "~common/actions/test-data/green-convenience-store-test.js";
import { greenConvenienceStore2 } from "~common/actions/test-data/green-convenience-store-test-2.js";
import { greenCheeseFactoryTests } from "~common/actions/test-data/green-cheese-factory-test-1.js";
import { greenFurnitureFactoryTests } from "~common/actions/test-data/green-furniture-factory-test-1.js";

import StateDisplay from "./state-display.js";

const dataAndActions = [
  buildTests,
  buildTests2,
  rollDiceTests,
  rollDiceTests2,
  greenBakery0,
  greenBakery,
  greenBakery2,
  greenBakery3,
  greenConvenienceStore,
  greenConvenienceStore2,
  greenCheeseFactoryTests,
  greenFurnitureFactoryTests,
]
  .flat()
  .map((stateAndAction, i) => ({
    ...stateAndAction,
    id: i,
  }));

const applyAction = (
  initialData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  const clonedData = gameDataSchema.parse(
    JSON.parse(JSON.stringify(initialData))
  );

  return performAction(clonedData, action);
};

export default function StateCompare() {
  const [chosenTags, setChosenTags] = useState<string[]>([]);
  const [chosenStateAndActionId, setChosenStateAndActionId] = useState(0);

  const { startingData, action, display } =
    dataAndActions.find(
      (dataAndAction) => dataAndAction.id === chosenStateAndActionId
    ) || {};

  const result = startingData && action && applyAction(startingData, action);
  const finalData = result?.gameData;
  const error = result?.error;

  const allTags = dataAndActions.reduce((prev, curr) => {
    curr.tags.forEach((tag) => {
      prev.add(tag);
    });

    return prev;
  }, new Set() as Set<string>);

  return (
    <div>
      <h1>State Compare</h1>
      <div>
        <button
          className="button-default m-1"
          onClick={() => {
            setChosenTags([]);
          }}
        >
          Clear Tags
        </button>
        {[...allTags].map((tag) => (
          <label className="ml-1 mr-2" key={tag}>
            <input
              className="mr-1"
              type="checkbox"
              checked={chosenTags.includes(tag)}
              onChange={() => {
                setChosenTags((prevTags) => {
                  if (prevTags.includes(tag)) {
                    return prevTags.filter((a) => a !== tag);
                  }
                  return [...prevTags, tag];
                });
              }}
            />
            {tag}
          </label>
        ))}
      </div>
      <select
        className="mx-1 border border-gray-300 bg-white dark:bg-gray-800 dark:text-white"
        value={chosenStateAndActionId}
        onChange={(e) => {
          setChosenStateAndActionId(parseInt(e.target.value, 10));
        }}
      >
        {dataAndActions
          .filter(
            ({ tags }) =>
              chosenTags.length === 0 ||
              tags.some((t) => chosenTags.includes(t))
          )
          .map(({ display, id }) => (
            <option key={id} value={id}>
              {display}
            </option>
          ))}
      </select>
      <div>{error ? `Error: ${error}` : "Success"}</div>
      {startingData?.gameState ? (
        <div>
          <h2>Starting State: {display}</h2>
          <StateDisplay
            gameData={startingData}
            note={display ? `${display} before` : ""}
          />
        </div>
      ) : (
        <div>No starting state</div>
      )}
      {finalData?.gameState ? (
        <div>
          <h2>Final State: {display}</h2>
          <StateDisplay
            gameData={finalData}
            note={display ? `${display} after` : ""}
          />
        </div>
      ) : (
        <div>No final state</div>
      )}
    </div>
  );
}
