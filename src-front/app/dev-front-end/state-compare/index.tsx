import { useState } from "react";

import type { GameData, Action } from "~common/types/index.js";
import { gameDataSchema } from "~common/types/schemas/game.js";
import { performAction } from "~common/actions/index.js";

import { noAction } from "~common/actions/test-data/no-action.js";
import { buildActions } from "~common/actions/test-data/build-action.js";

import StateDisplay from "./state-display.js";

const gameSettings: GameData["gameSettings"] = {
  landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
  timeLimitSeconds: 1000,
  timeLimitType: "off",
};

const dataAndActions = [noAction, ...buildActions].map((stateAndAction, i) => ({
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
  const [chosenStateAndActionId, setChosenStateAndActionId] = useState(0);

  const { startingData, action, display } =
    dataAndActions.find(
      (dataAndAction) => dataAndAction.id === chosenStateAndActionId
    ) || {};

  const result = startingData && action && applyAction(startingData, action);
  const finalData = result?.gameData;
  const error = result?.error;

  return (
    <div>
      <h1>State Compare</h1>
      <select
        className="mx-1 border border-gray-300 bg-white dark:bg-gray-800 dark:text-white"
        value={chosenStateAndActionId}
        onChange={(e) => {
          setChosenStateAndActionId(parseInt(e.target.value, 10));
        }}
      >
        {dataAndActions.map(({ display, id }) => (
          <option key={id} value={id}>
            {display}
          </option>
        ))}
      </select>
      {error && <div>Error: {error}</div>}
      {startingData?.gameState ? (
        <div>
          <h2>Starting State: {display}</h2>
          <StateDisplay
            gameState={startingData?.gameState}
            gameSettings={gameSettings}
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
            gameState={finalData?.gameState}
            gameSettings={gameSettings}
            note={display ? `${display} after` : ""}
          />
        </div>
      ) : (
        <div>No final state</div>
      )}
    </div>
  );
}
