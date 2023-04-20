import type { City as CityType } from "~common/types/index.js";
import {
  establishments,
  landmarks,
  idToBuilding,
} from "~common/constants/buildings.js";

import Building from "../building/index.js";

export interface CityProps {
  city: CityType;
  availableLandmarks: string[];
  onClick: (buildingKey: string) => void | Promise<void>;
}

export default function City({ city, availableLandmarks }: CityProps) {
  return (
    <div>
      <div className="">
        {availableLandmarks
          .sort((a, b) => landmarks[a].cost - landmarks[b].cost)
          .map(
            (key) =>
              landmarks[key] && (
                <Building
                  key={key}
                  building={landmarks[key]}
                  inactive={city.landmarks[key]}
                />
              )
          )}
      </div>
    </div>
  );
}
