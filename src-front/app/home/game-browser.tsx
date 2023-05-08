import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { newGameResponseSchema } from "~common/types/schemas/web-requests.js";

export default function GameBrowser() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

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
