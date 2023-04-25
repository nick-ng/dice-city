import { useEffect, useState } from "react";

import type {
  Supply as SupplyType,
  City as CityType,
} from "~common/types/index.js";

import {
  idToBuilding,
  establishmentReference,
  landmarkReference,
} from "~common/constants/buildings.js";
import BuildingContainer from "../building/building-container.js";
import Building from "../building/index.js";
import EstablishmentList from "../establishment-list/index.js";

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

  useEffect(() => {
    setChosenBuildingString("");
  }, [
    Object.entries(supply)
      .map(([k, v]) => `${k}-${v.length}`)
      .sort((a, b) => a.localeCompare(b))
      .join(","),
    city,
  ]);

  return (
    <div className="flex flex-row items-start justify-start">
      <div className="sticky top-0 inline-block">
        <p className="text-center text-sm md:text-base">Chosen Building</p>
        <button
          className="button-default w-min p-0.5 pb-1"
          disabled={!chosenBuilding}
          onClick={() => {
            if (
              Object.keys(establishmentReference).includes(chosenBuildingString)
            ) {
              onBuildEstablishment(chosenBuildingString);
            } else {
              onBuildLandmark(chosenBuildingString);
            }
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
      </div>
      <div>
        <p className="text-sm md:text-base">Available Buildings</p>
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
