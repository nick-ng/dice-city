import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import type { Options } from "~front/hooks/options-context.js";

import { useOptions } from "~front/hooks/options-context.js";

import Container from "~front/layout/container.js";
import Loading from "./loading/index.js";
import TopBar from "./top-bar/index.js";
import NameGenerator from "./name-generator.js";

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
			<div className="absolute bottom-0 left-0 right-0 top-0">
				<TopBar />
				<div className="h-full pt-10">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/dev/*" element={<DevFrontEnd />} />
						<Route path="/game/:id" element={<GameScreen />} />
						<Route path="/name-generator" element={<NameGenerator />} />
					</Routes>
				</div>
			</div>
		</Suspense>
	);
}
