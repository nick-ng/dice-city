import type { City as CityType } from "~common/types/index.js";
import {
  establishments,
  landmarks,
  idToBuilding,
} from "~common/constants/buildings.js";

import Building from "../building/index.js";
import LandmarkList from "../landmark-list/index.js";
import EstablishmentList from "../establishment-list/index.js";

export interface CityProps {
  city: CityType;
  availableLandmarks: string[];
  onClick: (buildingKey: string) => void | Promise<void>;
}

export default function City({ city, availableLandmarks }: CityProps) {
  return (
    <div>
      <LandmarkList
        availableLandmarks={availableLandmarks}
        landmarks={city.landmarks}
      />
      <EstablishmentList establishments={city.establishments} />
    </div>
  );
}
