import { useState } from "react";

const theOdds = {
	"🎲": [1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 0, 0, 0, 0, 0, 0],
	"🎲➕🛍️": [
		0.3055555556, 0.3055555556, 0.3055555556, 0.3055555556, 0.3055555556,
		0.3055555556, 0, 0, 0, 0, 0, 0,
	],
	"🎲➖🛍️": [1 / 36, 1 / 36, 1 / 36, 1 / 36, 1 / 36, 1 / 36, 0, 0, 0, 0, 0, 0],
	"🎲🎲": [
		0,
		1 / 36,
		2 / 36,
		3 / 36,
		4 / 36,
		5 / 36,
		1 / 6,
		5 / 36,
		4 / 36,
		3 / 36,
		2 / 36,
		1 / 36,
	],
	"🎲🎲➕🛍️": [
		0, 0.05478395062, 0.1080246914, 0.1597222222, 0.2098765432, 0.2584876543,
		0.3055555556, 0.2584876543, 0.2098765432, 0.1597222222, 0.1080246914,
		0.05478395062,
	],
	"🎲🎲➖🛍️": [
		0, 0.003001281245, 0.01166933394, 0.02551118827, 0.04404816339,
		0.06681586744, 0.09336419753, 0.06681586744, 0.04404816339, 0.02551118827,
		0.01166933394, 0.003001281245,
	],
};

const oneToTwelve = new Array(12).fill(0).map((_, i) => i + 1);

function getProbability(selectedRow: string | null, selectedNumbers: number[]) {
	if (!selectedRow) {
		return 0;
	}

	let baseProbability = 0;

	if (selectedRow.includes("🎲🎲")) {
		baseProbability = selectedNumbers.reduce(
			(prev, index) => prev + theOdds["🎲🎲"][index],
			0,
		);
	} else {
		baseProbability = selectedNumbers.reduce(
			(prev, index) => prev + theOdds["🎲"][index],
			0,
		);
	}

	if (selectedRow.includes("➕")) {
		return 1 - (1 - baseProbability) * (1 - baseProbability);
	}

	if (selectedRow.includes("➖")) {
		return baseProbability * baseProbability;
	}

	return baseProbability;
}

export default function TheOdds() {
	const [selectedRow, setSelectedRow] = useState<string | null>(null);
	const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

	const probability = getProbability(selectedRow, selectedNumbers);

	return (
		<div className="px-2">
			<h2>Probability</h2>
			<p className="max-w-prose">
				This table has the probability of getting each dice roll total.
			</p>
			<p className="max-w-prose">
				To show the probability of getting one of a number of dice roll totals,
				click on the columns.
			</p>
			<p className="max-w-prose">🎲: The number of dice rolled.</p>
			<p className="max-w-prose">
				➕🛍️: If the first dice roll was one of the selected totals, keep the
				result. If the first dice roll wasn't one of the selected totals, use
				the Shopping Mall re-roll.
			</p>
			<p className="max-w-prose">
				➖🛍️: If the first dice roll was one of the selected totals, use the
				Shopping Mall re-roll. If the first dice roll wasn't one of the selected
				totals, keep the result.
			</p>
			<button
				className="button-default"
				onClick={() => {
					setSelectedNumbers([]);
					setSelectedRow(null);
				}}
			>
				Reset
			</button>
			<table className="my-2">
				<thead>
					<tr>
						<th className="border-default px-2">
							{probability > 0 ? (
								<button
									className="w-full"
									onClick={() => {
										setSelectedNumbers([]);
										setSelectedRow(null);
									}}
								>
									{probability.toFixed(3)}
								</button>
							) : null}
						</th>
						{oneToTwelve.map((n, i) => (
							<th
								className={`border-default ${selectedNumbers.includes(i) ? "bg-blue-300 dark:bg-blue-700" : ""}`}
								key={n}
							>
								<button
									className={`px-2 w-full `}
									onClick={() => {
										setSelectedNumbers((prevNumbers) => {
											if (prevNumbers.includes(i)) {
												return prevNumbers.filter((n) => n !== i);
											}

											return [...prevNumbers, i];
										});
									}}
								>
									{n}
								</button>
							</th>
						))}
						<th className="border-default px-2">Total</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(theOdds).map(([roll, probabilities]) => (
						<tr className="dark:odd:bg-gray-700 odd:bg-gray-100" key={roll}>
							<td className="border-default text-left px-2">{roll}</td>
							{probabilities.map((p, i) => (
								<td
									className={`border-default ${selectedNumbers.includes(i) ? "bg-blue-300 dark:bg-blue-700" : ""}`}
									key={i}
								>
									{p > 0 && (
										<button
											className={`px-2 w-full `}
											onClick={() => {
												setSelectedNumbers((prevNumbers) => {
													if (prevNumbers.includes(i)) {
														return prevNumbers.filter((n) => n !== i);
													}

													return [...prevNumbers, i];
												});
											}}
										>
											{p.toFixed(3)}
										</button>
									)}
								</td>
							))}
							<td className={`border-default text-left px-2`}>
								<span
									className={
										getProbability(roll, selectedNumbers) > 0 ? "" : "opacity-0"
									}
								>
									{getProbability(roll, selectedNumbers).toFixed(3)}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
