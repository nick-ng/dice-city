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

export const establishmentSchema = landmarkSchema.merge(
  z.object({
    colour,
    activationNumbers: z.array(z.number()),
  })
);

export const buildingSchema = z.union([landmarkSchema, establishmentSchema]);
