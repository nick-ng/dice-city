import type { Options, useOptions } from "~front/hooks/options-context.js";

import Fieldset from "./fieldset.js";

export default function DarkMode({
	darkMode,
	setOptions,
}: Pick<Options, "darkMode"> &
	Pick<ReturnType<typeof useOptions>, "setOptions">) {
	return (
		<Fieldset legend="Colour Theme">
			<label className="block">
				<input
					onChange={() => {
						setOptions({ darkMode: "dark" });
					}}
					type="radio"
					value="dark"
					name="darkMode"
					checked={darkMode === "dark"}
				/>
				&nbsp;Dark Mode
			</label>
			<label className="block">
				<input
					onChange={() => {
						setOptions({ darkMode: "light" });
					}}
					type="radio"
					value="light"
					name="darkMode"
					checked={darkMode === "light"}
				/>
				&nbsp;Light Mode
			</label>
			<label className="block">
				<input
					onChange={() => {
						setOptions({ darkMode: "system" });
					}}
					type="radio"
					value="system"
					name="darkMode"
					checked={darkMode === "system"}
				/>
				&nbsp;System (default)
			</label>
		</Fieldset>
	);
}
