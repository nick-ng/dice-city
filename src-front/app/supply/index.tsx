import type { Supply as SupplyType } from "~common/types/index.js";

import { establishments } from "~common/constants/buildings.js";

import Stack from "./stack.js";
import { sortEstablishments } from "./utils.js";

export interface SupplyProps {
  supply: SupplyType;
  onChoose?: (buildingKey: string) => void | Promise<void>;
}

export default function Supply({ supply, onChoose }: SupplyProps) {
  const unsortedBuildings = Object.keys(supply)
    .map((k) => establishments[k])
    .filter((a) => a);

  const buildings = unsortedBuildings.sort(sortEstablishments);

  return (
    <div>
      {buildings.map((building) => (
        <button
          key={building.key}
          className="inline-block align-top"
          onClick={() => {
            onChoose && onChoose(building.key);
          }}
        >
          <Stack establishment={building} count={supply[building.key].length} />
        </button>
      ))}
    </div>
  );
}
