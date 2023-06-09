import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import type { Options } from "~front/hooks/options-context.js";

import { useOptions } from "~front/hooks/options-context.js";

import Container from "~front/layout/container.js";
import Loading from "./loading/index.js";
import TopBar from "./top-bar/index.js";
const Home = lazy(() => import("./home/index.js"));
const DevFrontEnd = lazy(() => import("./dev-front-end/index.js"));
const GameScreen = lazy(() => import("./game-screen/index.js"));

const toggleDarkMode = (darkMode: Options["darkMode"]) => {
	if (
		darkMode === "dark" ||
		(darkMode === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
};

export default function App() {
	const { options } = useOptions();

	useEffect(() => {
		toggleDarkMode(options.darkMode);
	}, [options.darkMode]);

	useEffect(() => {
		const prefersColorSchemeDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);

		const toggleCallBack = () => {
			toggleDarkMode(options.darkMode);
		};

		prefersColorSchemeDark.addEventListener("change", toggleCallBack);

		return () => {
			prefersColorSchemeDark.removeEventListener("change", toggleCallBack);
		};
	}, []);

	return (
		<Suspense fallback={<Loading />}>
			<Container>
				<TopBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dev/*" element={<DevFrontEnd />} />
					<Route path="/game/:id" element={<GameScreen />} />
				</Routes>
			</Container>
		</Suspense>
	);
}
