const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"assets/index-CNxKKwqq.js",
			"assets/index-fMzAfD9f.css",
			"assets/dev-all-buildings-CdGfC9Id.js",
			"assets/index-Bn6BF0kz.js",
			"assets/utils-BPyf_07k.js",
			"assets/supply-total-pxdrra1q.js",
			"assets/index-CHSxDWxZ.js",
			"assets/dev-build-DMq5E7CN.js",
			"assets/index-CdAj0rOK.js",
			"assets/build-Dk60zB6J.js",
			"assets/index-DtrZpEOK.js",
			"assets/index-BHCNZcLj.js",
			"assets/game-B2b4Hgu1.js",
			"assets/business-centre-DMKK8VDC.js",
		]),
) => i.map((i) => d[i]);
import {
	r as l,
	j as e,
	L as a,
	R as c,
	b as m,
	_ as s,
} from "./index-CNxKKwqq.js";
const d = [
		{
			name: "Loading",
			path: "loading",
			Element: l.lazy(() =>
				s(
					() => import("./index-CNxKKwqq.js").then((t) => t.i),
					__vite__mapDeps([0, 1]),
				),
			),
		},
		{
			name: "Buildings",
			section: "components",
			path: "buildings",
			Element: l.lazy(() =>
				s(
					() => import("./dev-all-buildings-CdGfC9Id.js"),
					__vite__mapDeps([2, 0, 1, 3, 4]),
				),
			),
		},
		{
			name: "Supply - Total",
			section: "components",
			path: "supply-total",
			Element: l.lazy(() =>
				s(
					() => import("./supply-total-pxdrra1q.js"),
					__vite__mapDeps([5, 0, 1, 3, 4, 6]),
				),
			),
		},
		{
			name: "Build Interface",
			section: "components",
			path: "build-interface",
			Element: l.lazy(() =>
				s(
					() => import("./dev-build-DMq5E7CN.js"),
					__vite__mapDeps([7, 0, 1, 6, 3, 4, 8, 9, 10]),
				),
			),
		},
		{
			name: "State Compare",
			path: "state-compare",
			Element: l.lazy(() =>
				s(
					() => import("./index-BHCNZcLj.js"),
					__vite__mapDeps([11, 0, 1, 12, 3, 4, 9, 13, 6]),
				),
			),
		},
	].sort((t, n) => t.name.localeCompare(n.name)),
	r = "DARK_MODE_STORE_KEY",
	i = (t) => {
		t
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	};
function p() {
	return (
		l.useEffect(() => {
			const t = localStorage.getItem(r);
			i(t === "on");
		}, []),
		e.jsxs("div", {
			className:
				"flex h-full flex-col xl:grid xl:flex-none xl:grid-cols-[auto_1fr] xl:gap-2",
			children: [
				e.jsxs("details", {
					className: "mb-2 xl:hidden",
					children: [
						e.jsx("summary", { children: "Components" }),
						e.jsx("ul", {
							children: d.map(({ name: t, section: n, path: o }) =>
								n !== "components"
									? null
									: e.jsx(
											"li",
											{ children: e.jsx(a, { to: `/dev/${o}`, children: t }) },
											o,
										),
							),
						}),
					],
				}),
				e.jsxs("div", {
					className: "hidden h-full overflow-y-auto xl:block",
					children: [
						e.jsx("h2", { children: "Components" }),
						e.jsx("ul", {
							children: d.map(({ name: t, section: n, path: o }) =>
								n !== "components"
									? null
									: e.jsx(
											"li",
											{ children: e.jsx(a, { to: `/dev/${o}`, children: t }) },
											o,
										),
							),
						}),
						e.jsx("h2", { children: "State Compare" }),
						e.jsx("ul", {
							children: e.jsx(a, {
								to: "/dev/state-compare",
								children: "Main",
							}),
						}),
					],
				}),
				e.jsxs("div", {
					children: [
						e.jsx("button", {
							className:
								"mb-2 ml-2 rounded border border-gray-600 px-2 py-0 dark:border-gray-300",
							onClick: () => {
								localStorage.getItem(r) === "on"
									? (localStorage.setItem(r, "off"), i(!1))
									: (localStorage.setItem(r, "on"), i(!0));
							},
							children: "Toggle Dark Mode",
						}),
						" ",
						e.jsx("span", {
							className: "hidden xl:inline",
							children: "Change dark mode setting for development only.",
						}),
						e.jsx("div", {
							className: "h-full border",
							children: e.jsx(c, {
								children: d.map(({ path: t, Element: n }) =>
									e.jsx(m, { path: `/${t}`, element: e.jsx(n, {}) }, t),
								),
							}),
						}),
						e.jsxs("div", {
							children: ["API_ORIGIN: ", "https://dice-city-server.pux.one"],
						}),
					],
				}),
			],
		})
	);
}
export { p as default };
