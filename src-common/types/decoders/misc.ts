import { string, refine } from "io-ts/Decoder";
import { pipe } from "fp-ts/function";

export interface UuidishBrand {
  readonly Uuidish: unique symbol;
}

export type Uuidish = string & UuidishBrand;

/**
 * Like uuid but all numbers and letters from A-Z of any case
 */
export const uuidishDecoder = pipe(
  string,
  refine(
    (s): s is Uuidish =>
      !!s.match(
        /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i
      ),
    "UUID"
  )
);
