import type { GameData } from "~common/types/index.js";

import EstablishmentList from "~front/app/establishment-list/index.js";
import City from "../../city/index.js";

interface StateDisplayProps {
  note?: string;
  gameState: GameData["gameState"];
  gameSettings: GameData["gameSettings"];
}

const playerColors = [
  "bg-red-100 dark:bg-red-900",
  "bg-yellow-100 dark:bg-yellow-900",
  "bg-green-100 dark:bg-green-800",
  "bg-blue-100 dark:bg-blue-800",
];

export default function StateDisplay({
  gameState,
  gameSettings,
}: StateDisplayProps) {
  const { publicState } = gameState;
  const { common: commonState, players: playersState } = publicState;
  const { supply } = commonState;

  return (
    <div>
      <div className="bg-gray-200 dark:bg-gray-700">
        <h3>Supply</h3>
        <EstablishmentList establishments={supply} />
      </div>
      {Object.values(playersState).map((playerState, i) => (
        <div className={playerColors[i]} key={playerState.playerId}>
          <h3>Player: {playerState.playerId}</h3>
          <div>Money: {playerState.money}</div>
          <City
            city={playerState.city}
            availableLandmarks={gameSettings.landmarks}
            onClick={(buildingKey) => {
              console.info(`${playerState.playerId} clicked ${buildingKey}`);
            }}
          />
        </div>
      ))}
      <details>
        <summary>Debug</summary>
        <pre>{JSON.stringify(gameState, null, "  ")}</pre>
      </details>
    </div>
  );
}
