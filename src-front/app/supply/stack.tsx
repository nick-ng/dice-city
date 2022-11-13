import type { Establishment } from "~common/types/index.js";

import Building from "../building/index.js";
import { bgColours } from "../building/utils.js";

interface StackProps {
  establishment: Establishment;
  count: number;
  className?: string;
}

export default function Stack({ establishment, count, className }: StackProps) {
  if (count === 0) {
    return null;
  }

  const { activationNumbers, colour, cost, key } = establishment;

  return (
    <div
      className={`${className || ""} p-0.5`}
      style={{ transformBox: "content-box" }}
    >
      {Array(count - 1)
        .fill("")
        .map((_, n) => (
          <div
            key={`${key}-${n}`}
            className="-mb-1 h-8 w-full overflow-y-hidden rounded-t border-x-2 border-t-2 border-x-gray-700 border-t-gray-700 text-center dark:border-x-gray-300 dark:border-t-gray-300"
          >
            <div
              className={`${bgColours[colour]} relative font-bold text-white`}
            >
              {activationNumbers.join(" ~ ")}
              <div className="coin absolute top-0 bottom-0 right-0.5 my-auto">
                {cost}
              </div>
            </div>
          </div>
        ))}
      <Building building={establishment} />
    </div>
  );
}
