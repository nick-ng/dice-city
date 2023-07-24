import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useOptions } from "~front/hooks/options-context.js";
import { useGameSocket } from "~front/hooks/use-game-socket.js";

import Loading from "~front/app/loading/index.js";

import Lobby from "./lobby.js";
import Game from "./game.js";

export default function GameScreen() {
	const params = useParams() as { id: string };
	const [search, _setSearch] = useSearchParams();
	const { options, setOptions } = useOptions();

	const { playerId, playerPassword } = options;

	const { playerGameData, sendViaWebSocket, latency } = useGameSocket(
		params.id,
		{
			id: playerId,
			password: playerPassword,
		}
	);

	useEffect(() => {
		setOptions({
			ping: latency,
		});

		return () => {
			setOptions({
				ping: null,
			});
		};
	}, [latency]);

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
	const { turnPhase } = common;

	return (
		<div className="md:mx-1 xl:mx-4">
			{turnPhase === "lobby" && (
				<Lobby gameData={playerGameData} sendViaWebSocket={sendViaWebSocket} />
			)}
			{turnPhase !== "lobby" && (
				<Game gameData={playerGameData} sendViaWebSocket={sendViaWebSocket} />
			)}
			{search.get("debug") === "yes" && (
				<details>
					<summary>Debug</summary>
					<pre>{JSON.stringify(playerGameData, null, "  ")}</pre>
				</details>
			)}
		</div>
	);
}
