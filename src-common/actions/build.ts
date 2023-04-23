import { produce } from "immer";

import type { Action, GameData, City, Supply } from "~common/types/index.js";
import { establishmentReference } from "../constants/buildings.js";

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
    const buildingInfo = establishmentReference[establishmentKey];
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

export const buildEstablishmentAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  let error = undefined;
  const newGameData = produce(gameData, (draftGameData) => {
    if (action.type !== "build-establishment") {
      error = "not build-establishment";
      return;
    }

    const { payload, playerId } = action;
    const { establishmentKey } = payload;
    const establishment = establishmentReference[establishmentKey];
    if (!establishment) {
      error = "invalid establishmentKey";
      return;
    }

    const { gameState } = draftGameData;
    const { publicState } = gameState;
    const { players, common } = publicState;
    const playerState = players[playerId];
    if (!playerState) {
      error = "invalid playerId";
      return;
    }

    if (playerState.money < establishment.cost) {
      error = "not enough money";
      return;
    }

    const { supply, activePlayerId, turnPhase } = common;

    if (turnPhase !== "before-build") {
      error = "can only build in build phase";
      return;
    }

    if (activePlayerId !== playerId) {
      error = "can only build on your turn";
      return;
    }

    const tempEstablishmentId = supply[establishmentKey].pop();
    if (!tempEstablishmentId) {
      error = "no more establishments in supply";
      return;
    }

    const { city } = playerState;
    if (!city.establishments[establishmentKey]) {
      city.establishments[establishmentKey] = [];
    }
    city.establishments[establishmentKey].push(tempEstablishmentId);
    playerState.money = playerState.money - establishment.cost;
    common.turnPhase = "after-build";
  });

  return {
    gameData: newGameData,
    error,
  };
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
