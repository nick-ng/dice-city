import { z as e } from "./index-Cig_y0oG.js";
const o = e.enum([
		"major",
		"cup",
		"bread",
		"wheat",
		"cow",
		"cog",
		"factory",
		"fruit",
		"boat",
	]),
	c = e.enum(["blue", "green", "red", "purple"]),
	t = e.object({
		key: e.string(),
		display: e.string(),
		tag: o,
		picture: e.array(e.string()),
		cost: e.number(),
		effect: e.string(),
		determiner: e.enum(["a", "an"]),
	}),
	r = e.object({
		colour: c,
		activationNumbers: e.array(e.number()),
		pluralDisplay: e.string(),
	});
t.merge(r);
const a = e.record(e.string(), e.array(e.string()));
e.record(e.string(), e.array(e.string()));
t.merge(r.partial());
e.array(e.string());
const i = e.object({
		establishments: a,
		landmarks: e.record(e.string(), e.boolean()),
	}),
	m = e.object({ id: e.string(), name: e.string() }),
	b = e.object({ password: e.string() }),
	n = e.object({
		common: e.object({
			turn: e.number(),
			supply: a,
			turnOrder: e.array(e.string()),
			activePlayerId: e.string(),
			turnPhase: e.enum([
				"lobby",
				"before-roll",
				"after-roll",
				"before-build",
				"after-build",
				"end",
			]),
			pendingActions: e.array(
				e.object({
					playerId: e.string(),
					action: e.enum([
						"tv-station",
						"business-centre",
						"radio-tower",
						"harbour",
					]),
				}),
			),
			autoActions: e.array(
				e.object({ playerId: e.string(), action: e.enum(["amusement-park"]) }),
			),
			diceRolls: e.array(e.number()),
			harbourExtra: e.number(),
			processedEstablishments: e.array(e.string()),
			turnEvents: e.array(e.string()),
		}),
		players: e.record(
			e.string(),
			e.object({ playerId: e.string(), city: i, money: e.number() }),
		),
	}),
	s = e.object({ common: e.object({ deck: e.array(e.string()) }) }),
	l = e.object({
		id: e.string(),
		players: e.array(m),
		hostId: e.string(),
		shortId: e.optional(e.string()),
		isPublic: e.optional(e.boolean()),
	}),
	g = e.enum(["total", "variable", "hybrid"]),
	u = e.object({
		landmarks: e.array(e.string()),
		timeLimitSeconds: e.number(),
		timeLimitType: e.enum(["off", "on"]),
		startingMoney: e.number(),
		supplyType: g,
	}),
	y = e.object({ publicState: n, secretState: s });
e.object({ publicState: n, secretState: s.omit({ common: !0 }) });
const d = e.object({
		gameDetails: l,
		gameSettings: u,
		gameState: y,
		playersSecrets: e.record(e.string(), b),
		lastActionId: e.string(),
	}),
	S = e.array(e.object({ gameId: e.string(), playerCount: e.number() }));
export { d as a, S as g, g as s };
