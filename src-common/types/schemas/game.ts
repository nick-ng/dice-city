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

export const buildingSchema = landmarkSchema.merge(establishmentOnly.partial());

export const playerSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const playerSecretsSchema = z.object({
  password: z.string(),
});
