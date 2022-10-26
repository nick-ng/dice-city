import React from "react";
import {
  Establishment as EstablishmentType,
  Landmark as LandmarkType,
} from "src-common/types";

type EstablishmentProps = {
  building: EstablishmentType;
};

export default function Establishment({ building }: EstablishmentProps) {
  return <div>Card</div>;
}
