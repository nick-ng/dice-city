import { useState } from "react";

import type {
  Supply as SupplyType,
  City as CityType,
} from "~common/types/index.js";

import { idToBuilding, establishments } from "~common/constants/buildings.js";
import BuildingContainer from "../building/building-container.js";
import Building from "../building/index.js";
import Supply from "../supply/index.js";

export interface BuildProps {
  supply: SupplyType;
  city: CityType;
  onBuildEstablishment: (establishmentKey: string) => void | Promise<void>;
  onBuildLandmark: (landmarkKey: string) => void | Promise<void>;
}

export default function Build({
  supply,
  city,
  onBuildEstablishment,
  onBuildLandmark,
}: BuildProps) {
  const [chosenBuildingString, setChosenBuildingString] = useState("");

  const chosenBuilding = idToBuilding(chosenBuildingString);

  return (
    <div className="flex flex-row items-start justify-start">
      <div className="sticky top-0 inline-block p-0.5">
        <p className="text-center text-sm md:text-base">Chosen Building</p>
        {chosenBuilding ? (
          <Building building={chosenBuilding} />
        ) : (
          <BuildingContainer className="flex flex-row justify-center align-middle text-3xl">
            ❔
          </BuildingContainer>
        )}
        <button
          className="mt-1 w-full rounded border border-gray-600 px-2 py-2 dark:border-gray-300 md:py-0"
          disabled={!chosenBuilding}
          onClick={() => {
            if (Object.keys(establishments).includes(chosenBuildingString)) {
              onBuildEstablishment(chosenBuildingString);
            } else {
              onBuildLandmark(chosenBuildingString);
            }
          }}
        >
          {chosenBuilding
            ? `Build ${chosenBuilding.display}`
            : "Choose a Building"}
        </button>
      </div>
      <Supply
        supply={supply}
        onChoose={(buildingString) => {
          setChosenBuildingString(buildingString);
        }}
      />
    </div>
  );
}
