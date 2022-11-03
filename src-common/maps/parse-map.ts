import type { Map } from "../game-types.js";

import { mapNoIdDecoder } from "../decoders/map.js";
import { mapValidator } from "./map-validator.js";

export const parseMap = (
  mapJSON: string
): { map: Map | null; errors: string[] } => {
  try {
    const tempMap = JSON.parse(mapJSON);
    const result = mapNoIdDecoder.decode(tempMap);

    if (result._tag === "Right") {
      const { fixedMap, errors } = mapValidator(result.right);

      if (errors.length === 0) {
        return { map: { ...fixedMap, name: "custom" }, errors };
      }

      return { map: null, errors };
    }

    return { map: null, errors: [JSON.stringify(result.left)] };
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.debug("error parsing map", e);
      if (e instanceof Error) {
        return { map: null, errors: [e.message] };
      }
    }
    return { map: null, errors: [] };
  }
};
