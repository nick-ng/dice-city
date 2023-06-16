import z from "zod";

import {
	buildingSchema,
	establishmentSchema,
	establishmentListSchema,
	landmarkSchema,
	supplySchema,
	citySchema,
	deckSchema,
	gameStateSchema,
	gameDataSchema,
} from "./schemas/game.js";
import {
	playerActionsSchema,
	actionSchema,
	businessCentreSchema as businessCentreActionSchema,
} from "./schemas/actions.js";
import {
	newGameRequestSchema,
	newGameResponseSchema,
	webSocketServerToClientMessageSchema,
	webSocketClientToServerMessageSchema,
	startGameStreamObjectSchema,
} from "./schemas/message.js";

export type Building = z.infer<typeof buildingSchema>;
export type Establishment = z.infer<typeof establishmentSchema>;
export type Landmark = z.infer<typeof landmarkSchema>;

export type DeckBlueprint = {
	card: string;
	count: number;
}[];

export type Deck = z.infer<typeof deckSchema>;
export type EstablishmentList = z.infer<typeof establishmentListSchema>;
export type Supply = z.infer<typeof supplySchema>;
export type City = z.infer<typeof citySchema>;

export type GameState = z.infer<typeof gameStateSchema>;
export type GameData = z.infer<typeof gameDataSchema>;

export type PlayerAction = z.infer<typeof playerActionsSchema>;
export type Action = z.infer<typeof actionSchema>;
export type BusinessCentreAction = z.infer<typeof businessCentreActionSchema>;

export type NewGameRequest = z.infer<typeof newGameRequestSchema>;
export type NewGameResponse = z.infer<typeof newGameResponseSchema>;

export type WebSocketServerToClientMessage = z.infer<
	typeof webSocketServerToClientMessageSchema
>;

export type WebSocketClientToServerMessage = z.infer<
	typeof webSocketClientToServerMessageSchema
>;

export type StartGameStreamObject = z.infer<typeof startGameStreamObjectSchema>;
