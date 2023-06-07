import type { City as CityType } from "~common/types/index.js";

import LandmarkList from "../landmark-list/index.js";
import EstablishmentList from "../establishment-list/index.js";

export interface CityProps {
  city: CityType;
  availableLandmarks: string[];
  onClick?: (buildingKey: string) => void | Promise<void>;
}

export default function City({ city, availableLandmarks, onClick }: CityProps) {
  return (
    <div>
      <LandmarkList
        availableLandmarks={availableLandmarks}
        landmarks={city.landmarks}
        onChoose={(e) => {
          onClick && onClick(e);
        }}
      />
      <EstablishmentList
        establishments={city.establishments}
        onChoose={(e) => {
          onClick && onClick(e);
        }}
      />
    </div>
  );
}
