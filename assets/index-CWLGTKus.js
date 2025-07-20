import { u as p, a as j, r as a, j as e, g, L as y } from "./index-vPswkxJ5.js";
import { n as w, I as b } from "./message-Bg2CB__R.js";
import { g as v } from "./game-DR5qpDLN.js";
import { T as N } from "./index-ByImOSgY.js";
import "./utils-BPyf_07k.js";
function E() {
	const { options: l } = p(),
		d = j(),
		t = a.useRef(null),
		[i, c] = a.useState(""),
		[m, h] = a.useState([]),
		{ playerId: x, playerPassword: u, playerName: n } = l,
		f = { playerId: x, playerPassword: u, playerName: n },
		o = a.useCallback(async () => {
			try {
				const s = await fetch("https://dice-city-server.pux.one/api/game", {
						headers: {
							"Access-Control-Allow-Origin": "*",
							"Content-Type": "application/json",
						},
					}),
					r = v.safeParse(await s.json());
				r.success && h(r.data);
			} catch {
				console.error("Error fetching game list");
			}
		}, []);
	return (
		a.useEffect(
			() => (
				t.current && (clearInterval(t.current), (t.current = null)),
				(t.current = setInterval(async () => {
					o();
				}, 1e4)),
				o(),
				() => {
					t.current && (clearInterval(t.current), (t.current = null));
				}
			),
			[],
		),
		e.jsxs("div", {
			children: [
				e.jsx("h2", { children: "Games" }),
				i && e.jsx("div", { children: i }),
				e.jsx(N, {
					message: n ? "" : "Enter a name in the top left corner.",
					children: e.jsx("button", {
						className: "button-default",
						disabled: !n,
						onClick: async () => {
							if (n) {
								c("");
								try {
									const s = await fetch(
											"https://dice-city-server.pux.one/api/game",
											{
												method: "POST",
												headers: {
													"Access-Control-Allow-Origin": "*",
													"Content-Type": "application/json",
												},
												body: JSON.stringify(f),
											},
										),
										{ gameId: r } = w.parse(await s.json());
									d(`/game/${r}`);
								} catch (s) {
									s instanceof Error
										? c(`Error hosting a new game: ${s.message}`)
										: c("Error hosting a new game.");
								}
							}
						},
						children: "Host Game",
					}),
				}),
				e.jsx("hr", { className: "my-1" }),
				e.jsxs("div", {
					children: [
						e.jsxs("table", {
							className: "border-separate border-spacing-y-2",
							children: [
								e.jsxs("thead", {
									children: [
										e.jsx("th", { className: "text-left", children: "Game" }),
										e.jsx("th", { children: "Players" }),
										e.jsx("th", {}),
									],
								}),
								e.jsx("tbody", {
									children: m.map(({ gameId: s, playerCount: r }) =>
										e.jsxs(
											"tr",
											{
												children: [
													e.jsx("td", { children: g(s) }),
													e.jsxs("td", {
														className: "text-center",
														children: [r, " / 5"],
													}),
													e.jsx("td", {
														children: e.jsx(y, {
															className:
																"button-default select-none bg-white text-black no-underline dark:bg-gray-800 dark:text-white",
															to: `/game/${s}`,
															children: "Join Game Lobby",
														}),
													}),
												],
											},
											s,
										),
									),
								}),
							],
						}),
						e.jsx("button", {
							className: "button-default",
							onClick: o,
							children: "Refresh Game List",
						}),
					],
				}),
			],
		})
	);
}
function S() {
	return e.jsxs("div", {
		className: "flex flex-row",
		children: [
			e.jsx("div", {
				className: "flex flex-shrink-0 flex-grow flex-col items-center",
				children: e.jsxs("div", {
					className: "max-w-prose",
					children: [
						e.jsx("h1", { children: "Dice City" }),
						e.jsx("p", { children: "Based on Machi Koro" }),
						e.jsx(E, {}),
					],
				}),
			}),
			e.jsx("div", {
				className: "flex flex-grow flex-col items-center",
				children: e.jsx(b, { showStory: !0 }),
			}),
		],
	});
}
export { S as default };
