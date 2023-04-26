import type { City, GameData } from "~common/types/index.js";

import { landmarkReference } from "~common/constants/buildings.js";

import Building from "../building/index.js";

export interface LandmarkListProps {
  landmarks: City["landmarks"];
  availableLandmarks: GameData["gameSettings"]["landmarks"];
  onChoose?: (buildingKey: string) => void | Promise<void>;
}

export default function LandmarkList({
  landmarks,
  availableLandmarks,
  onChoose,
}: LandmarkListProps) {
  return (
    <div className="flex flex-row flex-wrap items-start">
      {availableLandmarks
        .sort((a, b) => landmarkReference[a].cost - landmarkReference[b].cost)
        .map(
          (key) =>
            landmarkReference[key] && (
              <button
                key={key}
                className="border-default inline-block p-0.5"
                onClick={() => {
                  onChoose && onChoose(key);
                }}
              >
                <Building
                  key={key}
                  building={landmarkReference[key]}
                  inactive={!landmarks[key]}
                />
              </button>
            )
        )}
    </div>
  );
}
