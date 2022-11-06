import type { Options, useOptions } from "@front/hooks/options-context.js";

export default function DarkMode({
  darkMode,
  setOptions,
}: Pick<Options, "darkMode"> &
  Pick<ReturnType<typeof useOptions>, "setOptions">) {
  return (
    <fieldset className="border border-gray-700 p-2 dark:border-gray-300 dark:bg-gray-800">
      <legend className="-mb-2 px-0.5">Colour Theme</legend>
      <label className="block">
        <input
          onChange={() => {
            setOptions({ darkMode: "dark" });
          }}
          type="radio"
          value="dark"
          name="darkMode"
          checked={darkMode === "dark"}
        />
        &nbsp;Dark Mode
      </label>
      <label className="block">
        <input
          onChange={() => {
            setOptions({ darkMode: "light" });
          }}
          type="radio"
          value="light"
          name="darkMode"
          checked={darkMode === "light"}
        />
        &nbsp;Light Mode
      </label>
      <label className="block">
        <input
          onChange={() => {
            setOptions({ darkMode: "system" });
          }}
          type="radio"
          value="system"
          name="darkMode"
          checked={darkMode === "system"}
        />
        &nbsp;System (default)
      </label>
    </fieldset>
  );
}
