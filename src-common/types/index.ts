import z from "zod";

import {
  buildingSchema,
  establishmentSchema,
  landmarkSchema,
  supplySchema,
  citySchema,
  deckSchema,
  publicStateSchema,
  gameStateSchema,
  gameDataSchema,
} from "./schemas/game.js";

import { actionSchema } from "./schemas/actions.js";

export type Building = z.infer<typeof buildingSchema>;
export type Establishment = z.infer<typeof establishmentSchema>;
export type Landmark = z.infer<typeof landmarkSchema>;

export type DeckBlueprint = {
  card: string;
  count: number;
}[];

export type Deck = z.infer<typeof deckSchema>;
export type Supply = z.infer<typeof supplySchema>;
export type City = z.infer<typeof citySchema>;

export type PublicState = z.infer<typeof publicStateSchema>;
export type GameState = z.infer<typeof gameStateSchema>;
export type GameData = z.infer<typeof gameDataSchema>;

export type Action = z.infer<typeof actionSchema>;
