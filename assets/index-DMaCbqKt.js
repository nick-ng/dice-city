import { r as x, j as e } from "./index-vPswkxJ5.js";
import { i as b, B as f, a as p, l as j } from "./index-bPgJQDHo.js";
import { b as h } from "./build-Di8S06L_.js";
import { T as g } from "./index-ByImOSgY.js";
import { E as B } from "./index-M-M_FdU-.js";
function E({ supply: o, city: d, onBuild: n, gameData: c, options: m }) {
	const [u, r] = x.useState(""),
		s = b(u);
	x.useEffect(() => {
		r("");
	}, [
		Object.entries(o)
			.map(([i, l]) => `${i}-${l.length}`)
			.sort((i, l) => i.localeCompare(l))
			.join(","),
		d,
	]);
	let t = "";
	return (
		s
			? c &&
				m &&
				(t =
					h(
						c,
						{
							...m,
							type: "build",
							payload: { buildingKey: s == null ? void 0 : s.key },
						},
						!0,
					).error || "")
			: (t = "Choose a building first."),
		e.jsxs("div", {
			className: "flex flex-row items-start justify-start",
			children: [
				n &&
					e.jsxs("div", {
						className: "sticky top-0 z-10 inline-block w-min",
						children: [
							e.jsx("p", {
								className: "text-center text-sm xl:text-base",
								children: "Chosen Building",
							}),
							e.jsx(g, {
								message: t,
								children: e.jsxs("button", {
									className: "button-default w-min p-0.5 pb-1",
									disabled: !s || !!t,
									onClick: () => {
										!s || t || n(u);
									},
									children: [
										s
											? e.jsx(f, { building: s })
											: e.jsx(p, {
													className:
														"flex flex-row justify-center align-middle text-3xl",
													children: "❔",
												}),
										e.jsx("span", {
											className: "px-0.5",
											children: s ? `Build ${s.display}` : "Choose a Building",
										}),
									],
								}),
							}),
							e.jsx("button", {
								className: "button-default mt-2 w-full p-0.5 py-1",
								onClick: () => {
									n("");
								},
								children: "Skip Building",
							}),
							" ",
						],
					}),
				e.jsxs("div", {
					children: [
						e.jsx("p", {
							className: "text-sm xl:text-base",
							children: "Available Buildings",
						}),
						e.jsx("div", {
							className: "flex flex-row",
							children: Object.entries(d.landmarks).map(([i, l]) => {
								const a = j[i];
								return !a || l
									? null
									: e.jsx(
											"button",
											{
												className: "border-default inline-block p-0.5",
												style: { order: a.cost },
												onClick: () => {
													r(i);
												},
												children: e.jsx(f, { building: a }),
											},
											i,
										);
							}),
						}),
						e.jsx(B, {
							establishments: o,
							onChoose: (i) => {
								r(i);
							},
						}),
					],
				}),
			],
		})
	);
}
export { E as B };
