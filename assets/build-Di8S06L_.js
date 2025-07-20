import { l as $, e as g } from "./index-bPgJQDHo.js";
const A = (r, s) => {
		var e, n;
		if (s.isServer) return { isHost: !1, validPassword: !1 };
		const { gameDetails: t, playersSecrets: u } = r,
			{ playerId: l, playerPassword: i } = s;
		return {
			isHost: l === t.hostId,
			validPassword: !!(
				(e = u[l]) != null &&
				e.password &&
				((n = u[l]) == null ? void 0 : n.password) === i
			),
		};
	},
	C = 20,
	Y = (r, s, t = !1, u = !1) => {
		const l = [],
			i = [];
		let e = !1;
		for (let n = 0; n < r.length; n++)
			r[n] === s
				? ((e = !0), t && i.push(r[n]))
				: e
					? i.push(r[n])
					: l.push(r[n]);
		return (i.push(...l), u && i.reverse(), i);
	},
	y = (r, s) => {
		s && r.push(s);
		const t = r.length - C;
		t > 0 && r.splice(0, t);
	},
	j = (r, s, t = !1) => {
		var m, v;
		if (s.type !== "build") return { gameData: r, error: "not build" };
		const { validPassword: u } = A(r, s);
		if (!t && !u) return { gameData: r, error: "Invalid password" };
		const { payload: l, playerId: i } = s,
			{ buildingKey: e } = l,
			{ gameState: n, gameSettings: w } = r,
			{ publicState: P } = n,
			{ players: k, common: h } = P,
			o = k[i];
		if (!o) return { gameData: r, error: "invalid playerId" };
		const { supply: b, activePlayerId: S, turnPhase: I, turnEvents: p } = h;
		if (I !== "before-build")
			return { gameData: r, error: "You can only build in build phase." };
		if (S !== i)
			return { gameData: r, error: "You can only build on your turn." };
		if (!e)
			return (
				o.city.landmarks.airport
					? ((o.money = o.money + 10),
						y(
							p,
							`id:${Date.now()}:%${s.playerId}% skipped building anything and collected 10 coins from their ${((m = $.airport) == null ? void 0 : m.display) || "Airport"}`,
						))
					: y(p, `id:${Date.now()}:%${s.playerId}% skipped building anything.`),
				{ gameData: r }
			);
		const d = g[e],
			a = $[e];
		if (!d && !a) return { gameData: r, error: "invalid buildingKey" };
		const { city: f } = o;
		if (d) {
			if (o.money < d.cost)
				return {
					gameData: r,
					error: `You don't have enough money to build a ${d.display}`,
				};
			if (
				d.tag === "major" &&
				((v = f.establishments[e]) == null ? void 0 : v.length) >= 1
			)
				return {
					gameData: r,
					error: "cannot have more than one of each %%major% building",
				};
			if (b[e].length === 0)
				return { gameData: r, error: "no more establishments in supply" };
			if (t) return { gameData: r };
			const c = b[e].pop();
			if (!c) return { gameData: r, error: "something went wrong" };
			(f.establishments[e] || (f.establishments[e] = []),
				f.establishments[e].push(c),
				(o.money = o.money - d.cost),
				(h.turnPhase = "after-build"),
				y(p, `%${s.playerId}% built ${d.determiner} ${d.display}.`));
		} else if (a) {
			if (o.money < a.cost) return { gameData: r, error: "not enough money" };
			const { landmarks: c } = w;
			if (!c.includes(e))
				return { gameData: r, error: "landmark not available" };
			if (f.landmarks[e])
				return { gameData: r, error: "landmark already built" };
			if (t) return { gameData: r };
			((f.landmarks[e] = !0),
				(o.money = o.money - a.cost),
				y(p, `%${s.playerId}% built ${a.determiner} ${a.display}`));
		}
		return { gameData: r };
	};
export { j as b, Y as g, y as t, A as v };
