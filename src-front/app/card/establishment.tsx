import React from "react";
import { Establishment as EstablishmentType } from "src-common/types";

import { bgColours, getTag, replaceTags } from "./utils";

type EstablishmentProps = {
  building: EstablishmentType;
};

export default function Establishment({ building }: EstablishmentProps) {
  const {
    activationNumbers,
    display,
    colour,
    tag,
    cost,
    effect,
    picture,
    key,
  } = building;

  const effectWithPictuers = replaceTags(effect);

  return (
    <div className="relative flex h-72 w-52 flex-col border border-gray-700 text-center dark:border-gray-300">
      <div className={`${bgColours[colour]} font-bold text-white`}>
        {activationNumbers.join(" ~ ")}
      </div>
      <div>
        {getTag(tag)} {display}
      </div>
      <div
        className={`grid flex-1 place-content-center self-center ${
          picture.length === 1 ? "grid-cols-1" : "grid-cols-2"
        } ${
          picture.length > 2 || effect.length > 60
            ? "text-[225%]"
            : "text-[410%]"
        }`}
      >
        {picture.map((emoji, i) => (
          <span key={`${key}${i}`}>{emoji}</span>
        ))}
      </div>
      <div className="mb-2 flex px-2">
        <div className="coin-float">
          <div className="coin mr-1 bg-yellow-300 font-bold text-black">
            {cost}
          </div>
        </div>
        <div className="text-left">{effectWithPictuers}</div>
      </div>
    </div>
  );
}
