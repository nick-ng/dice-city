import { useState, useRef } from "react";

import { getDeck } from "~common/constants/buildings.js";
import { shuffle } from "~common/utils/shuffle.js";
import { getSupply } from "~common/functions/supply.js";

import Supply from "./index.js";

export default function DevSupply() {
  const supply = useRef(
    getSupply({}, shuffle(getDeck("base")), "total").supply
  ).current;

  return (
    <div>
      <Supply
        supply={supply}
        onChoose={(choice) => {
          console.log("Chosen", choice);
        }}
      />
    </div>
  );
}
