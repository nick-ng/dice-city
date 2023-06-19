import { useOptions } from "~front/hooks/options-context.js";

import ItemLayout from "../item-layout.js";
import Fieldset from "./fieldset.js";
import DarkMode from "./dark-mode.js";

export default function Options() {
	const { options, setOptions } = useOptions();
	return (
		<ItemLayout className="relative">
			<details>
				<summary>Options</summary>
				<div className="absolute right-0 top-full z-10 w-max border border-gray-700 bg-white p-2 dark:border-gray-300 dark:bg-gray-800">
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
					</Fieldset>
				</div>
			</details>
		</ItemLayout>
	);
}
