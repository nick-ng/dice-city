import {
	r as N,
	u as Y,
	c as q,
	j as e,
	g as R,
	d as Q,
	e as ee,
	f as se,
} from "./index-DOlVKXak.js";
import { w as te, I as X } from "./message-CMLPid00.js";
import {
	j as ne,
	s as ae,
	b as re,
	C as J,
} from "./business-centre-BJdCwZwI.js";
import { s as le } from "./game-C_aYHwkw.js";
import { T as B } from "./index-CAC56_9l.js";
import { g as D } from "./build-DDdIQvre.js";
import { B as ie } from "./index-CkdE4I5c.js";
import { s as U, e as O, B as ce } from "./index-mSlpGTah.js";
import { r as oe } from "./utils-BPyf_07k.js";
import "./index-BlHTT1_o.js";
const de = "https://dice-city-server.pux.one".replace(/^http/i, "ws"),
	H = (r) =>
		!r ||
		WebSocket.CLOSING === r.readyState ||
		WebSocket.CLOSED === r.readyState,
	G = (r, t) => {
		r == null || r.send(JSON.stringify(t));
	},
	ue = (r, t) => {
		const s = N.useRef(!1),
			c = N.useRef(null),
			d = N.useRef((n) => {}),
			[g, p] = N.useState(null),
			[x, u] = N.useState("not-connected"),
			[b, y] = N.useState(-1),
			j = N.useCallback(
				(n) => {
					H(c.current) ? d.current(n) : G(c.current, n);
				},
				[d.current, t.id],
			);
		return (
			N.useEffect(() => {
				const n = location.origin.split(".").reverse(),
					f = "https://dice-city-server.pux.one".split(".").reverse();
				let m = [];
				for (let i = 0; i < n.length && n[i] === f[i]; i++) m.unshift(n[i]);
				const l = m.join(".");
				return (
					(document.cookie = `dicecityplayerid=${t.id}; Domain=${l}; SameSite=Lax;`),
					(document.cookie = `dicecityplayerpass=${t.password}; Domain=${l}; SameSite=Lax;`),
					(s.current = !0),
					(d.current = (i) => {
						H(c.current) &&
							(console.info(
								new Date().toLocaleTimeString(),
								"Getting a new WebSocket connection",
							),
							(c.current = new WebSocket(`${de}/game/${r}`)),
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
							c.current.addEventListener("message", (T) => {
								var o, h;
								const { data: k } = T,
									S = te.safeParse(JSON.parse(k));
								if (!S.success) {
									console.error(
										new Date().toLocaleTimeString(),
										"Unexpected data from WebSocket",
										JSON.stringify(S.error, null, "  "),
									);
									return;
								}
								const P = S.data;
								switch (P.type) {
									case "not-found":
										p(null), u("not-found"), y(0);
										return;
									case "ping":
										G(c.current, {
											type: "pong",
											playerId: t.id,
											playerPassword: t.password,
										});
										break;
									case "game-data":
										const w = P.payload.playerGameData;
										w.gameDetails.id === r && (p(w), u("connected"));
										break;
								}
								(o = P.payload) != null &&
									o.latency &&
									y((h = P.payload) == null ? void 0 : h.latency);
							}),
							c.current.addEventListener("close", () => {
								s.current
									? (u("reconnecting"),
										console.info(
											new Date().toLocaleTimeString(),
											"WebSocket connection lost",
										),
										d.current())
									: (u("not-connected"),
										console.info(
											new Date().toLocaleTimeString(),
											"WebSocket connection closed",
										));
							}));
					}),
					d.current(),
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
				playerGameData: g,
				connectionStatus: x,
				latency: b,
				sendViaWebSocket: j,
			}
		);
	},
	z = {
		total: "Total (Base game)",
		variable: "Variable (Harbour expansion)",
		hybrid: "Hybrid (5-5-2, Recommended)",
	};
function me({ gameData: r, sendViaWebSocket: t }) {
	const { options: s } = Y(),
		{ id: c } = q(),
		{ gameDetails: d, gameSettings: g } = r,
		{ players: p, isPublic: x, hostId: u } = d,
		b = x ? s.showNamesPublic : s.showNames,
		y = { ...s, type: "join", payload: { playerName: s.playerName } },
		j = { ...s, type: "start" },
		n = u === s.playerId,
		f = ne(r, y, !0).error,
		m = ae(r, j, !0).error;
	return e.jsxs("div", {
		className: "flex flex-row",
		children: [
			e.jsx("div", {
				className: "flex flex-shrink-0 flex-grow flex-col items-center",
				children: e.jsxs("div", {
					className: "max-w-prose",
					children: [
						e.jsx("h2", { children: "Lobby" }),
						e.jsxs("h2", { children: ["Game: ", R(c, null, !1)] }),
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
														onChange: (l) => {
															t({
																...s,
																type: "change-supply",
																payload: {
																	supplyType: le.parse(l.target.value),
																},
															});
														},
														children: Object.entries(z).map(([l, i]) =>
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
						!n &&
							e.jsxs("div", {
								className: "mb-1",
								children: ["Supply Type: ", z[g.supplyType]],
							}),
						e.jsx("h3", {
							children: p.length > 0 ? "Players" : "No one has joined the game",
						}),
						e.jsx("ul", {
							className: "ml-5 list-outside list-disc",
							children: p.map((l) =>
								e.jsx(
									"li",
									{ children: R(l.id, l.name, b || l.id === s.playerId) },
									l.id,
								),
							),
						}),
						e.jsx(B, {
							message: f,
							children: e.jsx("button", {
								className: "button-default w-24",
								onClick: () => {
									f || t(y);
								},
								disabled: !!f,
								children: p.map((l) => l.id).includes(s.playerId)
									? "Joined ✅"
									: "Join Game",
							}),
						}),
						u === s.playerId &&
							p.map((l) => l.id).includes(s.playerId) &&
							e.jsx(B, {
								message: m,
								children: e.jsx("button", {
									className: "button-default w-28",
									onClick: () => {
										m || t(j);
									},
									disabled: !!m,
									children: "Start Game",
								}),
							}),
					],
				}),
			}),
			e.jsx("div", {
				className: "flex flex-grow flex-col items-center",
				children: e.jsx(X, { showStory: !0 }),
			}),
		],
	});
}
function he({ gameData: r, options: t, rollHandler: s, rerollHandler: c }) {
	const { gameState: d } = r,
		{ common: g, players: p } = d.publicState,
		{ activePlayerId: x, diceRolls: u, pendingActions: b, turnPhase: y } = g,
		j = b.filter((m) => m.playerId === t.playerId).map((m) => m.action),
		n = p[t.playerId];
	return !(x === t.playerId) || y !== "before-roll"
		? null
		: j.includes("radio-tower")
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
									u.reduce((m, l) => m + l, 0),
									" (",
									u.join(" + "),
									")",
								],
							}),
						],
					})
			: j.includes("harbour")
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
function pe({ gameData: r, options: t, onClick: s }) {
	const { gameDetails: c, gameState: d } = r,
		{ common: g, players: p } = d.publicState,
		{ turnPhase: x, turnOrder: u, pendingActions: b, diceRolls: y } = g,
		j = b.filter((l) => l.playerId === t.playerId).map((l) => l.action);
	if (x !== "before-roll" || !j.includes("harbour")) return null;
	const n = p[t.playerId],
		{ city: f } = n,
		m = y.reduce((l, i) => l + i, 0);
	return e.jsxs("div", {
		children: [
			e.jsx("h3", { children: "Harbour" }),
			e.jsxs("p", {
				children: [
					"You rolled ",
					m,
					". You may add 2 to the dice roll total.",
					" ",
					f.landmarks.amusementPark &&
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
						children: ["Keep Roll (", m, ")"],
					}),
					e.jsxs("button", {
						className: "button-default animate-attention px-4 py-2",
						onClick: () => {
							s(!1);
						},
						children: ["Add 2 (", m + 2, ")"],
					}),
				],
			}),
		],
	});
}
const V = "dark:bg-white dark:text-black bg-gray-800 text-white";
function xe({ gameData: r, options: t, onClick: s }) {
	const { gameDetails: c, gameState: d } = r,
		{ players: g, isPublic: p } = c,
		{ common: x, players: u } = d.publicState,
		{ turnOrder: b, pendingActions: y } = x,
		[j, n] = N.useState(""),
		[f, m] = N.useState(""),
		[l, i] = N.useState("");
	if (
		!y
			.filter((o) => o.playerId === t.playerId)
			.map((o) => o.action)
			.includes("business-centre")
	)
		return null;
	const k = p ? t.showNamesPublic : t.showNames,
		S = u[t.playerId],
		P = re(
			r,
			{
				...t,
				type: "business-centre",
				payload: { myOffer: j, opponentId: f, opponentOffer: l },
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
										Object.entries(S.city.establishments)
											.sort((o, h) => U(O[o[0]], O[h[0]]))
											.map(([o, h]) =>
												h.length === 0 || O[o].tag === "major"
													? null
													: e.jsxs(
															"button",
															{
																className: `button-default mt-1 py-2 ${o === j ? V : ""}`,
																onClick: () => {
																	n(o);
																},
																children: [O[o].display, " -", " ", h.length],
															},
															o,
														),
											),
									],
								}),
							}),
							D(b, t.playerId, !1).map((o) => {
								const h = g.find((C) => C.id === o),
									w = u[o];
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
														R(o, h == null ? void 0 : h.name, k),
														"'s Establishments",
													],
												}),
												Object.entries(w.city.establishments)
													.sort((C, I) => U(O[C[0]], O[I[0]]))
													.map(([C, I]) =>
														I.length === 0
															? null
															: e.jsxs(
																	"button",
																	{
																		className: `button-default mt-1 py-2 ${o === f && l === C ? V : ""}`,
																		onClick: () => {
																			m(o), i(C);
																		},
																		children: [
																			O[C].display,
																			" -",
																			" ",
																			I.length,
																		],
																	},
																	C,
																),
													),
											],
										}),
									},
									o,
								);
							}),
						],
					}),
					e.jsxs("div", {
						className: "mt-2 flex flex-row justify-between",
						children: [
							e.jsx(B, {
								message: Q(g, !!k, t.playerId, oe(P || "")),
								children: e.jsx("button", {
									className: "button-default animate-attention px-4 py-2",
									disabled: !!P,
									onClick: () => {
										P || s({ myOffer: j, opponentId: f, opponentOffer: l });
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
const ye = Object.values(O);
function fe({ open: r }) {
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
					children: ye.map((t) =>
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
										children: e.jsx(ce, { building: t }),
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
function be({ gameData: r, options: t }) {
	const { gameDetails: s, gameState: c } = r,
		{ players: d, isPublic: g } = s,
		{ common: p, players: x } = c.publicState,
		{ activePlayerId: u, turnEvents: b, turnOrder: y } = p,
		j = g ? t.showNamesPublic : t.showNames;
	return e.jsxs("div", {
		className:
			"ml-2 h-full flex-shrink-0 flex-grow-0 basis-48 overflow-y-scroll pb-12 xl:basis-80",
		children: [
			e.jsx("h3", { children: "Players" }),
			e.jsx("ul", {
				className: "ml-5 list-outside",
				children: D(y, t.playerId, !0).map((n) => {
					const f = n !== t.playerId,
						m = d.find((i) => i.id === n),
						l = Object.values(x[n].city.landmarks).reduce(
							(i, T) => (T ? i + 1 : i),
							0,
						);
					return e.jsxs(
						"li",
						{
							className: `${n === u ? "list-disc" : "list-[circle]"} underline`,
							role: "button",
							onClick: () => {
								var T;
								n === t.playerId &&
									((T = document.getElementById("game-top")) == null ||
										T.scrollIntoView({ behavior: "smooth" }));
								let i = null;
								for (let k = 0; k < d.length; k++) {
									if (d[k].id === t.playerId) continue;
									const S = document.getElementById(`${d[k].id}-city`);
									S &&
										(d[k].id === n
											? (S.setAttribute("open", ""), (i = S))
											: t.alwaysShowCities || S.removeAttribute("open")),
										i && i.scrollIntoView({ behavior: "smooth" });
								}
							},
							children: [
								e.jsx("span", {
									children: R(n, m == null ? void 0 : m.name, j || !f),
								}),
								e.jsxs("span", { children: [", M: ", x[n].money, ", L: ", l] }),
								!f && e.jsx("span", { children: " (You)" }),
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
					e.jsx("ul", {
						className: "ml-5 list-outside list-disc text-sm xl:text-base",
						children: [...b].map((n) =>
							e.jsx(
								"li",
								{
									className:
										"animate-attention-once-light px-0.5 even:bg-gray-100 dark:animate-attention-once-dark dark:even:bg-gray-700",
									children: Q(d, !!j, t.playerId, n.replace(/id:\d+:/, "")),
								},
								`${n}`,
							),
						),
					}),
				],
			}),
			e.jsx("hr", {}),
			e.jsx(fe, { open: t.alwaysShowEstablishmentList }),
			e.jsx("hr", {}),
			e.jsx(X, { open: !t.hideInstructions }),
		],
	});
}
function je({ gameData: r, sendViaWebSocket: t }) {
	var W, _;
	const { options: s } = Y(),
		{ gameDetails: c, gameState: d, gameSettings: g } = r,
		{ players: p, isPublic: x } = c,
		{ common: u, players: b } = d.publicState,
		{
			activePlayerId: y,
			supply: j,
			turnPhase: n,
			turnOrder: f,
			pendingActions: m,
			diceRolls: l,
		} = u,
		{ landmarks: i } = g,
		[T, k] = N.useState(""),
		S = N.useRef(new Audio("/dice-roll.mp3")).current,
		P = N.useRef(new Audio("/chord-ceg.mp3")).current,
		o = x ? s.showNamesPublic : s.showNames,
		h = b[s.playerId],
		w = y === s.playerId,
		C = Object.entries(b).reduce(
			(a, [v, E]) => (
				(a[v] = Object.values(E.city.landmarks).reduce(
					(L, A) => (A ? L + 1 : L),
					0,
				)),
				a
			),
			{},
		),
		I = C[s.playerId],
		F =
			(W = Object.entries(C).find((a) => a[1] === g.landmarks.length)) == null
				? void 0
				: W[0],
		M = p.find((a) => a.id === F),
		Z = m.filter((a) => a.playerId === s.playerId).map((a) => a.action);
	return (
		N.useEffect(() => {
			w &&
				n === "before-build" &&
				h.money === 0 &&
				t({ ...s, type: "build", payload: { buildingKey: "" } }),
				s.diceRollVolume > 0 &&
					n !== "before-roll" &&
					T === "before-roll" &&
					((S.volume = s.diceRollVolume), S.play()),
				s.yourTurnVolume > 0 &&
					w &&
					n === "before-roll" &&
					T !== "before-roll" &&
					((P.volume = s.yourTurnVolume), P.play()),
				k(n);
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
											F === s.playerId
												? e.jsx("h2", { children: "🏆 You are the winner! 🏆" })
												: e.jsxs("h2", {
														children: [R(M.id, M.name, o), " is the winner!"],
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
														: `Roll (${l.reduce((a, v) => a + v, 0)})`,
											}),
											e.jsx("div", {
												className: "flex flex-row",
												children: l.map((a, v) =>
													e.jsx(
														"div",
														{
															className:
																"border-strong mr-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white first-of-type:ml-2 dark:bg-gray-800 xl:h-12 xl:w-12 xl:text-2xl",
															children: a,
														},
														`${a}-${v}`,
													),
												),
											}),
										],
									}),
							],
						}),
						e.jsxs("div", {
							children: [
								h &&
									n !== "end" &&
									!w &&
									e.jsxs("div", {
										className: "md:mx-1 xl:mx-4",
										children: [
											"Waiting for",
											" ",
											R(
												y,
												(_ = p.find((a) => a.id === y)) == null
													? void 0
													: _.name,
												o,
											),
											" ",
											"to finish their turn.",
										],
									}),
								e.jsxs("div", {
									className: "md:mx-1 xl:mx-4",
									children: [
										Z.includes("tv-station") &&
											e.jsxs("div", {
												children: [
													e.jsx("h3", { children: "TV Station" }),
													e.jsx("p", {
														children: "Choose a player to take 5 coins from.",
													}),
													D(f, s.playerId, !1).map((a) => {
														const v = p.find((E) => E.id === a);
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
																		children: R(
																			a,
																			v == null ? void 0 : v.name,
																			o,
																		),
																	}),
																	e.jsxs("span", {
																		children: [
																			", M: ",
																			b[a].money,
																			", L:",
																			" ",
																			C[a],
																		],
																	}),
																],
															},
															a,
														);
													}),
												],
											}),
										e.jsx(xe, {
											gameData: r,
											options: s,
											onClick: (a) => {
												t({ ...s, type: "business-centre", payload: a });
											},
										}),
										e.jsx(pe, {
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
										e.jsx(he, {
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
								h &&
									e.jsxs("h2", {
										className: "md:mx-1 xl:mx-4",
										children: ["Your Money: ", h.money],
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
										e.jsx(ie, {
											city: (h == null ? void 0 : h.city) || {
												landmarks: i.reduce((a, v) => ({ ...a, [v]: !1 }), {}),
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
											supply: j,
											gameData: r,
											options: s,
										}),
									],
								}),
								h &&
									e.jsxs("div", {
										className:
											"mt-2 bg-green-100 py-1 dark:bg-green-900 md:px-1 xl:px-4",
										children: [
											e.jsxs("h2", {
												id: "you-city",
												children: [
													"Your City, Landmark",
													I !== 1 ? "s" : "",
													":",
													" ",
													I,
												],
											}),
											e.jsx(J, {
												availableLandmarks: i,
												city: h.city,
												isMine: !0,
											}),
										],
									}),
								D(f, s.playerId, !0).map((a) => {
									var A;
									if (a === s.playerId) return null;
									const v = b[a];
									if (!v) return null;
									const E =
											(A = p.find(($) => $.id === a)) == null ? void 0 : A.name,
										L = Object.values(b[a].city.landmarks).reduce(
											($, K) => (K ? $ + 1 : $),
											0,
										);
									return e.jsxs(
										"details",
										{
											className: `mt-2 py-1 md:px-1 xl:px-4 ${h ? "bg-orange-100 dark:dark:bg-orange-900" : ""}`,
											id: `${a}-city`,
											open: !h || s.alwaysShowCities || n === "end",
											children: [
												e.jsxs("summary", {
													className: "text-2xl",
													children: [
														R(a, E, o),
														", Money:",
														" ",
														v.money,
														", Landmark",
														L !== 1 ? "s" : "",
														": ",
														L,
													],
												}),
												e.jsx(J, {
													availableLandmarks: i,
													city: v.city,
													isOpponent: !!h,
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
				e.jsx(be, { gameData: r, options: s }),
			],
		})
	);
}
function Re() {
	const r = q(),
		[t, s] = ee(),
		{ options: c, setOptions: d } = Y(),
		{ playerId: g, playerPassword: p } = c,
		{
			playerGameData: x,
			sendViaWebSocket: u,
			latency: b,
		} = ue(r.id, { id: g, password: p });
	if (
		(N.useEffect(
			() => (
				d({ ping: b }),
				() => {
					d({ ping: null });
				}
			),
			[b],
		),
		!x)
	)
		return e.jsxs("div", {
			children: [
				r.id && e.jsxs("div", { children: ["Connecting to game ", r.id] }),
				e.jsx(se, {}),
			],
		});
	const { gameState: y } = x,
		{ publicState: j } = y,
		{ common: n } = j,
		{ turnPhase: f } = n;
	return e.jsxs("div", {
		className: "h-full",
		children: [
			f === "lobby" && e.jsx(me, { gameData: x, sendViaWebSocket: u }),
			f !== "lobby" && e.jsx(je, { gameData: x, sendViaWebSocket: u }),
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
export { Re as default };
