import { useParams } from "react-router-dom";

import { useOptions } from "~front/hooks/options-context.js";
import { useGameSocket } from "~front/hooks/use-game-socket.js";

import Loading from "~front/app/loading/index.js";

import Lobby from "./lobby.js";

export default function GameScreen() {
  const params = useParams() as { id: string };
  const { options } = useOptions();

  const { playerId, playerPassword, playerName } = options;

  const { playerGameData, sendViaWebSocket } = useGameSocket(params.id, {
    id: playerId,
    password: playerPassword,
  });

  if (!playerGameData) {
    return (
      <div>
        {params.id && <div>Connecting to game {params.id}</div>}
        <Loading />
      </div>
    );
  }

  const { gameState } = playerGameData;
  const { publicState } = gameState;
  const { common } = publicState;
  const { activePlayerId, turnPhase } = common;

  // @todo(nick-ng): make actual game screen
  // @todo(nick-ng): check action on front-end and display error message or send through websocket if there is no error
  return (
    <div>
      {turnPhase === "lobby" && (
        <Lobby gameData={playerGameData} sendViaWebSocket={sendViaWebSocket} />
      )}
      {turnPhase !== "lobby" && (
        <>
          <h2>Game Screen</h2>
          {activePlayerId === playerId && <h3>It's your turn.</h3>}
          {!playerName && <p>Enter your name in the top right corner.</p>}
          {(!playerPassword || !playerId) && <p>Something has gone wrong.</p>}
          <button
            className="button-default"
            disabled={!playerName || !playerPassword || !playerId}
            onClick={() => {
              if (playerName && playerPassword && playerId) {
                sendViaWebSocket({
                  ...options,
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
                  ...options,
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
        </>
      )}
      <details>
        <summary>Dev Stuff</summary>
        <pre>{JSON.stringify(playerGameData, null, "  ")}</pre>
      </details>
    </div>
  );
}
