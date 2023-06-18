import { useEffect } from "react";

import type { GameData, PlayerAction } from "~common/types/index.js";

import { getPlayerOrderStartingFromPlayer } from "~common/other-stuff/browser-safe-stuff.js";

import { getName, replaceName } from "~front/utils/name-generator.js";
import { useOptions } from "~front/hooks/options-context.js";

import Build from "~front/app/build/index.js";
import City from "~front/app/city/index.js";
import DiceControls from "./dice-controls.js";
import BusinessCentreControls from "./business-centre-controls.js";

interface GameProps {
	gameData: GameData;
	sendViaWebSocket: (action: PlayerAction) => void;
}

export default function Game({ gameData, sendViaWebSocket }: GameProps) {
	const { options } = useOptions();
	const { gameDetails, gameState, gameSettings } = gameData;
	const { players, isPublic } = gameDetails;
	const { common, players: playerStates } = gameState.publicState;
	const {
		activePlayerId,
		supply,
		turnEvents,
		turnPhase,
		turnOrder,
		pendingActions,
	} = common;
	const { landmarks } = gameSettings;

	const showNames = isPublic ? options.showNamesPublic : options.showNames;

	const myState = playerStates[options.playerId];
	const myTurn = activePlayerId === options.playerId;

	const landmarkCounts = Object.entries(playerStates).reduce(
		(accumulator, [playerId, playerState]) => {
			accumulator[playerId] = Object.values(playerState.city.landmarks).reduce(
				(p, c) => (c ? p + 1 : p),
				0
			);

			return accumulator;
		},
		{} as { [playerId: string]: number }
	);

	const myLandmarkCount = landmarkCounts[options.playerId];

	const winnerId = Object.entries(landmarkCounts).find(
		(p) => p[1] === gameSettings.landmarks.length
	)?.[0];

	const winner = players.find((p) => p.id === winnerId);

	const pendingActionsForMe = pendingActions
		.filter((p) => p.playerId === options.playerId)
		.map((p) => p.action);

	useEffect(() => {
		if (myTurn && turnPhase === "before-build" && myState.money === 0) {
			sendViaWebSocket({
				...options,
				type: "build",
				payload: {
					buildingKey: "",
				},
			});
		}
	}, [turnPhase, myTurn]);

	// @todo(nick-ng): show if an opponent is deciding who to use their tv station etc. on
	// @todo(nick-ng): show what was rolled in the main area
	// @todo(nick-ng): show something if you go to an in-progress game's url and you aren't in the game
	return (
		<div className="flex flex-row">
			<div className="flex-grow">
				<h1>Dice City</h1>
				{turnPhase === "end" && winner && (
					<div>
						<p>The game is over.</p>
						{winnerId === options.playerId ? (
							<h2>🏆 You are the winner! 🏆</h2>
						) : (
							<h2>
								{getName(winner.id, winner.name, showNames)} is the winner!
							</h2>
						)}
					</div>
				)}
				<div>
					{turnPhase !== "end" && !myTurn && (
						<div>
							Waiting for{" "}
							{getName(
								activePlayerId,
								players.find((p) => p.id === activePlayerId)?.name,
								showNames
							)}{" "}
							to finish their turn.
						</div>
					)}
					{pendingActionsForMe.includes("tv-station") && (
						<div>
							<h3>TV Station</h3>
							<p>Choose a player to take 5 coins from.</p>
							{getPlayerOrderStartingFromPlayer(
								turnOrder,
								options.playerId,
								false
							).map((opponentId) => {
								const opponent = players.find((p) => p.id === opponentId);

								return (
									<button
										key={opponentId}
										className="button-default px-4 py-2"
										onClick={() => {
											sendViaWebSocket({
												...options,
												type: "tv-station",
												payload: {
													opponentId,
												},
											});
										}}
									>
										<span>
											{getName(opponentId, opponent?.name, showNames)}
										</span>
										<span>
											, M: {playerStates[opponentId].money}, L:{" "}
											{landmarkCounts[opponentId]}
										</span>
									</button>
								);
							})}
						</div>
					)}
					<BusinessCentreControls
						gameData={gameData}
						options={options}
						onClick={(payload) => {
							sendViaWebSocket({
								...options,
								type: "business-centre",
								payload,
							});
						}}
					/>
					<DiceControls
						gameData={gameData}
						options={options}
						rollHandler={(diceCount) => {
							sendViaWebSocket({
								...options,
								type: "roll-dice",
								payload: { diceCount },
							});
						}}
						rerollHandler={(skip) => {
							sendViaWebSocket({
								...options,
								type: "reroll-dice",
								payload: {
									skip,
								},
							});
						}}
					/>
					<h2>Your Money: {myState.money}</h2>
					<details
						open={
							turnPhase === "end" || (myTurn && turnPhase === "before-build")
						}
					>
						<summary className="no-underline">
							<h2 className="inline-block underline">Supply</h2>
						</summary>
						<Build
							city={myState.city}
							onBuild={(e) => {
								sendViaWebSocket({
									...options,
									type: "build",
									payload: {
										buildingKey: e,
									},
								});
							}}
							supply={supply}
							gameData={gameData}
							options={options}
						/>
					</details>
					<h2 className="mt-2" id="you-city">
						Your City, Landmark{myLandmarkCount !== 1 ? "s" : ""}:{" "}
						{myLandmarkCount}
					</h2>
					<City availableLandmarks={landmarks} city={myState.city} />
					{getPlayerOrderStartingFromPlayer(
						turnOrder,
						options.playerId,
						true
					).map((opponentId) => {
						if (opponentId === options.playerId) {
							return null;
						}

						const opponentState = playerStates[opponentId];

						if (!opponentState) {
							return null;
						}

						const opponentName = players.find((p) => p.id === opponentId)?.name;

						const landmarkCount = Object.values(
							playerStates[opponentId].city.landmarks
						).reduce((p, c) => (c ? p + 1 : p), 0);

						return (
							<details
								key={opponentId}
								className="mt-2"
								id={`${opponentId}-city`}
								open={turnPhase === "end"}
							>
								<summary className="text-2xl">
									{getName(opponentId, opponentName, showNames)}, Money:{" "}
									{opponentState.money}, Landmark
									{landmarkCount !== 1 ? "s" : ""}: {landmarkCount}
									{}
								</summary>
								<City
									availableLandmarks={landmarks}
									city={opponentState.city}
								/>
							</details>
						);
					})}
				</div>
			</div>
			<div className="flex-shrink-0">
				<h3>Players</h3>
				<ul className="ml-4 list-outside">
					{getPlayerOrderStartingFromPlayer(
						turnOrder,
						options.playerId,
						true
					).map((playerId) => {
						const isOpponent = playerId !== options.playerId;
						const player = players.find((p) => p.id === playerId);
						const landmarkCount = Object.values(
							playerStates[playerId].city.landmarks
						).reduce((p, c) => (c ? p + 1 : p), 0);
						return (
							<li
								className={
									playerId === activePlayerId ? "list-disc" : "list-[circle]"
								}
								key={playerId}
								role={playerId === options.playerId ? "listitem" : "button"}
								onClick={() => {
									let thisPlayerEl: HTMLElement | null = null;
									for (let i = 0; i < players.length; i++) {
										if (players[i].id === options.playerId) {
											continue;
										}

										const detailEl = document.getElementById(
											`${players[i].id}-city`
										);
										if (detailEl) {
											if (players[i].id === playerId) {
												detailEl.setAttribute("open", "");
												thisPlayerEl = detailEl;
											} else {
												detailEl.removeAttribute("open");
											}
										}

										if (thisPlayerEl) {
											thisPlayerEl.scrollIntoView({ behavior: "smooth" });
										}
									}
								}}
							>
								<span>
									{getName(playerId, player?.name, showNames || !isOpponent)}
								</span>
								<span>
									{isOpponent
										? `, M: ${playerStates[playerId].money}, L: ${landmarkCount}`
										: " (You)"}
								</span>
							</li>
						);
					})}
				</ul>
				<hr />
				<details open>
					<summary className="text-xl">Turn Events</summary>
					<ul className="ml-4 list-outside list-disc">
						{turnEvents.map((event, i) => (
							<li
								key={`${event}-${i}`}
								className="max-w-xs px-0.5 even:bg-gray-200 dark:even:bg-gray-600"
							>
								{replaceName(players, !!showNames, options.playerId, event)}
							</li>
						))}
					</ul>
				</details>
			</div>
			<button
				className="button-default fixed bottom-4 right-4"
				onClick={() => {
					for (let i = 0; i < players.length; i++) {
						if (players[i].id === options.playerId) {
							continue;
						}

						const detailEl = document.getElementById(`${players[i].id}-city`);
						if (detailEl) {
							detailEl.removeAttribute("open");
						}
					}

					scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				}}
			>
				Up ⬆️
			</button>
		</div>
	);
}
