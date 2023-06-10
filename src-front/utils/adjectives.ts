// https://dictionary.cambridge.org/grammar/british-grammar/adjectives-order
const QUANTITY = 1;
const GENERAL_OPINION = 2;
const SPECIFIC_OPINION = 3;
const SIZE = 4;
const PHYSICAL_QUALITY = 5;
const SHAPE = 6;
const AGE = 7;
const COLOUR = 8;
const ORIGIN = 9;
const MATERIAL = 10;
const PURPOSE = 11;

// Single word X11 colour names https://en.wikipedia.org/wiki/X11_color_names
const colours = [
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	// "Bisque",
	"Black",
	"Blue",
	"Brown",
	"Burlywood",
	"Chartreuse",
	// "Chocolate",
	"Coral",
	"Cornsilk",
	"Crimson",
	"Cyan",
	// "Firebrick",
	"Fuchsia",
	"Gainsboro",
	"Gold",
	"Goldenrod",
	"Gray",
	"Green",
	"Honeydew",
	"Indigo",
	"Ivory",
	"Khaki",
	"Lavender",
	"Lime",
	// "Linen",
	"Magenta",
	"Maroon",
	"Moccasin",
	"Olive",
	"Orange",
	"Orchid",
	"Peru",
	"Pink",
	"Plum",
	"Purple",
	"Red",
	"Salmon",
	"Seashell",
	"Sienna",
	"Silver",
	"Snow",
	"Tan",
	"Teal",
	"Thistle",
	"Tomato",
	"Turquoise",
	"Violet",
	"Wheat",
	"White",
	"Yellow",
];

const count = ["Singular", "Multiple", "One", "Two", "Extra"];

const sizes = ["Big", "Small", "Huge", "Little", "Colossal", "Tiny"];

const natures = [
	"Hardy",
	"Lonely",
	"Adamant",
	"Naughty",
	"Brave",
	"Bold",
	"Docile",
	"Impish",
	"Lax",
	"Relaxed",
	"Modest",
	"Mild",
	"Bashful",
	"Rash",
	"Quiet",
	"Calm",
	"Gentle",
	"Careful",
	"Quirky",
	"Sassy",
	"Timid",
	"Hasty",
	"Jolly",
	"Naive",
	"Serious",
];

const ages = ["Old", "Young", "Elder", "Adolescent"];

const speeds = ["Quick", "Slow", "Fast", "Squishy"];

const materials = [
	"Water",
	"Earthen",
	"Wooden",
	"Fire",
	"Iron",
	"Steel",
	"Copper",
	"Gold",
	"Silver",
	"Bronze",
	"Aluminium",
	"Linen",
];

const physicalQualities = ["Solid", "Hard", "Squishy"];

const physicalQualitiesB = ["Poisonous", "Venomous"];

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
		...physicalQualities.map((physicalQuality) => ({
			value: physicalQuality,
			type: "physical_quality",
			order: PHYSICAL_QUALITY,
		})),
		...physicalQualitiesB.map((physicalQuality) => ({
			value: physicalQuality,
			type: "physical_quality_b",
			order: PHYSICAL_QUALITY,
		})),
	].map((a) => Object.freeze(a))
);
