import type {
	Deck,
	DeckBlueprint,
	Establishment,
	Landmark,
} from "../types/index.js";

const addKeyProperty = <T>(obj: {
	[key: string]: T;
}): { [key: string]: { key: string } & T } => {
	return Object.entries(obj).reduce((accumulator, [key, value]) => {
		return {
			...accumulator,
			[key]: {
				...value,
				key,
			},
		};
	}, {} as { [key: string]: { key: string } & T });
};

const tempLandmarks: {
	[key: string]: Omit<Landmark, "key">;
} = {
	radioTower: {
		display: "Radio Tower",
		tag: "major",
		picture: ["🗼"],
		cost: 22,
		effect: "Once every turn, you can choose to re-roll your dice.",
	},
	amusementPark: {
		display: "Amusement Park",
		tag: "major",
		picture: [
			"🎡",
			// "🎢",
		],
		cost: 16,
		effect: "If you roll doubles, take another turn after this one.",
	},
	shoppingMall: {
		display: "Shopping Mall",
		tag: "major",
		picture: [
			// "🏬",
			"🛍️",
		],
		cost: 10,
		effect: "Each of your %%cup% and %%bread% establishments earn +1 coin.",
	},
	trainStation: {
		display: "Train Station",
		tag: "major",
		picture: ["🚉"],
		cost: 4,
		effect: "You may roll 1 or 2 dice.",
	},
};

export const landmarkReference = addKeyProperty(tempLandmarks);

const tempEstablishmentReference: {
	[key: string]: Omit<Establishment, "key">;
} = {
	wheatField: {
		colour: "blue",
		activationNumbers: [1],
		display: "Wheat Field",
		pluralDisplay: "Wheat Fields",
		tag: "wheat",
		picture: ["🌾", "🚜"],
		cost: 1,
		effect: "Get 1 coin from the bank, on anyone's turn.",
	},
	ranch: {
		colour: "blue",
		activationNumbers: [2],
		display: "Ranch",
		pluralDisplay: "Ranches",
		tag: "cow",
		picture: ["🐄", "🐖"],
		cost: 1,
		effect: "Get 1 coin from the bank, on anyone's turn.",
	},
	bakery: {
		colour: "green",
		activationNumbers: [2, 3],
		display: "Bakery",
		pluralDisplay: "Bakeries",
		tag: "bread",
		picture: ["🍞", "🥖"],
		cost: 1,
		effect: "Get 1 coin from the bank, on your turn only.",
	},
	cafe: {
		colour: "red",
		activationNumbers: [3],
		display: "Café",
		pluralDisplay: "Cafés",
		tag: "cup",
		picture: ["☕", "🥐"],
		cost: 2,
		effect: "Get 1 coin from the player who rolled the dice.",
	},
	convenienceStore: {
		colour: "green",
		activationNumbers: [4],
		display: "Convenience Store",
		pluralDisplay: "Convenience Stores",
		tag: "bread",
		picture: ["🏪"],
		cost: 2,
		effect: "Get 3 coins from the bank, on your turn only.",
	},
	forest: {
		colour: "blue",
		activationNumbers: [5],
		display: "Forest",
		pluralDisplay: "Forests",
		tag: "cog",
		picture: ["🌲", "🌲"],
		cost: 3,
		effect: "Get 1 coin from the bank, on anyone's turn.",
	},
	stadium: {
		colour: "purple",
		activationNumbers: [6],
		display: "Stadium",
		pluralDisplay: "Stadiums",
		tag: "major",
		picture: ["🏟️"],
		cost: 6,
		effect: "Get 2 coins from all players, on your turn only.",
	},
	tvStation: {
		colour: "purple",
		activationNumbers: [6],
		display: "TV Station",
		pluralDisplay: "TV Stations",
		tag: "major",
		picture: ["📺", "📡"],
		cost: 7,
		effect: "Take 5 coins from any one player, on your turn only.",
	},
	businessCentre: {
		colour: "purple",
		activationNumbers: [6],
		display: "Business Centre",
		pluralDisplay: "Business Centres",
		tag: "major",
		picture: ["🏢", "🏢"],
		cost: 8,
		effect:
			"Trade one non %%major% establishment with another player, on your turn only.",
	},
	cheeseFactory: {
		colour: "green",
		activationNumbers: [7],
		display: "Cheese Factory",
		pluralDisplay: "Cheese Factories",
		tag: "factory",
		picture: ["🧀", "🏭"],
		cost: 5,
		effect:
			"Get 3 coins from the bank for each %%cow% establishment that you own, on your turn only.",
	},
	furnitureFactory: {
		colour: "green",
		activationNumbers: [8],
		display: "Furniture Factory",
		pluralDisplay: "Furniture Factories",
		tag: "factory",
		picture: ["🪑", "🏭"],
		cost: 3,
		effect:
			"Get 3 coins from the bank for each %%cog% establishment that you own, on your turn only",
	},
	mine: {
		colour: "blue",
		activationNumbers: [9],
		display: "Mine",
		pluralDisplay: "Mines",
		tag: "cog",
		picture: ["⛰️", "⛏️"],
		cost: 6,
		effect: "Get 5 coins from the bank, on anyone's turn.",
	},
	familyRestaurant: {
		colour: "red",
		activationNumbers: [9, 10],
		display: "Family Restaurant",
		pluralDisplay: "Family Restaurants",
		tag: "cup",
		picture: ["🍽️"],
		cost: 3,
		effect: "Get 2 coins from the player who rolled the dice.",
	},
	appleOrchard: {
		colour: "blue",
		activationNumbers: [10],
		display: "Apple Orchard",
		pluralDisplay: "Apple Orchards",
		tag: "wheat",
		picture: ["🍏", "🌳"],
		cost: 3,
		effect: "Get 3 coins from the bank, on anyone's turn.",
	},
	fruitAndVegetableMarket: {
		colour: "green",
		activationNumbers: [11, 12],
		display: "Fruit and Vegetable Market",
		pluralDisplay: "Fruit and Vegetable Markets",
		tag: "fruit",
		picture: ["🍎", "🥕"],
		cost: 2,
		effect:
			"Get 2 coins from the bank for each %%wheat% establishment that you own, on your turn only.",
	},
};

export const establishmentReference: { [key: string]: Establishment } =
	addKeyProperty(tempEstablishmentReference);

export const baseDeck: DeckBlueprint = [
	{
		card: "wheatField",
		count: 6,
	},
	{
		card: "ranch",
		count: 6,
	},
	{
		card: "bakery",
		count: 6,
	},
	{
		card: "cafe",
		count: 6,
	},
	{
		card: "convenienceStore",
		count: 6,
	},
	{
		card: "forest",
		count: 6,
	},
	{
		card: "stadium",
		count: 4,
	},
	{
		card: "tvStation",
		count: 4,
	},
	{
		card: "businessCentre",
		count: 4,
	},
	{
		card: "cheeseFactory",
		count: 6,
	},
	{
		card: "furnitureFactory",
		count: 6,
	},
	{
		card: "mine",
		count: 6,
	},
	{
		card: "familyRestaurant",
		count: 6,
	},
	{
		card: "appleOrchard",
		count: 6,
	},
	{
		card: "fruitAndVegetableMarket",
		count: 6,
	},
];

export const makeDeck = (blueprint: DeckBlueprint): Deck => {
	return blueprint.reduce((accumulator, { card, count }) => {
		const padLength = (count - 1).toString().length;

		return accumulator.concat(
			[...Array(count).keys()].map(
				(n) => `${card}:${n.toString().padStart(padLength, "0")}`
			)
		);
	}, [] as string[]);
};

export const getDeck = (cardSet: "base" = "base"): Deck => {
	switch (cardSet) {
		case "base":
		default:
			return makeDeck(baseDeck);
	}
};

export const idToBuilding = (id: string): Establishment | Landmark | null => {
	const [buildingKey, _rest] = id.split(":");

	return (
		landmarkReference[buildingKey] ||
		establishmentReference[buildingKey] ||
		null
	);
};

export const sortLandmarks = (a: Landmark, b: Landmark): number =>
	a.cost - b.cost;

export const sortEstablishments = (
	a: Establishment,
	b: Establishment
): number => {
	const aActivation = (
		a.activationNumbers.reduce((prev, curr) => prev + curr, 0) /
		a.activationNumbers.length
	).toFixed(2);
	const bActivation = (
		b.activationNumbers.reduce((prev, curr) => prev + curr, 0) /
		b.activationNumbers.length
	).toFixed(2);

	const padLength = Math.max(
		...[aActivation, bActivation].map((c) => c.length)
	);

	const aString = `${aActivation.padStart(padLength, "0")}_${a.display}`;
	const bString = `${bActivation.padStart(padLength, "0")}_${b.display}`;
	return aString.localeCompare(bString);
};
