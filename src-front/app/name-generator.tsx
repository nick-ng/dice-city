import { useCallback, useEffect, useState } from "react";

import { getRandomName } from "~front/utils/name-generator.js";

const NAME_GEN_KEY = "NICK_NAME_GEN_STORE";

export default function NameGenerator() {
	const [namePrefixes, setNamePrefixes] = useState<string[]>([]);
	const [rawNamePrefixes, setRawNamePrefixes] = useState("");
	const [randomSeed, setRandomSeed] = useState(Date.now().toString());
	const [adjectiveCount, setAdjectiveCount] = useState(2);

	const randomName = getRandomName(randomSeed, adjectiveCount);

	const updateStore = useCallback(
		(newSettings: { namePrefixes?: string[]; adjectiveCount?: number }) => {
			localStorage.setItem(
				NAME_GEN_KEY,
				JSON.stringify({
					namePrefixes,
					adjectiveCount,
					...newSettings,
				})
			);
		},
		[namePrefixes.join(""), adjectiveCount]
	);

	useEffect(() => {
		try {
			const settingsString = localStorage.getItem(NAME_GEN_KEY);

			if (typeof settingsString === "string") {
				const settings = JSON.parse(settingsString);

				setNamePrefixes((prev) => settings?.namePrefixes || prev);
				setAdjectiveCount((prev) => settings?.adjectiveCount || prev);

				setRawNamePrefixes((prev) => {
					if (!prev) {
						return settings?.namePrefixes.join("\n");
					}

					return prev;
				});
			}
		} catch (_e) {}
	}, []);

	return (
		<div className="left-0 right-0 mx-auto max-w-prose">
			<textarea
				className="mb-2 block resize-none rounded border border-gray-400 bg-white px-0.5 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
				spellCheck={false}
				value={rawNamePrefixes}
				onChange={(e) => {
					setRawNamePrefixes(e.target.value);
					const newNamePrefixes = e.target.value
						.split("\n")
						.map((a) => a.trim())
						.filter((a) => a);
					setNamePrefixes(newNamePrefixes);
					updateStore({ namePrefixes: newNamePrefixes });
				}}
			/>
			<label className="block">
				Adjective Count&nbsp;
				<input
					className="rounded border border-gray-200 bg-white px-0.5 text-right text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
					type="number"
					value={adjectiveCount}
					onChange={(e) => {
						const newAdjectiveCount = parseInt(e.target.value, 10) || 0;
						updateStore({ adjectiveCount: newAdjectiveCount });
						setAdjectiveCount(newAdjectiveCount);
					}}
				/>
			</label>
			<button
				className="button-default"
				onClick={() => {
					setRandomSeed(Date.now().toString());
				}}
			>
				Randomise
			</button>
			<ul className="ml-5 mt-2 list-disc">
				{["", ...namePrefixes].map((namePrefix, i) => {
					const fullName = `${namePrefix}${randomName}`;
					return (
						<li key={`${namePrefix}-${i}`}>
							{fullName}&nbsp;({fullName.length})&nbsp;
							<button
								className="button-default"
								onClick={() => {
									navigator.clipboard.writeText(fullName);
								}}
							>
								Copy
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
