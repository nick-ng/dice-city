import type { Supply as SupplyType } from "~common/types/index.js";

import {
  establishments,
  sortEstablishments,
} from "~common/constants/buildings.js";

import Stack from "./stack.js";

export interface SupplyProps {
  supply: SupplyType;
  onChoose?: (buildingKey: string) => void | Promise<void>;
}

export default function Supply({ supply, onChoose }: SupplyProps) {
  const unsortedBuildings = Object.keys(supply)
    .map((k) => establishments[k])
    .filter((a) => a);

  const buildings = unsortedBuildings.sort((a, b) =>
    a.display.localeCompare(b.display)
  );

  return (
    <div className="flex flex-row flex-wrap items-start">
      {buildings.map((building) => {
        const { activationNumbers } = building;
        const order = Math.floor(
          (activationNumbers.reduce((prev, curr) => prev + curr, 0) /
            activationNumbers.length) *
            100
        );

        return (
          <button
            key={building.key}
            className="inline-block w-min align-top"
            style={{ order }}
            onClick={() => {
              onChoose && onChoose(building.key);
            }}
          >
            <Stack
              establishment={building}
              count={supply[building.key].length}
            />
          </button>
        );
      })}
    </div>
  );
}
