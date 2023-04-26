import { produce } from "immer";

import type { Action, GameData, City } from "~common/types/index.js";
import {
  establishmentReference,
  landmarkReference,
} from "../constants/buildings.js";

export const buildAction = (
  gameData: GameData,
  action: Action
): { gameData: GameData; error?: string } => {
  let error = undefined;
  const newGameData = produce(gameData, (draftGameData) => {
    if (action.type !== "build") {
      error = "not build";
      return;
    }

    const { payload, playerId } = action;
    const { buildingKey } = payload;
    const establishment = establishmentReference[buildingKey];
    const landmark = landmarkReference[buildingKey];

    if (!establishment && !landmark) {
      error = "invalid buildingKey";
      return;
    }

    const { gameState, gameSettings } = draftGameData;
    const { publicState } = gameState;
    const { players, common } = publicState;
    const playerState = players[playerId];
    if (!playerState) {
      error = "invalid playerId";
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

    const { city } = playerState;
    if (establishment) {
      if (playerState.money < establishment.cost) {
        error = "not enough money";
        return;
      }

      if (establishment.tag === "major" && city.establishments[buildingKey]) {
        error = "cannot have more than one of each %%major% building";
        return;
      }

      const tempEstablishmentId = supply[buildingKey].pop();
      if (!tempEstablishmentId) {
        error = "no more establishments in supply";
        return;
      }

      if (!city.establishments[buildingKey]) {
        city.establishments[buildingKey] = [];
      }
      city.establishments[buildingKey].push(tempEstablishmentId);
      playerState.money = playerState.money - establishment.cost;
      common.turnPhase = "after-build";
    } else if (landmark) {
      if (playerState.money < landmark.cost) {
        error = "not enough money";
        return;
      }

      const { landmarks } = gameSettings;

      if (!landmarks.includes(buildingKey)) {
        error = "landmark not available";
        return;
      }

      if (city.landmarks[buildingKey]) {
        error = "landmark already built";
        return;
      }

      city.landmarks[buildingKey] = true;
    }
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
