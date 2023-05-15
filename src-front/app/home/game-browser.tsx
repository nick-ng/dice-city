import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  newGameRequestSchema,
  newGameResponseSchema,
} from "~common/types/schemas/message.js";
import { useOptions } from "~front/hooks/options-context.js";

export default function GameBrowser() {
  const { options } = useOptions();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { playerId } = options;
  console.log("playerId", playerId);

  return (
    <div>
      <h2>Games</h2>
      {error && <div>Error getting a game.</div>}
      <button
        className="button-default"
        onClick={async () => {
          try {
            const res = await fetch(`${__API_ORIGIN__}/api/game`, {
              method: "POST",
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newGameRequestSchema.parse({ playerId })),
            });

            const { gameId } = newGameResponseSchema.parse(await res.json());

            console.log("gameId", gameId);
            navigate(`/game/${gameId}`);
          } catch (e) {
            if (e instanceof Error) {
              setError(`Error starting a new game: ${e.message}`);
            } else {
              setError(`Error starting a new game.`);
            }
          }
        }}
      >
        Host Game
      </button>
    </div>
  );
}
