import { getDeck } from "~common/constants/buildings.js";
import { shuffle } from "~common/utils/shuffle.js";
import { getSupply } from "~common/actions/supply.js";

import EstablishmentList from "~front/app/establishment-list/index.js";

const supply = getSupply({}, shuffle(getDeck("base")), "total").supply;

export default function SupplyTotal() {
	return (
		<div>
			<EstablishmentList
				establishments={supply}
				onChoose={(choice) => {
					console.info("Chosen", choice);
				}}
			/>
		</div>
	);
}
