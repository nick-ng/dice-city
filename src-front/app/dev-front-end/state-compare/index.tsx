import { useState } from "react";

import type { GameData } from "~common/types/index.js";

import StateDisplay from "./state-display.js";
import * as noAction from "./state-action/no-action.js";
import * as noActionB from "./state-action/no-action-b.js";

const gameSettings: GameData["gameSettings"] = {
  landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
  timeLimitSeconds: 1000,
  timeLimitType: "off",
};

const statesAndActions = [
  {
    display: "No Action 1",
    ...noAction,
  },
  {
    display: "No Action 2",
    ...noActionB,
  },
].map((stateAndAction, i) => ({
  ...stateAndAction,
  id: i,
}));

export default function StateCompare() {
  const [chosenStateAndActionId, setChosenStateAndActionId] = useState(0);

  const { startingState, action, display } =
    statesAndActions.find(
      (stateAndAction) => stateAndAction.id === chosenStateAndActionId
    ) || {};

  return (
    <div>
      <h1>State Compare</h1>
      <select
        value={chosenStateAndActionId}
        onChange={(e) => {
          setChosenStateAndActionId(parseInt(e.target.value, 10));
        }}
      >
        {statesAndActions.map(({ display, id }) => (
          <option key={id} value={id}>
            {display}
          </option>
        ))}
      </select>
      {startingState ? (
        <div>
          <h2>Starting State: {display}</h2>
          <StateDisplay
            gameState={startingState}
            gameSettings={gameSettings}
            note={display ? `${display} before` : ""}
          />
        </div>
      ) : (
        <div>No starting state</div>
      )}
    </div>
  );
}
