import { useState } from "react";

import type { GameData } from "~common/types/index.js";
import type { Options } from "~front/hooks/options-context.js";

import { getPlayerOrderStartingFromPlayer } from "~common/other-stuff/browser-safe-stuff.js";
import { businessCentreAction } from "~common/actions/business-centre.js";
import { establishmentReference } from "~common/constants/buildings.js";

import { getName, replaceName } from "~front/utils/name-generator.js";
import { replaceTags } from "~front/app/building/utils.js";
import ToolTip from "~front/app/tool-tip/index.js";

interface BusinessCentreControlsProps {
	gameData: GameData;
	options: Options;
	onClick: (payload: {
		myOffer: string;
		opponentOffer: string;
		opponentId: string;
	}) => void | Promise<void>;
}

const ACTIVE_BUTTON_COLOUR =
	"dark:bg-white dark:text-black bg-gray-800 text-white";

export default function BusinessCentreControls({
	gameData,
	options,
	onClick,
}: BusinessCentreControlsProps) {
	const { gameDetails, gameState } = gameData;
	const { players, isPublic } = gameDetails;
	const { common, players: playerStates } = gameState.publicState;
	const { turnOrder, pendingActions } = common;

	const [myOffer, setMyOffer] = useState("");
	const [opponentId, setOpponentId] = useState("");
	const [opponentOffer, setOpponentOffer] = useState("");

	const pendingActionsForMe = pendingActions
		.filter((p) => p.playerId === options.playerId)
		.map((p) => p.action);

	if (!pendingActionsForMe.includes("business-centre")) {
		return null;
	}

	const showNames = isPublic ? options.showNamesPublic : options.showNames;

	const myState = playerStates[options.playerId];

	const businessCentreError = businessCentreAction(
		gameData,
		{
			...options,
			type: "business-centre",
			payload: {
				myOffer,
				opponentId,
				opponentOffer,
			},
		},
		true
	).error;

	return (
		<div>
			<h3>Business Centre</h3>
			<p>
				Trade one of your non-🏛️ establishments for an opponent's non-🏛️
				establishment.
			</p>
			<div className="mt-2 inline-block">
				<div>
					<div className="inline-block">
						<div className="flex flex-col items-stretch">
							<div className="text-center font-semibold">
								Your Establishments
							</div>
							{Object.entries(myState.city.establishments).map(
								([establishmentKey, establishments]) => {
									if (establishments.length === 0) {
										return null;
									}

									const establishmentInfo =
										establishmentReference[establishmentKey];

									if (establishmentInfo.tag === "major") {
										return null;
									}

									return (
										<button
											key={establishmentKey}
											className={`button-default mt-1 py-2 ${
												establishmentKey === myOffer ? ACTIVE_BUTTON_COLOUR : ""
											}`}
											onClick={() => {
												setMyOffer(establishmentKey);
											}}
										>
											{establishmentReference[establishmentKey].display} -{" "}
											{establishments.length}
										</button>
									);
								}
							)}
						</div>
					</div>
					{getPlayerOrderStartingFromPlayer(
						turnOrder,
						options.playerId,
						false
					).map((thisOpponentId) => {
						const opponent = players.find((p) => p.id === thisOpponentId);
						const opponentState = playerStates[thisOpponentId];

						return (
							<div key={thisOpponentId} className="inline-block">
								<div className="ml-1 flex flex-col items-stretch">
									<div className="text-center font-semibold">
										{getName(thisOpponentId, opponent?.name, showNames)}'s
										Establishments
									</div>
									{Object.entries(opponentState.city.establishments).map(
										([establishmentKey, establishments]) => {
											if (establishments.length === 0) {
												return null;
											}

											return (
												<button
													key={establishmentKey}
													className={`button-default mt-1 py-2 ${
														thisOpponentId === opponentId &&
														opponentOffer === establishmentKey
															? ACTIVE_BUTTON_COLOUR
															: ""
													}`}
													onClick={() => {
														setOpponentId(thisOpponentId);
														setOpponentOffer(establishmentKey);
													}}
												>
													{establishmentReference[establishmentKey].display} -{" "}
													{establishments.length}
												</button>
											);
										}
									)}
								</div>
							</div>
						);
					})}
				</div>
				<div className="mt-2 flex flex-row justify-between">
					<ToolTip
						message={replaceName(
							players,
							!!showNames,
							options.playerId,
							replaceTags(businessCentreError || "")
						)}
					>
						<button
							className="button-default px-4 py-2"
							disabled={!!businessCentreError}
							onClick={() => {
								if (!businessCentreError) {
									onClick({
										myOffer,
										opponentId,
										opponentOffer,
									});
								}
							}}
						>
							Trade
						</button>
					</ToolTip>
					<button
						className="button-default ml-1 px-4 py-2"
						onClick={() => {
							onClick({
								myOffer: "",
								opponentId: options.playerId,
								opponentOffer: "",
							});
						}}
					>
						Skip
					</button>
				</div>
			</div>
		</div>
	);
}
