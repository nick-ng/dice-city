import type { GameData, PlayerAction } from "~common/types/index.js";

import { joinAction } from "~common/actions/join.js";
import { startAction } from "~common/actions/start.js";
import { supplyTypeSchema } from "~common/types/schemas/game.js";
import { getName } from "~front/utils/name-generator.js";
import { useOptions } from "~front/hooks/options-context.js";

import ToolTip from "~front/app/tool-tip/index.js";

interface LobbyProps {
	gameData: GameData;
	sendViaWebSocket: (action: PlayerAction) => void;
}

const SUPPLY_TYPE_MAP = {
	total: "Total (Base game)",
	variable: "Variable (Harbor expansion)",
	hybrid: "Hybrid (5-5-2, Recommended)",
};

// @todo(nick-ng): switch between different supply types
// @todo(nick-ng): make your game public
// @todo(nick-ng): leave a game if you aren't the host
// @todo(nick-ng): kick a player from your game if you are the host
// @todo(nick-ng): ready check?
export default function Lobby({ gameData, sendViaWebSocket }: LobbyProps) {
	const { options } = useOptions();
	const { gameDetails, gameSettings } = gameData;
	const { players, isPublic, hostId } = gameDetails;

	const showNames = isPublic ? options.showNamesPublic : options.showNames;

	const joinMessage: PlayerAction = {
		...options,
		type: "join",
		payload: { playerName: options.playerName },
	};

	const startMessage: PlayerAction = {
		...options,
		type: "start",
	};

	const joinError = joinAction(gameData, joinMessage, true).error;
	const startError = startAction(gameData, startMessage, true).error;

	return (
		<div>
			<h2>Game Lobby</h2>
			<h3>{players.length > 0 ? "Players" : "No one has joined the game"}</h3>
			<ul className="ml-5 list-outside list-disc">
				{players.map((player) => {
					return (
						<li key={player.id}>
							{getName(
								player.id,
								player.name,
								showNames || player.id === options.playerId
							)}
						</li>
					);
				})}
			</ul>
			<h3>Game Settings</h3>
			{hostId === options.playerId && (
				<div className="mb-1">
					<label>
						Supply Type:{" "}
						<select
							className="mx-1 border border-gray-300 bg-white dark:bg-gray-800 dark:text-white"
							value={gameSettings.supplyType}
							onChange={(e) => {
								sendViaWebSocket({
									...options,
									type: "change-supply",
									payload: {
										supplyType: supplyTypeSchema.parse(e.target.value),
									},
								});
							}}
						>
							{Object.entries(SUPPLY_TYPE_MAP).map(([key, display]) => (
								<option key={key} value={key}>
									{display}
								</option>
							))}
						</select>
					</label>
				</div>
			)}
			{hostId !== options.playerId && (
				<div className="mb-1">
					Supply Type: {SUPPLY_TYPE_MAP[gameSettings.supplyType]}
				</div>
			)}
			<ToolTip message={joinError}>
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
			</ToolTip>
			{hostId === options.playerId &&
				players.map((p) => p.id).includes(options.playerId) && (
					<ToolTip message={startError}>
						<button
							className="button-default w-28"
							onClick={() => {
								if (!startError) {
									sendViaWebSocket(startMessage);
								}
							}}
							disabled={!!startError}
						>
							Start Game
						</button>
					</ToolTip>
				)}
		</div>
	);
}
