import { produce } from "immer";

import type { City, Supply } from "~common/types/index.js";
import { establishments } from "../constants/buildings.js";

export const addEstablishmentToCity = (
  city: City,
  supply: Supply,
  establishmentKey: string
): { city: City; supply: Supply; error?: string } => {
  return produce({ city, supply, error: "" }, (draft) => {
    if (!draft.supply[establishmentKey]) {
      draft.error = `supply doesn't have ${establishmentKey}`;
      return;
    }

    if (!draft.city.establishments[establishmentKey]) {
      draft.city.establishments[establishmentKey] = [];
    }

    // check if building is major and you already have it
    const buildingInfo = establishments[establishmentKey];
    if (
      buildingInfo.tag === "major" &&
      draft.city.establishments[establishmentKey].length !== 0
    ) {
      draft.error = `already have major establishment ${establishmentKey}`;
      return;
    }

    const buildingId = draft.supply[establishmentKey].pop();

    if (typeof buildingId !== "string") {
      draft.error = `supply is out of ${establishmentKey}`;
      return;
    }

    draft.city.establishments[establishmentKey].push(buildingId);
  });
};

export const addLandmarkToCity = (
  city: City,
  availableLandmarks: string[],
  landmarkKey: string
): { city: City; error?: string } => {
  return produce({ city, error: "" }, (draft) => {
    if (!availableLandmarks.includes(landmarkKey)) {
      draft.error = `${landmarkKey} is not available`;
      return;
    }

    if (draft.city.landmarks[landmarkKey]) {
      draft.error = `you already have a ${landmarkKey}`;
      return;
    }

    draft.city.landmarks[landmarkKey] = true;
  });
};
