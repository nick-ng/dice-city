import { useEffect, useState } from "react";

import type {
	Supply as SupplyType,
	City as CityType,
	GameData,
} from "~common/types/index.js";
import type { Options } from "~front/hooks/options-context.js";

import {
	idToBuilding,
	landmarkReference,
} from "~common/constants/buildings.js";
import { buildAction } from "~common/actions/build.js";

import ToolTip from "~front/app/tool-tip/index.js";
import BuildingContainer from "../building/building-container.js";
import Building from "../building/index.js";
import EstablishmentList from "../establishment-list/index.js";

export interface BuildProps {
	supply: SupplyType;
	city: CityType;
	onBuild?: (buildingKey: string) => void | Promise<void>;
	gameData?: GameData;
	options?: Options;
}

export default function Build({
	supply,
	city,
	onBuild,
	gameData,
	options,
}: BuildProps) {
	const [chosenBuildingString, setChosenBuildingString] = useState("");

	const chosenBuilding = idToBuilding(chosenBuildingString);

	useEffect(() => {
		setChosenBuildingString("");
	}, [
		Object.entries(supply)
			.map(([k, v]) => `${k}-${v.length}`)
			.sort((a, b) => a.localeCompare(b))
			.join(","),
		city,
	]);

	let buildError = "";

	if (!chosenBuilding) {
		buildError = "Choose a building first.";
	} else if (gameData && options) {
		buildError =
			buildAction(
				gameData,
				{
					...options,
					type: "build",
					payload: {
						buildingKey: chosenBuilding?.key,
					},
				},
				true
			).error || "";
	}

	return (
		<div className="flex flex-row items-start justify-start">
			{onBuild && (
				<div className="sticky top-0 z-10 inline-block w-min">
					<p className="text-center text-sm xl:text-base">Chosen Building</p>
					<ToolTip message={buildError}>
						<button
							className="button-default w-min p-0.5 pb-1"
							disabled={!chosenBuilding || !!buildError}
							onClick={() => {
								if (!chosenBuilding || !!buildError) {
									return;
								}

								onBuild(chosenBuildingString);
							}}
						>
							{chosenBuilding ? (
								<Building building={chosenBuilding} />
							) : (
								<BuildingContainer className="flex flex-row justify-center align-middle text-3xl">
									❔
								</BuildingContainer>
							)}

							<span className="px-0.5">
								{chosenBuilding
									? `Build ${chosenBuilding.display}`
									: "Choose a Building"}
							</span>
						</button>
					</ToolTip>
					<button
						className="button-default mt-2 w-full p-0.5 py-1"
						onClick={() => {
							onBuild("");
						}}
					>
						Skip Building
					</button>{" "}
				</div>
			)}
			<div>
				<p className="text-sm xl:text-base">Available Buildings</p>
				<div className="flex flex-row">
					{Object.entries(city.landmarks).map(([landmarkKey, isBuilt]) => {
						const tempLandmark = landmarkReference[landmarkKey];
						if (!tempLandmark || isBuilt) {
							return null;
						}

						return (
							<button
								key={landmarkKey}
								className="border-default inline-block p-0.5"
								style={{ order: tempLandmark.cost }}
								onClick={() => {
									setChosenBuildingString(landmarkKey);
								}}
							>
								<Building building={tempLandmark} />
							</button>
						);
					})}
				</div>
				<EstablishmentList
					establishments={supply}
					onChoose={(buildingString) => {
						setChosenBuildingString(buildingString);
					}}
				/>
			</div>
		</div>
	);
}
