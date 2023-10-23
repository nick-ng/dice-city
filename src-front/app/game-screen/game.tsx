import type { GameData, PlayerAction } from "~common/types/index.js";
import { useEffect } from "react";
import { getPlayerOrderStartingFromPlayer } from "~common/other-stuff/browser-safe-stuff.js";
import { getName } from "~front/utils/name-generator.js";
import { useOptions } from "~front/hooks/options-context.js";
import Build from "~front/app/build/index.js";
import City from "~front/app/city/index.js";
import DiceControls from "./dice-controls.js";
import HarbourControls from "./harbour-controls.js";
import BusinessCentreControls from "./business-centre-controls.js";
import SideBar from "./side-bar.js";

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
		turnPhase,
		turnOrder,
		pendingActions,
		diceRolls,
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
	return (
		<div className="flex h-full flex-row">
			<div className="h-full flex-grow overflow-y-scroll">
				<div className="relative md:ml-1 xl:ml-4">
					<h1 id="game-top">Dice City</h1>
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
					{turnPhase !== "before-roll" && (
						<div className="border-default absolute right-6 top-4 z-20 flex animate-dice-roll-attention-light flex-col items-center rounded bg-white pb-2 dark:animate-dice-roll-attention-dark dark:bg-gray-800">
							<div>
								{diceRolls.length === 1
									? "Roll"
									: `Roll (${diceRolls.reduce((a, r) => a + r, 0)})`}
							</div>
							<div className="flex flex-row">
								{diceRolls.map((roll, i) => (
									<div
										key={`${roll}-${i}`}
										className="border-strong mr-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white first-of-type:ml-2 dark:bg-gray-800 xl:h-12 xl:w-12 xl:text-2xl"
									>
										{roll}
									</div>
								))}
							</div>
						</div>
					)}
				</div>
				<div>
					{myState && turnPhase !== "end" && !myTurn && (
						<div className="md:mx-1 xl:mx-4">
							Waiting for{" "}
							{getName(
								activePlayerId,
								players.find((p) => p.id === activePlayerId)?.name,
								showNames
							)}{" "}
							to finish their turn.
						</div>
					)}
					<div className="md:mx-1 xl:mx-4">
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
											className="button-default animate-attention px-4 py-2"
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
						<HarbourControls
							gameData={gameData}
							options={options}
							onClick={(skip) => {
								sendViaWebSocket({
									...options,
									type: "harbour-change-roll",
									payload: {
										skip,
									},
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
					</div>
					{myState && (
						<h2 className="md:mx-1 xl:mx-4">Your Money: {myState.money}</h2>
					)}
					<details
						className={`mt-2 bg-gray-100 py-1 dark:bg-gray-700 md:px-1 xl:px-4`}
						open={
							options.alwaysShowSupply ||
							turnPhase === "end" ||
							(myTurn && turnPhase === "before-build")
						}
					>
						<summary className="no-underline">
							<h2 className="inline-block underline">Supply</h2>
						</summary>
						<Build
							city={
								myState?.city || {
									landmarks: landmarks.reduce(
										(accumulator, landmark) => ({
											...accumulator,
											[landmark]: false,
										}),
										{}
									),
									establishments: {},
								}
							}
							onBuild={
								myTurn && turnPhase === "before-build"
									? (e) => {
											sendViaWebSocket({
												...options,
												type: "build",
												payload: {
													buildingKey: e,
												},
											});
									  }
									: undefined
							}
							supply={supply}
							gameData={gameData}
							options={options}
						/>
					</details>
					{myState && (
						<div className="mt-2 bg-green-100 py-1 dark:bg-green-900 md:px-1 xl:px-4">
							<h2 id="you-city">
								Your City, Landmark{myLandmarkCount !== 1 ? "s" : ""}:{" "}
								{myLandmarkCount}
							</h2>
							<City availableLandmarks={landmarks} city={myState.city} isMine />
						</div>
					)}
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
								className={`mt-2 py-1 md:px-1 xl:px-4 ${
									myState ? "bg-orange-100 dark:dark:bg-orange-900" : ""
								}`}
								id={`${opponentId}-city`}
								open={
									!myState || options.alwaysShowCities || turnPhase === "end"
								}
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
									isOpponent={!!myState}
								/>
							</details>
						);
					})}
				</div>
			</div>
			<SideBar gameData={gameData} options={options} />
		</div>
	);
}
