import z from "zod";

import {
  buildingSchema,
  establishmentSchema,
  landmarkSchema,
} from "./schemas/game.js";

export type Building = z.infer<typeof buildingSchema>;
export type Establishment = z.infer<typeof establishmentSchema>;
export type Landmark = z.infer<typeof landmarkSchema>;

export type DeckBlueprint = {
  card: string;
  count: number;
}[];

export type Deck = string[];

export type Supply = {
  [establishmentKey: string]: string[];
};

export type City = {
  establishments: { [establishmentKey: string]: string[] };
  landmarks: { [landmarkKey: string]: boolean };
};
