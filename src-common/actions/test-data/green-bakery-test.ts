import type { GameData } from "~common/types/index.js";
import type { TestScenario } from "./types.js";

const gameDetails = {
  hostId: "a",
  id: "49e5d821-0473-4185-917e-a48b803e8425",
  players: [
    {
      id: "a",
      name: "Player A",
    },
    {
      id: "b",
      name: "Player B",
    },
  ],
};

const gameSettings = Object.freeze({
  landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
  timeLimitSeconds: 999,
  timeLimitType: "off",
});

const startingState: GameData["gameState"] = {
  publicState: {
    players: {
      a: {
        playerId: "a",
        money: 0,
        city: {
          establishments: {
            wheatField: ["wheatField:a"],
            ranch: ["ranch:a"],
            bakery: ["bakery:5"],
            fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
          },
          landmarks: {
            radioTower: false,
            amusementPark: false,
            shoppingMall: true,
            trainStation: true,
          },
        },
      },
      b: {
        playerId: "b",
        money: 3,
        city: {
          establishments: {
            wheatField: ["wheatField:b", "wheatField:4"],
            ranch: ["ranch:b"],
            bakery: ["bakery:0", "bakery:3"],
          },
          landmarks: {
            radioTower: true,
            amusementPark: false,
            shoppingMall: false,
            trainStation: false,
          },
        },
      },
    },
    common: {
      activePlayerId: "a",
      turnPhase: "after-roll",
      diceRolls: [1, 2],
      processedEstablishments: [],
      supply: {
        familyRestaurant: [
          "familyRestaurant:5",
          "familyRestaurant:4",
          "familyRestaurant:2",
          "familyRestaurant:3",
          "familyRestaurant:1",
          "familyRestaurant:0",
        ],
        appleOrchard: [
          "appleOrchard:0",
          "appleOrchard:2",
          "appleOrchard:1",
          "appleOrchard:5",
          "appleOrchard:4",
          "appleOrchard:3",
        ],
        bakery: ["bakery:2", "bakery:1", "bakery:4"],
        fruitAndVegetableMarket: [
          "fruitAndVegetableMarket:2",
          "fruitAndVegetableMarket:0",
          "fruitAndVegetableMarket:1",
          "fruitAndVegetableMarket:5",
          "fruitAndVegetableMarket:4",
        ],
        furnitureFactory: [
          "furnitureFactory:3",
          "furnitureFactory:0",
          "furnitureFactory:1",
          "furnitureFactory:4",
          "furnitureFactory:2",
          "furnitureFactory:5",
        ],
        cheeseFactory: [
          "cheeseFactory:4",
          "cheeseFactory:2",
          "cheeseFactory:1",
          "cheeseFactory:0",
          "cheeseFactory:3",
          "cheeseFactory:5",
        ],
        ranch: [
          "ranch:0",
          "ranch:3",
          "ranch:1",
          "ranch:4",
          "ranch:2",
          "ranch:5",
        ],
        convenienceStore: [
          "convenienceStore:2",
          "convenienceStore:3",
          "convenienceStore:1",
          "convenienceStore:4",
          "convenienceStore:5",
          "convenienceStore:0",
        ],
        forest: [
          "forest:3",
          "forest:1",
          "forest:0",
          "forest:4",
          "forest:5",
          "forest:2",
        ],
        wheatField: [
          "wheatField:0",
          "wheatField:1",
          "wheatField:2",
          "wheatField:3",
          "wheatField:5",
        ],
        cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
        businessCentre: [
          "businessCentre:2",
          "businessCentre:3",
          "businessCentre:0",
          "businessCentre:1",
        ],
        mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
        stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
        tvStation: ["tvStation:0", "tvStation:3", "tvStation:1", "tvStation:2"],
      },
    },
  },
  secretState: {
    common: {
      deck: [],
    },
  },
};

const startingData: GameData = {
  gameDetails,
  gameSettings,
  gameState: startingState,
  lastActionId: "1682787615-0",
  playersSecrets: {
    a: {
      password: "abc",
    },
    b: {
      password: "bcd",
    },
  },
};

export const greenBakery: TestScenario[] = [
  {
    tags: ["green-establishments", "bakery", "success"],
    display: "Green-establishments: Player A rolls a 3 and has 1 bakery",
    startingData,
    action: {
      type: "green-establishments",
      isServer: true,
    },
  },
];