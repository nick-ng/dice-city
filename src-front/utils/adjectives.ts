const QUANTITY = 1;
const GENERAL_OPINION = 2;
const SPECIFIC_OPINION = 3;
const SIZE = 4;
const CONDITION = 5;
const SHAPE = 6;
const AGE = 7;
const COLOUR = 8;
const ORIGIN = 9;
const MATERIAL = 10;
const PURPOSE = 11;

// Single word X11 colour names https://en.wikipedia.org/wiki/X11_color_names
const colours = [
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  // "bisque",
  "black",
  "blue",
  "brown",
  "burlywood",
  "chartreuse",
  // "chocolate",
  "coral",
  "cornsilk",
  "crimson",
  "cyan",
  // "firebrick",
  "fuchsia",
  "gainsboro",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "honeydew",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lime",
  // "linen",
  "magenta",
  "maroon",
  "moccasin",
  "olive",
  "orange",
  "orchid",
  "peru",
  "pink",
  "plum",
  "purple",
  "red",
  "salmon",
  "seashell",
  "sienna",
  "silver",
  "snow",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "yellow",
];

const count = ["singular", "multiple"];

const sizes = ["big", "small", "huge", "little", "colossal", "tiny"];

const natures = [
  "hardy",
  "lonely",
  "adamant",
  "naughty",
  "brave",
  "bold",
  "docile",
  "impish",
  "lax",
  "relaxed",
  "modest",
  "mild",
  "bashful",
  "rash",
  "quiet",
  "calm",
  "gentle",
  "careful",
  "quirky",
  "sassy",
  "timid",
  "hasty",
  "jolly",
  "naive",
  "serious",
];

const ages = ["old", "young", "elder", "adolescent"];

const speeds = ["quick", "slow", "fast"];

const materials = [
  "water",
  "earthen",
  "wooden",
  "fire",
  "iron",
  "steel",
  "copper",
  "gold",
  "silver",
  "bronze",
];

export const allAdjectives = Object.freeze(
  [
    ...colours.map((colour) => ({
      value: colour,
      type: "colour",
      order: COLOUR,
    })),
    ...count.map((count) => ({
      value: count,
      type: "count",
      order: QUANTITY,
    })),
    ...sizes.map((size) => ({
      value: size,
      type: "size",
      order: SIZE,
    })),
    ...natures.map((nature) => ({
      value: nature,
      type: "nature",
      order: GENERAL_OPINION,
    })),
    ...ages.map((age) => ({
      value: age,
      type: "age",
      order: AGE,
    })),
    ...speeds.map((speed) => ({
      value: speed,
      type: "speed",
      order: GENERAL_OPINION,
    })),
    ...materials.map((material) => ({
      value: material,
      type: "material",
      order: MATERIAL,
    })),
  ].map((a) => Object.freeze(a))
);
