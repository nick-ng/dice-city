import { establishmentReference } from "~common/constants/buildings.js";
import Building from "../building/index.js";

interface EstablishmentReferenceProps {
	open?: boolean;
}

const establishments = Object.values(establishmentReference);

export default function EstablishmentReference({
	open,
}: EstablishmentReferenceProps) {
	return (
		<div>
			<details open={open}>
				<summary className="text-lg">Establishments</summary>
				<div className="text-sm can-hover:hidden">
					Tap on an establishment to see what it does
				</div>
				<div className="cannot-hover:hidden">
					Hover over an establishment to see what it does
				</div>
				<ul className="ml-5 list-outside list-disc">
					{establishments.map((establishment) => (
						<li
							key={establishment.key}
							className="group relative cursor-pointer py-0.5 even:bg-gray-200 dark:even:bg-gray-600"
							tabIndex={0}
						>
							<span>{establishment.display}</span>
							<div className="absolute bottom-0 right-4 z-10 hidden bg-white dark:bg-gray-800 can-hover:group-hover:block cannot-hover:group-focus:block">
								<Building building={establishment} />
							</div>
						</li>
					))}
				</ul>
			</details>
		</div>
	);
}
