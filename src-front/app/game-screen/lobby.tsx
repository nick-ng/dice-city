import type { GameData, PlayerAction } from "~common/types/index.js";

import { joinAction } from "~common/actions/join.js";
import { getName } from "~front/utils/name-generator.js";
import { useOptions } from "~front/hooks/options-context.js";

interface LobbyProps {
  gameData: GameData;
  sendViaWebSocket: (action: PlayerAction) => void;
}

export default function Lobby({ gameData, sendViaWebSocket }: LobbyProps) {
  const { options } = useOptions();
  const { gameDetails } = gameData;
  const { players, isPublic, hostId } = gameDetails;

  const showNames = isPublic ? options.showNamesPublic : options.showNames;

  const joinMessage: PlayerAction = {
    type: "join",
    playerId: options.playerId,
    payload: { playerName: options.playerName },
    playerPassword: options.playerPassword,
  };

  const joinError = joinAction(gameData, joinMessage, true).error;

  return (
    <div>
      <h2>Game Lobby</h2>
      <h3>{players.length > 0 ? "Players" : "No one has joined the game"}</h3>
      <ul className="list-inside list-disc">
        {players.map((player) => {
          return (
            <li key={player.id}>
              {showNames || player.id === options.playerId
                ? player.name || getName(player.id)
                : getName(player.id)}
            </li>
          );
        })}
      </ul>
      <div className="group relative inline-block">
        <button
          className="button-default w-24"
          onClick={() => {
            if (!joinError) {
              sendViaWebSocket(joinMessage);
            }
          }}
          disabled={!!joinError}
        >
          {players.map((p) => p.id).includes(options.playerId)
            ? "Joined ✅"
            : "Join Game"}
        </button>
        {joinError && (
          <div className="pointer-events-none absolute w-max border border-gray-600 bg-white p-2 px-4 opacity-0 group-hover:opacity-100 dark:border-gray-300 dark:bg-gray-800 dark:text-white">
            {joinError}
          </div>
        )}
      </div>
      {hostId === options.playerId && (
        <button className="button-default w-28">Start Game</button>
      )}
    </div>
  );
}
