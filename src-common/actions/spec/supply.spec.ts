// @todo(nick-ng): rewrite tests so they don't use mocha
// import assert from "node:assert";

// import { getDeck } from "../../constants/buildings.js";
// import { shuffle } from "../../utils/shuffle.js";

// import { totalSupply, hybridSupply } from "../supply.js";

// describe("total supply", () => {
// 	it("should use all remaining cards", (done) => {
// 		const deck = shuffle(getDeck("base"));
// 		const after = totalSupply({}, deck);

// 		assert.equal(after.deck.length, 0);

// 		done();
// 	});
// });

// describe("hybrid supply", () => {
// 	it("should have 12 unique establishments", (done) => {
// 		const deck = shuffle(getDeck("base"));

// 		const beforeDeckLength = deck.length;

// 		const after = hybridSupply({}, deck);

// 		assert.equal(Object.keys(after.supply).length, 12);
// 		assert(beforeDeckLength > after.deck.length);

// 		done();
// 	});

// 	it("should replenish some cards", (done) => {
// 		const deck = [
// 			"wheatField:0", // This will go onto the wheatField pile
// 			"cafe:1", // This will go into the empty cafe pile
// 			"bakery:1",
// 			"bakery:3",
// 			"wheatField:4",
// 			"wheatField:1",
// 			"bakery:0",
// 			"forest:2",
// 			"ranch:1",
// 			"forest:5",
// 			"convenienceStore:3",
// 			"wheatField:3",
// 			"forest:3",
// 			"wheatField:2",
// 			"bakery:4",
// 			"bakery:5",
// 			"forest:0",
// 			"forest:1",
// 			"convenienceStore:0",
// 			"cafe:2",
// 			"convenienceStore:4",
// 			"bakery:2",
// 			"convenienceStore:1",
// 			"cafe:4",
// 			"ranch:0",
// 			"ranch:4",
// 			"ranch:2",
// 			"cafe:3",
// 			"convenienceStore:5",
// 			"cafe:5",
// 			"familyRestaurant:0",
// 			"fruitAndVegetableMarket:1",
// 			"familyRestaurant:4",
// 			"appleOrchard:4",
// 			"furnitureFactory:0",
// 			"fruitAndVegetableMarket:5",
// 			"furnitureFactory:4",
// 			"furnitureFactory:5",
// 			"fruitAndVegetableMarket:3",
// 			"fruitAndVegetableMarket:2",
// 			"appleOrchard:0",
// 			"fruitAndVegetableMarket:0",
// 			"familyRestaurant:1",
// 			"mine:2",
// 			"familyRestaurant:3",
// 			"mine:0",
// 			"appleOrchard:1",
// 			"mine:4",
// 			"furnitureFactory:3",
// 			"cheeseFactory:4",
// 			"cheeseFactory:5",
// 			"cheeseFactory:0",
// 			"mine:5",
// 			"furnitureFactory:2",
// 			"appleOrchard:5",
// 			"familyRestaurant:2",
// 			"appleOrchard:3",
// 			"appleOrchard:2",
// 			"businessCentre:3",
// 			"tvStation:1",
// 			"stadium:0",
// 			"tvStation:3",
// 			"businessCentre:1",
// 			"tvStation:2",
// 			"stadium:2",
// 			"businessCentre:0",
// 			"stadium:3",
// 			"businessCentre:2",
// 		];

// 		const supply = {
// 			forest: ["forest:4"],
// 			convenienceStore: ["convenienceStore:2"],
// 			// cafe: ["cafe:0"],
// 			cafe: [], // e.g. someone built a cafe last turn
// 			ranch: ["ranch:5", "ranch:3"],
// 			wheatField: ["wheatField:5"],
// 			cheeseFactory: ["cheeseFactory:2", "cheeseFactory:1", "cheeseFactory:3"],
// 			mine: ["mine:1", "mine:3"],
// 			familyRestaurant: ["familyRestaurant:5"],
// 			furnitureFactory: ["furnitureFactory:1"],
// 			fruitAndVegetableMarket: ["fruitAndVegetableMarket:4"],
// 			tvStation: ["tvStation:0"],
// 			stadium: ["stadium:1"],
// 		};

// 		const beforeDeckLength = deck.length;

// 		const after = hybridSupply(supply, deck);

// 		assert.equal(Object.keys(after.supply).length, 12);
// 		assert.equal(after.deck.length, beforeDeckLength - 2);

// 		done();
// 	});
// });
