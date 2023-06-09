import type { EstablishmentList as EstablishmentListType } from "~common/types/index.js";

import {
	establishmentReference,
	sortEstablishments,
} from "~common/constants/buildings.js";

import Stack from "./stack.js";

export interface EstablishmentListProps {
	establishments: EstablishmentListType;
	onChoose?: (buildingKey: string) => void | Promise<void>;
}

export default function EstablishmentList({
	establishments,
	onChoose,
}: EstablishmentListProps) {
	const buildings = Object.keys(establishments)
		.map((k) => establishmentReference[k])
		.filter((a) => a)
		.sort(sortEstablishments);

	return (
		<div className="flex flex-row flex-wrap items-start">
			{buildings.map((building) => (
				<button
					key={building.key}
					className="inline-block w-min align-top"
					onClick={() => {
						onChoose && onChoose(building.key);
					}}
				>
					<Stack
						establishment={building}
						count={establishments[building.key].length}
					/>
				</button>
			))}
		</div>
	);
}
