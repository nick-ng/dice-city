import { establishments, landmarks } from "@common/constants/buildings.js";

import Container from "@front/layout/container.js";
import Building from "./index.js";

export default function DevAllBuildings() {
  return (
    <Container className="flex flex-wrap items-start justify-start">
      {Object.values(landmarks).map((building) => (
        <div key={building.key} className="m-1">
          <Building building={building} inactive />
        </div>
      ))}
      {Object.values(landmarks).map((building) => (
        <div key={building.key} className="m-1">
          <Building building={building} />
        </div>
      ))}
      {Object.values(establishments).map((building) => (
        <div key={building.key} className="m-1">
          <Building building={building} />
        </div>
      ))}
    </Container>
  );
}
