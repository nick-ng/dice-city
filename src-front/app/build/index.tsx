import type {
  Supply as SupplyType,
  City as CityType,
} from "~common/types/index.js";

import Supply from "../supply/index.js";

export interface BuildProps {
  supply: SupplyType;
  city: CityType;
  onBuildEstablishment: (establishmentKey: string) => void | Promise<void>;
  onBuildLandmark: (landmarkKey: string) => void | Promise<void>;
}

export default function Build() {}
