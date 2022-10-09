import React, { createContext, ReactNode, useContext } from "react";

const SoundsContext = createContext<{
  [key: string]: HTMLAudioElement;
}>({});

const SoundsContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SoundsContext.Provider
      value={{
        timer: new Audio("/timer.mp3"),
      }}
    >
      {children}
    </SoundsContext.Provider>
  );
};

export const useSounds = () => useContext(SoundsContext);

export default SoundsContextProvider;
