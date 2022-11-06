import { establishments } from "@common/constants/buildings.js";
import type { Establishment as EstablishmentType } from "@common/types/index.js";

import Container from "@front/layout/container.js";
import Establishment from "./establishment.js";

export default function DevAllEstablishments() {
  return (
    <Container className="flex flex-wrap items-start justify-start">
      {Object.values(establishments).map((building) => (
        <div key={building.key} className="m-1">
          <Establishment building={building} />
        </div>
      ))}
    </Container>
  );
}
