import { GameData } from "../../../../src-common/types/index.js";

import Supply from "../../supply/index.js";
import City from "../../city/index.js";

interface StateDisplayProps {
  note: string;
  gameState: GameData["gameState"];
  gameSettings: GameData["gameSettings"];
}

export default function StateDisplay({
  note,
  gameState,
  gameSettings,
}: StateDisplayProps) {
  const { publicState } = gameState;
  const { common: commonState, players: playersState } = publicState;
  const { supply } = commonState;

  return (
    <div>
      <p>{note}</p>
      <details>
        <summary>Debug</summary>
        <pre>{JSON.stringify(gameState, null, "  ")}</pre>
      </details>
      <h2>Supply</h2>
      <Supply supply={supply} />
      <h2>Players</h2>
      {Object.values(playersState).map((playerState) => (
        <div key={playerState.playerId}>
          <City
            city={playerState.city}
            availableLandmarks={gameSettings.landmarks}
            onClick={(buildingKey) => {
              console.info(`${playerState.playerId} clicked ${buildingKey}`);
            }}
          />
        </div>
      ))}
    </div>
  );
}
