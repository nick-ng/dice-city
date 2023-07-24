import type { GameData } from "~common/types/index.js";
import type { Options } from "~front/hooks/options-context.js";
import { getPlayerOrderStartingFromPlayer } from "~common/other-stuff/browser-safe-stuff.js";
import { getName, replaceName } from "~front/utils/name-generator.js";
import Instructions from "../instructions/index.js";
import EstablishmentReference from "../establishment-reference/index.js";

interface SideBarProps {
	gameData: GameData;
	options: Options;
}

export default function SideBar({ gameData, options }: SideBarProps) {
	const { gameDetails, gameState } = gameData;
	const { players, isPublic } = gameDetails;
	const { common, players: playerStates } = gameState.publicState;
	const { activePlayerId, turnEvents, turnOrder } = common;

	const showNames = isPublic ? options.showNamesPublic : options.showNames;

	return (
		<div className="ml-2 h-full flex-shrink-0 flex-grow-0 basis-48 overflow-y-auto pb-12 xl:basis-80">
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
							className={`${
								playerId === activePlayerId ? "list-disc" : "list-[circle]"
							} underline`}
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
										} else if (!options.alwaysShowCities) {
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
			<details className="mb-2" open>
				<summary className="text-xl">Turn Events</summary>
				<ul className="ml-4 list-outside list-disc text-sm xl:text-base">
					{turnEvents.map((event, i) => (
						<li
							key={`${event}-${i}`}
							className="px-0.5 even:bg-gray-200 dark:even:bg-gray-600"
						>
							{replaceName(players, !!showNames, options.playerId, event)}
						</li>
					))}
				</ul>
			</details>
			<hr />
			<EstablishmentReference open={options.alwaysShowEstablishmentList} />
			<hr />
			<Instructions open={!options.hideInstructions} />
		</div>
	);
}
