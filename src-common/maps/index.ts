import type { Map } from "../game-types";

import bloodbathChess from "./bloodbath-chess";
import checkmate from "./checkmate";
import chopShopChallenge from "./chop-shop-challenge";
import deathTrap from "./death-trap";
import dizzyDash from "./dizzy-dash";
import islandHop from "./island-hop";
import islandKing from "./island-king";
import lostBearings from "./lost-bearings";
import riskyExchange from "./risky-exchange";
import robotStew from "./robot-stew";
import twister from "./twister";

export const mapList: {
  mapName: string;
  mapDisplayName: string;
  description: [string, string][];
}[] = [
  {
    mapName: "dizzy dash",
    mapDisplayName: "Dizzy Dash",
    description: [
      ["Difficulty", "Easy"],
      ["Recommended Players", "2-8"],
      ["Length", "Short"],
    ],
  },
  {
    mapName: "death trap",
    mapDisplayName: "Death Trap",
    description: [
      ["Difficulty", "Easy"],
      ["Recommended Players", "2-4"],
      ["Length", "Short"],
    ],
  },
  {
    mapName: "checkmate",
    mapDisplayName: "Checkmate",
    description: [
      ["Difficulty", "Easy"],
      ["Recommended Players", "5-8"],
      ["Length", "Short"],
    ],
  },
  {
    mapName: "risky exchange",
    mapDisplayName: "Risky Exchange",
    description: [
      ["Difficulty", "Easy"],
      ["Recommended Players", "2-8"],
      ["Length", "Medium"],
    ],
  },
  {
    mapName: "island hop",
    mapDisplayName: "Island Hop",
    description: [
      ["Difficulty", "Easy"],
      ["Recommended Players", "2-8"],
      ["Length", "Medium"],
    ],
  },
  {
    mapName: "bloodbath chess",
    mapDisplayName: "Bloodbath Chess",
    description: [
      ["Difficulty", "Easy"],
      ["Recommended Players", "2-4"],
      ["Length", "Medium"],
    ],
  },
  {
    mapName: "chop shop challenge",
    mapDisplayName: "Chop Shop Challenge",
    description: [
      ["Difficulty", "Easy"],
      ["Recommended Players", "2-4"],
      ["Length", "Medium"],
    ],
  },
  {
    mapName: "twister",
    mapDisplayName: "Twister",
    description: [
      ["Difficulty", "Easy"],
      ["Recommended Players", "5-8"],
      ["Length", "Medium"],
    ],
  },
  {
    mapName: "island king",
    mapDisplayName: "Island King",
    description: [
      ["Difficulty", "Hard"],
      ["Recommended Players", "5-8"],
      ["Length", "Short"],
    ],
  },
  {
    mapName: "lost bearings",
    mapDisplayName: "Lost Bearings",
    description: [
      ["Difficulty", "Hard"],
      ["Recommended Players", "2-4"],
      ["Length", "Medium"],
    ],
  },
  {
    mapName: "robot stew",
    mapDisplayName: "Robot Stew",
    description: [
      ["Difficulty", "Hard"],
      ["Recommended Players", "2-4"],
      ["Length", "Medium"],
    ],
  },
  {
    mapName: "custom",
    mapDisplayName: "Custom",
    description: [
      ["Difficulty", "?"],
      ["Recommended Players", "?"],
      ["Length", "?"],
    ],
  },
];

export const getMap = (name: string): Map => {
  switch (name.toLowerCase()) {
    case "bloodbath chess":
      return bloodbathChess;
    case "checkmate":
      return checkmate;
    case "chop shop challenge":
      return chopShopChallenge;
    case "death trap":
      return deathTrap;
    case "dizzy dash":
      return dizzyDash;
    case "island hop":
      return islandHop;
    case "island king":
      return islandKing;
    case "lost bearings":
      return lostBearings;
    case "robot stew":
      return robotStew;
    case "twister":
      return twister;
    case "risky exchange":
    default:
      return riskyExchange;
  }
};

export default getMap;
