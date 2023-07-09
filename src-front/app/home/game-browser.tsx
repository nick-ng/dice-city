import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { NewGameRequest } from "~common/types/index.js";

import { gameListSchema } from "~common/types/schemas/game.js";
import { newGameResponseSchema } from "~common/types/schemas/message.js";
import { useOptions } from "~front/hooks/options-context.js";

import ToolTip from "~front/app/tool-tip/index.js";
import { getName } from "~front/utils/name-generator.js";

export default function GameBrowser() {
	const { options } = useOptions();
	const navigate = useNavigate();

	const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const [error, setError] = useState("");
	const [gameList, setGameList] = useState<
		{ gameId: string; playerCount: number }[]
	>([]);

	const { playerId, playerPassword, playerName } = options;

	const newGameRequest: NewGameRequest = {
		playerId,
		playerPassword,
		playerName,
	};

	const updateGameList = useCallback(async () => {
		try {
			const response = await fetch(`${__API_ORIGIN__}/api/game`, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "application/json",
				},
			});

			const result = gameListSchema.safeParse(await response.json());

			if (result.success) {
				setGameList(result.data);
			}
		} catch (e) {
			console.error("Error fetching game list");
		}
	}, []);

	useEffect(() => {
		if (intervalIdRef.current) {
			clearInterval(intervalIdRef.current);

			intervalIdRef.current = null;
		}

		intervalIdRef.current = setInterval(async () => {
			updateGameList();
		}, 10000);

		updateGameList();

		return () => {
			if (intervalIdRef.current) {
				clearInterval(intervalIdRef.current);

				intervalIdRef.current = null;
			}
		};
	}, []);

	return (
		<div>
			<h2>Games</h2>
			{error && <div>Error getting a game.</div>}
			<ToolTip
				message={!playerName ? "Enter a name in the top left corner." : ""}
			>
				<button
					className="button-default"
					disabled={!playerName}
					onClick={async () => {
						if (!playerName) {
							return;
						}

						try {
							const res = await fetch(`${__API_ORIGIN__}/api/game`, {
								method: "POST",
								headers: {
									"Access-Control-Allow-Origin": "*",
									"Content-Type": "application/json",
								},
								body: JSON.stringify(newGameRequest),
							});

							const { gameId } = newGameResponseSchema.parse(await res.json());

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
			</ToolTip>
			<hr className="my-1" />
			<div>
				<table className="border-separate border-spacing-y-2">
					<thead>
						<th className="text-left">Game</th>
						<th>Players</th>
						<th></th>
					</thead>
					<tbody>
						{gameList.map(({ gameId: thisGameId, playerCount }) => (
							<tr key={thisGameId}>
								<td>{getName(thisGameId)}</td>
								<td className="text-center">{playerCount} / 5</td>
								<td>
									<Link
										className="button-default select-none bg-white text-black no-underline dark:bg-gray-800 dark:text-white"
										to={`/game/${thisGameId}`}
									>
										Join Game Lobby
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<button className="button-default" onClick={updateGameList}>
					Refresh Game List
				</button>
			</div>
		</div>
	);
}
