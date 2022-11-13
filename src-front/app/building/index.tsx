import type { Building as BuildingType } from "~common/types/index.js";

import { bgColours, getTag, replaceTags } from "./utils.js";

type BuildingProps = {
  building: BuildingType;
  inactive?: boolean;
};

export default function Building({ building, inactive }: BuildingProps) {
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

  const isEstablishment = colour && activationNumbers;
  const effectWithPictuers = replaceTags(effect);
  const actualPicture = inactive ? ["🚧", "🏗️"] : picture;

  return (
    <div className="relative flex h-52 w-36 flex-col rounded border-2 border-gray-700 text-center dark:border-gray-300">
      {isEstablishment && (
        <div className={`${bgColours[colour]} font-bold text-white`}>
          {activationNumbers.join(" ~ ")}
        </div>
      )}
      <div className={`${isEstablishment ? "" : "pt-1"} text-sm`}>
        {getTag(tag)} {display}
      </div>
      <div
        className={`grid flex-1 place-content-center self-center ${
          actualPicture.length === 1 ? "grid-cols-1" : "grid-cols-2"
        } ${
          actualPicture.length > 2 || effect.length > 80
            ? "text-[150%]"
            : "text-[200%]"
        }`}
      >
        {actualPicture.map((emoji, i) => (
          <span key={`${key}${i}`}>{emoji}</span>
        ))}
      </div>
      <div className="mb-1 flex px-1">
        <div className="coin-float">
          <div className="coin mr-1 bg-yellow-300 text-xs font-bold text-black">
            {cost}
          </div>
        </div>
        <div
          className={`text-left ${
            effect.length > 70 ? "text-xs" : "text-sm"
          } leading-snug`}
        >
          {effectWithPictuers}
        </div>
      </div>
    </div>
  );
}
