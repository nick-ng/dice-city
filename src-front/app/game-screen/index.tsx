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

  // @todo(nick-ng): make actual game screen
  // @todo(nick-ng): check action on front-end and display error message or send through websocket if there is no error
  return (
    <div>
      <h2>Game Screen</h2>
      {!playerName && <p>Enter your name in the top right corner.</p>}
      {(!playerPassword || !playerId) && <p>Something has gone wrong.</p>}
      <button
        className="button-default"
        disabled={!playerName || !playerPassword || !playerId}
        onClick={() => {
          if (playerName && playerPassword && playerId) {
            sendViaWebSocket({
              type: "join",
              payload: { playerName },
            });
          }
        }}
      >
        Join Game
      </button>
      <button
        className="button-default"
        disabled={!playerName || !playerPassword || !playerId}
        onClick={() => {
          if (playerName && playerPassword && playerId) {
            sendViaWebSocket({
              type: "start",
            });
          }
        }}
      >
        Start
      </button>
      <button
        className="button-default"
        onClick={() => {
          sendViaWebSocket({
            type: "roll-dice",
            payload: { diceCount: 1 },
          });
        }}
      >
        Roll Dice
      </button>
      <pre>{JSON.stringify(playerGameData, null, "  ")}</pre>
    </div>
  );
}
