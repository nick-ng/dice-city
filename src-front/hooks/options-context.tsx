import React, { createContext, ReactNode, useContext, useState } from "react";

const OPTIONS_STORE = "ROBOT_RACE_OPTIONS";

export interface Options {
  ping?: number;
  smallerPriorityFirst: boolean;
  predictiveMode: boolean;
  colors: string[];
  preferredVoice?: string;
}

export const defaultOptions: Options = {
  smallerPriorityFirst: true,
  predictiveMode: true,
  colors: ["#FF71CE", "#05FFA1", "#01CDFE", "#FFFB96"],
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
  let savedOptions = null;
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
