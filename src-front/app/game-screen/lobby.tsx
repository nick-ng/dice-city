import type { GameData, PlayerAction } from "~common/types/index.js";

import { useParams } from "react-router-dom";

import { joinAction } from "~common/actions/join.js";
import { startAction } from "~common/actions/start.js";
import { supplyTypeSchema } from "~common/types/schemas/game.js";
import { getName } from "~front/utils/name-generator.js";
import { useOptions } from "~front/hooks/options-context.js";

import ToolTip from "~front/app/tool-tip/index.js";
import Instructions from "../instructions/index.js";

interface LobbyProps {
	gameData: GameData;
	sendViaWebSocket: (action: PlayerAction) => void;
}

const SUPPLY_TYPE_MAP = {
	total: "Total (Base game)",
	variable: "Variable (Harbour expansion)",
	hybrid: "Hybrid (5-5-2, Recommended)",
};

// @todo(nick-ng): leave a game if you aren't the host
// @todo(nick-ng): kick a player from your game if you are the host
// @todo(nick-ng): ready check?
export default function Lobby({ gameData, sendViaWebSocket }: LobbyProps) {
	const { options } = useOptions();
	const { id: gameId } = useParams() as { id: string };
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

	const isHost = hostId === options.playerId;

	const joinError = joinAction(gameData, joinMessage, true).error;
	const startError = startAction(gameData, startMessage, true).error;

	return (
		<div className="flex flex-row">
			<div className="flex flex-shrink-0 flex-grow flex-col items-center">
				<div className="max-w-prose">
					<h2>Lobby</h2>
					<h2>Game: {getName(gameId, null, false)}</h2>
					<h2>Game Settings</h2>
					{isHost && (
						<table className="mb-1 border-separate border-spacing-1">
							<tbody>
								<tr>
									<td>
										<label htmlFor="supply-select">Supply Type:</label>
									</td>
									<td>
										<select
											id="supply-select"
											className="border border-gray-300 bg-white dark:bg-gray-800 dark:text-white"
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
									</td>
								</tr>
								<tr>
									<td>
										<label htmlFor="is-public-checkbox">Public:</label>
									</td>
									<td>
										<input
											id="is-public-checkbox"
											type="checkbox"
											checked={isPublic}
											onChange={() => {
												sendViaWebSocket({
													...options,
													type: "change-public",
													payload: {
														isPublic: !isPublic,
													},
												});
											}}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					)}
					{!isHost && (
						<div className="mb-1">
							Supply Type: {SUPPLY_TYPE_MAP[gameSettings.supplyType]}
						</div>
					)}
					<h3>
						{players.length > 0 ? "Players" : "No one has joined the game"}
					</h3>
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
			</div>
			<div className="flex flex-grow flex-col items-center">
				<Instructions showStory />
			</div>
		</div>
	);
}
