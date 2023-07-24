import type { City as CityType } from "~common/types/index.js";

import LandmarkList from "../landmark-list/index.js";
import EstablishmentList from "../establishment-list/index.js";

export interface CityProps {
	city: CityType;
	availableLandmarks: string[];
	isOpponent?: boolean;
	isMine?: boolean;
	onClick?: (buildingKey: string) => void | Promise<void>;
}

export default function City({
	city,
	availableLandmarks,
	onClick,
	isOpponent,
	isMine,
}: CityProps) {
	const colourClass = [
		{
			show: isOpponent,
			class: "bg-orange-100 dark:dark:bg-orange-900",
		},
		{ show: isMine, class: "bg-green-100 dark:bg-green-900" },
	]
		.filter((a) => a.show)
		.map((a) => a.class)
		.join(" ");

	return (
		<div className={colourClass}>
			<LandmarkList
				availableLandmarks={availableLandmarks}
				landmarks={city.landmarks}
				onChoose={(e) => {
					onClick && onClick(e);
				}}
			/>
			<EstablishmentList
				establishments={city.establishments}
				onChoose={(e) => {
					onClick && onClick(e);
				}}
			/>
		</div>
	);
}
