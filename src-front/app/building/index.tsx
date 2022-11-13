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
    <div className="relative flex h-52 w-28 flex-col rounded border-2 border-gray-700 text-center dark:border-gray-300 md:w-36">
      {isEstablishment && (
        <div className={`${bgColours[colour]} relative font-bold text-white`}>
          {activationNumbers.join(" ~ ")}
          <div className="coin absolute top-0 bottom-0 right-0.5 my-auto">
            {cost}
          </div>
        </div>
      )}
      <div className={`${isEstablishment ? "" : "pt-1"} flex`}>
        <span className="flex-1 text-xs md:text-sm">
          {getTag(tag)} {display}
        </span>
        {!isEstablishment && <div className="coin mr-0.5">{cost}</div>}
      </div>
      <div
        className={`grid flex-1 place-content-center self-center ${
          actualPicture.length === 1 ? "grid-cols-1" : "grid-cols-2"
        } ${
          actualPicture.length > 2 || effect.length > 80
            ? "text-[120%] md:text-[150%]"
            : "text-[150%] md:text-[200%]"
        }`}
      >
        {actualPicture.map((emoji, i) => (
          <span key={`${key}${i}`}>{emoji}</span>
        ))}
      </div>
      <div
        className={`mx-1 mb-1 text-left md:mx-2 ${
          effect.length > 70 ? "text-xs" : "text-sm"
        } leading-snug`}
      >
        {effectWithPictuers}
      </div>
    </div>
  );
}
