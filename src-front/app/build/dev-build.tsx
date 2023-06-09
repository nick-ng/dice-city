import { useState } from "react";

import type { City } from "~common/types/index.js";
import { shuffle } from "~common/utils/shuffle.js";
import { getDeck } from "~common/constants/buildings.js";
import { getSupply } from "~common/actions/supply.js";

import Build from "./index.js";

export default function DevBuildInterface() {
	const [supply, setSupply] = useState(getSupply({}, getDeck("base")).supply);
	const [city, setCity] = useState<City>({
		establishments: {},
		landmarks: {
			radioTower: false,
			amusementPark: false,
			shoppingMall: false,
			trainStation: false,
		},
	});
	const [elementKey, setElementKey] = useState(
		Math.floor(Math.random() * 1000000000).toString()
	);

	return (
		<div>
			<button
				className="button-default"
				onClick={() => {
					setElementKey(Math.floor(Math.random() * 1000000000).toString());
				}}
			>
				Reset Element
			</button>
			<button
				className="button-default"
				onClick={() => {
					const deck = shuffle(getDeck("base"));
					setSupply(getSupply({}, deck.slice(3)).supply);
				}}
			>
				Change Supply
			</button>
			<button
				className="button-default"
				onClick={() => {
					setCity({
						establishments: {},
						landmarks: {
							radioTower: Math.random() < 0.5,
							amusementPark: Math.random() < 0.5,
							shoppingMall: Math.random() < 0.5,
							trainStation: Math.random() < 0.5,
						},
					});
				}}
			>
				Randomise Landmarks
			</button>
			<button
				className="button-default"
				onClick={() => {
					setCity({
						establishments: {},
						landmarks: {
							radioTower: true,
							amusementPark: true,
							shoppingMall: true,
							trainStation: true,
						},
					});
				}}
			>
				Finish Landmarks
			</button>
			<Build
				key={elementKey}
				supply={supply}
				city={city}
				onBuild={(e) => {
					console.info("onBuild", e);
				}}
			/>
		</div>
	);
}
