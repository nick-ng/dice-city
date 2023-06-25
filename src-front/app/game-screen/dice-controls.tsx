import type { GameData } from "~common/types/index.js";
import type { Options } from "~front/hooks/options-context.js";

interface DicecontrolsProps {
	options: Options;
	gameData: GameData;
	rollHandler: (diceCount: 1 | 2) => void | Promise<void>;
	rerollHandler: (skip: boolean) => void | Promise<void>;
}

export default function DiceControls({
	gameData,
	options,
	rollHandler,
	rerollHandler,
}: DicecontrolsProps) {
	const { gameState } = gameData;
	const { common, players: playerStates } = gameState.publicState;
	const { activePlayerId, diceRolls, pendingActions, turnPhase } = common;

	const pendingActionsForMe = pendingActions
		.filter((p) => p.playerId === options.playerId)
		.map((p) => p.action);

	const myState = playerStates[options.playerId];
	const myTurn = activePlayerId === options.playerId;

	if (!myTurn || turnPhase !== "before-roll") {
		return null;
	}

	if (pendingActionsForMe.includes("radio-tower")) {
		if (diceRolls.length === 1) {
			return (
				<div className="mt-1">
					<button
						className="button-default animate-attention px-4 py-2"
						onClick={() => {
							rerollHandler(false);
						}}
					>
						Re-Roll 🎲
					</button>
					<button
						className="button-default animate-attention px-4 py-2"
						onClick={() => {
							rerollHandler(true);
						}}
					>
						Keep {diceRolls[0]}
					</button>
				</div>
			);
		}

		return (
			<div className="mt-1">
				<button
					className="button-default animate-attention px-4 py-2"
					onClick={() => {
						rerollHandler(false);
					}}
				>
					Re-Roll {diceRolls.map(() => "🎲").join("")}
				</button>
				<button
					className="button-default animate-attention px-4 py-2"
					onClick={() => {
						rerollHandler(true);
					}}
				>
					Keep {diceRolls.reduce((accumulator, d) => accumulator + d, 0)} (
					{diceRolls.join(" + ")})
				</button>
			</div>
		);
	}

	if (pendingActionsForMe.includes("harbour")) {
		return null;
	}

	return (
		<div className="mt-1">
			<button
				className="button-default animate-attention px-4 py-2"
				onClick={() => {
					rollHandler(1);
				}}
			>
				Roll 🎲
			</button>
			{myState.city.landmarks.trainStation && (
				<button
					className="button-default animate-attention px-4 py-2"
					onClick={() => {
						rollHandler(2);
					}}
				>
					Roll 🎲🎲
				</button>
			)}
		</div>
	);
}
