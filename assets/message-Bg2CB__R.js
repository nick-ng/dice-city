import { j as t, L as r } from "./index-vPswkxJ5.js";
import { r as a } from "./utils-BPyf_07k.js";
import { z as e, s as n, a as i } from "./game-DR5qpDLN.js";
function C({ showStory: l, open: o }) {
	return t.jsx("div", {
		className: "max-w-prose text-sm xl:text-base",
		children: t.jsxs("details", {
			open: o,
			children: [
				t.jsx("summary", {
					className: "text-lg xl:text-xl",
					children: "Instructions",
				}),
				t.jsx(r, {
					to: "/probability",
					target: "_blank",
					children: "Dice Roll Probabilities",
				}),
				l &&
					t.jsx("p", {
						children:
							"You are the mayor of a city. Well, it's not much of a city right now. But you'll soon fix that. Collect money from your city's infrastructure and expand it all with the roll of a die.",
					}),
				t.jsx("h2", { children: "Playing Dice City" }),
				t.jsx("p", {
					children:
						"The goal of Dice City is to build all of your Landmarks. On your turn you will do all of the following in order:",
				}),
				t.jsxs("ol", {
					className: "ml-5 list-outside list-decimal",
					children: [
						t.jsx("li", { children: "Roll Dice" }),
						t.jsx("li", { children: "Trigger Establishments" }),
						t.jsx("li", { children: "Build" }),
					],
				}),
				t.jsxs("details", {
					open: !0,
					children: [
						t.jsx("summary", {
							className: "text-base xl:text-lg",
							children: "Roll Dice",
						}),
						t.jsx("p", { children: "Begin your turn by rolling one die." }),
						t.jsx("p", {
							children:
								"Building landmarks can change the number of dice you can roll or even let you do other things when rolling the dice.",
						}),
					],
				}),
				t.jsxs("details", {
					open: !0,
					children: [
						t.jsx("summary", {
							className: "text-base xl:text-lg",
							children: "Trigger Establishments",
						}),
						t.jsx("p", {
							children:
								"Each establishments has one or more Activation Numbers in the coloured area at the top.",
						}),
						t.jsx("p", {
							children:
								"If the dice total matches the activation number of an establishment, it gets triggered. The game will perform instructions at the bottom of the establishment for you.",
						}),
						t.jsx("p", {
							children:
								"Some establishments require you to choose how they work. The game will prompt you if this is the case.",
						}),
						t.jsx("p", {
							children:
								"If multiple establishments activate at the same time, they activate in the following order:",
						}),
						t.jsxs("ol", {
							className: "ml-4 list-outside list-decimal",
							children: [
								t.jsx("li", { children: "Restaurants (Red)" }),
								t.jsx("li", {
									children:
										"Primary Industry (Blue) and Secondary Industry (Green)",
								}),
								t.jsx("li", { children: "Major Establishments (Purple)" }),
							],
						}),
						t.jsx("p", {
							children:
								"If an opponent doesn't have enough money to pay for your establishment, they pay as much as they can and the remaining money is exempt.",
						}),
						t.jsx("p", {
							children:
								"Note that you pay for Restaurants (red establishments) before collecting money from other establishments.",
						}),
						t.jsx("p", {
							children:
								"If you owe multiple players money, you pay them in reverse turn order.",
						}),
					],
				}),
				t.jsxs("details", {
					open: !0,
					children: [
						t.jsx("summary", {
							className: "text-base xl:text-lg",
							children: "Build",
						}),
						t.jsx("p", {
							children:
								"After collecting and/or paying money, you may pay to build one Establishment OR pay to finish construction on one Landmark. The cost is shown in the yellow circle at the top right of the establishment/landmark.",
						}),
						t.jsxs("p", {
							children: [
								"You can only construct one of each ",
								a("%%major%"),
								" ",
								"establishments. That is, you can have as many unique",
								" ",
								a("%%major%"),
								" establishments as you want but you cannot have more than one of each.",
							],
						}),
						t.jsx("p", {
							children:
								"You can construct as many of each other kind of establishment as you can afford.",
						}),
					],
				}),
			],
		}),
	});
}
const c = e.object({
		type: e.literal("join"),
		isServer: e.optional(e.literal(!1)),
		payload: e.object({ playerName: e.string() }),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	p = e.object({
		type: e.literal("change-supply"),
		isServer: e.optional(e.literal(!1)),
		payload: e.object({ supplyType: n }),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	h = e.object({
		type: e.literal("change-public"),
		isServer: e.optional(e.literal(!1)),
		payload: e.object({ isPublic: e.boolean() }),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	d = e.object({
		type: e.literal("start"),
		isServer: e.optional(e.literal(!1)),
		payload: e.optional(e.object({})),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	y = e.object({
		type: e.literal("roll-dice"),
		isServer: e.optional(e.literal(!1)),
		payload: e.object({ diceCount: e.union([e.literal(1), e.literal(2)]) }),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	m = e.object({
		type: e.literal("reroll-dice"),
		isServer: e.optional(e.literal(!1)),
		payload: e.object({ skip: e.boolean() }),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	u = e.object({
		type: e.literal("harbour-change-roll"),
		isServer: e.optional(e.literal(!1)),
		payload: e.object({ skip: e.boolean() }),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	b = e.object({
		playerId: e.optional(e.never()),
		type: e.enum([
			"red-establishments",
			"green-establishments",
			"blue-establishments",
			"purple-establishments",
		]),
		isServer: e.literal(!0),
		payload: e.optional(e.any()),
	}),
	g = e.object({
		type: e.literal("tv-station"),
		isServer: e.optional(e.literal(!1)),
		payload: e.object({ opponentId: e.string() }),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	j = e.object({
		type: e.literal("business-centre"),
		isServer: e.optional(e.literal(!1)),
		payload: e.object({
			opponentId: e.string(),
			myOffer: e.string(),
			opponentOffer: e.string(),
		}),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	x = e.object({
		type: e.literal("build"),
		isServer: e.optional(e.literal(!1)),
		payload: e.object({ buildingKey: e.string() }),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	s = e.union([c, p, h, d, y, m, u, g, j, x]);
e.union([s, b]);
e.object({
	playerId: e.string(),
	playerName: e.string(),
	playerPassword: e.string(),
});
const N = e.object({ gameId: e.string() }),
	f = e.object({ type: e.literal("not-found") }),
	S = e.object({
		type: e.literal("game-data"),
		payload: e.object({ playerGameData: i, latency: e.optional(e.number()) }),
	}),
	w = e.object({
		type: e.literal("ping"),
		payload: e.object({ latency: e.optional(e.number()) }),
	}),
	R = e.union([f, S, w]),
	v = e.object({
		type: e.literal("pong"),
		playerId: e.string(),
		playerPassword: e.string(),
	}),
	I = e.object({
		type: e.literal("connect"),
		payload: e.object({ gameId: e.string() }),
		playerId: e.string(),
		playerPassword: e.string(),
	});
e.union([v, I, s]);
e.object({ gameId: e.string(), workerId: e.string() });
export { C as I, N as n, R as w };
