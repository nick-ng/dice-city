import { useEffect } from "react";

import type { GameData, PlayerAction } from "~common/types/index.js";

import { getPlayerOrderStartingFromPlayer } from "~common/other-stuff/browser-safe-stuff.js";
import { establishmentReference } from "~common/constants/buildings.js";

import { getName } from "~front/utils/name-generator.js";
import { useOptions } from "~front/hooks/options-context.js";

import Build from "~front/app/build/index.js";
import City from "~front/app/city/index.js";
import DiceControls from "./dice-controls.js";

interface GameProps {
	gameData: GameData;
	sendViaWebSocket: (action: PlayerAction) => void;
}

const pendingActionsForMe = (
	pendingActions: GameData["gameState"]["publicState"]["common"]["pendingActions"],
	myPlayerId: string
): string[] => {
	return pendingActions
		.filter((p) => p.playerId === myPlayerId)
		.map((p) => p.action);
};

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
	const myLandmarkCount = Object.values(myState.city.landmarks).reduce(
		(p, c) => (c ? p + 1 : p),
		0
	);

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

	// @todo(nick-ng): notice so you know if a player is deciding who to use their tv station etc. on.
	return (
		<div className="flex flex-row">
			<div className="flex-grow">
				<h1>Dice City</h1>
				<div>
					{!myTurn && (
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
					{pendingActionsForMe(pendingActions, options.playerId).includes(
						"tv-station"
					) && (
						<div>
							<h3>TV Station</h3>
							<p>Choose a player to take 5 coins from.</p>
							{getPlayerOrderStartingFromPlayer(
								turnOrder,
								options.playerId,
								false
							).map((opponentId) => {
								const opponent = players.find((p) => p.id === opponentId);
								const opponentState = playerStates[opponentId];
								const landmarkCount = Object.values(
									opponentState.city.landmarks
								).reduce((prev, curr) => (curr ? prev + 1 : prev), 0);
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
											, M: {playerStates[opponentId].money}, L: {landmarkCount}
										</span>
									</button>
								);
							})}
						</div>
					)}
					<DiceControls
						gameData={gameData}
						options={options}
						onClick={(diceCount) => {
							sendViaWebSocket({
								...options,
								type: "roll-dice",
								payload: { diceCount },
							});
						}}
					/>
					<h2>Your Money: {myState.money}</h2>
					<details open={myTurn && turnPhase === "before-build"}>
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
				<ul className="list-inside">
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
					<ul className="list-inside list-decimal">
						{turnEvents.map((event, i) => (
							<li key={`${event}-${i}`}>
								{players.reduce((prev, { id, name }) => {
									return prev.replaceAll(
										`%${id}%`,
										getName(id, name, showNames || id === options.playerId)
									);
								}, event)}
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
