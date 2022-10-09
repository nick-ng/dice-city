import type {
  Robot,
  Map,
  MapItem,
  MainGameState,
  FlagMapItem,
} from "dist-common/game-types";

export const touchCheckpoints = (
  robots: Robot[],
  mapItems: MapItem[],
  flagsTouched: MainGameState["flagsTouched"]
): { playerId: string; cellItems: MapItem[] }[] => {
  const touched: { playerId: string; cellItems: MapItem[] }[] = [];

  for (const robot of robots) {
    const { position, playerId, status, damagePoints } = robot;

    if (status !== "ok" || damagePoints >= 10) {
      continue;
    }

    const cellItems = mapItems.filter(
      (item) =>
        item.x === position.x &&
        item.y === position.y &&
        ["flag", "repair"].includes(item.type)
    ) as MapItem[];

    try {
      if (cellItems.length > 0) {
        touched.push({
          playerId,
          cellItems,
        });

        robot.archiveMarkerId = cellItems[0].id;

        const flag = cellItems.find((a) => a.type === "flag") as
          | (FlagMapItem & MapItem)
          | undefined;
        const currentFlag = flagsTouched[playerId];
        if (flag && flag.number === currentFlag + 1) {
          flagsTouched[playerId] = flag.number;
        }
      }
    } catch (e) {
      console.error("error in touchCheckpoints", e);
    }
  }

  return touched;
};

export const fallInHoles = (robots: Robot[], map: Map) => {
  for (const robot of robots) {
    const { position } = robot;
    const { width, height } = map;

    if (
      position.x < 0 ||
      position.y < 0 ||
      position.x >= width ||
      position.y >= height
    ) {
      robot.status = "falling";
      continue;
    }

    if (
      map.items.some(
        ({ x, y, type }) =>
          position.x === x && position.y === y && ["pit"].includes(type)
      )
    ) {
      robot.status = "falling";
    }
  }
};
