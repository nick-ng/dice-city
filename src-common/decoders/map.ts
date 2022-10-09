import {
  array,
  boolean,
  intersect,
  literal,
  number,
  string,
  struct,
  union,
} from "io-ts/Decoder";
import { pipe } from "fp-ts/function";

const orthogonalDirections = literal("up", "down", "left", "right");

export const basicMapItemDecoder = struct({
  x: number,
  y: number,
});

export const dockMapItemDecoder = pipe(
  struct({
    type: literal("dock"),
    number: number,
  }),
  intersect(basicMapItemDecoder)
);

export const flagMapItemDecoder = pipe(
  struct({
    type: literal("flag"),
    number: number,
  }),
  intersect(basicMapItemDecoder)
);

export const wallMapItemDecoder = pipe(
  struct({
    type: literal("wall"),
    x1: number,
    y1: number,
  }),
  intersect(basicMapItemDecoder)
);

const conveyorMapItemDecoder = pipe(
  struct({
    direction: orthogonalDirections,
    speed: literal(1, 2),
  }),
  intersect(basicMapItemDecoder)
);

export const straightConveyorMapItemDecoder = pipe(
  struct({
    type: literal("straight-conveyor"),
  }),
  intersect(conveyorMapItemDecoder)
);

export const curvedConveyorMapItemDecoder = pipe(
  struct({
    type: literal("curved-conveyor"),
    fromDirection: array(orthogonalDirections),
    showStraight: boolean,
  }),
  intersect(conveyorMapItemDecoder)
);

export const pitMapItemDecoder = pipe(
  struct({
    type: literal("pit"),
  }),
  intersect(basicMapItemDecoder)
);

export const gearMapItemDecoder = pipe(
  struct({
    type: literal("gear"),
    direction: literal("clockwise", "counter-clockwise"),
  }),
  intersect(basicMapItemDecoder)
);

export const laserMapItemDecoder = pipe(
  struct({
    type: literal("laser"),
    direction: orthogonalDirections,
    count: literal(1, 2, 3),
  }),
  intersect(basicMapItemDecoder)
);

export const pusherMapItemDecoder = pipe(
  struct({
    type: literal("pusher"),
    direction: orthogonalDirections,
    activeRegisters: array(number),
  }),
  intersect(basicMapItemDecoder)
);

export const repairMapItemDecoder = pipe(
  struct({
    type: literal("repair"),
  }),
  intersect(basicMapItemDecoder)
);

export const powerUpMapItemDecoder = pipe(
  struct({
    type: literal("power-up"),
  }),
  intersect(basicMapItemDecoder)
);

export const mapItemNoIdDecoder = union(
  dockMapItemDecoder,
  flagMapItemDecoder,
  wallMapItemDecoder,
  straightConveyorMapItemDecoder,
  curvedConveyorMapItemDecoder,
  pitMapItemDecoder,
  gearMapItemDecoder,
  laserMapItemDecoder,
  pusherMapItemDecoder,
  repairMapItemDecoder,
  powerUpMapItemDecoder
);

export const mapItemDecoder = pipe(
  struct({
    id: number,
  }),
  intersect(mapItemNoIdDecoder)
);

export const mapNoIdDecoder = struct({
  name: string,
  items: array(mapItemNoIdDecoder),
  width: number,
  height: number,
});

export const mapDecoder = struct({
  name: string,
  items: array(mapItemDecoder),
  width: number,
  height: number,
});
