import { useState } from "react";

import type { City } from "~common/types/index.js";
import { getDeck } from "~common/constants/buildings.js";
import { getSupply } from "~common/functions/supply.js";

import Build from "./index.js";

export default function DevBuildInterface() {
  const [supply, setSupply] = useState(getSupply({}, getDeck("base")).supply);
  const [city, setCity] = useState<City>({ establishments: {}, landmarks: {} });

  return (
    <div>
      <Build
        supply={supply}
        city={city}
        onBuildEstablishment={(e) => {
          console.log("onBuildEstablishment", e);
        }}
        onBuildLandmark={(e) => {
          console.log("onBuildLandmark", e);
        }}
      />
    </div>
  );
}
