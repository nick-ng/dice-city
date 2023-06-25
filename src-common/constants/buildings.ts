import type {
	Deck,
	DeckList,
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
		// effect: "Each of your %%cup% and %%bread% establishments earn +1 coin.",
		effect:
			"Increase the coin amounts on each of your %%cup% and %%bread% establishments by 1.",
	},
	trainStation: {
		display: "Train Station",
		tag: "major",
		picture: ["🚉"],
		cost: 4,
		effect: "You may roll 1 or 2 dice.",
	},
	harbour: {
		display: "Harbour",
		tag: "major",
		picture: ["⚓"],
		cost: 2,
		effect:
			"If the dice total is 10 or more, you may add 2 to the total, on your turn only.",
	},
	cityHall: {
		display: "City Hall",
		tag: "major",
		picture: ["🏢"],
		cost: 0,
		effect:
			"Immediately before buying establishments, if you have 0 coins, get 1 from the bank.",
	},
	airport: {
		display: "Airport",
		tag: "major",
		picture: ["✈️"],
		cost: 30,
		effect:
			"If you build nothing on your turn, you get 10 coins from the bank.",
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
			"Trade one non-%%major% establishment with another player, on your turn only.",
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
	flowerGarden: {
		colour: "blue",
		activationNumbers: [4],
		display: "Flower Garden",
		pluralDisplay: "Flower Gardens",
		tag: "wheat",
		picture: ["🌼", "🌺"],
		cost: 2,
		effect: "Get 1 coin from the bank, on anyone's turn.",
	},
	flowerShop: {
		colour: "green",
		activationNumbers: [6],
		display: "Flower Shop",
		pluralDisplay: "Flower Shops",
		tag: "bread",
		picture: ["💐", "💐"],
		cost: 1,
		effect:
			"Get 1 coin from the bank for each Flower Garden you own, on your turn only.",
	},
	publisher: {
		colour: "purple",
		activationNumbers: [7],
		display: "Publisher",
		pluralDisplay: "Publishers",
		tag: "major",
		picture: ["📖", "📚"],
		cost: 5,
		effect:
			"Get 1 coin from each player for each %%cup% and %%bread% establishment they have, on your turn only.",
	},
	taxOffice: {
		colour: "purple",
		activationNumbers: [8, 9],
		display: "Tax Office",
		pluralDisplay: "Tax Offices",
		tag: "major",
		picture: ["📒", "💸"],
		cost: 4,
		effect:
			"Take half (rounded down) of the coins from each player who has 10 coins or more, on your turn only.",
	},
	sushiBar: {
		colour: "red",
		activationNumbers: [1],
		display: "Sushi Bar",
		pluralDisplay: "Sushi Bars",
		tag: "cup",
		picture: ["🍣"],
		cost: 4,
		effect:
			"If you have a harbour, you get 3 coins from the player who rolled the dice.",
	},
	pizzaParlour: {
		colour: "red",
		activationNumbers: [7],
		display: "Pizza Parlour",
		pluralDisplay: "Pizza Parlours",
		tag: "cup",
		picture: ["🍕"],
		cost: 1,
		effect: "Get 1 coin from the player who rolled the dice.",
	},
	hamburgerStand: {
		colour: "red",
		activationNumbers: [8],
		display: "Hamburger Stand",
		pluralDisplay: "Hamburger Stands",
		tag: "cup",
		picture: ["🍔"],
		cost: 1,
		effect: "Get 1 coin from the player who rolled the dice.",
	},
	foodWarehouse: {
		colour: "green",
		activationNumbers: [12, 13],
		display: "Food Warehouse",
		pluralDisplay: "Food Warehouses",
		tag: "factory",
		picture: ["🥫", "🥫"],
		cost: 2,
		effect:
			"Get 2 coins from the bank for each %%cup% establishment that you own, on your turn only.",
	},
	mackerelBoat: {
		colour: "blue",
		activationNumbers: [8],
		display: "Mackerel Boat",
		pluralDisplay: "Mackerel Boats",
		tag: "boat",
		picture: ["🛥️", "3️"],
		cost: 2,
		effect:
			"If you have a harbour, get 3 coins from the bank on anyone's turn.",
	},
	tunaBoat: {
		colour: "blue",
		activationNumbers: [12, 13, 14],
		display: "Tuna Boat",
		pluralDisplay: "Tuna Boats",
		tag: "boat",
		picture: ["🛥️", "🎲"],
		cost: 5,
		effect:
			"On anyone's turn: Rolls 2 dice. If you have a harbour you get as many coins as the dice total.",
	},
};

export const establishmentReference: { [key: string]: Establishment } =
	addKeyProperty(tempEstablishmentReference);

const baseDeckList: DeckList = [
	"wheatField",
	"ranch",
	"bakery",
	"cafe",
	"convenienceStore",
	"forest",
	"stadium",
	"tvStation",
	"businessCentre",
	"cheeseFactory",
	"furnitureFactory",
	"mine",
	"familyRestaurant",
	"appleOrchard",
	"fruitAndVegetableMarket",
];

export const makeDeck = (deckList: DeckList, players = 4): Deck => {
	const deck: Deck = [];

	for (let i = 0; i < deckList.length; i++) {
		const establishmentKey = deckList[i];
		const cardCount =
			establishmentReference[establishmentKey].tag === "major" ? players : 6;

		const padLength = (cardCount - 1).toString().length;

		for (let j = 0; j < cardCount; j++) {
			deck.push(`${establishmentKey}:${j.toString().padStart(padLength, "0")}`);
		}
	}

	return deck;
};

export const getDeck = (cardSet = "base", players = 4): Deck => {
	switch (cardSet) {
		case "base": {
			return makeDeck(baseDeckList, players);
		}
		case "full":
		default: {
			return makeDeck(Object.keys(establishmentReference), players);
		}
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
