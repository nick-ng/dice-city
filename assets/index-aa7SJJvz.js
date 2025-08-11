import { j as f, r as D } from "./index-vPswkxJ5.js";
import { a as Z } from "./game-DR5qpDLN.js";
import { e as I, l as K } from "./index-bPgJQDHo.js";
import { v as E, t as P, g as L, b as ee } from "./build-Di8S06L_.js";
import {
	b as te,
	s as ae,
	j as re,
	C as ne,
} from "./business-centre-DYK_Jdjj.js";
import { g as se, E as ie } from "./index-M-M_FdU-.js";
import "./utils-BPyf_07k.js";
const oe = (e, t) => {
		if (t.type !== "change-supply")
			return { gameData: e, error: "not change-supply" };
		const { isHost: l, validPassword: s } = E(e, t);
		if (!s) return { gameData: e, error: "Invalid password" };
		if (!l)
			return { gameData: e, error: "Only the host can change the supply type" };
		const { gameState: u, gameSettings: c } = e,
			{ publicState: a } = u,
			{ common: r } = a,
			{ turnPhase: h } = r;
		return h !== "lobby"
			? { gameData: e, error: "The game has already started" }
			: ((c.supplyType = t.payload.supplyType), { gameData: e });
	},
	ce = (e, t) => {
		if (t.type !== "change-public")
			return { gameData: e, error: "not change-public" };
		const { isHost: l, validPassword: s } = E(e, t);
		if (!s) return { gameData: e, error: "Invalid password" };
		if (!l)
			return { gameData: e, error: "Only the host can make the game public" };
		const { gameState: u, gameDetails: c } = e,
			{ publicState: a } = u,
			{ common: r } = a,
			{ turnPhase: h } = r;
		return h !== "lobby"
			? { gameData: e, error: "The game has already started" }
			: ((c.isPublic = t.payload.isPublic), { gameData: e });
	},
	q = (e, t = 6) => {
		const l = Math.random;
		return new Array(e).fill(0).map(
			() =>
				new Array(t)
					.fill(0)
					.map((c, a) => ({ face: a + 1, sortIndex: l() }))
					.sort((c, a) => c.sortIndex - a.sortIndex)[0].face,
		);
	},
	le = (e, t, l = !1) => {
		if (t.type !== "roll-dice") return { gameData: e, error: "not roll-dice" };
		const { validPassword: s } = E(e, t);
		if (!l && !s) return { gameData: e, error: "Invalid password" };
		const { payload: u, playerId: c } = t,
			{ diceCount: a } = u;
		if (a < 1 || a > 2) return { gameData: e, error: "invalid diceCount" };
		const { gameState: r } = e,
			{ publicState: h } = r,
			{ players: y, common: p } = h,
			n = y[c];
		if (!n) return { gameData: e, error: "invalid playerId" };
		const { activePlayerId: i, turnPhase: o } = p;
		if (o !== "before-roll")
			return {
				gameData: e,
				error: "You can only roll dice in roll dice phase.",
			};
		if (i !== c)
			return { gameData: e, error: "You can only roll dice on your turn." };
		const { city: S } = n,
			{ landmarks: b } = S;
		if (a !== 1 && !b.trainStation)
			return {
				gameData: e,
				error: "You can only roll 1 dice if you don't have a train station.",
			};
		if (l) return { gameData: e };
		if (
			((p.turnPhase = "after-roll"),
			(p.diceRolls = q(a, 6)),
			(p.harbourExtra = 0),
			(p.processedEstablishments = []),
			a === 1)
		)
			p.turnEvents.push(`id:${Date.now()}:%${i}% rolled a ${p.diceRolls[0]}`);
		else {
			const g = p.diceRolls.reduce((m, d) => m + d, 0);
			p.turnEvents.push(
				`id:${Date.now()}:%${i}% rolled a ${g} (${p.diceRolls.join(" + ")})`,
			);
		}
		return (P(p.turnEvents), { gameData: e });
	},
	de = (e, t, l = !1) => {
		if (t.type !== "reroll-dice")
			return { gameData: e, error: "not reroll-dice" };
		const { validPassword: s } = E(e, t);
		if (!l && !s) return { gameData: e, error: "Invalid password" };
		const { gameState: u } = e,
			{ publicState: c } = u,
			{ common: a } = c,
			{ activePlayerId: r, pendingActions: h, turnPhase: y, diceRolls: p } = a;
		if (y !== "before-roll")
			return { gameData: e, error: "You cannot re-roll dice right now." };
		if (t.playerId !== r)
			return { gameData: e, error: "You can only re-roll dice on your turn." };
		const n = h.findIndex(
			(b) => b.action === "radio-tower" && b.playerId === r,
		);
		if (n < 0)
			return { gameData: e, error: "You cannot re-roll dice right now." };
		if (l) return { gameData: e };
		(h.splice(n, 1), (a.turnPhase = "after-roll"));
		const { payload: i } = t,
			{ skip: o } = i;
		if (o) return { gameData: e };
		const S = p.length;
		if (((a.diceRolls = q(S, 6)), (a.harbourExtra = 0), S === 1))
			a.turnEvents.push(
				`id:${Date.now()}:%${r}% re-rolled and got a ${a.diceRolls[0]}`,
			);
		else {
			const b = a.diceRolls.reduce((g, m) => g + m, 0);
			a.turnEvents.push(
				`id:${Date.now()}:%${r}% re-rolled and got a ${b} (${a.diceRolls.join(" + ")})`,
			);
		}
		return (P(a.turnEvents), { gameData: e });
	},
	W = (e) => {
		const { gameState: t } = e,
			{ publicState: l } = t,
			{
				diceRolls: s,
				harbourExtra: u,
				processedEstablishments: c,
				turnEvents: a,
				turnPhase: r,
			} = l.common;
		if (r !== "after-roll")
			return {
				gameData: e,
				error: "Red establishments are only processed in the after-roll phase.",
			};
		const h = s.reduce((n, i) => n + i, 0) + u;
		let y = !1,
			p = [];
		return (
			Object.entries(I)
				.filter(([n, i]) => i.colour === "blue")
				.forEach(([n, i]) => {
					if (c.includes(n) || !i.activationNumbers.includes(h)) return;
					let o = 0,
						S = !1;
					switch (n) {
						case "wheatField": {
							o = 1;
							break;
						}
						case "ranch": {
							o = 1;
							break;
						}
						case "forest": {
							o = 1;
							break;
						}
						case "mine": {
							o = 5;
							break;
						}
						case "appleOrchard": {
							o = 3;
							break;
						}
						case "flowerGarden": {
							o = 1;
							break;
						}
						case "mackerelBoat": {
							((o = 3), (S = !0));
							break;
						}
						case "tunaBoat": {
							p = q(2);
							const b = p.reduce((g, m) => g + m, 0);
							((y = !0), (o = b));
							break;
						}
						default: {
							console.info("couldn't handle blue establishment", n);
							return;
						}
					}
					(c.push(n),
						o !== 0 &&
							Object.values(l.players).forEach((b) => {
								var M;
								const { city: g } = b,
									{ establishments: m, landmarks: d } = g,
									$ = ((M = m[n]) == null ? void 0 : M.length) || 0;
								if ($ < 1 || (S && !d.harbour)) return;
								const k = $ * o;
								((b.money += k),
									k > 0 &&
										(y &&
											(a.push(
												`id:${Date.now()}:Rolled ${p.join(" + ")} = ${o} for Tuna Boats`,
											),
											(y = !1)),
										a.push(
											`id:${Date.now()}:%${b.playerId}% collected ${k} ${k === 1 ? "coin" : "coins"} from the bank - ${$} ${$ === 1 ? i.display : i.pluralDisplay}`,
										),
										P(a)));
							}));
				}),
			{ gameData: e }
		);
	},
	T = (e, t) => {
		let l = 0;
		const s = Object.entries(e);
		for (let u = 0; u < s.length; u++) {
			const c = s[u][0],
				a = I[c];
			if ((a == null ? void 0 : a.tag) === t) {
				const r = s[u][1].length;
				l += r;
			}
		}
		return l;
	},
	Q = (e) => {
		const { gameState: t } = e,
			{ publicState: l } = t,
			{
				diceRolls: s,
				harbourExtra: u,
				activePlayerId: c,
				processedEstablishments: a,
				turnEvents: r,
				turnPhase: h,
			} = l.common;
		if (h !== "after-roll")
			return {
				gameData: e,
				error:
					"Green establishments are only processed in the after-roll phase.",
			};
		const y = s.reduce((b, g) => b + g, 0) + u,
			p = l.players[c],
			{ city: n } = p,
			{ establishments: i, landmarks: o } = n,
			S = o.shoppingMall;
		return (
			Object.entries(I)
				.filter(([b, g]) => g.colour === "green")
				.forEach(([b, g]) => {
					var k, M;
					if (a.includes(b) || !g.activationNumbers.includes(y)) return;
					const m = ((k = i[b]) == null ? void 0 : k.length) || 0;
					if (m < 1) return;
					let d = 0;
					switch (b) {
						case "bakery": {
							d = S ? 2 : 1;
							break;
						}
						case "convenienceStore": {
							d = S ? 4 : 3;
							break;
						}
						case "cheeseFactory": {
							d = 3 * T(i, "cow");
							break;
						}
						case "furnitureFactory": {
							d = 3 * T(i, "cog");
							break;
						}
						case "fruitAndVegetableMarket": {
							d = 2 * T(i, "wheat");
							break;
						}
						case "flowerShop": {
							const F = S ? 2 : 1,
								v = ((M = i.flowerGarden) == null ? void 0 : M.length) || 0;
							d = F * v;
							break;
						}
						case "foodWarehouse": {
							d = 2 * T(i, "cup");
							break;
						}
						default:
							console.error("Unknown green establishment", b, g);
							return;
					}
					const $ = d * m;
					((p.money += $),
						a.push(b),
						r.push(
							`id:${Date.now()}:%${c}% collected ${$} ${$ === 1 ? "coin" : "coins"} from the bank - ${m} ${m === 1 ? g.display : g.pluralDisplay}`,
						));
				}),
			P(r),
			{ gameData: e }
		);
	},
	X = (e) => {
		const { gameState: t } = e,
			{ publicState: l } = t,
			{ players: s, common: u } = l,
			{
				diceRolls: c,
				harbourExtra: a,
				activePlayerId: r,
				processedEstablishments: h,
				turnEvents: y,
				turnPhase: p,
				turnOrder: n,
			} = u;
		if (p !== "after-roll")
			return {
				gameData: e,
				error: "Red establishments are only processed in the after-roll phase.",
			};
		const i = c.reduce((S, b) => S + b, 0) + a,
			o = L(n, r, !1, !0);
		return (
			Object.entries(I)
				.filter(([S, b]) => b.colour === "red")
				.forEach(([S, b]) => {
					if (h.includes(S) || !b.activationNumbers.includes(i)) return;
					let g = 0,
						m = 0,
						d = !1,
						$ = 0,
						k = 0;
					switch (S) {
						case "cafe":
						case "pizzaParlour":
						case "hamburgerStand": {
							((g = 1), (m = 1));
							break;
						}
						case "familyRestaurant": {
							((g = 2), (m = 1));
							break;
						}
						case "sushiBar": {
							((d = !0), ($ = 3), (k = 1));
							break;
						}
						default:
							console.error("Unknown red establishment", S, b);
							return;
					}
					const M = s[r];
					(o.forEach((F) => {
						var Y;
						const v = s[F],
							{ city: w } = v,
							{ establishments: A, landmarks: x } = w,
							R = ((Y = A[S]) == null ? void 0 : Y.length) || 0;
						if (R === 0) return;
						let O = g;
						if ((x.shoppingMall && (O += m), d)) {
							if (!x.harbour) return;
							((O = $), x.shoppingMall && (O += k));
						}
						const j = O * R;
						if (M.money === 0) {
							y.push(
								`id:${Date.now()}:%${F}% couldn't collect any coins from %${r}% - ${R} ${R === 1 ? b.display : b.pluralDisplay}`,
							);
							return;
						}
						M.money < j
							? (y.push(
									`id:${Date.now()}:%${F}% collected ${M.money} ${M.money === 1 ? "coin" : "coins"} from %${r}% - ${R} ${R === 1 ? b.display : b.pluralDisplay}`,
								),
								(v.money += M.money),
								(M.money = 0))
							: (y.push(
									`id:${Date.now()}:%${F}% collected ${j} ${j === 1 ? "coin" : "coins"} from %${r}% - ${R} ${R === 1 ? b.display : b.pluralDisplay}`,
								),
								(v.money += j),
								(M.money -= j));
					}),
						h.push(S));
				}),
			P(y),
			{ gameData: e }
		);
	},
	ue = (e) => {
		const { gameState: t } = e,
			{ publicState: l } = t,
			{ players: s, common: u } = l,
			{
				diceRolls: c,
				harbourExtra: a,
				activePlayerId: r,
				processedEstablishments: h,
				turnEvents: y,
				turnPhase: p,
				turnOrder: n,
				pendingActions: i,
			} = u;
		if (p !== "after-roll")
			return {
				gameData: e,
				error:
					"Purple establishments are only processed in the after-roll phase.",
			};
		const o = s[r],
			{ city: S } = o,
			b = c.reduce((m, d) => m + d, 0) + a;
		let g = "before-build";
		return (
			Object.entries(I)
				.filter(([m, d]) => d.colour === "purple")
				.forEach(([m, d]) => {
					var M;
					if (h.includes(m) || !d.activationNumbers.includes(b)) return;
					const { establishments: $ } = S,
						k = ((M = $[m]) == null ? void 0 : M.length) || 0;
					if (k === 0) {
						h.push(m);
						return;
					}
					switch (m) {
						case "stadium": {
							const F = 2 * k,
								v = L(n, r, !1);
							for (let w = 0; w < v.length; w++) {
								const A = s[v[w]];
								A.money === 0
									? P(
											y,
											`%${r}% couldn't collect any coins from %${v[w]}% - ${k} ${k === 1 ? d.display : d.pluralDisplay}`,
										)
									: A.money < F
										? (P(
												y,
												`%${r}% collected ${A.money} ${A.money === 1 ? "coin" : "coins"} from %${v[w]}% - ${k} ${k === 1 ? d.display : d.pluralDisplay}`,
											),
											(o.money += A.money),
											(A.money = 0))
										: (P(
												y,
												`%${r}% collected ${F} ${F === 1 ? "coin" : "coins"} from %${v[w]}% - ${k} ${k === 1 ? d.display : d.pluralDisplay}`,
											),
											(o.money += F),
											(A.money -= F));
							}
							break;
						}
						case "tvStation": {
							((g = "after-roll"),
								i.push({ playerId: r, action: "tv-station" }));
							break;
						}
						case "businessCentre": {
							((g = "after-roll"),
								i.push({ playerId: r, action: "business-centre" }));
							break;
						}
						case "publisher": {
							const F = L(n, r, !1);
							for (let v = 0; v < F.length; v++) {
								const w = s[F[v]],
									{ city: A } = w,
									x = T(A.establishments, "cup"),
									R = T(A.establishments, "bread"),
									O = x + R;
								w.money === 0
									? P(
											y,
											`%${r}% couldn't collect any coins from %${F[v]}% - ${k} ${k === 1 ? d.display : d.pluralDisplay}`,
										)
									: w.money < O
										? (P(
												y,
												`%${r}% collected ${w.money} ${w.money === 1 ? "coin" : "coins"} from %${F[v]}% - ${k} ${k === 1 ? d.display : d.pluralDisplay}`,
											),
											(o.money += w.money),
											(w.money = 0))
										: (P(
												y,
												`%${r}% collected ${O} ${O === 1 ? "coin" : "coins"} from %${F[v]}% - ${k} ${k === 1 ? d.display : d.pluralDisplay}`,
											),
											(o.money += O),
											(w.money -= O));
							}
							break;
						}
						case "taxOffice": {
							const F = L(n, r, !1);
							for (let v = 0; v < F.length; v++) {
								const w = s[F[v]],
									A = Math.floor(w.money / 2);
								w.money < 10 || A === 0
									? P(
											y,
											`%${r}% couldn't collect any coins from %${F[v]}% - ${k} ${k === 1 ? d.display : d.pluralDisplay}`,
										)
									: (P(
											y,
											`%${r}% collected ${A} ${A === 1 ? "coin" : "coins"} from %${F[v]}% - ${k} ${k === 1 ? d.display : d.pluralDisplay}`,
										),
										(o.money += A),
										(w.money -= A));
							}
							break;
						}
						default: {
							console.error(
								"Unknown purple establishment",
								m,
								JSON.stringify(d),
							);
							return;
						}
					}
					h.push(m);
				}),
			(u.turnPhase = g),
			g === "before-build" &&
				S.landmarks.cityHall &&
				o.money === 0 &&
				((o.money = 1), P(y, `%${r}% got 1 coin from their City Hall`)),
			{ gameData: e }
		);
	},
	N = (e) => {
		let t;
		return (
			(t = X(e).error),
			t
				? (console.error("error processing red establishments", t),
					{ gameData: e, error: t })
				: ((t = Q(e).error),
					t
						? (console.error("error processing green establishments", t),
							{ gameData: e, error: t })
						: ((t = W(e).error),
							t
								? (console.error("error processing blue establishments", t),
									{ gameData: e, error: t })
								: ue(e)))
		);
	},
	be = 5,
	ye = (e, t, l = !1) => {
		var $;
		if (t.type !== "tv-station")
			return { gameData: e, error: "not tv-station" };
		const { gameState: s } = e,
			{ publicState: u } = s,
			{ common: c, players: a } = u,
			{ activePlayerId: r, turnEvents: h, turnPhase: y, pendingActions: p } = c;
		if (r !== t.playerId) return { gameData: e, error: "It's not your turn." };
		const { validPassword: n } = E(e, t);
		if (!l && !n) return { gameData: e, error: "Invalid password" };
		if (y !== "after-roll")
			return {
				gameData: e,
				error: "You only use the TV Station after rolling the dice.",
			};
		const i = p.findIndex(
			(k) => k.action === "tv-station" && k.playerId === t.playerId,
		);
		if (i < 0)
			return { gameData: e, error: "No pending TV Station action to do." };
		const o = p[i];
		if (!o || o.playerId !== t.playerId)
			return { gameData: e, error: "Something went wrong" };
		const { payload: S } = t,
			b = a[S.opponentId];
		if (!b)
			return { gameData: e, error: "The chosen player isn't in this game." };
		if (l) return { gameData: e };
		const { city: g } = a[r],
			m = (($ = g.establishments.tvStation) == null ? void 0 : $.length) || 0,
			d = be * m;
		return d === 0
			? { gameData: e }
			: (b.money === 0
					? h.push(
							`id:${Date.now()}:%${r}% couldn't collect any coins from %${S.opponentId}% - ${m} ${m === 1 ? I.tvStation.display : I.tvStation.pluralDisplay}`,
						)
					: b.money < d
						? (h.push(
								`id:${Date.now()}:%${r}% collected ${b.money} ${b.money === 1 ? "coin" : "coins"} from %${S.opponentId}% - ${m} ${m === 1 ? I.tvStation.display : I.tvStation.pluralDisplay}`,
							),
							(a[r].money += b.money),
							(b.money = 0))
						: (h.push(
								`id:${Date.now()}:%${r}% collected ${d} ${d === 1 ? "coin" : "coins"} from %${S.opponentId}% - ${m} ${m === 1 ? I.tvStation.display : I.tvStation.pluralDisplay}`,
							),
							(a[r].money += d),
							(b.money -= d)),
				p.splice(i, 1),
				p.length === 0 &&
					((c.turnPhase = "before-build"),
					g.landmarks.cityHall &&
						a[r].money === 0 &&
						((a[r].money = 1),
						h.push(`id:${Date.now()}:%${r}% got 1 coin from their City Hall`))),
				P(h),
				{ gameData: e });
	},
	he = (e) => {
		const { gameState: t } = e,
			{ publicState: l } = t,
			{ common: s, players: u } = l,
			{ activePlayerId: c, pendingActions: a } = s,
			r = u[c];
		if (!r)
			return (
				console.error("no active player state", c, JSON.stringify(u)),
				{ gameData: e, requireInput: !1 }
			);
		const { city: h } = r;
		return h.landmarks.radioTower
			? (a.push({ playerId: c, action: "radio-tower" }),
				(s.turnPhase = "before-roll"),
				{ gameData: e, requireInput: !0 })
			: { gameData: e, requireInput: !1 };
	},
	pe = (e) => {
		const { gameState: t, gameSettings: l } = e,
			{ publicState: s } = t,
			{ common: u, players: c } = s,
			{ landmarks: a } = l,
			r = Object.values(c).map((y) => y.city.landmarks);
		let h = !1;
		for (let y = 0; y < r.length; y++)
			if (
				Object.values(r[y]).reduce((n, i) => (i ? n + 1 : n), 0) === a.length
			) {
				((u.turnPhase = "end"), (h = !0));
				break;
			}
		return { gameData: e, gameOver: h };
	},
	J = (e) => {
		const {
				activePlayerId: t,
				diceRolls: l,
				autoActions: s,
			} = e.gameState.publicState.common,
			c = e.gameState.publicState.players[t].city.landmarks.amusementPark,
			a = new Set(l);
		return (
			c &&
				l.length > 1 &&
				a.size < l.length &&
				s.push({ action: "amusement-park", playerId: t }),
			e
		);
	},
	me = (e) => {
		const {
				activePlayerId: t,
				autoActions: l,
				turnOrder: s,
			} = e.gameState.publicState.common,
			u = s.findIndex((a) => a === t);
		e.gameState.publicState.common.turnPhase = "before-roll";
		const c = l.findIndex(
			(a) => a.action === "amusement-park" && a.playerId === t,
		);
		if (
			((e.gameState.publicState.common.turn =
				e.gameState.publicState.common.turn + 1),
			e.gameState.publicState.common.turnEvents.push(
				`id:${Date.now()}:Turn ${e.gameState.publicState.common.turn}`,
			),
			c < 0)
		) {
			const a = (u + 1) % s.length;
			((e.gameState.publicState.common.activePlayerId = s[a]),
				e.gameState.publicState.common.turnEvents.push(
					`id:${Date.now()}:It is %${s[a]}%'s turn`,
				));
		} else
			(l.splice(c, 1),
				e.gameState.publicState.common.turnEvents.push(
					`id:${Date.now()}:%${t}% gets another turn because of their ${K.amusementPark.display}`,
				));
		return (P(e.gameState.publicState.common.turnEvents), e);
	},
	_ = (e) => {
		const { gameState: t } = e,
			{ publicState: l } = t,
			{ common: s, players: u } = l,
			{ activePlayerId: c, pendingActions: a } = s,
			r = u[c];
		if (!r)
			return (
				console.error("no active player state", c, JSON.stringify(u)),
				{ gameData: e, requireInput: !1 }
			);
		const { city: h } = r,
			y = s.diceRolls.reduce((p, n) => p + n, 0);
		return h.landmarks.harbour && y >= 10
			? (a.push({ playerId: c, action: "harbour" }),
				(s.turnPhase = "before-roll"),
				{ gameData: e, requireInput: !0 })
			: { gameData: e, requireInput: !1 };
	},
	fe = (e, t) => {
		if (t.type !== "harbour-change-roll")
			return { gameData: e, error: "not harbour-change-roll" };
		const { validPassword: l } = E(e, t);
		if (!l) return { gameData: e, error: "Invalid password" };
		const { gameState: s } = e,
			{ publicState: u } = s,
			{ common: c } = u,
			{ activePlayerId: a, pendingActions: r, turnPhase: h, diceRolls: y } = c;
		if (h !== "before-roll")
			return {
				gameData: e,
				error: "You can only use the Harbour just after rolling dice.",
			};
		if (t.playerId !== a)
			return {
				gameData: e,
				error: "You can only use your Harbour on your turn.",
			};
		const p = r.findIndex((i) => i.action === "harbour" && i.playerId === a);
		if (p < 0)
			return { gameData: e, error: "You cannot use your Harbour right now." };
		if ((r.splice(p, 1), (c.turnPhase = "after-roll"), t.payload.skip))
			return ((c.harbourExtra = 0), { gameData: e });
		const n = y.reduce((i, o) => i + o, 0);
		return (
			n >= 10 && (c.harbourExtra = 2),
			c.turnEvents.push(
				`id:${Date.now()}:%${a}% changed the dice total from ${n} to ${n + c.harbourExtra} with their Harbour.`,
			),
			P(c.turnEvents),
			{ gameData: e }
		);
	},
	Se = (e, t) => {
		var l;
		if (!t.isServer && t.type !== "join") {
			if (!e.gameDetails.players.find((u) => u.id === t.playerId))
				return { gameData: e, error: "you aren't in this game" };
			const s =
				(l = e.playersSecrets[t.playerId]) == null ? void 0 : l.password;
			if (!s || t.playerPassword !== s)
				return { gameData: e, error: "wrong password" };
		}
		switch (t.type) {
			case "join":
				return re(e, t);
			case "change-supply":
				return oe(e, t);
			case "change-public":
				return ce(e, t);
			case "start":
				return ae(e, t);
			case "roll-dice": {
				let s = le(e, t);
				return s.error
					? s
					: he(e).requireInput
						? { gameData: e }
						: (J(e), _(e).requireInput ? { gameData: e } : N(e));
			}
			case "reroll-dice": {
				const s = de(e, t);
				return s.error ? s : (J(e), _(e).requireInput ? { gameData: e } : N(e));
			}
			case "harbour-change-roll": {
				const s = fe(e, t);
				return s.error ? s : N(e);
			}
			case "build": {
				let s = ee(e, t);
				if (s.error) return s;
				const { gameData: u, gameOver: c } = pe(s.gameData);
				if (c) return { gameData: u };
				me(e);
				const { pendingActions: a } = e.gameState.publicState.common;
				a.length > 0 &&
					(console.error(
						"Unfinished pending actions some how",
						JSON.stringify(a),
					),
					a.splice(0, a.length));
				const r = se(
					e.gameState.publicState.common.supply,
					e.gameState.secretState.common.deck,
					e.gameSettings.supplyType,
				);
				((e.gameState.publicState.common.supply = r.supply),
					(e.gameState.secretState.common.deck = r.deck));
				const h = r.additions.reduce(
					(n, i) => (n[i] || (n[i] = 0), (n[i] = n[i] + 1), n),
					{},
				);
				let y = 0;
				const p = Object.entries(h)
					.sort((n, i) => n[0].localeCompare(i[0]))
					.map(([n, i]) => {
						y = y + i;
						const o = I[n];
						return `${i} ${i === 1 ? (o == null ? void 0 : o.display) : o == null ? void 0 : o.pluralDisplay} added to the supply`;
					});
				return (
					y > 0 &&
						p.forEach((n) => {
							P(e.gameState.publicState.common.turnEvents, n);
						}),
					s
				);
			}
			case "red-establishments":
				return X(e);
			case "green-establishments":
				return Q(e);
			case "blue-establishments":
				return W(e);
			case "tv-station":
				return ye(e, t);
			case "business-centre":
				return te(e, t);
			default:
				return (
					console.error("No handler for action", JSON.stringify(t)),
					{ gameData: e, error: "no such action" }
				);
		}
	},
	ge = {
		hostId: "a",
		id: "a",
		players: [
			{ id: "a", name: "Player A" },
			{ id: "b", name: "Player B" },
		],
	},
	ke = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	Fe = {
		publicState: {
			players: {
				a: {
					playerId: "a",
					money: 30,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
							businessCentre: ["businessCentre:2"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !0,
							trainStation: !1,
						},
					},
				},
				b: {
					playerId: "b",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "a",
				turnPhase: "before-build",
				diceRolls: [],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: [
						"bakery:5",
						"bakery:0",
						"bakery:3",
						"bakery:2",
						"bakery:1",
						"bakery:4",
					],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:2",
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	V = {
		gameDetails: ge,
		gameSettings: ke,
		gameState: Fe,
		lastActionId: "1",
		playersSecrets: { a: { password: "abc" }, b: { password: "bcd" } },
	},
	ve = [
		{
			tags: ["build", "success"],
			display:
				"Build: Player A with 30 money builds cheese cactory on their turn",
			startingData: V,
			action: {
				playerId: "a",
				playerPassword: "abc",
				type: "build",
				payload: { buildingKey: "cheeseFactory" },
			},
		},
		{
			tags: ["build", "success"],
			display:
				"Build: Player A with 30 money builds train station on their turn",
			startingData: V,
			action: {
				playerId: "a",
				playerPassword: "abc",
				type: "build",
				payload: { buildingKey: "trainStation" },
			},
		},
		{
			tags: ["build", "error"],
			display:
				"Build: Player A with 30 money builds a second shopping mall on their turn",
			startingData: V,
			action: {
				playerId: "a",
				playerPassword: "abc",
				type: "build",
				payload: { buildingKey: "shoppingMall" },
			},
		},
		{
			tags: ["build", "success"],
			display: "Build: Player A with 30 money builds a stadium on their turn",
			startingData: V,
			action: {
				playerId: "a",
				playerPassword: "abc",
				type: "build",
				payload: { buildingKey: "stadium" },
			},
		},
		{
			tags: ["build", "error"],
			display:
				"Build: Player A with 30 money builds a second business centre on their turn",
			startingData: V,
			action: {
				playerId: "a",
				playerPassword: "abc",
				type: "build",
				payload: { buildingKey: "businessCentre" },
			},
		},
		{
			tags: ["build", "error"],
			display: "Build: Player B with 3 money builds ranch not on their turn",
			startingData: V,
			action: {
				playerId: "b",
				playerPassword: "bcd",
				type: "build",
				payload: { buildingKey: "ranch" },
			},
		},
	],
	we = {
		hostId: "a",
		id: "a",
		players: [
			{ id: "a", name: "Player A" },
			{ id: "b", name: "Player B" },
		],
	},
	Ae = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	Pe = {
		publicState: {
			players: {
				a: {
					playerId: "a",
					money: 9,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !0,
							trainStation: !1,
						},
					},
				},
				b: {
					playerId: "b",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "b",
				turnPhase: "before-build",
				diceRolls: [],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: [
						"bakery:5",
						"bakery:0",
						"bakery:3",
						"bakery:2",
						"bakery:1",
						"bakery:4",
					],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:2",
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	z = {
		gameDetails: we,
		gameSettings: Ae,
		gameState: Pe,
		lastActionId: "1",
		playersSecrets: { a: { password: "abc" }, b: { password: "bcd" } },
	},
	$e = [
		{
			tags: ["build", "error"],
			display: "Build: Player B with 3 money builds mine on their turn",
			startingData: z,
			action: {
				playerId: "b",
				playerPassword: "bcd",
				type: "build",
				payload: { buildingKey: "mine" },
			},
		},
		{
			tags: ["build", "error"],
			display:
				"Build: Player B with 3 money builds amusement park on their turn",
			startingData: z,
			action: {
				playerId: "b",
				playerPassword: "bcd",
				type: "build",
				payload: { buildingKey: "amusementPark" },
			},
		},
	],
	Me = {
		hostId: "a",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "a", name: "Player A" },
			{ id: "b", name: "Player B" },
		],
	},
	Ie = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	Re = {
		publicState: {
			players: {
				a: {
					playerId: "a",
					money: 9,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !0,
							trainStation: !1,
						},
					},
				},
				b: {
					playerId: "b",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "a",
				turnPhase: "before-roll",
				diceRolls: [],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: [
						"bakery:5",
						"bakery:0",
						"bakery:3",
						"bakery:2",
						"bakery:1",
						"bakery:4",
					],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:2",
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	B = {
		gameDetails: Me,
		gameSettings: Ie,
		gameState: Re,
		lastActionId: "1682755618-0",
		playersSecrets: { a: { password: "abc" }, b: { password: "bcd" } },
	},
	Oe = [
		{
			tags: ["roll-dice", "success"],
			display: "Roll-dice: Player A rolls 1 die on their turn",
			startingData: B,
			action: {
				playerId: "a",
				playerPassword: "abc",
				type: "roll-dice",
				payload: { diceCount: 1 },
			},
		},
		{
			tags: ["roll-dice", "error"],
			display:
				"Roll-dice: Player A rolls 2 dice on their turn without a train station",
			startingData: B,
			action: {
				playerId: "a",
				playerPassword: "abc",
				type: "roll-dice",
				payload: { diceCount: 2 },
			},
		},
		{
			tags: ["roll-dice", "error"],
			display: "Roll-dice: Player B rolls 1 die not on their turn",
			startingData: B,
			action: {
				playerId: "b",
				playerPassword: "bcd",
				type: "roll-dice",
				payload: { diceCount: 1 },
			},
		},
		{
			tags: ["roll-dice", "error"],
			display: "Roll-dice: Player A rolls 1 die with the wrong password",
			startingData: B,
			action: {
				playerId: "a",
				playerPassword: "abd",
				type: "roll-dice",
				payload: { diceCount: 1 },
			},
		},
	],
	Ce = {
		hostId: "a",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "a", name: "Player A" },
			{ id: "b", name: "Player B" },
		],
	},
	Ve = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	Te = {
		publicState: {
			players: {
				a: {
					playerId: "a",
					money: 9,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !0,
							trainStation: !0,
						},
					},
				},
				b: {
					playerId: "b",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "a",
				turnPhase: "before-roll",
				diceRolls: [],
				harbourExtra: 0,
				processedEstablishments: ["establishmentA", "establishmentB"],
				turnEvents: [],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: [
						"bakery:5",
						"bakery:0",
						"bakery:3",
						"bakery:2",
						"bakery:1",
						"bakery:4",
					],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:2",
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	H = {
		gameDetails: Ce,
		gameSettings: Ve,
		gameState: Te,
		lastActionId: "1682757615-0",
		playersSecrets: { a: { password: "abc" }, b: { password: "bcd" } },
	},
	Ee = [
		{
			tags: ["roll-dice", "success"],
			display:
				"Roll-dice: Player A rolls 1 die on their turn with a train station",
			startingData: H,
			action: {
				playerId: "a",
				playerPassword: "abc",
				type: "roll-dice",
				payload: { diceCount: 1 },
			},
		},
		{
			tags: ["roll-dice", "success"],
			display:
				"Roll-dice: Player A rolls 2 dice on their turn with a train station",
			startingData: H,
			action: {
				playerId: "a",
				playerPassword: "abc",
				type: "roll-dice",
				payload: { diceCount: 2 },
			},
		},
		{
			tags: ["roll-dice", "error"],
			display: "Roll-dice: Player B rolls 1 die not on their turn",
			startingData: H,
			action: {
				playerId: "b",
				playerPassword: "bcd",
				type: "roll-dice",
				payload: { diceCount: 2 },
			},
		},
	],
	xe = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	je = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	Be = {
		publicState: {
			players: {
				"84c45332-4911-4823-839e-996bad56ba61": {
					playerId: "84c45332-4911-4823-839e-996bad56ba61",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !0,
						},
					},
				},
				"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
					playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0", "bakery:3"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
				turnPhase: "after-roll",
				diceRolls: [1, 2],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [
					"%84c45332-4911-4823-839e-996bad56ba61% rolled a 3 (1 + 2)",
				],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:5", "bakery:2", "bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:2",
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	Le = {
		gameDetails: xe,
		gameSettings: je,
		gameState: Be,
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	},
	Ne = [
		{
			tags: ["green-establishments", "bakery", "success"],
			display: "Green-establishments: Player A rolls a 3 and has 0 bakeries",
			startingData: Le,
			action: { type: "green-establishments", isServer: !0 },
		},
	],
	He = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	Ge = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	qe = {
		publicState: {
			players: {
				"84c45332-4911-4823-839e-996bad56ba61": {
					playerId: "84c45332-4911-4823-839e-996bad56ba61",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							bakery: ["bakery:5"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !0,
						},
					},
				},
				"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
					playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0", "bakery:3"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
				turnPhase: "after-roll",
				diceRolls: [1, 2],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [
					"%84c45332-4911-4823-839e-996bad56ba61% rolled a 3 (1 + 2)",
				],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:2", "bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:2",
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	Ye = {
		gameDetails: He,
		gameSettings: Ge,
		gameState: qe,
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	},
	De = [
		{
			tags: ["green-establishments", "bakery", "success"],
			display: "Green-establishments: Player A rolls a 3 and has 1 bakery",
			startingData: Ye,
			action: { type: "green-establishments", isServer: !0 },
		},
	],
	Je = {
		hostId: "a",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "a", name: "Player A" },
			{ id: "b", name: "Player B" },
		],
	},
	_e = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	ze = {
		publicState: {
			players: {
				a: {
					playerId: "a",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							bakery: ["bakery:2", "bakery:5"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !0,
							trainStation: !0,
						},
					},
				},
				b: {
					playerId: "b",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0", "bakery:3"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "a",
				turnPhase: "after-roll",
				diceRolls: [1, 2],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: ["Player A rolled a 3 (1 + 2)"],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:2",
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	Ue = {
		gameDetails: Je,
		gameSettings: _e,
		gameState: ze,
		lastActionId: "1682787615-0",
		playersSecrets: { a: { password: "abc" }, b: { password: "bcd" } },
	},
	We = [
		{
			tags: ["green-establishments", "bakery", "success"],
			display: "Green-establishments: Player A rolls a 3 and has 2 bakeries",
			startingData: Ue,
			action: { type: "green-establishments", isServer: !0 },
		},
	],
	Qe = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	Xe = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	Ze = {
		publicState: {
			players: {
				"84c45332-4911-4823-839e-996bad56ba61": {
					playerId: "84c45332-4911-4823-839e-996bad56ba61",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							bakery: ["bakery:5", "bakery:3"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !0,
							trainStation: !0,
						},
					},
				},
				"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
					playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
				turnPhase: "after-roll",
				diceRolls: [1, 2],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [
					"%84c45332-4911-4823-839e-996bad56ba61% rolled a 3 (1 + 2)",
				],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:2", "bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:2",
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	Ke = {
		gameDetails: Qe,
		gameSettings: Xe,
		gameState: Ze,
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	},
	et = [
		{
			tags: ["green-establishments", "bakery", "success"],
			display:
				"Green-establishments: Player A rolls a 3 and has 2 bakeries and a shopping mall",
			startingData: Ke,
			action: { type: "green-establishments", isServer: !0 },
		},
	],
	tt = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	at = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	rt = {
		publicState: {
			players: {
				"84c45332-4911-4823-839e-996bad56ba61": {
					playerId: "84c45332-4911-4823-839e-996bad56ba61",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							bakery: ["bakery:5"],
							convenienceStore: ["convenienceStore:2"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !0,
						},
					},
				},
				"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
					playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0", "bakery:3"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
				turnPhase: "after-roll",
				diceRolls: [2, 2],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [
					"%84c45332-4911-4823-839e-996bad56ba61% rolled a 4 (2 + 2)",
				],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:2", "bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	nt = {
		gameDetails: tt,
		gameSettings: at,
		gameState: rt,
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	},
	st = [
		{
			tags: ["green-establishments", "convenience-store", "success"],
			display:
				"Green-establishments: Player A rolls a 4 and has 1 convenience store",
			startingData: nt,
			action: { type: "green-establishments", isServer: !0 },
		},
	],
	it = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	ot = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	ct = {
		publicState: {
			players: {
				"84c45332-4911-4823-839e-996bad56ba61": {
					playerId: "84c45332-4911-4823-839e-996bad56ba61",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							bakery: ["bakery:5"],
							convenienceStore: ["convenienceStore:2"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !0,
							trainStation: !0,
						},
					},
				},
				"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
					playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0", "bakery:3"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
				turnPhase: "after-roll",
				diceRolls: [2, 2],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [
					"%84c45332-4911-4823-839e-996bad56ba61% rolled a 4 (2 + 2)",
				],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:2", "bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	lt = {
		gameDetails: it,
		gameSettings: ot,
		gameState: ct,
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	},
	dt = [
		{
			tags: ["green-establishments", "convenience-store", "success"],
			display:
				"Green-establishments: Player A rolls a 4 and has 1 convenience store and has a shopping mall",
			startingData: lt,
			action: { type: "green-establishments", isServer: !0 },
		},
	],
	ut = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	bt = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	yt = {
		publicState: {
			players: {
				"84c45332-4911-4823-839e-996bad56ba61": {
					playerId: "84c45332-4911-4823-839e-996bad56ba61",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a", "ranch:0", "ranch:3"],
							convenienceStore: ["convenienceStore:2"],
							cheeseFactory: ["cheeseFactory:4", "cheeseFactory:2"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !0,
						},
					},
				},
				"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
					playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0", "bakery:3"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
				turnPhase: "after-roll",
				diceRolls: [5, 2],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [
					"%84c45332-4911-4823-839e-996bad56ba61% rolled a 7 (5 + 2)",
				],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:5", "bakery:2", "bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:3",
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: ["ranch:1", "ranch:4", "ranch:2", "ranch:5"],
					convenienceStore: [
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	ht = {
		gameDetails: ut,
		gameSettings: bt,
		gameState: yt,
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	},
	pt = [
		{
			tags: ["green-establishments", "cheese-factory", "success"],
			display:
				"Green-establishments: Player A rolls a 7 and has 2 cheese factories and 3 🐄",
			startingData: ht,
			action: { type: "green-establishments", isServer: !0 },
		},
	],
	mt = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	ft = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	St = {
		publicState: {
			players: {
				"84c45332-4911-4823-839e-996bad56ba61": {
					playerId: "84c45332-4911-4823-839e-996bad56ba61",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a", "ranch:0", "ranch:3"],
							convenienceStore: ["convenienceStore:2"],
							cheeseFactory: ["cheeseFactory:4", "cheeseFactory:2"],
							furnitureFactory: [
								"furnitureFactory:3",
								"furnitureFactory:0",
								"furnitureFactory:1",
							],
							forest: ["forest:3", "forest:1"],
							mine: ["mine:4", "mine:5"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !0,
						},
					},
				},
				"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
					playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0", "bakery:3"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
				turnPhase: "after-roll",
				diceRolls: [5, 3],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [
					"%84c45332-4911-4823-839e-996bad56ba61% rolled a 8 (5 + 3)",
				],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:5", "bakery:2", "bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:3",
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: ["ranch:1", "ranch:4", "ranch:2", "ranch:5"],
					convenienceStore: [
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: ["forest:0", "forest:4", "forest:5", "forest:2"],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	gt = {
		gameDetails: mt,
		gameSettings: ft,
		gameState: St,
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	},
	kt = [
		{
			tags: ["green-establishments", "furniture-factory", "success"],
			display:
				"Green-establishments: Player A rolls an 8 and has 3 furniture factories and 4 ⚙️",
			startingData: gt,
			action: { type: "green-establishments", isServer: !0 },
		},
	],
	Ft = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	vt = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	wt = {
		publicState: {
			players: {
				"84c45332-4911-4823-839e-996bad56ba61": {
					playerId: "84c45332-4911-4823-839e-996bad56ba61",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a", "ranch:0", "ranch:3"],
							convenienceStore: ["convenienceStore:2"],
							cheeseFactory: ["cheeseFactory:4", "cheeseFactory:2"],
							furnitureFactory: [
								"furnitureFactory:3",
								"furnitureFactory:0",
								"furnitureFactory:1",
							],
							forest: ["forest:3", "forest:1"],
							mine: ["mine:4", "mine:5"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !0,
						},
					},
				},
				"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
					playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					money: 3,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0", "bakery:3"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !1,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
				turnPhase: "after-roll",
				diceRolls: [5, 6],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [
					"%84c45332-4911-4823-839e-996bad56ba61% rolled an 11 (5 + 6)",
				],
				turnOrder: [],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:5", "bakery:2", "bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: ["ranch:1", "ranch:4", "ranch:2", "ranch:5"],
					convenienceStore: [
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: ["forest:0", "forest:4", "forest:5", "forest:2"],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	At = {
		gameDetails: Ft,
		gameSettings: vt,
		gameState: wt,
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	},
	Pt = [
		{
			tags: ["green-establishments", "fruit-and-vegetable-market", "success"],
			display:
				"Green-establishments: Player A rolls an 11 and has 1 fruit factory and 1 🌾",
			startingData: At,
			action: { type: "green-establishments", isServer: !0 },
		},
	],
	$t = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	Mt = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	It = {
		"84c45332-4911-4823-839e-996bad56ba61": {
			playerId: "84c45332-4911-4823-839e-996bad56ba61",
			money: 0,
			city: {
				establishments: {
					wheatField: ["wheatField:a"],
					ranch: ["ranch:a", "ranch:0", "ranch:3"],
					convenienceStore: ["convenienceStore:2"],
					cheeseFactory: ["cheeseFactory:4", "cheeseFactory:2"],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
					],
					mine: ["mine:4", "mine:5"],
					appleOrchard: ["appleOrchard:5"],
				},
				landmarks: {
					radioTower: !1,
					amusementPark: !1,
					shoppingMall: !1,
					trainStation: !0,
				},
			},
		},
		"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
			playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
			money: 0,
			city: {
				establishments: {
					wheatField: ["wheatField:b", "wheatField:4"],
					ranch: ["ranch:b"],
					bakery: ["bakery:0", "bakery:3"],
					forest: ["forest:3", "forest:1"],
					appleOrchard: ["appleOrchard:0", "appleOrchard:2", "appleOrchard:1"],
				},
				landmarks: {
					radioTower: !0,
					amusementPark: !1,
					shoppingMall: !1,
					trainStation: !1,
				},
			},
		},
	},
	Rt = {
		turn: 0,
		activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
		turnPhase: "after-roll",
		diceRolls: [1],
		harbourExtra: 0,
		processedEstablishments: [],
		turnEvents: ["%84c45332-4911-4823-839e-996bad56ba61% rolled a 1"],
		turnOrder: [],
		autoActions: [],
		pendingActions: [],
		supply: {
			familyRestaurant: [
				"familyRestaurant:5",
				"familyRestaurant:4",
				"familyRestaurant:2",
				"familyRestaurant:3",
				"familyRestaurant:1",
				"familyRestaurant:0",
			],
			appleOrchard: ["appleOrchard:4", "appleOrchard:3"],
			bakery: ["bakery:5", "bakery:2", "bakery:1", "bakery:4"],
			fruitAndVegetableMarket: [
				"fruitAndVegetableMarket:3",
				"fruitAndVegetableMarket:2",
				"fruitAndVegetableMarket:0",
				"fruitAndVegetableMarket:1",
				"fruitAndVegetableMarket:5",
				"fruitAndVegetableMarket:4",
			],
			furnitureFactory: [
				"furnitureFactory:4",
				"furnitureFactory:2",
				"furnitureFactory:5",
			],
			cheeseFactory: [
				"cheeseFactory:1",
				"cheeseFactory:0",
				"cheeseFactory:3",
				"cheeseFactory:5",
			],
			ranch: ["ranch:1", "ranch:4", "ranch:2", "ranch:5"],
			convenienceStore: [
				"convenienceStore:3",
				"convenienceStore:1",
				"convenienceStore:4",
				"convenienceStore:5",
				"convenienceStore:0",
			],
			forest: ["forest:0", "forest:4", "forest:5", "forest:2"],
			wheatField: [
				"wheatField:0",
				"wheatField:1",
				"wheatField:2",
				"wheatField:3",
				"wheatField:5",
			],
			cafe: ["cafe:0", "cafe:5", "cafe:3", "cafe:1", "cafe:2", "cafe:4"],
			businessCentre: [
				"businessCentre:2",
				"businessCentre:3",
				"businessCentre:0",
				"businessCentre:1",
			],
			mine: ["mine:2", "mine:0", "mine:1", "mine:3"],
			stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
			tvStation: ["tvStation:0", "tvStation:3", "tvStation:1", "tvStation:2"],
		},
	},
	C = (e = [1]) => ({
		gameDetails: $t,
		gameSettings: Mt,
		gameState: {
			publicState: {
				players: It,
				common: {
					...Rt,
					turnEvents: [
						`%84c45332-4911-4823-839e-996bad56ba61% rolled a ${e.reduce((t, l) => t + l)}${e.length > 1 ? ` (${e.join(", ")})` : ""}`,
					],
					diceRolls: e,
				},
			},
			secretState: { common: { deck: [] } },
		},
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	}),
	Ot = [
		{
			tags: ["blue-establishments", "wheat-field", "success"],
			display:
				"Blue-establishments: Player A rolls a 1 and has 1 wheat field, Player B has 1 wheat field",
			startingData: C([1]),
			action: { type: "blue-establishments", isServer: !0 },
		},
		{
			tags: ["blue-establishments", "ranch", "success"],
			display:
				"Blue-establishments: Player A rolls a 2 and has 3 ranches, Player B has 1 ranch (a)",
			startingData: C([2]),
			action: { type: "blue-establishments", isServer: !0 },
		},
		{
			tags: ["blue-establishments", "ranch", "success"],
			display:
				"Blue-establishments: Player A rolls a 2 and has 3 ranches, Player B has 1 ranch (b)",
			startingData: C([1, 1]),
			action: { type: "blue-establishments", isServer: !0 },
		},
		{
			tags: ["blue-establishments", "forest", "success"],
			display:
				"Blue-establishments: Player A rolls a 2. Player B has 2 forests (a)",
			startingData: C([5]),
			action: { type: "blue-establishments", isServer: !0 },
		},
		{
			tags: ["blue-establishments", "forest", "success"],
			display:
				"Blue-establishments: Player A rolls a 2. Player B has 2 forests (b)",
			startingData: C([1, 4]),
			action: { type: "blue-establishments", isServer: !0 },
		},
		{
			tags: ["blue-establishments", "mine", "success"],
			display: "Blue-establishments: Player A rolls a 9 and has 2 mines",
			startingData: C([3, 6]),
			action: { type: "blue-establishments", isServer: !0 },
		},
		{
			tags: ["blue-establishments", "apple-orchard", "success"],
			display:
				"Blue-establishments: Player A rolls a 10 and has 1 apple orchard. Player B has 3 apple orchards",
			startingData: C([4, 6]),
			action: { type: "blue-establishments", isServer: !0 },
		},
	],
	Ct = {
		hostId: "84c45332-4911-4823-839e-996bad56ba61",
		id: "49e5d821-0473-4185-917e-a48b803e8425",
		players: [
			{ id: "84c45332-4911-4823-839e-996bad56ba61", name: "Player A" },
			{ id: "7107307a-bbd8-4b4d-a676-76c261bbbc9e", name: "Player B" },
		],
	},
	Vt = {
		landmarks: ["radioTower", "amusementPark", "shoppingMall", "trainStation"],
		timeLimitSeconds: 999,
		timeLimitType: "off",
		startingMoney: 3,
		supplyType: "total",
	},
	Tt = {
		publicState: {
			players: {
				"84c45332-4911-4823-839e-996bad56ba61": {
					playerId: "84c45332-4911-4823-839e-996bad56ba61",
					money: 10,
					city: {
						establishments: {
							wheatField: ["wheatField:a"],
							ranch: ["ranch:a"],
							bakery: ["bakery:5"],
							convenienceStore: ["convenienceStore:2"],
							fruitAndVegetableMarket: ["fruitAndVegetableMarket:3"],
						},
						landmarks: {
							radioTower: !1,
							amusementPark: !1,
							shoppingMall: !0,
							trainStation: !0,
						},
					},
				},
				"7107307a-bbd8-4b4d-a676-76c261bbbc9e": {
					playerId: "7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					money: 0,
					city: {
						establishments: {
							wheatField: ["wheatField:b", "wheatField:4"],
							ranch: ["ranch:b"],
							bakery: ["bakery:0", "bakery:3"],
							cafe: ["cafe:3"],
						},
						landmarks: {
							radioTower: !0,
							amusementPark: !1,
							shoppingMall: !0,
							trainStation: !1,
						},
					},
				},
			},
			common: {
				turn: 0,
				activePlayerId: "84c45332-4911-4823-839e-996bad56ba61",
				turnPhase: "after-roll",
				diceRolls: [2, 1],
				harbourExtra: 0,
				processedEstablishments: [],
				turnEvents: [
					"%84c45332-4911-4823-839e-996bad56ba61% rolled a 3 (2 + 1)",
				],
				turnOrder: [
					"7107307a-bbd8-4b4d-a676-76c261bbbc9e",
					"84c45332-4911-4823-839e-996bad56ba61",
				],
				autoActions: [],
				pendingActions: [],
				supply: {
					familyRestaurant: [
						"familyRestaurant:5",
						"familyRestaurant:4",
						"familyRestaurant:2",
						"familyRestaurant:3",
						"familyRestaurant:1",
						"familyRestaurant:0",
					],
					appleOrchard: [
						"appleOrchard:0",
						"appleOrchard:2",
						"appleOrchard:1",
						"appleOrchard:5",
						"appleOrchard:4",
						"appleOrchard:3",
					],
					bakery: ["bakery:2", "bakery:1", "bakery:4"],
					fruitAndVegetableMarket: [
						"fruitAndVegetableMarket:2",
						"fruitAndVegetableMarket:0",
						"fruitAndVegetableMarket:1",
						"fruitAndVegetableMarket:5",
						"fruitAndVegetableMarket:4",
					],
					furnitureFactory: [
						"furnitureFactory:3",
						"furnitureFactory:0",
						"furnitureFactory:1",
						"furnitureFactory:4",
						"furnitureFactory:2",
						"furnitureFactory:5",
					],
					cheeseFactory: [
						"cheeseFactory:4",
						"cheeseFactory:2",
						"cheeseFactory:1",
						"cheeseFactory:0",
						"cheeseFactory:3",
						"cheeseFactory:5",
					],
					ranch: [
						"ranch:0",
						"ranch:3",
						"ranch:1",
						"ranch:4",
						"ranch:2",
						"ranch:5",
					],
					convenienceStore: [
						"convenienceStore:3",
						"convenienceStore:1",
						"convenienceStore:4",
						"convenienceStore:5",
						"convenienceStore:0",
					],
					forest: [
						"forest:3",
						"forest:1",
						"forest:0",
						"forest:4",
						"forest:5",
						"forest:2",
					],
					wheatField: [
						"wheatField:0",
						"wheatField:1",
						"wheatField:2",
						"wheatField:3",
						"wheatField:5",
					],
					cafe: ["cafe:0", "cafe:5", "cafe:1", "cafe:2", "cafe:4"],
					businessCentre: [
						"businessCentre:2",
						"businessCentre:3",
						"businessCentre:0",
						"businessCentre:1",
					],
					mine: ["mine:4", "mine:5", "mine:2", "mine:0", "mine:1", "mine:3"],
					stadium: ["stadium:1", "stadium:3", "stadium:0", "stadium:2"],
					tvStation: [
						"tvStation:0",
						"tvStation:3",
						"tvStation:1",
						"tvStation:2",
					],
				},
			},
		},
		secretState: { common: { deck: [] } },
	},
	Et = {
		gameDetails: Ct,
		gameSettings: Vt,
		gameState: Tt,
		lastActionId: "1682787615-0",
		playersSecrets: {
			"84c45332-4911-4823-839e-996bad56ba61": { password: "abc" },
			"7107307a-bbd8-4b4d-a676-76c261bbbc9e": { password: "bcd" },
		},
	},
	xt = [
		{
			tags: ["red-establishments", "success"],
			display:
				"Red-establishments: Player B rolls a 3 and has 1 cafe and has a shopping mall",
			startingData: Et,
			action: { type: "red-establishments", isServer: !0 },
		},
	],
	jt = [
		"bg-red-100 dark:bg-red-900",
		"bg-yellow-100 dark:bg-yellow-900",
		"bg-green-100 dark:bg-green-800",
		"bg-blue-100 dark:bg-blue-800",
	];
function U({ gameData: e }) {
	const { gameState: t, gameSettings: l, gameDetails: s } = e,
		{ publicState: u } = t,
		{ common: c, players: a } = u,
		{ supply: r, diceRolls: h, processedEstablishments: y, turnEvents: p } = c,
		{ players: n } = s,
		i = Object.values(r).flat().length;
	return f.jsxs("div", {
		className: "bg-gray-200 dark:bg-gray-700",
		children: [
			f.jsx("div", {
				children:
					h.length > 0
						? f.jsxs("div", { children: ["Rolled: ", h.join(", ")] })
						: f.jsx("div", { children: "No Dice Rolled" }),
			}),
			f.jsxs("div", {
				children: [
					"Processed Establishments: ",
					y.length,
					f.jsx("ul", {
						className: "ml-5 list-outside list-disc",
						children: y.map((o) => f.jsx("li", { children: o }, o)),
					}),
				],
			}),
			f.jsxs("div", {
				children: [
					"Turn Events: ",
					p.length,
					f.jsx("ol", {
						className: "ml-4 list-outside list-decimal",
						children: p.map((o, S) =>
							f.jsx(
								"li",
								{
									children: n.reduce(
										(b, { id: g, name: m }) => b.replaceAll(`%${g}%`, m),
										o,
									),
								},
								`${o}-${S}`,
							),
						),
					}),
				],
			}),
			f.jsxs("details", {
				children: [
					f.jsxs("summary", { children: ["Supply: ", i] }),
					f.jsx(ie, { establishments: r }),
				],
			}),
			Object.values(a).map((o, S) => {
				const b = Object.values(o.city.landmarks).filter((d) => d).length,
					g = Object.values(o.city.establishments).flat().length,
					m = n.find(({ id: d }) => d === o.playerId);
				return f.jsxs(
					"details",
					{
						className: jt[S],
						children: [
							f.jsxs("summary", {
								children: [
									(m == null ? void 0 : m.name) || `Player ${o.playerId}`,
									", Money:",
									" ",
									o.money,
									", Landmark Count: ",
									b,
									", Establishment Count: ",
									g,
								],
							}),
							f.jsx(ne, {
								city: o.city,
								availableLandmarks: l.landmarks,
								onClick: (d) => {
									console.info(`${o.playerId} clicked ${d}`);
								},
							}),
						],
					},
					o.playerId,
				);
			}),
			f.jsxs("details", {
				children: [
					f.jsx("summary", { children: "Debug" }),
					f.jsx("pre", { children: JSON.stringify(t, null, "  ") }),
				],
			}),
		],
	});
}
const G = [ve, $e, Oe, Ee, Ne, De, We, et, st, dt, pt, kt, Pt, Ot, xt]
		.flat()
		.map((e, t) => ({ ...e, id: t + 1 })),
	Bt = (e, t) => {
		const l = Z.parse(JSON.parse(JSON.stringify(e)));
		return Se(l, t);
	};
function Jt() {
	const [e, t] = D.useState([]),
		[l, s] = D.useState(0),
		{
			startingData: u,
			action: c,
			display: a,
		} = G.find((n) => n.id === l) || {},
		r = u && c && Bt(u, c),
		h = r == null ? void 0 : r.gameData,
		y = r == null ? void 0 : r.error,
		p = G.reduce(
			(n, i) => (
				i.tags.forEach((o) => {
					n.add(o);
				}),
				n
			),
			new Set(),
		);
	return f.jsxs("div", {
		children: [
			f.jsx("h1", { children: "State Compare" }),
			f.jsxs("div", {
				children: [
					f.jsx("button", {
						className: "button-default m-1",
						onClick: () => {
							t([]);
						},
						children: "Clear Tags",
					}),
					[...p]
						.sort((n, i) => {
							const o = ["success", "error"].includes(n),
								S = ["success", "error"].includes(i);
							return o === S ? n.localeCompare(i) : o ? -1 : 1;
						})
						.map((n) =>
							f.jsxs(
								"label",
								{
									className: "ml-1 mr-2",
									children: [
										f.jsx("input", {
											className: "mr-1",
											type: "checkbox",
											checked: e.includes(n),
											onChange: () => {
												t((i) =>
													i.includes(n) ? i.filter((o) => o !== n) : [...i, n],
												);
											},
										}),
										n,
									],
								},
								n,
							),
						),
				],
			}),
			f.jsxs("select", {
				className:
					"mx-1 border border-gray-300 bg-white dark:bg-gray-800 dark:text-white",
				value: l,
				onChange: (n) => {
					s(parseInt(n.target.value, 10));
				},
				children: [
					f.jsx("option", { value: 0, children: "Choose a scenario" }),
					G.filter(
						({ tags: n }) => e.length === 0 || n.some((i) => e.includes(i)),
					).map(({ display: n, id: i }) =>
						f.jsx("option", { value: i, children: n }, i),
					),
				],
			}),
			f.jsx("div", { children: y ? `Error: ${y}` : "Success" }),
			u != null && u.gameState
				? f.jsxs("div", {
						children: [
							f.jsxs("h2", { children: ["Starting State: ", a] }),
							f.jsx(U, { gameData: u, note: a ? `${a} before` : "" }),
						],
					})
				: f.jsx("div", { children: "No starting state" }),
			h != null && h.gameState
				? f.jsxs("div", {
						children: [
							f.jsxs("h2", { children: ["Final State: ", a] }),
							f.jsx(U, { gameData: h, note: a ? `${a} after` : "" }),
						],
					})
				: f.jsx("div", { children: "No final state" }),
		],
	});
}
export { Jt as default };
