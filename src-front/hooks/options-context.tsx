import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import randomUUID from "~front/utils/random-uuid.js";

const OPTIONS_STORE = "DICE_CITY_OPTIONS";

export interface Options {
  ping?: number;
  preferredVoice?: string;
  playerName?: string;
  playerId?: string;
  playerPassword?: string;
  darkMode?: "light" | "dark" | "system";
}

export const defaultOptions: Options = {
  darkMode: "system",
};

const OptionsContext = createContext<{
  options: Options;
  setOptions: (newPartialOptions: Partial<Options>) => void;
}>({
  options: defaultOptions,
  setOptions: () => {},
});

const OptionsContextProvider = ({ children }: { children: ReactNode }) => {
  const savedOptionsString = localStorage.getItem(OPTIONS_STORE);
  let savedOptions = {};
  if (savedOptionsString) {
    try {
      savedOptions = JSON.parse(savedOptionsString);
    } catch (e) {
      console.error("Invalid saved options");
    }
  }

  const [options, setOptions] = useState({
    ...defaultOptions,
    ...(savedOptions as Options),
  });

  useEffect(() => {
    if (!options.playerId || !options.playerPassword) {
      setOptions((prevOptions) => {
        const fullOptions = { ...prevOptions };

        if (!fullOptions.playerId) {
          fullOptions.playerId = randomUUID();
        }

        if (!fullOptions.playerPassword) {
          fullOptions.playerPassword = randomUUID();
        }

        const { ping, ...saveOptions } = fullOptions;
        localStorage.setItem(OPTIONS_STORE, JSON.stringify(saveOptions));
        return fullOptions;
      });
    }
  }, []);

  return (
    <OptionsContext.Provider
      value={{
        options,
        setOptions: (newPartialOptions) => {
          setOptions((prevOptions) => {
            const fullOptions = { ...prevOptions, ...newPartialOptions };
            const { ping, ...saveOptions } = fullOptions;
            localStorage.setItem(OPTIONS_STORE, JSON.stringify(saveOptions));
            return fullOptions;
          });
        },
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = () => {
  return useContext(OptionsContext);
};

export default OptionsContextProvider;
