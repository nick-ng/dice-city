import { establishments } from "@common/constants/buildings";
import { Establishment as EstablishmentType } from "@common/types";

import Container from "@front/layout/container";
import Establishment from "./establishment";

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
