import { TypeOf } from "io-ts/Decoder";
import {
  buildingDecoder,
  establishmentDecoder,
  landmarkDecoder,
} from "./decoders/game";

export type Building = TypeOf<typeof buildingDecoder>;
export type Establishment = TypeOf<typeof establishmentDecoder>;
export type Landmark = TypeOf<typeof landmarkDecoder>;

export type DeckBlueprint = {
  card: string;
  count: number;
}[];

export type Deck = string[];

export type Supply = {
  [establishmentKey: string]: string[];
};
