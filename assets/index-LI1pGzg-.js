import {
	r as N,
	u as Y,
	c as X,
	j as e,
	g as I,
	d as F,
	e as se,
	f as te,
} from "./index-CHqaZAj-.js";
import { w as ne, I as Z } from "./message-D1f2idou.js";
import {
	j as ae,
	s as re,
	b as le,
	C as H,
} from "./business-centre-DFXDQJ1G.js";
import { s as ie } from "./game-jRJmzKP6.js";
import { T as B } from "./index-iqCj0pWP.js";
import { g as D } from "./build-BK5b18Yb.js";
import { B as ce } from "./index-ZFpbsviI.js";
import { s as z, e as O, B as oe } from "./index-bBrHWja8.js";
import { r as de } from "./utils-BPyf_07k.js";
import "./index-CjNTdVT1.js";
const ue = "https://dice-city-server.pux.one".replace(/^http/i, "ws"),
	V = (r) =>
		!r ||
		WebSocket.CLOSING === r.readyState ||
		WebSocket.CLOSED === r.readyState,
	G = (r, t) => {
		r == null || r.send(JSON.stringify(t));
	},
	me = (r, t) => {
		const s = N.useRef(!1),
			c = N.useRef(null),
			o = N.useRef((a) => {}),
			[j, h] = N.useState(null),
			[x, u] = N.useState("not-connected"),
			[f, y] = N.useState(-1),
			b = N.useCallback(
				(a) => {
					V(c.current) ? o.current(a) : G(c.current, a);
				},
				[o.current, t.id],
			);
		return (
			N.useEffect(() => {
				const a = location.origin.split(".").reverse(),
					p = "https://dice-city-server.pux.one".split(".").reverse();
				let d = [];
				for (let i = 0; i < a.length && a[i] === p[i]; i++) d.unshift(a[i]);
				const l = d.join(".");
				return (
					(document.cookie = `dicecityplayerid=${t.id}; Domain=${l}; SameSite=Lax;`),
					(document.cookie = `dicecityplayerpass=${t.password}; Domain=${l}; SameSite=Lax;`),
					(s.current = !0),
					(o.current = (i) => {
						V(c.current) &&
							(console.info(
								new Date().toLocaleTimeString(),
								"Getting a new WebSocket connection",
							),
							(c.current = new WebSocket(`${ue}/game/${r}`)),
							c.current.addEventListener("open", () => {
								console.info(
									new Date().toLocaleTimeString(),
									"WebSocket connection opened",
								),
									i &&
										setTimeout(() => {
											G(c.current, i);
										}, 20);
							}),
							c.current.addEventListener("message", (P) => {
								var m, v;
								const { data: w } = P,
									C = ne.safeParse(JSON.parse(w));
								if (!C.success) {
									console.error(
										new Date().toLocaleTimeString(),
										"Unexpected data from WebSocket",
										JSON.stringify(C.error, null, "  "),
									);
									return;
								}
								const T = C.data;
								switch (T.type) {
									case "not-found":
										h(null), u("not-found"), y(0);
										return;
									case "ping":
										G(c.current, {
											type: "pong",
											playerId: t.id,
											playerPassword: t.password,
										});
										break;
									case "game-data":
										const g = T.payload.playerGameData;
										g.gameDetails.id === r && (h(g), u("connected"));
										break;
								}
								(m = T.payload) != null &&
									m.latency &&
									y((v = T.payload) == null ? void 0 : v.latency);
							}),
							c.current.addEventListener("close", () => {
								s.current
									? (u("reconnecting"),
										console.info(
											new Date().toLocaleTimeString(),
											"WebSocket connection lost",
										),
										o.current())
									: (u("not-connected"),
										console.info(
											new Date().toLocaleTimeString(),
											"WebSocket connection closed",
										));
							}));
					}),
					o.current(),
					() => {
						var i;
						console.info(
							new Date().toLocaleTimeString(),
							"Closing WebSocket connection",
						),
							(s.current = !1),
							(i = c.current) == null || i.close(),
							(c.current = null);
					}
				);
			}, [r, t.id, t.password]),
			{
				playerGameData: j,
				connectionStatus: x,
				latency: f,
				sendViaWebSocket: b,
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
		{ id: c } = X(),
		{ gameDetails: o, gameSettings: j } = r,
		{ players: h, isPublic: x, hostId: u } = o,
		f = x ? s.showNamesPublic : s.showNames,
		y = { ...s, type: "join", payload: { playerName: s.playerName } },
		b = { ...s, type: "start" },
		a = u === s.playerId,
		p = ae(r, y, !0).error,
		d = re(r, b, !0).error;
	return e.jsxs("div", {
		className: "flex flex-row",
		children: [
			e.jsx("div", {
				className: "flex flex-shrink-0 flex-grow flex-col items-center",
				children: e.jsxs("div", {
					className: "max-w-prose",
					children: [
						e.jsx("h2", { children: "Lobby" }),
						e.jsxs("h2", { children: ["Game: ", I(c, null, !1)] }),
						e.jsx("h2", { children: "Game Settings" }),
						a &&
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
														value: j.supplyType,
														onChange: (l) => {
															t({
																...s,
																type: "change-supply",
																payload: {
																	supplyType: ie.parse(l.target.value),
																},
															});
														},
														children: Object.entries(q).map(([l, i]) =>
															e.jsx("option", { value: l, children: i }, l),
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
						!a &&
							e.jsxs("div", {
								className: "mb-1",
								children: ["Supply Type: ", q[j.supplyType]],
							}),
						e.jsx("h3", {
							children: h.length > 0 ? "Players" : "No one has joined the game",
						}),
						e.jsx("ul", {
							className: "ml-5 list-outside list-disc",
							children: h.map((l) =>
								e.jsx(
									"li",
									{ children: I(l.id, l.name, f || l.id === s.playerId) },
									l.id,
								),
							),
						}),
						e.jsx(B, {
							message: p,
							children: e.jsx("button", {
								className: "button-default w-24",
								onClick: () => {
									p || t(y);
								},
								disabled: !!p,
								children: h.map((l) => l.id).includes(s.playerId)
									? "Joined ✅"
									: "Join Game",
							}),
						}),
						u === s.playerId &&
							h.map((l) => l.id).includes(s.playerId) &&
							e.jsx(B, {
								message: d,
								children: e.jsx("button", {
									className: "button-default w-28",
									onClick: () => {
										d || t(b);
									},
									disabled: !!d,
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
function pe({ gameData: r, options: t, rollHandler: s, rerollHandler: c }) {
	const { gameState: o } = r,
		{ common: j, players: h } = o.publicState,
		{ activePlayerId: x, diceRolls: u, pendingActions: f, turnPhase: y } = j,
		b = f.filter((d) => d.playerId === t.playerId).map((d) => d.action),
		a = h[t.playerId];
	return !(x === t.playerId) || y !== "before-roll"
		? null
		: b.includes("radio-tower")
			? u.length === 1
				? e.jsxs("div", {
						className: "mt-1",
						children: [
							e.jsx("button", {
								className: "button-default animate-attention px-4 py-2",
								onClick: () => {
									c(!1);
								},
								children: "Re-Roll 🎲",
							}),
							e.jsxs("button", {
								className: "button-default animate-attention px-4 py-2",
								onClick: () => {
									c(!0);
								},
								children: ["Keep ", u[0]],
							}),
						],
					})
				: e.jsxs("div", {
						className: "mt-1",
						children: [
							e.jsxs("button", {
								className: "button-default animate-attention px-4 py-2",
								onClick: () => {
									c(!1);
								},
								children: ["Re-Roll ", u.map(() => "🎲").join("")],
							}),
							e.jsxs("button", {
								className: "button-default animate-attention px-4 py-2",
								onClick: () => {
									c(!0);
								},
								children: [
									"Keep ",
									u.reduce((d, l) => d + l, 0),
									" (",
									u.join(" + "),
									")",
								],
							}),
						],
					})
			: b.includes("harbour")
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
							a.city.landmarks.trainStation &&
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
	const { gameDetails: c, gameState: o } = r,
		{ common: j, players: h } = o.publicState,
		{ turnPhase: x, turnOrder: u, pendingActions: f, diceRolls: y } = j,
		b = f.filter((l) => l.playerId === t.playerId).map((l) => l.action);
	if (x !== "before-roll" || !b.includes("harbour")) return null;
	const a = h[t.playerId],
		{ city: p } = a,
		d = y.reduce((l, i) => l + i, 0);
	return e.jsxs("div", {
		children: [
			e.jsx("h3", { children: "Harbour" }),
			e.jsxs("p", {
				children: [
					"You rolled ",
					d,
					". You may add 2 to the dice roll total.",
					" ",
					p.landmarks.amusementPark &&
						y.length === 2 &&
						y[0] === y[1] &&
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
						children: ["Keep Roll (", d, ")"],
					}),
					e.jsxs("button", {
						className: "button-default animate-attention px-4 py-2",
						onClick: () => {
							s(!1);
						},
						children: ["Add 2 (", d + 2, ")"],
					}),
				],
			}),
		],
	});
}
const Q = "dark:bg-white dark:text-black bg-gray-800 text-white";
function ye({ gameData: r, options: t, onClick: s }) {
	const { gameDetails: c, gameState: o } = r,
		{ players: j, isPublic: h } = c,
		{ common: x, players: u } = o.publicState,
		{ turnOrder: f, pendingActions: y } = x,
		[b, a] = N.useState(""),
		[p, d] = N.useState(""),
		[l, i] = N.useState("");
	if (
		!y
			.filter((m) => m.playerId === t.playerId)
			.map((m) => m.action)
			.includes("business-centre")
	)
		return null;
	const w = h ? t.showNamesPublic : t.showNames,
		C = u[t.playerId],
		T = le(
			r,
			{
				...t,
				type: "business-centre",
				payload: { myOffer: b, opponentId: p, opponentOffer: l },
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
										Object.entries(C.city.establishments)
											.sort((m, v) => z(O[m[0]], O[v[0]]))
											.map(([m, v]) =>
												v.length === 0 || O[m].tag === "major"
													? null
													: e.jsxs(
															"button",
															{
																className: `button-default mt-1 py-2 ${m === b ? Q : ""}`,
																onClick: () => {
																	a(m);
																},
																children: [O[m].display, " -", " ", v.length],
															},
															m,
														),
											),
									],
								}),
							}),
							D(f, t.playerId, !1).map((m) => {
								const v = j.find((S) => S.id === m),
									g = u[m];
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
														I(m, v == null ? void 0 : v.name, w),
														"'s Establishments",
													],
												}),
												Object.entries(g.city.establishments)
													.sort((S, E) => z(O[S[0]], O[E[0]]))
													.map(([S, E]) =>
														E.length === 0
															? null
															: e.jsxs(
																	"button",
																	{
																		className: `button-default mt-1 py-2 ${m === p && l === S ? Q : ""}`,
																		onClick: () => {
																			d(m), i(S);
																		},
																		children: [
																			O[S].display,
																			" -",
																			" ",
																			E.length,
																		],
																	},
																	S,
																),
													),
											],
										}),
									},
									m,
								);
							}),
						],
					}),
					e.jsxs("div", {
						className: "mt-2 flex flex-row justify-between",
						children: [
							e.jsx(B, {
								message: F(j, !!w, t.playerId, de(T || "")),
								children: e.jsx("button", {
									className: "button-default animate-attention px-4 py-2",
									disabled: !!T,
									onClick: () => {
										T || s({ myOffer: b, opponentId: p, opponentOffer: l });
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
	const { gameDetails: s, gameState: c } = r,
		{ players: o, isPublic: j } = s,
		{ common: h, players: x } = c.publicState,
		{ activePlayerId: u, turnEvents: f, turnOrder: y } = h,
		b = j ? t.showNamesPublic : t.showNames;
	return e.jsxs("div", {
		className:
			"ml-2 h-full flex-shrink-0 flex-grow-0 basis-48 overflow-y-scroll pb-12 xl:basis-80",
		children: [
			e.jsx("h3", { children: "Players" }),
			e.jsx("ul", {
				className: "ml-5 list-outside",
				children: D(y, t.playerId, !0).map((a) => {
					const p = a !== t.playerId,
						d = o.find((i) => i.id === a),
						l = Object.values(x[a].city.landmarks).reduce(
							(i, P) => (P ? i + 1 : i),
							0,
						);
					return e.jsxs(
						"li",
						{
							className: `${a === u ? "list-disc" : "list-[circle]"} underline`,
							role: "button",
							onClick: () => {
								var P;
								a === t.playerId &&
									((P = document.getElementById("game-top")) == null ||
										P.scrollIntoView({ behavior: "smooth" }));
								let i = null;
								for (let w = 0; w < o.length; w++) {
									if (o[w].id === t.playerId) continue;
									const C = document.getElementById(`${o[w].id}-city`);
									C &&
										(o[w].id === a
											? (C.setAttribute("open", ""), (i = C))
											: t.alwaysShowCities || C.removeAttribute("open")),
										i && i.scrollIntoView({ behavior: "smooth" });
								}
							},
							children: [
								e.jsx("span", {
									children: I(a, d == null ? void 0 : d.name, b || !p),
								}),
								e.jsxs("span", { children: [", M: ", x[a].money, ", L: ", l] }),
								!p && e.jsx("span", { children: " (You)" }),
							],
						},
						a,
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
						children: [...f].map((a, p) =>
							e.jsx(
								"div",
								{
									className:
										"px-2 animate-attention-once-light even:bg-gray-100 dark:animate-attention-once-dark dark:even:bg-gray-700",
									style: { order: p },
									children: F(o, !!b, t.playerId, a.replace(/id:\d+:/, "")),
								},
								`${a}`,
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
		{ gameDetails: c, gameState: o, gameSettings: j } = r,
		{ players: h, isPublic: x } = c,
		{ common: u, players: f } = o.publicState,
		{
			activePlayerId: y,
			supply: b,
			turnPhase: a,
			turnEvents: p,
			turnOrder: d,
			pendingActions: l,
			diceRolls: i,
		} = u,
		{ landmarks: P } = j,
		[w, C] = N.useState(""),
		T = N.useRef(new Audio("/dice-roll.mp3")).current,
		m = N.useRef(new Audio("/chord-ceg.mp3")).current,
		v = x ? s.showNamesPublic : s.showNames,
		g = f[s.playerId],
		S = y === s.playerId,
		E = Object.entries(f).reduce(
			(n, [k, R]) => (
				(n[k] = Object.values(R.city.landmarks).reduce(
					(L, A) => (A ? L + 1 : L),
					0,
				)),
				n
			),
			{},
		),
		W = E[s.playerId],
		_ =
			(J = Object.entries(E).find((n) => n[1] === j.landmarks.length)) == null
				? void 0
				: J[0],
		M = h.find((n) => n.id === _),
		K = l.filter((n) => n.playerId === s.playerId).map((n) => n.action);
	return (
		N.useEffect(() => {
			S &&
				a === "before-build" &&
				g.money === 0 &&
				t({ ...s, type: "build", payload: { buildingKey: "" } }),
				s.diceRollVolume > 0 &&
					a !== "before-roll" &&
					w === "before-roll" &&
					((T.volume = s.diceRollVolume), T.play()),
				s.yourTurnVolume > 0 &&
					S &&
					a === "before-roll" &&
					w !== "before-roll" &&
					((m.volume = s.yourTurnVolume), m.play()),
				C(a);
		}, [a, S]),
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
								a === "end" &&
									M &&
									e.jsxs("div", {
										children: [
											e.jsx("p", { children: "The game is over." }),
											_ === s.playerId
												? e.jsx("h2", { children: "🏆 You are the winner! 🏆" })
												: e.jsxs("h2", {
														children: [I(M.id, M.name, v), " is the winner!"],
													}),
										],
									}),
								a !== "before-roll" &&
									e.jsxs("div", {
										className:
											"border-default absolute right-6 top-4 z-20 flex animate-dice-roll-attention-light flex-col items-center rounded bg-white pb-2 dark:animate-dice-roll-attention-dark dark:bg-gray-800",
										children: [
											e.jsx("div", {
												children:
													i.length === 1
														? "Roll"
														: `Roll (${i.reduce((n, k) => n + k, 0)})`,
											}),
											e.jsx("div", {
												className: "flex flex-row",
												children: i.map((n, k) =>
													e.jsx(
														"div",
														{
															className:
																"border-strong mr-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white first-of-type:ml-2 dark:bg-gray-800 xl:h-12 xl:w-12 xl:text-2xl",
															children: n,
														},
														`${n}-${k}`,
													),
												),
											}),
										],
									}),
							],
						}),
						e.jsxs("div", {
							children: [
								g &&
									a !== "end" &&
									!S &&
									e.jsxs("div", {
										className: "md:mx-1 xl:mx-4 flex flex-col items-start",
										children: [
											s.turnEventSummaryCount > 0 &&
												p.length > 0 &&
												p
													.slice(-s.turnEventSummaryCount)
													.map((n) =>
														e.jsx(
															"div",
															{
																className:
																	"py-1 dark:odd:bg-gray-700 odd:bg-gray-100",
																children: e.jsx("span", {
																	className:
																		"animate-attention-once-light dark:animate-attention-once-dark px-2 py-1 ",
																	children: F(h, !!v, s.playerId, n).replace(
																		/id:\d+:/,
																		"",
																	),
																}),
															},
															n,
														),
													),
											e.jsxs("div", {
												className:
													"dark:odd:bg-gray-700 odd:bg-gray-100 px-2 py-1",
												children: [
													"Waiting for",
													" ",
													I(
														y,
														(U = h.find((n) => n.id === y)) == null
															? void 0
															: U.name,
														v,
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
													D(d, s.playerId, !1).map((n) => {
														const k = h.find((R) => R.id === n);
														return e.jsxs(
															"button",
															{
																className:
																	"button-default animate-attention px-4 py-2",
																onClick: () => {
																	t({
																		...s,
																		type: "tv-station",
																		payload: { opponentId: n },
																	});
																},
																children: [
																	e.jsx("span", {
																		children: I(
																			n,
																			k == null ? void 0 : k.name,
																			v,
																		),
																	}),
																	e.jsxs("span", {
																		children: [
																			", M: ",
																			f[n].money,
																			", L:",
																			" ",
																			E[n],
																		],
																	}),
																],
															},
															n,
														);
													}),
												],
											}),
										e.jsx(ye, {
											gameData: r,
											options: s,
											onClick: (n) => {
												t({ ...s, type: "business-centre", payload: n });
											},
										}),
										e.jsx(xe, {
											gameData: r,
											options: s,
											onClick: (n) => {
												t({
													...s,
													type: "harbour-change-roll",
													payload: { skip: n },
												});
											},
										}),
										e.jsx(pe, {
											gameData: r,
											options: s,
											rollHandler: (n) => {
												t({
													...s,
													type: "roll-dice",
													payload: { diceCount: n },
												});
											},
											rerollHandler: (n) => {
												t({ ...s, type: "reroll-dice", payload: { skip: n } });
											},
										}),
									],
								}),
								g &&
									e.jsxs("h2", {
										className: "md:mx-1 xl:mx-4",
										children: ["Your Money: ", g.money],
									}),
								e.jsxs("details", {
									className:
										"mt-2 bg-gray-100 py-1 dark:bg-gray-700 md:px-1 xl:px-4",
									open:
										s.alwaysShowSupply ||
										a === "end" ||
										(S && a === "before-build"),
									children: [
										e.jsx("summary", {
											className: "no-underline",
											children: e.jsx("h2", {
												className: "inline-block underline",
												children: "Supply",
											}),
										}),
										e.jsx(ce, {
											city: (g == null ? void 0 : g.city) || {
												landmarks: P.reduce((n, k) => ({ ...n, [k]: !1 }), {}),
												establishments: {},
											},
											onBuild:
												S && a === "before-build"
													? (n) => {
															t({
																...s,
																type: "build",
																payload: { buildingKey: n },
															});
														}
													: void 0,
											supply: b,
											gameData: r,
											options: s,
										}),
									],
								}),
								g &&
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
												availableLandmarks: P,
												city: g.city,
												isMine: !0,
											}),
										],
									}),
								D(d, s.playerId, !0).map((n) => {
									var A;
									if (n === s.playerId) return null;
									const k = f[n];
									if (!k) return null;
									const R =
											(A = h.find(($) => $.id === n)) == null ? void 0 : A.name,
										L = Object.values(f[n].city.landmarks).reduce(
											($, ee) => (ee ? $ + 1 : $),
											0,
										);
									return e.jsxs(
										"details",
										{
											className: `mt-2 py-1 md:px-1 xl:px-4 ${g ? "bg-orange-100 dark:dark:bg-orange-900" : ""}`,
											id: `${n}-city`,
											open: !g || s.alwaysShowCities || a === "end",
											children: [
												e.jsxs("summary", {
													className: "text-2xl",
													children: [
														I(n, R, v),
														", Money:",
														" ",
														k.money,
														", Landmark",
														L !== 1 ? "s" : "",
														": ",
														L,
													],
												}),
												e.jsx(H, {
													availableLandmarks: P,
													city: k.city,
													isOpponent: !!g,
												}),
											],
										},
										n,
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
		{ options: c, setOptions: o } = Y(),
		{ playerId: j, playerPassword: h } = c,
		{
			playerGameData: x,
			sendViaWebSocket: u,
			latency: f,
		} = me(r.id, { id: j, password: h });
	if (
		(N.useEffect(
			() => (
				o({ ping: f }),
				() => {
					o({ ping: null });
				}
			),
			[f],
		),
		!x)
	)
		return e.jsxs("div", {
			children: [
				r.id && e.jsxs("div", { children: ["Connecting to game ", r.id] }),
				e.jsx(te, {}),
			],
		});
	const { gameState: y } = x,
		{ publicState: b } = y,
		{ common: a } = b,
		{ turnPhase: p } = a;
	return e.jsxs("div", {
		className: "h-full",
		children: [
			p === "lobby" && e.jsx(he, { gameData: x, sendViaWebSocket: u }),
			p !== "lobby" && e.jsx(ge, { gameData: x, sendViaWebSocket: u }),
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
