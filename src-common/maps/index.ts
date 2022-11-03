import type { Map } from "../game-types.js";

export const mapList: {
  mapName: string;
  mapDisplayName: string;
  description: [string, string][];
}[] = [];

export const getMap = (name: string): Map => {
  switch (name.toLowerCase()) {
    default:
      throw new Error("No map found");
  }
};

export default getMap;
