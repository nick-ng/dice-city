import {
  Establishment as EstablishmentType,
  Landmark as LandmarkType,
} from "@common/types/index.js";

type EstablishmentProps = {
  building: EstablishmentType;
};

export default function Establishment({ building }: EstablishmentProps) {
  return <div>Card</div>;
}
