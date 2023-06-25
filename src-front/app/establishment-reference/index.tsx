import { establishmentReference } from "~common/constants/buildings.js";
import Building from "../building/index.js";

const establishments = Object.values(establishmentReference);

export default function EstablishmentReference() {
	return (
		<div>
			<details>
				<summary className="text-lg">Establishments</summary>
				<div className="can-hover:hidden">
					Tap on an establishment to see what it does
				</div>
				<div className="cannot-hover:hidden">
					Hover over an establishment to see what it does
				</div>
				<ul className="ml-4 list-outside list-disc">
					{establishments.map((establishment) => (
						<li
							key={establishment.key}
							className="group relative cursor-pointer py-0.5 underline"
							tabIndex={0}
						>
							<span>{establishment.display}</span>
							<div className="absolute -left-32 top-0 hidden bg-white dark:bg-gray-800 md:-left-40 can-hover:group-hover:block cannot-hover:group-focus:block">
								<Building building={establishment} />
							</div>
						</li>
					))}
				</ul>
			</details>
		</div>
	);
}
