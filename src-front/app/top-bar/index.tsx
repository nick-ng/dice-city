import { Link } from "react-router-dom";

import { useOptions } from "~front/hooks/options-context.js";

import ItemLayout from "./item-layout.js";
import NameChanger from "./name-changer.js";
import Options from "./options/index.js";

export default function TopBar() {
	const { options } = useOptions();

	return (
		<div className="mb-1 flex flex-wrap justify-end">
			<NameChanger />
			{!!options.ping && <div>Ping: {options.ping} ms</div>}
			<div className="grow" />
			<Options />
			<ItemLayout>
				<Link to="/">Home</Link>
			</ItemLayout>
			<ItemLayout>
				<a target="_blank" href="https://github.com/nick-ng/dice-city">
					GitHub
				</a>
			</ItemLayout>
		</div>
	);
}
