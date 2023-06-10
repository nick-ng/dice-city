import { useEffect } from "react";

import type { GameData, PlayerAction } from "~common/types/index.js";

import { getName } from "~front/utils/name-generator.js";
import { useOptions } from "~front/hooks/options-context.js";

import Build from "~front/app/build/index.js";
import City from "~front/app/city/index.js";

interface GameProps {
	gameData: GameData;
	sendViaWebSocket: (action: PlayerAction) => void;
}

export default function Game({ gameData, sendViaWebSocket }: GameProps) {
	const { options } = useOptions();
	const { gameDetails, gameState, gameSettings } = gameData;
	const { players, isPublic } = gameDetails;
	const { common, players: playerStates } = gameState.publicState;
	const { activePlayerId, supply, turnEvents, turnPhase, turnOrder } = common;
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

	// @todo(nick-ng): players list shows money (and landmark count?)
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
					{myTurn && turnPhase === "before-roll" && (
						<div className="mt-1">
							<button
								className="button-default px-4 py-2"
								onClick={() => {
									sendViaWebSocket({
										...options,
										type: "roll-dice",
										payload: { diceCount: 1 },
									});
								}}
							>
								Roll 1 🎲
							</button>
							{myState.city.landmarks.trainStation && (
								<button
									className="button-default px-4 py-2"
									onClick={() => {
										sendViaWebSocket({
											...options,
											type: "roll-dice",
											payload: { diceCount: 2 },
										});
									}}
								>
									Roll 2 🎲
								</button>
							)}
						</div>
					)}
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
					{turnOrder.map((opponentId) => {
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
							<details className="mt-2" id={`${opponentId}-city`}>
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
					{players.map((player) => {
						const isOpponent = player.id !== options.playerId;
						const landmarkCount = Object.values(
							playerStates[player.id].city.landmarks
						).reduce((p, c) => (c ? p + 1 : p), 0);
						return (
							<li
								className={
									player.id === activePlayerId ? "list-disc" : "list-[circle]"
								}
								key={player.id}
								role={player.id === options.playerId ? "listitem" : "button"}
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
											if (players[i].id === player.id) {
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
									{getName(player.id, player.name, showNames || !isOpponent)}
								</span>
								<span>
									{isOpponent
										? `, M: ${
												playerStates[player.id].money
										  }, L: ${landmarkCount}`
										: " (You)"}
								</span>
							</li>
						);
					})}
				</ul>
				<hr />
				<h3>Turn Events</h3>
				<ol className="list-inside list-decimal">
					{turnEvents.map((event) => (
						<li key={event}>
							{players.reduce((prev, { id, name }) => {
								return prev.replaceAll(
									`%${id}%`,
									getName(id, name, showNames || id === options.playerId)
								);
							}, event)}
						</li>
					))}
				</ol>
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
