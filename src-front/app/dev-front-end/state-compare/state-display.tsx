import type { GameData } from "~common/types/index.js";

import EstablishmentList from "~front/app/establishment-list/index.js";
import City from "../../city/index.js";
import { useEffect } from "react";

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
  const { supply, diceRolls, processedEstablishments } = commonState;

  const establishmentsInSupplyCount = Object.values(supply).flat().length;

  return (
    <div className="bg-gray-200 dark:bg-gray-700">
      <div>
        {diceRolls.length > 0 ? (
          <div>Rolled: {diceRolls.join(", ")}</div>
        ) : (
          <div>No Dice Rolled</div>
        )}
      </div>
      {processedEstablishments.length > 0 ? (
        <div>
          Processed Establishments: {processedEstablishments.length}
          <ul className="list-inside list-disc">
            {processedEstablishments.map((establishmentKey) => (
              <li key={establishmentKey}>{establishmentKey}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No Establishments Processed</div>
      )}
      <details>
        <summary className="w-max">
          Supply {establishmentsInSupplyCount}
        </summary>
        <EstablishmentList establishments={supply} />
      </details>
      {Object.values(playersState).map((playerState, i) => {
        const landmarkCount = Object.values(playerState.city.landmarks).filter(
          (a) => a
        ).length;
        const establishmentCount = Object.values(
          playerState.city.establishments
        ).flat().length;
        return (
          <details className={playerColors[i]} key={playerState.playerId}>
            <summary className="w-max">
              Player {playerState.playerId}, Money: {playerState.money},
              Landmark Count: {landmarkCount}, Establishment Count:{" "}
              {establishmentCount}
            </summary>
            <City
              city={playerState.city}
              availableLandmarks={gameSettings.landmarks}
              onClick={(buildingKey) => {
                console.info(`${playerState.playerId} clicked ${buildingKey}`);
              }}
            />
          </details>
        );
      })}
      <details>
        <summary>Debug</summary>
        <pre>{JSON.stringify(gameState, null, "  ")}</pre>
      </details>
    </div>
  );
}
