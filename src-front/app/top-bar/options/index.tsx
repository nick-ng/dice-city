import { useOptions } from "~front/hooks/options-context.js";

import ItemLayout from "../item-layout.js";
import DarkMode from "./dark-mode.js";

export default function Options() {
  const { options, setOptions } = useOptions();
  return (
    <ItemLayout className="relative">
      <details>
        <summary>Options</summary>
        <div className="absolute top-full right-0 z-10 w-max border border-gray-700 bg-white p-2 dark:border-gray-300 dark:bg-gray-800">
          <DarkMode darkMode={options.darkMode} setOptions={setOptions} />
        </div>
      </details>
    </ItemLayout>
  );
}
