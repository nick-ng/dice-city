import type { GameData } from "~common/types/index.js";
import type { TestScenario } from "./types.js";

const gameDetails = {
  hostId: "84c45332-4911-4823-839e-996bad56ba61",
  id: "49e5d821-0473-4185-917e-a48b803e8425",
  players: [
    {
      id: "84c45332-4911-4823-839e-996bad56ba61",
      name: "Player A",
    },
    {
      id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
      name: "Player B",
    },
  ],
};

const gameSettings = {
  landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
  timeLimitSeconds: 999,
  timeLimitType: "off" as const,
  startingMoney: 3,
};

const publicPlayersState: GameData["gameState"]["publicState"]["players"] = {
  "84c45332-4911-4823-839e-996bad56ba61": {
    playerId: "84c45332-4911-4823-839e-996bad56ba61",
    money: 0,
    city: {
      establishments: {
        wheatField: ["wheatField:a"],
        ranch: ["ranch:a", "ranch:0", "ranch:3"],
        convenienceStore: ["convenienceStore:2"],
        cheeseFactory: ["cheeseFactory:4", "cheeseFactory:2"],
        furnitureFactory: [
          "furnitureFactory:3",
          "furnitureFactory:0",
          "furnitureFactory:1",
        ],
        mine: ["mine:4", "mine:5"],
        appleOrchard: ["appleOrchard:5"],
      },
      landmarks: {
        radioTower: false,
        amusementPark: false,
        shoppingMall: false,
        trainStation: true,
      },
    },
  },
  "7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
    playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
    money: 0,
    city: {
      establishments: {
        wheatField: ["wheatField:b", "wheatField:4"],
        ranch: ["ranch:b"],
        bakery: ["bakery:0", "bakery:3"],
        forest: ["forest:3", "forest:1"],
        appleOrchard: ["appleOrchard:0", "appleOrchard:2", "appleOrchard:1"],
      },
      landmarks: {
        radioTower: true,
        amusementPark: false,
        shoppingMall: false,
        trainStation: false,
      },
    },
  },
};

const publicCommonState: GameData["gameState"]["publicState"]["common"] = {
  activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
  turnPhase: "after-roll",
  diceRolls: [1],
  processedEstablishments: [],
  turnEvents: ["%84c45332-4911-4823-839e-996bad56ba61% rolled a 1"],
  turnOrder: [],
  supply: {
    familyRestaurant: [
      "familyRestaurant:5",
      "familyRestaurant:4",
      "familyRestaurant:2",
      "familyRestaurant:3",
      "familyRestaurant:1",
      "familyRestaurant:0",
    ],
    appleOrchard: ["appleOrchard:4", "appleOrchard:3"],
    bakery: ["bakery:5", "bakery:2", "bakery:1", "bakery:4"],
    fruitAndVegetableMarket: [
      "fruitAndVegetableMarket:3",
      "fruitAndVegetableMarket:2",
      "fruitAndVegetableMarket:0",
      "fruitAndVegetableMarket:1",
      "fruitAndVegetableMarket:5",
      "fruitAndVegetableMarket:4",
    ],
    furnitureFactory: [
      "furnitureFactory:4",
      "furnitureFactory:2",
      "furnitureFactory:5",
    ],
    cheeseFactory: [
      "cheeseFactory:1",
      "cheeseFactory:0",
      "cheeseFactory:3",
      "cheeseFactory:5",
    ],
    ranch: ["ranch:1", "ranch:4", "ranch:2", "ranch:5"],
    convenienceStore: [
      "convenienceStore:3",
      "convenienceStore:1",
      "convenienceStore:4",
      "convenienceStore:5",
      "convenienceStore:0",
    ],
    forest: ["forest:0", "forest:4", "forest:5", "forest:2"],
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
    mine: ["mine:2", "mine:0", "mine:1", "mine:3"],
    stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
    tvStation: ["tvStation:0", "tvStation:3", "tvStation:1", "tvStation:2"],
  },
};

const makeStartingData = (diceRolls: number[] = [1]): GameData => {
  return {
    gameDetails,
    gameSettings,
    gameState: {
      publicState: {
        players: publicPlayersState,
        common: {
          ...publicCommonState,
          turnEvents: [
            `%84c45332-4911-4823-839e-996bad56ba61% rolled a ${diceRolls.reduce(
              (prev, curr) => prev + curr
            )}${diceRolls.length > 1 ? ` (${diceRolls.join(", ")})` : ""}`,
          ],
          diceRolls,
        },
      },
      secretState: {
        common: {
          deck: [],
        },
      },
    },
    lastActionId: "1682787615-0",
    playersSecrets: {
      "84c45332-4911-4823-839e-996bad56ba61": {
        password: "abc",
      },
      "7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
        password: "bcd",
      },
    },
  };
};

export const blueTests: TestScenario[] = [
  {
    tags: ["blue-establishments", "wheat-field", "success"],
    display:
      "Blue-establishments: Player A rolls a 1 and has 1 wheat field, Player B has 1 wheat field",
    startingData: makeStartingData([1]),
    action: {
      type: "blue-establishments",
      isServer: true,
    },
  },
  {
    tags: ["blue-establishments", "ranch", "success"],
    display:
      "Blue-establishments: Player A rolls a 2 and has 3 ranches, Player B has 1 ranch (a)",
    startingData: makeStartingData([2]),
    action: {
      type: "blue-establishments",
      isServer: true,
    },
  },
  {
    tags: ["blue-establishments", "ranch", "success"],
    display:
      "Blue-establishments: Player A rolls a 2 and has 3 ranches, Player B has 1 ranch (b)",
    startingData: makeStartingData([1, 1]),
    action: {
      type: "blue-establishments",
      isServer: true,
    },
  },
  {
    tags: ["blue-establishments", "forest", "success"],
    display:
      "Blue-establishments: Player A rolls a 2. Player B has 2 forests (a)",
    startingData: makeStartingData([5]),
    action: {
      type: "blue-establishments",
      isServer: true,
    },
  },
  {
    tags: ["blue-establishments", "forest", "success"],
    display:
      "Blue-establishments: Player A rolls a 2. Player B has 2 forests (b)",
    startingData: makeStartingData([1, 4]),
    action: {
      type: "blue-establishments",
      isServer: true,
    },
  },
  {
    tags: ["blue-establishments", "mine", "success"],
    display: "Blue-establishments: Player A rolls a 9 and has 2 mines",
    startingData: makeStartingData([3, 6]),
    action: {
      type: "blue-establishments",
      isServer: true,
    },
  },
  {
    tags: ["blue-establishments", "apple-orchard", "success"],
    display:
      "Blue-establishments: Player A rolls a 10 and has 1 apple orchard. Player B has 3 apple orchards",
    startingData: makeStartingData([4, 6]),
    action: {
      type: "blue-establishments",
      isServer: true,
    },
  },
];
