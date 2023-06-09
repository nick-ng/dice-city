import { createContext, ReactNode, useContext } from "react";

const SoundsContext = createContext<{
	[key: string]: HTMLAudioElement;
}>({});

const SoundsContextProvider = ({ children }: { children: ReactNode }) => {
	return <SoundsContext.Provider value={{}}>{children}</SoundsContext.Provider>;
};

export const useSounds = () => useContext(SoundsContext);

export default SoundsContextProvider;
