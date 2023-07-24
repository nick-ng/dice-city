import type { GameData } from "~common/types/index.js";

import EstablishmentList from "~front/app/establishment-list/index.js";
import City from "../../city/index.js";

interface StateDisplayProps {
	note?: string;
	gameData: GameData;
}

const playerColors = [
	"bg-red-100 dark:bg-red-900",
	"bg-yellow-100 dark:bg-yellow-900",
	"bg-green-100 dark:bg-green-800",
	"bg-blue-100 dark:bg-blue-800",
];

export default function StateDisplay({ gameData }: StateDisplayProps) {
	const { gameState, gameSettings, gameDetails } = gameData;
	const { publicState } = gameState;
	const { common: commonState, players: playersState } = publicState;
	const { supply, diceRolls, processedEstablishments, turnEvents } =
		commonState;
	const { players } = gameDetails;

	const establishmentsInSupplyCount = Object.values(supply).flat().length;

	return (
		<div className="bg-gray-200 dark:bg-gray-700">
			<div>
				{diceRolls.length > 0 ? (
					<div>Rolled: {diceRolls.join(", ")}</div>
				) : (
					<div>No Dice Rolled</div>
				)}
			</div>
			<div>
				Processed Establishments: {processedEstablishments.length}
				<ul className="ml-5 list-outside list-disc">
					{processedEstablishments.map((establishmentKey) => (
						<li key={establishmentKey}>{establishmentKey}</li>
					))}
				</ul>
			</div>
			<div>
				Turn Events: {turnEvents.length}
				<ol className="ml-4 list-outside list-decimal">
					{turnEvents.map((turnEvent, i) => (
						<li key={`${turnEvent}-${i}`}>
							{players.reduce((prev, { id, name }) => {
								return prev.replaceAll(`%${id}%`, name);
							}, turnEvent)}
						</li>
					))}
				</ol>
			</div>
			<details>
				<summary>Supply: {establishmentsInSupplyCount}</summary>
				<EstablishmentList establishments={supply} />
			</details>
			{Object.values(playersState).map((playerState, i) => {
				const landmarkCount = Object.values(playerState.city.landmarks).filter(
					(a) => a
				).length;

				const establishmentCount = Object.values(
					playerState.city.establishments
				).flat().length;

				const playerDetails = players.find(
					({ id }) => id === playerState.playerId
				);
				return (
					<details className={playerColors[i]} key={playerState.playerId}>
						<summary>
							{playerDetails?.name || `Player ${playerState.playerId}`}, Money:{" "}
							{playerState.money}, Landmark Count: {landmarkCount},
							Establishment Count: {establishmentCount}
						</summary>
						<City
							city={playerState.city}
							availableLandmarks={gameSettings.landmarks}
							onClick={(buildingKey) => {
								console.info(`${playerState.playerId} clicked ${buildingKey}`);
							}}
						/>
					</details>
				);
			})}
			<details>
				<summary>Debug</summary>
				<pre>{JSON.stringify(gameState, null, "  ")}</pre>
			</details>
		</div>
	);
}
