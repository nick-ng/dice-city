import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { NewGameRequest } from "~common/types/index.js";

import { newGameResponseSchema } from "~common/types/schemas/message.js";
import { useOptions } from "~front/hooks/options-context.js";

import ToolTip from "~front/app/tool-tip/index.js";
import Instructions from "../instructions/index.js";

export default function GameBrowser() {
	const { options } = useOptions();
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const { playerId, playerPassword, playerName } = options;

	const newGameRequest: NewGameRequest = {
		playerId,
		playerPassword,
		playerName,
	};

	// @todo(nick-ng): show public games
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
		</div>
	);
}
