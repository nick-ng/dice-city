import { Link } from "react-router-dom";

import { useOptions } from "~front/hooks/options-context.js";

import ItemLayout from "./item-layout.js";
import NameChanger from "./name-changer.js";
import Options from "./options/index.js";

export default function TopBar() {
	const { options } = useOptions();

	return (
		<div className="absolute mb-1 mt-2 flex w-full flex-wrap justify-end">
			<div className="basis-1" />
			<NameChanger />
			{typeof options.ping === "number" && <div>Ping: {options.ping} ms</div>}
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
			<div className="basis-1" />
		</div>
	);
}
