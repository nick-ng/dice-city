import z from "zod";

const tags = z.enum([
  "major",
  "cup",
  "bread",
  "wheat",
  "cow",
  "cog",
  "factory",
  "fruit",
]);

const colour = z.enum(["blue", "green", "red", "purple"]);

export const landmarkSchema = z.object({
  key: z.string(),
  display: z.string(),
  tag: tags,
  picture: z.array(z.string()),
  cost: z.number(),
  effect: z.string(),
});

const establishmentOnly = z.object({
  colour,
  activationNumbers: z.array(z.number()),
});

export const establishmentSchema = landmarkSchema.merge(establishmentOnly);

export const supplySchema = z.record(z.string(), z.array(z.string()));

export const buildingSchema = landmarkSchema.merge(establishmentOnly.partial());

export const deckSchema = z.array(z.string());

export const citySchema = z.object({
  establishments: z.record(z.string(), z.array(z.string())),
  landmarks: z.record(z.string(), z.boolean()),
});

export const playerSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const playerSecretsSchema = z.object({
  password: z.string(),
});

export const publicStateSchema = z.record(
  z.string(),
  z.object({
    playerId: z.string(),
    city: citySchema,
    money: z.number(),
  })
);

export const gameStateSchema = z.object({
  publicState: publicStateSchema,
});
