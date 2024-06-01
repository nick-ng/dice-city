import { useState } from "react";

import ItemLayout from "./item-layout.js";

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
		<ItemLayout className="relative z-10">
			<details className="text-center">
				<summary
					onClick={() => {
						setSelectedNumbers([]);
						setSelectedRow(null);
					}}
				>
					Probability
				</summary>
				<div className="dark:bg-gray-800 bg-white .border-default">
					<table className="">
						<thead>
							<tr>
								<th className="border-default">
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
								{oneToTwelve.map((n) => (
									<th className="border-default" key={n}>
										{n}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{Object.entries(theOdds).map(([roll, probabilities]) => (
								<tr className="dark:odd:bg-gray-700 odd:bg-gray-100" key={roll}>
									<td className="border-default text-left px-2">{roll}</td>
									{probabilities.map((p, i) => (
										<td className="border-default" key={i}>
											{p ? (
												<button
													className={`px-2 w-full ${selectedRow === roll && selectedNumbers.includes(i) ? "bg-blue-300 dark:bg-blue-700" : ""}`}
													onClick={() => {
														setSelectedNumbers((prevNumbers) => {
															if (selectedRow !== roll) {
																return [i];
															}

															if (prevNumbers.includes(i)) {
																return prevNumbers.filter((n) => n !== i);
															}

															return [...prevNumbers, i];
														});

														if (selectedRow !== roll) {
															setSelectedRow(roll);
														}
													}}
												>
													{p.toFixed(3)}
												</button>
											) : (
												""
											)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</details>
		</ItemLayout>
	);
}
