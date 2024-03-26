import { s as C, g as A, E } from "./index-BlHTT1_o.js";
import { g as O, l as v, B as Y, e as j } from "./index-mSlpGTah.js";
import { v as $, t as S } from "./build-DDdIQvre.js";
import { j as g } from "./index-DOlVKXak.js";
const H = 5,
	F = (r, n, i = !1) => {
		if (n.type !== "join") return { gameData: r, error: "not join" };
		const { payload: l, playerId: s, playerPassword: o } = n,
			{ playerName: e } = l;
		if (!e)
			return {
				gameData: r,
				error: "You need to enter a name in the top left corner",
			};
		if (!s || !o) return { gameData: r, error: "missing player info" };
		const { gameState: m, playersSecrets: p, gameDetails: f } = r,
			{ publicState: t } = m,
			{ common: a } = t;
		return a.turnPhase !== "lobby"
			? {
					gameData: r,
					error: "can only join a game that is in the lobby phase",
				}
			: f.players.find((c) => c.id === s)
				? { gameData: r, error: "You are already in this game" }
				: f.players.length >= H
					? { gameData: r, error: "The game is full" }
					: i
						? { gameData: r }
						: (f.players.push({ id: s, name: e }),
							(p[s] = { password: o }),
							(t.players[s] = {
								playerId: s,
								city: { landmarks: {}, establishments: {} },
								money: 0,
							}),
							{ gameData: r });
	},
	M = (r, n, i = !1) => {
		if (n.type !== "start") return { gameData: r, error: "not start" };
		const { isHost: l, validPassword: s } = $(r, n);
		if (!i && !s) return { gameData: r, error: "Invalid password" };
		if (!l) return { gameData: r, error: "Only the host can start the game" };
		const { gameState: o, gameDetails: e, gameSettings: m } = r,
			{ publicState: p, secretState: f } = o,
			{ common: t } = p,
			{ turnPhase: a } = t,
			{ players: c } = e;
		if (a !== "lobby")
			return { gameData: r, error: "The game has already started" };
		if (c.length < 2)
			return { gameData: r, error: "Playing by yourself would be too lonely." };
		if (i) return { gameData: r };
		(t.turnPhase = "before-roll"),
			(t.turnOrder = C(c.map((y) => y.id))),
			(t.activePlayerId = t.turnOrder[0]);
		const k = C(O("full", c.length)),
			b = A({}, k, m.supplyType);
		(t.supply = b.supply), (f.common.deck = b.deck);
		for (let y = 0; y < c.length; y++) {
			const { id: h } = c[y];
			(p.players[h].money = m.startingMoney),
				(p.players[h].city.establishments = {
					wheatField: [`wheatField:${h}`],
					bakery: [`bakery:${h}`],
				});
			for (let I = 0; I < m.landmarks.length; I++) {
				const u = m.landmarks[I];
				u === "cityHall"
					? (p.players[h].city.landmarks[u] = !0)
					: (p.players[h].city.landmarks[u] = !1);
			}
		}
		return { gameData: r };
	};
function N({ landmarks: r, availableLandmarks: n, onChoose: i }) {
	return g.jsx("div", {
		className: "flex flex-row flex-wrap items-start",
		children: [...n]
			.sort((l, s) => v[l].cost - v[s].cost)
			.map(
				(l) =>
					v[l] &&
					g.jsx(
						"button",
						{
							className: "border-default inline-block p-0.5",
							onClick: () => {
								i && i(l);
							},
							children: g.jsx(Y, { building: v[l], inactive: !r[l] }, l),
						},
						l,
					),
			),
	});
}
function X({
	city: r,
	availableLandmarks: n,
	onClick: i,
	isOpponent: l,
	isMine: s,
}) {
	const o = [
		{ show: l, class: "bg-orange-100 dark:dark:bg-orange-900" },
		{ show: s, class: "bg-green-100 dark:bg-green-900" },
	]
		.filter((e) => e.show)
		.map((e) => e.class)
		.join(" ");
	return g.jsxs("div", {
		className: o,
		children: [
			g.jsx(N, {
				availableLandmarks: n,
				landmarks: r.landmarks,
				onChoose: (e) => {
					i && i(e);
				},
			}),
			g.jsx(E, {
				establishments: r.establishments,
				onChoose: (e) => {
					i && i(e);
				},
			}),
		],
	});
}
const _ = (r, n, i = !1) => {
	if (n.type !== "business-centre")
		return { gameData: r, error: "not business-centre" };
	const { validPassword: l } = $(r, n);
	if (!i && !l) return { gameData: r, error: "Invalid password" };
	const { payload: s } = n,
		{ myOffer: o, opponentOffer: e } = s,
		{ gameState: m } = r,
		{ publicState: p } = m,
		{ common: f, players: t } = p,
		{ activePlayerId: a, turnEvents: c, turnPhase: k, pendingActions: b } = f;
	if (n.playerId !== a) return { gameData: r, error: "It isn't your turn." };
	if (k !== "after-roll")
		return {
			gameData: r,
			error: "You only use the Business Centre after rolling the dice.",
		};
	const y = b.findIndex(
		(d) => d.action === "business-centre" && d.playerId === n.playerId,
	);
	if (y < 0)
		return { gameData: r, error: "No pending Business Centre action to do." };
	if (n.playerId === s.opponentId)
		return i
			? { gameData: r }
			: (b.splice(y, 1),
				b.length === 0 &&
					((f.turnPhase = "before-build"),
					t[a].city.landmarks.cityHall &&
						t[a].money === 0 &&
						((t[a].money = 1), S(c, `%${a}% got 1 coin from their City Hall`))),
				{ gameData: r });
	const h = Object.values(j)
		.filter((d) => d.tag === "major")
		.map((d) => d.key);
	if (h.includes(o) || h.includes(e))
		return { gameData: r, error: "Cannot trade %%major% establishments" };
	if (
		!Object.values(j)
			.filter((d) => d.tag !== "major")
			.map((d) => d.key)
			.includes(o)
	)
		return {
			gameData: r,
			error: "You have to offer one of your non-%%major% establishments.",
		};
	const u = t[n.playerId].city.establishments;
	if (!u[o] || u[o].length === 0)
		return { gameData: r, error: `You don't have any ${j[o].pluralDisplay}.` };
	if (!s.opponentId)
		return {
			gameData: r,
			error: "You need to choose an opponent's non-%%major% establishment.",
		};
	const w = t[s.opponentId].city.establishments;
	if (!w[e] || w[e].length === 0)
		return {
			gameData: r,
			error: `%${s.opponentId}% doesn't have any ${j[e].pluralDisplay}.`,
		};
	if (i) return { gameData: r };
	const x = u[o].pop(),
		P = w[e].pop();
	return !x || !P
		? (console.error(
				"Something went wrong when performing business centre action",
				x,
				P,
			),
			{
				gameData: r,
				error: "Something went wrong when performing business centre action",
			})
		: (Array.isArray(u[e]) || (u[e] = []),
			u[e].push(P),
			Array.isArray(w[o]) || (w[o] = []),
			w[o].push(x),
			S(
				c,
				`%${n.playerId}% traded their ${j[o].display} for %${s.opponentId}%'s ${j[e].display} - ${j.businessCentre.display}`,
			),
			b.splice(y, 1),
			b.length === 0 &&
				((f.turnPhase = "before-build"),
				t[a].city.landmarks.cityHall &&
					t[a].money === 0 &&
					((t[a].money = 1), S(c, `%${a}% got 1 coin from their City Hall`))),
			{ gameData: r });
};
export { X as C, _ as b, F as j, M as s };
