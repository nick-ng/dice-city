import { useRef } from "react";

import { useOptions } from "~front/hooks/options-context.js";

import ItemLayout from "../item-layout.js";
import Fieldset from "./fieldset.js";
import DarkMode from "./dark-mode.js";

export default function Options() {
	const { options, setOptions } = useOptions();
	const diceRollSound = useRef(new Audio("/dice-roll.mp3")).current;
	const yourTurnSound = useRef(new Audio("/chord-ceg.mp3")).current;

	return (
		<ItemLayout className="relative">
			<details>
				<summary>Options</summary>
				<div className="absolute right-0 top-full z-30 w-max border border-gray-700 bg-white p-2 dark:border-gray-300 dark:bg-gray-800">
					<DarkMode darkMode={options.darkMode} setOptions={setOptions} />
					<Fieldset legend="Show Names">
						<label className="block">
							<input
								type="checkbox"
								checked={options.showNamesPublic}
								onChange={() => {
									setOptions({
										showNamesPublic: !options.showNamesPublic,
									});
								}}
							/>
							&nbsp;Public Games
						</label>
						<label className="block">
							<input
								type="checkbox"
								checked={options.showNames}
								onChange={() => {
									setOptions({
										showNames: !options.showNames,
									});
								}}
							/>
							&nbsp;Private Games
						</label>
					</Fieldset>
					<Fieldset legend="Misc.">
						<label className="block">
							<input
								type="checkbox"
								checked={options.alwaysShowCities}
								onChange={() => {
									setOptions({
										alwaysShowCities: !options.alwaysShowCities,
									});
								}}
							/>
							&nbsp; Always Show Cities
						</label>
						<label className="block">
							<input
								type="checkbox"
								checked={options.alwaysShowSupply}
								onChange={() => {
									setOptions({
										alwaysShowSupply: !options.alwaysShowSupply,
									});
								}}
							/>
							&nbsp; Always Show Supply
						</label>
						<label className="block">
							<input
								type="checkbox"
								checked={options.alwaysShowEstablishmentList}
								onChange={() => {
									setOptions({
										alwaysShowEstablishmentList:
											!options.alwaysShowEstablishmentList,
									});
								}}
							/>
							&nbsp; Always Show Establishment List
						</label>
						<label className="block">
							<input
								type="checkbox"
								checked={!options.hideInstructions}
								onChange={() => {
									setOptions({
										hideInstructions: !options.hideInstructions,
									});
								}}
							/>
							&nbsp; Always Show Instructions
						</label>
					</Fieldset>
					<Fieldset legend="Volume">
						<table className="w-full">
							<tbody>
								<tr>
									<td>Dice Roll</td>
									<td>
										<div className="flex items-center justify-center pl-1">
											<input
												className="w-full"
												role="cell"
												type="range"
												value={options.diceRollVolume}
												min={0}
												max={1}
												step={0.01}
												onChange={(e) => {
													setOptions({
														diceRollVolume: parseFloat(e.currentTarget.value),
													});
												}}
												onMouseUp={(e) => {
													diceRollSound.volume = parseFloat(
														e.currentTarget.value
													);
													diceRollSound.play();
												}}
											/>
										</div>
									</td>
								</tr>
								<tr>
									<td>Your Turn</td>
									<td>
										<div className="flex items-center justify-center pl-1">
											<input
												className="w-full"
												role="cell"
												type="range"
												min={0}
												max={1}
												step={0.01}
												value={options.yourTurnVolume}
												onChange={(e) => {
													setOptions({
														yourTurnVolume: parseFloat(e.currentTarget.value),
													});
												}}
												onMouseUp={(e) => {
													yourTurnSound.volume = parseFloat(
														e.currentTarget.value
													);
													yourTurnSound.play();
												}}
											/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</Fieldset>
				</div>
			</details>
		</ItemLayout>
	);
}
