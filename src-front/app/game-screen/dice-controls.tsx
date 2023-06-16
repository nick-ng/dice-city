import type { GameData } from "~common/types/index.js";
import type { Options } from "~front/hooks/options-context.js";

interface DicecontrolsProps {
	options: Options;
	gameData: GameData;
	onClick: (diceCount: 1 | 2) => void | Promise<void>;
}

export default function DiceControls({
	gameData,
	options,
	onClick,
}: DicecontrolsProps) {
	const { gameState } = gameData;
	const { common, players: playerStates } = gameState.publicState;
	const { activePlayerId, turnPhase } = common;

	const myState = playerStates[options.playerId];
	const myTurn = activePlayerId === options.playerId;

	return (
		myTurn &&
		turnPhase === "before-roll" && (
			<div className="mt-1">
				<button
					className="button-default px-4 py-2"
					onClick={() => {
						onClick(1);
					}}
				>
					Roll 1 🎲
				</button>
				{myState.city.landmarks.trainStation && (
					<button
						className="button-default px-4 py-2"
						onClick={() => {
							onClick(2);
						}}
					>
						Roll 2 🎲
					</button>
				)}
			</div>
		)
	);
}
