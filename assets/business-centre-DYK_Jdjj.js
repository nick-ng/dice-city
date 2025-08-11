import { s as x, g as C, E as A } from "./index-M-M_FdU-.js";
import { g as O, l as g, B as Y, e as j } from "./index-bPgJQDHo.js";
import { v as E, t as k } from "./build-Di8S06L_.js";
import { j as v } from "./index-vPswkxJ5.js";
const H = 5,
	F = (e, t, i = !1) => {
		if (t.type !== "join") return { gameData: e, error: "not join" };
		const { payload: l, playerId: s, playerPassword: o } = t,
			{ playerName: r } = l;
		if (!r)
			return {
				gameData: e,
				error: "You need to enter a name in the top left corner",
			};
		if (!s || !o) return { gameData: e, error: "missing player info" };
		const { gameState: m, playersSecrets: d, gameDetails: y } = e,
			{ publicState: n } = m,
			{ common: a } = n;
		return a.turnPhase !== "lobby"
			? {
					gameData: e,
					error: "can only join a game that is in the lobby phase",
				}
			: y.players.find((u) => u.id === s)
				? { gameData: e, error: "You are already in this game" }
				: y.players.length >= H
					? { gameData: e, error: "The game is full" }
					: i
						? { gameData: e }
						: (y.players.push({ id: s, name: r }),
							(d[s] = { password: o }),
							(n.players[s] = {
								playerId: s,
								city: { landmarks: {}, establishments: {} },
								money: 0,
							}),
							{ gameData: e });
	},
	M = (e, t, i = !1) => {
		if (t.type !== "start") return { gameData: e, error: "not start" };
		const { isHost: l, validPassword: s } = E(e, t);
		if (!i && !s) return { gameData: e, error: "Invalid password" };
		if (!l) return { gameData: e, error: "Only the host can start the game" };
		const { gameState: o, gameDetails: r, gameSettings: m } = e,
			{ publicState: d, secretState: y } = o,
			{ common: n } = d,
			{ turnPhase: a } = n,
			{ players: u } = r;
		if (a !== "lobby")
			return { gameData: e, error: "The game has already started" };
		if (u.length < 2)
			return { gameData: e, error: "Playing by yourself would be too lonely." };
		if (i) return { gameData: e };
		((n.turnPhase = "before-roll"),
			(n.turnOrder = x(u.map((f) => f.id))),
			(n.turn = 1),
			(n.activePlayerId = n.turnOrder[0]));
		const S = x(O("full", u.length)),
			b = C({}, S, m.supplyType);
		((n.supply = b.supply), (y.common.deck = b.deck));
		for (let f = 0; f < u.length; f++) {
			const { id: h } = u[f];
			((d.players[h].money = m.startingMoney),
				(d.players[h].city.establishments = {
					wheatField: [`wheatField:${h}`],
					bakery: [`bakery:${h}`],
				}));
			for (let I = 0; I < m.landmarks.length; I++) {
				const c = m.landmarks[I];
				c === "cityHall"
					? (d.players[h].city.landmarks[c] = !0)
					: (d.players[h].city.landmarks[c] = !1);
			}
		}
		return (
			e.gameState.publicState.common.turnEvents.push("The game has started"),
			e.gameState.publicState.common.turnEvents.push(
				`id:${Date.now()}:Turn ${n.turn}`,
			),
			e.gameState.publicState.common.turnEvents.push(
				`id:${Date.now()}:It is %${n.activePlayerId}%'s turn`,
			),
			{ gameData: e }
		);
	};
function T({ landmarks: e, availableLandmarks: t, onChoose: i }) {
	return v.jsx("div", {
		className: "flex flex-row flex-wrap items-start",
		children: [...t]
			.sort((l, s) => g[l].cost - g[s].cost)
			.map(
				(l) =>
					g[l] &&
					v.jsx(
						"button",
						{
							className: "border-default inline-block p-0.5",
							onClick: () => {
								i && i(l);
							},
							children: v.jsx(Y, { building: g[l], inactive: !e[l] }, l),
						},
						l,
					),
			),
	});
}
function X({
	city: e,
	availableLandmarks: t,
	onClick: i,
	isOpponent: l,
	isMine: s,
}) {
	const o = [
		{ show: l, class: "bg-orange-100 dark:dark:bg-orange-900" },
		{ show: s, class: "bg-green-100 dark:bg-green-900" },
	]
		.filter((r) => r.show)
		.map((r) => r.class)
		.join(" ");
	return v.jsxs("div", {
		className: o,
		children: [
			v.jsx(T, {
				availableLandmarks: t,
				landmarks: e.landmarks,
				onChoose: (r) => {
					i && i(r);
				},
			}),
			v.jsx(A, {
				establishments: e.establishments,
				onChoose: (r) => {
					i && i(r);
				},
			}),
		],
	});
}
const _ = (e, t, i = !1) => {
	if (t.type !== "business-centre")
		return { gameData: e, error: "not business-centre" };
	const { validPassword: l } = E(e, t);
	if (!i && !l) return { gameData: e, error: "Invalid password" };
	const { payload: s } = t,
		{ myOffer: o, opponentOffer: r } = s,
		{ gameState: m } = e,
		{ publicState: d } = m,
		{ common: y, players: n } = d,
		{ activePlayerId: a, turnEvents: u, turnPhase: S, pendingActions: b } = y;
	if (t.playerId !== a) return { gameData: e, error: "It isn't your turn." };
	if (S !== "after-roll")
		return {
			gameData: e,
			error: "You only use the Business Centre after rolling the dice.",
		};
	const f = b.findIndex(
		(p) => p.action === "business-centre" && p.playerId === t.playerId,
	);
	if (f < 0)
		return { gameData: e, error: "No pending Business Centre action to do." };
	if (t.playerId === s.opponentId)
		return i
			? { gameData: e }
			: (b.splice(f, 1),
				b.length === 0 &&
					((y.turnPhase = "before-build"),
					n[a].city.landmarks.cityHall &&
						n[a].money === 0 &&
						((n[a].money = 1), k(u, `%${a}% got 1 coin from their City Hall`))),
				{ gameData: e });
	const h = Object.values(j)
		.filter((p) => p.tag === "major")
		.map((p) => p.key);
	if (h.includes(o) || h.includes(r))
		return { gameData: e, error: "Cannot trade %%major% establishments" };
	if (
		!Object.values(j)
			.filter((p) => p.tag !== "major")
			.map((p) => p.key)
			.includes(o)
	)
		return {
			gameData: e,
			error: "You have to offer one of your non-%%major% establishments.",
		};
	const c = n[t.playerId].city.establishments;
	if (!c[o] || c[o].length === 0)
		return { gameData: e, error: `You don't have any ${j[o].pluralDisplay}.` };
	if (!s.opponentId)
		return {
			gameData: e,
			error: "You need to choose an opponent's non-%%major% establishment.",
		};
	const w = n[s.opponentId].city.establishments;
	if (!w[r] || w[r].length === 0)
		return {
			gameData: e,
			error: `%${s.opponentId}% doesn't have any ${j[r].pluralDisplay}.`,
		};
	if (i) return { gameData: e };
	const $ = c[o].pop(),
		P = w[r].pop();
	return !$ || !P
		? (console.error(
				"Something went wrong when performing business centre action",
				$,
				P,
			),
			{
				gameData: e,
				error: "Something went wrong when performing business centre action",
			})
		: (Array.isArray(c[r]) || (c[r] = []),
			c[r].push(P),
			Array.isArray(w[o]) || (w[o] = []),
			w[o].push($),
			k(
				u,
				`%${t.playerId}% traded their ${j[o].display} for %${s.opponentId}%'s ${j[r].display} - ${j.businessCentre.display}`,
			),
			b.splice(f, 1),
			b.length === 0 &&
				((y.turnPhase = "before-build"),
				n[a].city.landmarks.cityHall &&
					n[a].money === 0 &&
					((n[a].money = 1), k(u, `%${a}% got 1 coin from their City Hall`))),
			{ gameData: e });
};
export { X as C, _ as b, F as j, M as s };
