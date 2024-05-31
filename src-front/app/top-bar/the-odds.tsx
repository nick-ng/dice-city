import { useState } from "react";

import ItemLayout from "./item-layout.js";

const theOdds = {
	"🎲": [
		0.1666666667, 0.1666666667, 0.1666666667, 0.1666666667, 0.1666666667,
		0.1666666667, 0, 0, 0, 0, 0, 0,
	],
	"🎲➕🛍️": [
		0.3055555556, 0.3055555556, 0.3055555556, 0.3055555556, 0.3055555556,
		0.3055555556, 0, 0, 0, 0, 0, 0,
	],
	"🎲➖🛍️": [
		0.02777777778, 0.02777777778, 0.02777777778, 0.02777777778, 0.02777777778,
		0.02777777778, 0, 0, 0, 0, 0, 0,
	],
	"🎲🎲": [
		0, 0.02777777778, 0.05555555556, 0.08333333333, 0.1111111111, 0.1388888889,
		0.1666666667, 0.1388888889, 0.1111111111, 0.08333333333, 0.05555555556,
		0.02777777778,
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

type Odds = typeof theOdds;
type OddsKeys = keyof Odds;

const oneToTwelve = new Array(12).fill(0).map((_, i) => i);

function getProbability(selectedRow: string | null, selectedNumbers: number[]) {
	if (!selectedRow) {
		return 0;
	}

	if (["🎲", "🎲🎲"].includes(selectedRow)) {
		return selectedNumbers.reduce(
			(prev, index) =>
				prev + (theOdds[selectedRow as OddsKeys] as number[])[index],
			0,
		);
	}

	// @todo(nick-ng): figure out how to calculate shopping mall probabilities
	return 0;
}

export default function TheOdds() {
	const [selectedRow, setSelectedRow] = useState<string | null>(null);
	const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

	const probability = getProbability(selectedRow, selectedNumbers);

	return (
		<ItemLayout className="relative z-10">
			<details className="text-center">
				<summary>Probability</summary>
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
														// @todo(nick-ng): let the user choose shopping mall probabilities
														if (!["🎲", "🎲🎲"].includes(roll)) {
															return;
														}
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
