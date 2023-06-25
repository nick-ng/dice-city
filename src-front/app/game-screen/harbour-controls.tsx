import type { GameData } from "~common/types/index.js";
import type { Options } from "~front/hooks/options-context.js";

interface HarbourControlsProps {
	gameData: GameData;
	options: Options;
	onClick: (skip: boolean) => void | Promise<void>;
}

export default function HarbourControls({
	gameData,
	options,
	onClick,
}: HarbourControlsProps) {
	const { gameDetails, gameState } = gameData;
	const { players, isPublic } = gameDetails;
	const { common, players: playerStates } = gameState.publicState;
	const { turnPhase, turnOrder, pendingActions, diceRolls } = common;

	const pendingActionsForMe = pendingActions
		.filter((p) => p.playerId === options.playerId)
		.map((p) => p.action);

	if (turnPhase !== "before-roll" || !pendingActionsForMe.includes("harbour")) {
		return null;
	}

	const myState = playerStates[options.playerId];
	const { city: myCity } = myState;

	const diceRoll = diceRolls.reduce(
		(accumulator, dieRoll) => accumulator + dieRoll,
		0
	);

	return (
		<div>
			<h3>Harbour</h3>
			<p>
				You rolled {diceRoll}. You may add 2 to the dice roll total.{" "}
				{myCity.landmarks.amusementPark &&
					diceRolls.length === 2 &&
					diceRolls[0] === diceRolls[1] && (
						<span>
							You still get to take another turn if you change the dice roll
							total.
						</span>
					)}
			</p>
			<div className="mt-1">
				<button
					className="button-default animate-attention px-4 py-2"
					onClick={() => {
						onClick(true);
					}}
				>
					Keep Roll ({diceRoll})
				</button>
				<button
					className="button-default animate-attention px-4 py-2"
					onClick={() => {
						onClick(false);
					}}
				>
					Add 2 ({diceRoll + 2})
				</button>
			</div>
		</div>
	);
}
