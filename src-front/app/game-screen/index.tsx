import { useParams } from "react-router-dom";

import { useOptions } from "~front/hooks/options-context.js";
import { useGameSocket } from "~front/hooks/use-game-socket.js";

export default function GameScreen() {
  const params = useParams() as { id: string };
  const { options } = useOptions();

  const { playerId, playerPassword, playerName } = options;

  const { playerGameData, sendViaWebSocket } = useGameSocket(params.id, {
    id: playerId || "",
    password: playerPassword || "",
  });

  return (
    <div>
      <h2>Game Screen</h2>
      <button
        className="button-default"
        onClick={() => {
          sendViaWebSocket({
            type: "roll-dice",
            payload: { diceCount: 1 },
            playerId: playerId || "",
          });
        }}
      >
        Roll Dice
      </button>
      <pre>{JSON.stringify(playerGameData, null, "  ")}</pre>
    </div>
  );
}
