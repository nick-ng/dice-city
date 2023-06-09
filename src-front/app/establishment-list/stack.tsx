import type { Establishment } from "~common/types/index.js";

import Building from "../building/index.js";
import { bgColours } from "../building/utils.js";

interface StackProps {
	establishment: Establishment;
	count: number;
	className?: string;
}

export default function Stack({ establishment, count, className }: StackProps) {
	if (count === 0) {
		return null;
	}

	const { activationNumbers, colour, cost, key } = establishment;

	return (
		<div
			className={`border-default ${className || ""} p-0.5`}
			style={{ transformBox: "content-box" }}
		>
			{Array(count - 1)
				.fill("")
				.map((_, n) => (
					<div
						key={`${key}-${n}`}
						className="-mb-1 hidden h-4 w-full overflow-y-hidden  md:block"
					>
						<div
							className={`${bgColours[colour]} relative rounded-t border-x-2 border-t-2 border-x-gray-700 border-t-gray-700 text-center font-bold text-white dark:border-x-gray-300 dark:border-t-gray-300`}
						>
							{activationNumbers.join(" ~ ")}
							<div className="coin absolute bottom-0 right-0.5 top-0 my-auto">
								{cost}
							</div>
						</div>
					</div>
				))}
			<div className="md:hidden">&times;{count}</div>
			<Building building={establishment} />
		</div>
	);
}
