import { j as n } from "./index-vPswkxJ5.js";
import { r as v, b as x, g as k } from "./utils-BPyf_07k.js";
const y = (t) =>
		Object.entries(t).reduce(
			(e, [a, o]) => ({ ...e, [a]: { ...o, key: a } }),
			{},
		),
	N = {
		radioTower: {
			display: "Radio Tower",
			tag: "major",
			picture: ["🗼"],
			cost: 22,
			effect: "Once every turn, you can choose to re-roll your dice.",
			determiner: "a",
		},
		amusementPark: {
			display: "Amusement Park",
			tag: "major",
			picture: ["🎡"],
			cost: 16,
			effect: "If you roll doubles, take another turn after this one.",
			determiner: "an",
		},
		shoppingMall: {
			display: "Shopping Mall",
			tag: "major",
			picture: ["🛍️"],
			cost: 10,
			effect:
				"Increase the coin amounts on each of your %%cup% and %%bread% establishments by 1.",
			determiner: "a",
		},
		trainStation: {
			display: "Train Station",
			tag: "major",
			picture: ["🚉"],
			cost: 4,
			effect: "You may roll 1 or 2 dice.",
			determiner: "a",
		},
		harbour: {
			display: "Harbour",
			tag: "major",
			picture: ["⚓"],
			cost: 2,
			effect:
				"If the dice total is 10 or more, you may add 2 to the total, on your turn only.",
			determiner: "a",
		},
		cityHall: {
			display: "City Hall",
			tag: "major",
			picture: ["🏢"],
			cost: 0,
			effect:
				"Immediately before buying establishments, if you have 0 coins, get 1 from the bank.",
			determiner: "a",
		},
		airport: {
			display: "Airport",
			tag: "major",
			picture: ["✈️"],
			cost: 30,
			effect:
				"If you build nothing on your turn, you get 10 coins from the bank.",
			determiner: "an",
		},
	},
	w = y(N),
	j = {
		wheatField: {
			colour: "blue",
			activationNumbers: [1],
			display: "Wheat Field",
			pluralDisplay: "Wheat Fields",
			tag: "wheat",
			picture: ["🌾", "🚜"],
			cost: 1,
			effect: "Get 1 coin from the bank, on anyone's turn.",
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "an",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
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
			determiner: "a",
		},
	},
	d = y(j),
	F = [
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
	],
	m = (t, e = 4) => {
		const a = [];
		for (let o = 0; o < t.length; o++) {
			const i = t[o],
				s = d[i].tag === "major" ? e : 6,
				c = (s - 1).toString().length;
			for (let r = 0; r < s; r++)
				a.push(`${i}:${r.toString().padStart(c, "0")}`);
		}
		return a;
	},
	B = (t = "base", e = 4) => {
		switch (t) {
			case "base":
				return m(F, e);
			case "full":
			default:
				return m(Object.keys(d), e);
		}
	},
	$ = (t) => {
		const [e, a] = t.split(":");
		return w[e] || d[e] || null;
	},
	C = (t, e) => {
		const a = (
				t.activationNumbers.reduce((r, l) => r + l, 0) /
				t.activationNumbers.length
			).toFixed(2),
			o = (
				e.activationNumbers.reduce((r, l) => r + l, 0) /
				e.activationNumbers.length
			).toFixed(2),
			i = Math.max(...[a, o].map((r) => r.length)),
			s = `${a.padStart(i, "0")}_${t.display}`,
			c = `${o.padStart(i, "0")}_${e.display}`;
		return s.localeCompare(c);
	};
function D({ children: t, className: e }) {
	return n.jsx("div", {
		className: `relative flex h-52 w-28 select-none flex-col rounded border-2 border-gray-700 bg-white text-center dark:border-gray-300 dark:bg-gray-800 xl:w-36 ${e || ""}`,
		children: t,
	});
}
function T({ building: t, inactive: e }) {
	const {
			activationNumbers: a,
			display: o,
			colour: i,
			tag: s,
			cost: c,
			effect: r,
			picture: l,
			key: f,
		} = t,
		u = i && a,
		h = v(r),
		p = e ? ["🏗️", "🚧"] : l;
	return n.jsxs(D, {
		className: e ? "bg-yellow-50 dark:bg-yellow-950" : "",
		children: [
			u &&
				n.jsxs("div", {
					className: `${x[i]} relative font-bold text-white`,
					children: [
						a.length === 1 ? a[0] : `${Math.min(...a)} ~ ${Math.max(...a)}`,
						n.jsx("div", {
							className: "coin absolute bottom-0 right-0.5 top-0 my-auto",
							children: c,
						}),
					],
				}),
			n.jsxs("div", {
				className: `${u ? "" : "pt-1"} flex`,
				children: [
					n.jsxs("span", {
						className: "flex-1 text-xs xl:text-sm",
						children: [k(s), o],
					}),
					!u && n.jsx("div", { className: "coin mr-0.5", children: c }),
				],
			}),
			n.jsx("div", {
				className: `grid flex-1 place-content-center self-center ${p.length === 1 ? "grid-cols-1" : "grid-cols-2"} ${p.length > 2 || r.length > 80 ? "text-[120%] xl:text-[150%]" : "text-[150%] xl:text-[200%]"}`,
				children: p.map((b, g) => n.jsx("span", { children: b }, `${f}${g}`)),
			}),
			n.jsx("div", {
				className: `mx-1 mb-1 text-left xl:mx-2 ${r.length > 70 ? "text-xs" : "text-sm"} leading-snug`,
				children: h,
			}),
		],
	});
}
export { T as B, D as a, d as e, B as g, $ as i, w as l, C as s };
