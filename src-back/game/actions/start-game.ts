import type {
  GameAction,
  AutomaticAction,
} from "dist-common/game-action-types";
import type { MainGameState, Robot } from "dist-common/game-types";
import { getCardMap, shuffle } from "../../../dist-common/card-map";
import Game, { ROBOT_DESIGNS } from "../game-class";

const robotDesigns = {
  0: {
    borderStyle: "solid",
    borderColor: 0,
  },
  1: {
    borderStyle: "solid",
    borderColor: 1,
  },
  2: {
    borderStyle: "double",
    borderColor: 2,
  },
  3: {
    borderStyle: "double",
    borderColor: 3,
  },
  4: {
    borderStyle: "dashed",
    borderColor: 0,
  },
  5: {
    borderStyle: "dashed",
    borderColor: 1,
  },
  6: {
    borderStyle: "dotted",
    borderColor: 2,
  },
  7: {
    borderStyle: "dotted",
    borderColor: 3,
  },
};

const getDifferenceScore = (newStyle: Robot["design"], robots: Robot[]) => {
  const uniqueStyles = new Set();
  const uniqueColors = new Set();

  if (typeof newStyle === "number") {
    uniqueStyles.add(robotDesigns[newStyle].borderStyle);
    uniqueColors.add(robotDesigns[newStyle].borderColor);
  }

  robots.forEach((r) => {
    if (typeof r.design !== "number") {
      return;
    }
    const d = robotDesigns[r.design];
    if (d) {
      uniqueStyles.add(d.borderStyle);
      uniqueColors.add(d.borderColor);
    }
  });

  return uniqueColors.size * 3 + uniqueStyles.size * 2;
};

const startGame = (
  game: Game,
  action: GameAction
): { game: Game; message: string; automaticAction?: AutomaticAction } => {
  const { gameState, players, host, gameSettings } = game;
  if (gameState.state !== "lobby") {
    return {
      game,
      message: "Game is already in progress.",
    };
  }

  if (action.playerId !== host) {
    return {
      game,
      message: "Only the host can start the game.",
    };
  }

  const playerIds = players.map((a) => a.id);
  const seatOrder = shuffle(playerIds);

  const cardMap = getCardMap();

  game.gameState = {
    ...game.gameState,
    state: "main",
    seatOrder,
    finishedProgrammingPlayers: [],
    poweringDownNextTurn: [],
    discardedCards: Object.keys(cardMap),
    cardMap,
  } as MainGameState;

  const { map } = gameSettings;
  const chosenDesigns = game.gameState.robots.map((r) => r.design);

  seatOrder.forEach((playerId, i) => {
    const robot = game.gameState.robots.find((r) => r.playerId === playerId);
    const startingDock = map.items.find(
      (mi) => mi.type === "dock" && mi.number === i + 1
    );

    if (!robot || !startingDock) {
      return;
    }

    robot.position.x = startingDock.x;
    robot.position.y = startingDock.y;
    robot.archiveMarkerId = startingDock.id;
    robot.status = "ok";
    if (robot.design === "random") {
      const remainingDesigns = ROBOT_DESIGNS.filter(
        (d) => !chosenDesigns.includes(d)
      )
        .map((d) => ({
          d,
          score: getDifferenceScore(d, game.gameState.robots) + Math.random(),
        }))
        .sort((a, b) => b.score - a.score)
        .map((a) => a.d);

      robot.design = remainingDesigns[0]!;
    }
  });
  game.gameState.robots;

  return {
    game,
    message: "OK",
    automaticAction: {
      action: { playerId: "server", type: "deal-program-cards" },
      delay: 0,
    },
  };
};

export default startGame;
