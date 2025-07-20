import {
	r as S,
	u as Y,
	c as X,
	j as e,
	g as I,
	d as F,
	e as se,
	f as te,
} from "./index-vPswkxJ5.js";
import { w as ne, I as Z } from "./message-Bg2CB__R.js";
import {
	j as ae,
	s as re,
	b as le,
	C as H,
} from "./business-centre-DYK_Jdjj.js";
import { s as ie } from "./game-DR5qpDLN.js";
import { T as B } from "./index-ByImOSgY.js";
import { g as D } from "./build-Di8S06L_.js";
import { B as ce } from "./index-DMaCbqKt.js";
import { s as z, e as O, B as oe } from "./index-bPgJQDHo.js";
import { r as de } from "./utils-BPyf_07k.js";
import "./index-M-M_FdU-.js";
const ue = "https://dice-city-server.pux.one".replace(/^http/i, "ws"),
	V = (r) =>
		!r ||
		WebSocket.CLOSING === r.readyState ||
		WebSocket.CLOSED === r.readyState,
	G = (r, t) => {
		r == null || r.send(JSON.stringify(t));
	},
	me = (r, t) => {
		const s = S.useRef(!1),
			i = S.useRef(null),
			o = S.useRef((n) => {}),
			[g, p] = S.useState(null),
			[x, d] = S.useState("not-connected"),
			[y, b] = S.useState(-1),
			f = S.useCallback(
				(n) => {
					V(i.current) ? o.current(n) : G(i.current, n);
				},
				[o.current, t.id],
			);
		return (
			S.useEffect(() => {
				const n = location.origin.split(".").reverse(),
					m = "https://dice-city-server.pux.one".split(".").reverse();
				let h = [];
				for (let l = 0; l < n.length && n[l] === m[l]; l++) h.unshift(n[l]);
				const c = h.join(".");
				return (
					(document.cookie = `dicecityplayerid=${t.id}; Domain=${c}; SameSite=Lax;`),
					(document.cookie = `dicecityplayerpass=${t.password}; Domain=${c}; SameSite=Lax;`),
					(s.current = !0),
					(o.current = (l) => {
						V(i.current) &&
							(console.info(
								new Date().toLocaleTimeString(),
								"Getting a new WebSocket connection",
							),
							(i.current = new WebSocket(`${ue}/game/${r}`)),
							i.current.addEventListener("open", () => {
								(console.info(
									new Date().toLocaleTimeString(),
									"WebSocket connection opened",
								),
									l &&
										setTimeout(() => {
											G(i.current, l);
										}, 20));
							}),
							i.current.addEventListener("message", (v) => {
								var u, N;
								const { data: k } = v,
									P = ne.safeParse(JSON.parse(k));
								if (!P.success) {
									console.error(
										new Date().toLocaleTimeString(),
										"Unexpected data from WebSocket",
										JSON.stringify(P.error, null, "  "),
									);
									return;
								}
								const T = P.data;
								switch (T.type) {
									case "not-found":
										(p(null), d("not-found"), b(0));
										return;
									case "ping":
										G(i.current, {
											type: "pong",
											playerId: t.id,
											playerPassword: t.password,
										});
										break;
									case "game-data":
										const j = T.payload.playerGameData;
										j.gameDetails.id === r && (p(j), d("connected"));
										break;
								}
								(u = T.payload) != null &&
									u.latency &&
									b((N = T.payload) == null ? void 0 : N.latency);
							}),
							i.current.addEventListener("close", () => {
								s.current
									? (d("reconnecting"),
										console.info(
											new Date().toLocaleTimeString(),
											"WebSocket connection lost",
										),
										o.current())
									: (d("not-connected"),
										console.info(
											new Date().toLocaleTimeString(),
											"WebSocket connection closed",
										));
							}));
					}),
					o.current(),
					() => {
						var l;
						(console.info(
							new Date().toLocaleTimeString(),
							"Closing WebSocket connection",
						),
							(s.current = !1),
							(l = i.current) == null || l.close(),
							(i.current = null));
					}
				);
			}, [r, t.id, t.password]),
			{
				playerGameData: g,
				connectionStatus: x,
				latency: y,
				sendViaWebSocket: f,
			}
		);
	},
	q = {
		total: "Total (Base game)",
		variable: "Variable (Harbour expansion)",
		hybrid: "Hybrid (5-5-2, Recommended)",
	};
function he({ gameData: r, sendViaWebSocket: t }) {
	const { options: s } = Y(),
		{ id: i } = X(),
		{ gameDetails: o, gameSettings: g } = r,
		{ players: p, isPublic: x, hostId: d } = o,
		y = x ? s.showNamesPublic : s.showNames,
		b = { ...s, type: "join", payload: { playerName: s.playerName } },
		f = { ...s, type: "start" },
		n = d === s.playerId,
		m = ae(r, b, !0).error,
		h = re(r, f, !0).error;
	return e.jsxs("div", {
		className: "flex flex-row",
		children: [
			e.jsx("div", {
				className: "flex flex-shrink-0 flex-grow flex-col items-center",
				children: e.jsxs("div", {
					className: "max-w-prose",
					children: [
						e.jsx("h2", { children: "Lobby" }),
						e.jsxs("h2", { children: ["Game: ", I(i, null, !1)] }),
						e.jsx("h2", { children: "Game Settings" }),
						n &&
							e.jsx("table", {
								className: "mb-1 border-separate border-spacing-1",
								children: e.jsxs("tbody", {
									children: [
										e.jsxs("tr", {
											children: [
												e.jsx("td", {
													children: e.jsx("label", {
														htmlFor: "supply-select",
														children: "Supply Type:",
													}),
												}),
												e.jsx("td", {
													children: e.jsx("select", {
														id: "supply-select",
														className:
															"border border-gray-300 bg-white dark:bg-gray-800 dark:text-white",
														value: g.supplyType,
														onChange: (c) => {
															t({
																...s,
																type: "change-supply",
																payload: {
																	supplyType: ie.parse(c.target.value),
																},
															});
														},
														children: Object.entries(q).map(([c, l]) =>
															e.jsx("option", { value: c, children: l }, c),
														),
													}),
												}),
											],
										}),
										e.jsxs("tr", {
											children: [
												e.jsx("td", {
													children: e.jsx("label", {
														htmlFor: "is-public-checkbox",
														children: "Public:",
													}),
												}),
												e.jsx("td", {
													children: e.jsx("input", {
														id: "is-public-checkbox",
														type: "checkbox",
														checked: x,
														onChange: () => {
															t({
																...s,
																type: "change-public",
																payload: { isPublic: !x },
															});
														},
													}),
												}),
											],
										}),
									],
								}),
							}),
						!n &&
							e.jsxs("div", {
								className: "mb-1",
								children: ["Supply Type: ", q[g.supplyType]],
							}),
						e.jsx("h3", {
							children: p.length > 0 ? "Players" : "No one has joined the game",
						}),
						e.jsx("ul", {
							className: "ml-5 list-outside list-disc",
							children: p.map((c) =>
								e.jsx(
									"li",
									{ children: I(c.id, c.name, y || c.id === s.playerId) },
									c.id,
								),
							),
						}),
						e.jsx(B, {
							message: m,
							children: e.jsx("button", {
								className: "button-default w-24",
								onClick: () => {
									m || t(b);
								},
								disabled: !!m,
								children: p.map((c) => c.id).includes(s.playerId)
									? "Joined ✅"
									: "Join Game",
							}),
						}),
						d === s.playerId &&
							p.map((c) => c.id).includes(s.playerId) &&
							e.jsx(B, {
								message: h,
								children: e.jsx("button", {
									className: "button-default w-28",
									onClick: () => {
										h || t(f);
									},
									disabled: !!h,
									children: "Start Game",
								}),
							}),
					],
				}),
			}),
			e.jsx("div", {
				className: "flex flex-grow flex-col items-center",
				children: e.jsx(Z, { showStory: !0 }),
			}),
		],
	});
}
function pe({ gameData: r, options: t, rollHandler: s, rerollHandler: i }) {
	const { gameState: o } = r,
		{ common: g, players: p } = o.publicState,
		{ activePlayerId: x, diceRolls: d, pendingActions: y, turnPhase: b } = g,
		f = y.filter((h) => h.playerId === t.playerId).map((h) => h.action),
		n = p[t.playerId];
	return !(x === t.playerId) || b !== "before-roll"
		? null
		: f.includes("radio-tower")
			? d.length === 1
				? e.jsxs("div", {
						className: "mt-1",
						children: [
							e.jsx("button", {
								className: "button-default animate-attention px-4 py-2",
								onClick: () => {
									i(!1);
								},
								children: "Re-Roll 🎲",
							}),
							e.jsxs("button", {
								className: "button-default animate-attention px-4 py-2",
								onClick: () => {
									i(!0);
								},
								children: ["Keep ", d[0]],
							}),
						],
					})
				: e.jsxs("div", {
						className: "mt-1",
						children: [
							e.jsxs("button", {
								className: "button-default animate-attention px-4 py-2",
								onClick: () => {
									i(!1);
								},
								children: ["Re-Roll ", d.map(() => "🎲").join("")],
							}),
							e.jsxs("button", {
								className: "button-default animate-attention px-4 py-2",
								onClick: () => {
									i(!0);
								},
								children: [
									"Keep ",
									d.reduce((h, c) => h + c, 0),
									" (",
									d.join(" + "),
									")",
								],
							}),
						],
					})
			: f.includes("harbour")
				? null
				: e.jsxs("div", {
						className: "mt-1",
						children: [
							e.jsx("button", {
								className: "button-default animate-attention px-4 py-2",
								onClick: () => {
									s(1);
								},
								children: "Roll 🎲",
							}),
							n.city.landmarks.trainStation &&
								e.jsx("button", {
									className: "button-default animate-attention px-4 py-2",
									onClick: () => {
										s(2);
									},
									children: "Roll 🎲🎲",
								}),
						],
					});
}
function xe({ gameData: r, options: t, onClick: s }) {
	const { gameDetails: i, gameState: o } = r,
		{ players: g, isPublic: p } = i,
		{ common: x, players: d } = o.publicState,
		{ turnPhase: y, turnOrder: b, pendingActions: f, diceRolls: n } = x,
		m = f.filter((v) => v.playerId === t.playerId).map((v) => v.action);
	if (y !== "before-roll" || !m.includes("harbour")) return null;
	const h = d[t.playerId],
		{ city: c } = h,
		l = n.reduce((v, k) => v + k, 0);
	return e.jsxs("div", {
		children: [
			e.jsx("h3", { children: "Harbour" }),
			e.jsxs("p", {
				children: [
					"You rolled ",
					l,
					". You may add 2 to the dice roll total.",
					" ",
					c.landmarks.amusementPark &&
						n.length === 2 &&
						n[0] === n[1] &&
						e.jsx("span", {
							children:
								"You still get to take another turn if you change the dice roll total.",
						}),
				],
			}),
			e.jsxs("div", {
				className: "mt-1",
				children: [
					e.jsxs("button", {
						className: "button-default animate-attention px-4 py-2",
						onClick: () => {
							s(!0);
						},
						children: ["Keep Roll (", l, ")"],
					}),
					e.jsxs("button", {
						className: "button-default animate-attention px-4 py-2",
						onClick: () => {
							s(!1);
						},
						children: ["Add 2 (", l + 2, ")"],
					}),
				],
			}),
		],
	});
}
const Q = "dark:bg-white dark:text-black bg-gray-800 text-white";
function ye({ gameData: r, options: t, onClick: s }) {
	const { gameDetails: i, gameState: o } = r,
		{ players: g, isPublic: p } = i,
		{ common: x, players: d } = o.publicState,
		{ turnOrder: y, pendingActions: b } = x,
		[f, n] = S.useState(""),
		[m, h] = S.useState(""),
		[c, l] = S.useState("");
	if (
		!b
			.filter((u) => u.playerId === t.playerId)
			.map((u) => u.action)
			.includes("business-centre")
	)
		return null;
	const k = p ? t.showNamesPublic : t.showNames,
		P = d[t.playerId],
		T = le(
			r,
			{
				...t,
				type: "business-centre",
				payload: { myOffer: f, opponentId: m, opponentOffer: c },
			},
			!0,
		).error;
	return e.jsxs("div", {
		children: [
			e.jsx("h3", { children: "Business Centre" }),
			e.jsx("p", {
				children:
					"Trade one of your non-🏛️ establishments for an opponent's non-🏛️ establishment.",
			}),
			e.jsxs("div", {
				className: "mt-2 inline-block",
				children: [
					e.jsxs("div", {
						children: [
							e.jsx("div", {
								className: "inline-block",
								children: e.jsxs("div", {
									className: "flex flex-col items-stretch",
									children: [
										e.jsx("div", {
											className: "text-center font-semibold",
											children: "Your Establishments",
										}),
										Object.entries(P.city.establishments)
											.sort((u, N) => z(O[u[0]], O[N[0]]))
											.map(([u, N]) =>
												N.length === 0 || O[u].tag === "major"
													? null
													: e.jsxs(
															"button",
															{
																className: `button-default mt-1 py-2 ${u === f ? Q : ""}`,
																onClick: () => {
																	n(u);
																},
																children: [O[u].display, " -", " ", N.length],
															},
															u,
														),
											),
									],
								}),
							}),
							D(y, t.playerId, !1).map((u) => {
								const N = g.find((w) => w.id === u),
									j = d[u];
								return e.jsx(
									"div",
									{
										className: "inline-block",
										children: e.jsxs("div", {
											className: "ml-1 flex flex-col items-stretch",
											children: [
												e.jsxs("div", {
													className: "text-center font-semibold",
													children: [
														I(u, N == null ? void 0 : N.name, k),
														"'s Establishments",
													],
												}),
												Object.entries(j.city.establishments)
													.sort((w, E) => z(O[w[0]], O[E[0]]))
													.map(([w, E]) =>
														E.length === 0
															? null
															: e.jsxs(
																	"button",
																	{
																		className: `button-default mt-1 py-2 ${u === m && c === w ? Q : ""}`,
																		onClick: () => {
																			(h(u), l(w));
																		},
																		children: [
																			O[w].display,
																			" -",
																			" ",
																			E.length,
																		],
																	},
																	w,
																),
													),
											],
										}),
									},
									u,
								);
							}),
						],
					}),
					e.jsxs("div", {
						className: "mt-2 flex flex-row justify-between",
						children: [
							e.jsx(B, {
								message: F(g, !!k, t.playerId, de(T || "")),
								children: e.jsx("button", {
									className: "button-default animate-attention px-4 py-2",
									disabled: !!T,
									onClick: () => {
										T || s({ myOffer: f, opponentId: m, opponentOffer: c });
									},
									children: "Trade",
								}),
							}),
							e.jsx("button", {
								className: "button-default ml-1 px-4 py-2",
								onClick: () => {
									s({ myOffer: "", opponentId: t.playerId, opponentOffer: "" });
								},
								children: "Skip",
							}),
						],
					}),
				],
			}),
		],
	});
}
const fe = Object.values(O);
function be({ open: r }) {
	return e.jsx("div", {
		children: e.jsxs("details", {
			open: r,
			children: [
				e.jsx("summary", { className: "text-lg", children: "Establishments" }),
				e.jsx("div", {
					className: "text-sm can-hover:hidden",
					children: "Tap on an establishment to see what it does",
				}),
				e.jsx("div", {
					className: "cannot-hover:hidden",
					children: "Hover over an establishment to see what it does",
				}),
				e.jsx("ul", {
					className: "ml-5 list-outside list-disc",
					children: fe.map((t) =>
						e.jsxs(
							"li",
							{
								className:
									"group relative cursor-pointer py-0.5 even:bg-gray-100 dark:even:bg-gray-700",
								tabIndex: 0,
								children: [
									e.jsx("span", { children: t.display }),
									e.jsx("div", {
										className:
											"absolute bottom-0 right-4 z-10 hidden bg-white dark:bg-gray-800 can-hover:group-hover:block cannot-hover:group-focus:block",
										children: e.jsx(oe, { building: t }),
									}),
								],
							},
							t.key,
						),
					),
				}),
			],
		}),
	});
}
function je({ gameData: r, options: t }) {
	const { gameDetails: s, gameState: i } = r,
		{ players: o, isPublic: g } = s,
		{ common: p, players: x } = i.publicState,
		{ activePlayerId: d, turnEvents: y, turnOrder: b } = p,
		f = g ? t.showNamesPublic : t.showNames;
	return e.jsxs("div", {
		className:
			"ml-2 h-full flex-shrink-0 flex-grow-0 basis-48 overflow-y-scroll pb-12 xl:basis-80",
		children: [
			e.jsx("h3", { children: "Players" }),
			e.jsx("ul", {
				className: "ml-5 list-outside",
				children: D(b, t.playerId, !0).map((n) => {
					const m = n !== t.playerId,
						h = o.find((l) => l.id === n),
						c = Object.values(x[n].city.landmarks).reduce(
							(l, v) => (v ? l + 1 : l),
							0,
						);
					return e.jsxs(
						"li",
						{
							className: `${n === d ? "list-disc" : "list-[circle]"} underline`,
							role: "button",
							onClick: () => {
								var v;
								n === t.playerId &&
									((v = document.getElementById("game-top")) == null ||
										v.scrollIntoView({ behavior: "smooth" }));
								let l = null;
								for (let k = 0; k < o.length; k++) {
									if (o[k].id === t.playerId) continue;
									const P = document.getElementById(`${o[k].id}-city`);
									(P &&
										(o[k].id === n
											? (P.setAttribute("open", ""), (l = P))
											: t.alwaysShowCities || P.removeAttribute("open")),
										l && l.scrollIntoView({ behavior: "smooth" }));
								}
							},
							children: [
								e.jsx("span", {
									children: I(n, h == null ? void 0 : h.name, f || !m),
								}),
								e.jsxs("span", { children: [", M: ", x[n].money, ", L: ", c] }),
								!m && e.jsx("span", { children: " (You)" }),
							],
						},
						n,
					);
				}),
			}),
			e.jsx("hr", {}),
			e.jsxs("details", {
				className: "mb-2",
				open: !0,
				children: [
					e.jsx("summary", { className: "text-xl", children: "Turn Events" }),
					e.jsx("div", {
						className: `flex text-sm xl:text-base ${t.newestEventFirst ? "flex-col-reverse" : "flex-col"}`,
						children: [...y].map((n, m) =>
							e.jsx(
								"div",
								{
									className:
										"px-2 animate-attention-once-light even:bg-gray-100 dark:animate-attention-once-dark dark:even:bg-gray-700",
									style: { order: m },
									children: F(o, !!f, t.playerId, n.replace(/id:\d+:/, "")),
								},
								`${n}`,
							),
						),
					}),
				],
			}),
			e.jsx("hr", {}),
			e.jsx(be, { open: t.alwaysShowEstablishmentList }),
			e.jsx("hr", {}),
			e.jsx(Z, { open: !t.hideInstructions }),
		],
	});
}
function ge({ gameData: r, sendViaWebSocket: t }) {
	var J, U;
	const { options: s } = Y(),
		{ gameDetails: i, gameState: o, gameSettings: g } = r,
		{ players: p, isPublic: x } = i,
		{ common: d, players: y } = o.publicState,
		{
			activePlayerId: b,
			supply: f,
			turnPhase: n,
			turnEvents: m,
			turnOrder: h,
			pendingActions: c,
			diceRolls: l,
		} = d,
		{ landmarks: v } = g,
		[k, P] = S.useState(""),
		T = S.useRef(new Audio("/dice-roll.mp3")).current,
		u = S.useRef(new Audio("/chord-ceg.mp3")).current,
		N = x ? s.showNamesPublic : s.showNames,
		j = y[s.playerId],
		w = b === s.playerId,
		E = Object.entries(y).reduce(
			(a, [C, R]) => (
				(a[C] = Object.values(R.city.landmarks).reduce(
					(L, A) => (A ? L + 1 : L),
					0,
				)),
				a
			),
			{},
		),
		W = E[s.playerId],
		_ =
			(J = Object.entries(E).find((a) => a[1] === g.landmarks.length)) == null
				? void 0
				: J[0],
		M = p.find((a) => a.id === _),
		K = c.filter((a) => a.playerId === s.playerId).map((a) => a.action);
	return (
		S.useEffect(() => {
			(w &&
				n === "before-build" &&
				j.money === 0 &&
				t({ ...s, type: "build", payload: { buildingKey: "" } }),
				s.diceRollVolume > 0 &&
					n !== "before-roll" &&
					k === "before-roll" &&
					((T.volume = s.diceRollVolume), T.play()),
				s.yourTurnVolume > 0 &&
					w &&
					n === "before-roll" &&
					k !== "before-roll" &&
					((u.volume = s.yourTurnVolume), u.play()),
				P(n));
		}, [n, w]),
		e.jsxs("div", {
			className: "flex h-full flex-row",
			children: [
				e.jsxs("div", {
					className: "h-full flex-grow overflow-y-scroll",
					children: [
						e.jsxs("div", {
							className: "relative md:ml-1 xl:ml-4",
							children: [
								e.jsx("h1", { id: "game-top", children: "Dice City" }),
								n === "end" &&
									M &&
									e.jsxs("div", {
										children: [
											e.jsx("p", { children: "The game is over." }),
											_ === s.playerId
												? e.jsx("h2", { children: "🏆 You are the winner! 🏆" })
												: e.jsxs("h2", {
														children: [I(M.id, M.name, N), " is the winner!"],
													}),
										],
									}),
								n !== "before-roll" &&
									e.jsxs("div", {
										className:
											"border-default absolute right-6 top-4 z-20 flex animate-dice-roll-attention-light flex-col items-center rounded bg-white pb-2 dark:animate-dice-roll-attention-dark dark:bg-gray-800",
										children: [
											e.jsx("div", {
												children:
													l.length === 1
														? "Roll"
														: `Roll (${l.reduce((a, C) => a + C, 0)})`,
											}),
											e.jsx("div", {
												className: "flex flex-row",
												children: l.map((a, C) =>
													e.jsx(
														"div",
														{
															className:
																"border-strong mr-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white first-of-type:ml-2 dark:bg-gray-800 xl:h-12 xl:w-12 xl:text-2xl",
															children: a,
														},
														`${a}-${C}`,
													),
												),
											}),
										],
									}),
							],
						}),
						e.jsxs("div", {
							children: [
								j &&
									n !== "end" &&
									!w &&
									e.jsxs("div", {
										className: "md:mx-1 xl:mx-4 flex flex-col items-start",
										children: [
											s.turnEventSummaryCount > 0 &&
												m.length > 0 &&
												m
													.slice(-s.turnEventSummaryCount)
													.map((a) =>
														e.jsx(
															"div",
															{
																className:
																	"py-1 dark:odd:bg-gray-700 odd:bg-gray-100",
																children: e.jsx("span", {
																	className:
																		"animate-attention-once-light dark:animate-attention-once-dark px-2 py-1 ",
																	children: F(p, !!N, s.playerId, a).replace(
																		/id:\d+:/,
																		"",
																	),
																}),
															},
															a,
														),
													),
											e.jsxs("div", {
												className:
													"dark:odd:bg-gray-700 odd:bg-gray-100 px-2 py-1",
												children: [
													"Waiting for",
													" ",
													I(
														b,
														(U = p.find((a) => a.id === b)) == null
															? void 0
															: U.name,
														N,
													),
													" ",
													"to finish their turn.",
												],
											}),
										],
									}),
								e.jsxs("div", {
									className: "md:mx-1 xl:mx-4",
									children: [
										K.includes("tv-station") &&
											e.jsxs("div", {
												children: [
													e.jsx("h3", { children: "TV Station" }),
													e.jsx("p", {
														children: "Choose a player to take 5 coins from.",
													}),
													D(h, s.playerId, !1).map((a) => {
														const C = p.find((R) => R.id === a);
														return e.jsxs(
															"button",
															{
																className:
																	"button-default animate-attention px-4 py-2",
																onClick: () => {
																	t({
																		...s,
																		type: "tv-station",
																		payload: { opponentId: a },
																	});
																},
																children: [
																	e.jsx("span", {
																		children: I(
																			a,
																			C == null ? void 0 : C.name,
																			N,
																		),
																	}),
																	e.jsxs("span", {
																		children: [
																			", M: ",
																			y[a].money,
																			", L:",
																			" ",
																			E[a],
																		],
																	}),
																],
															},
															a,
														);
													}),
												],
											}),
										e.jsx(ye, {
											gameData: r,
											options: s,
											onClick: (a) => {
												t({ ...s, type: "business-centre", payload: a });
											},
										}),
										e.jsx(xe, {
											gameData: r,
											options: s,
											onClick: (a) => {
												t({
													...s,
													type: "harbour-change-roll",
													payload: { skip: a },
												});
											},
										}),
										e.jsx(pe, {
											gameData: r,
											options: s,
											rollHandler: (a) => {
												t({
													...s,
													type: "roll-dice",
													payload: { diceCount: a },
												});
											},
											rerollHandler: (a) => {
												t({ ...s, type: "reroll-dice", payload: { skip: a } });
											},
										}),
									],
								}),
								j &&
									e.jsxs("h2", {
										className: "md:mx-1 xl:mx-4",
										children: ["Your Money: ", j.money],
									}),
								e.jsxs("details", {
									className:
										"mt-2 bg-gray-100 py-1 dark:bg-gray-700 md:px-1 xl:px-4",
									open:
										s.alwaysShowSupply ||
										n === "end" ||
										(w && n === "before-build"),
									children: [
										e.jsx("summary", {
											className: "no-underline",
											children: e.jsx("h2", {
												className: "inline-block underline",
												children: "Supply",
											}),
										}),
										e.jsx(ce, {
											city: (j == null ? void 0 : j.city) || {
												landmarks: v.reduce((a, C) => ({ ...a, [C]: !1 }), {}),
												establishments: {},
											},
											onBuild:
												w && n === "before-build"
													? (a) => {
															t({
																...s,
																type: "build",
																payload: { buildingKey: a },
															});
														}
													: void 0,
											supply: f,
											gameData: r,
											options: s,
										}),
									],
								}),
								j &&
									e.jsxs("div", {
										className:
											"mt-2 bg-green-100 py-1 dark:bg-green-900 md:px-1 xl:px-4",
										children: [
											e.jsxs("h2", {
												id: "you-city",
												children: [
													"Your City, Landmark",
													W !== 1 ? "s" : "",
													":",
													" ",
													W,
												],
											}),
											e.jsx(H, {
												availableLandmarks: v,
												city: j.city,
												isMine: !0,
											}),
										],
									}),
								D(h, s.playerId, !0).map((a) => {
									var A;
									if (a === s.playerId) return null;
									const C = y[a];
									if (!C) return null;
									const R =
											(A = p.find(($) => $.id === a)) == null ? void 0 : A.name,
										L = Object.values(y[a].city.landmarks).reduce(
											($, ee) => (ee ? $ + 1 : $),
											0,
										);
									return e.jsxs(
										"details",
										{
											className: `mt-2 py-1 md:px-1 xl:px-4 ${j ? "bg-orange-100 dark:dark:bg-orange-900" : ""}`,
											id: `${a}-city`,
											open: !j || s.alwaysShowCities || n === "end",
											children: [
												e.jsxs("summary", {
													className: "text-2xl",
													children: [
														I(a, R, N),
														", Money:",
														" ",
														C.money,
														", Landmark",
														L !== 1 ? "s" : "",
														": ",
														L,
													],
												}),
												e.jsx(H, {
													availableLandmarks: v,
													city: C.city,
													isOpponent: !!j,
												}),
											],
										},
										a,
									);
								}),
							],
						}),
					],
				}),
				e.jsx(je, { gameData: r, options: s }),
			],
		})
	);
}
function Ie() {
	const r = X(),
		[t, s] = se(),
		{ options: i, setOptions: o } = Y(),
		{ playerId: g, playerPassword: p } = i,
		{
			playerGameData: x,
			sendViaWebSocket: d,
			latency: y,
		} = me(r.id, { id: g, password: p });
	if (
		(S.useEffect(
			() => (
				o({ ping: y }),
				() => {
					o({ ping: null });
				}
			),
			[y],
		),
		!x)
	)
		return e.jsxs("div", {
			children: [
				r.id && e.jsxs("div", { children: ["Connecting to game ", r.id] }),
				e.jsx(te, {}),
			],
		});
	const { gameState: b } = x,
		{ publicState: f } = b,
		{ common: n } = f,
		{ turnPhase: m } = n;
	return e.jsxs("div", {
		className: "h-full",
		children: [
			m === "lobby" && e.jsx(he, { gameData: x, sendViaWebSocket: d }),
			m !== "lobby" && e.jsx(ge, { gameData: x, sendViaWebSocket: d }),
			t.get("debug") === "yes" &&
				e.jsxs("details", {
					children: [
						e.jsx("summary", { children: "Debug" }),
						e.jsx("pre", { children: JSON.stringify(x, null, "  ") }),
					],
				}),
		],
	});
}
export { Ie as default };
