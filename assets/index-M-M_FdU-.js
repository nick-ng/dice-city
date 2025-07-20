import { e as u, B as j, s as y } from "./index-bPgJQDHo.js";
import { j as l } from "./index-vPswkxJ5.js";
import { b as v } from "./utils-BPyf_07k.js";
const $ = (s) =>
		s
			.map((t) => ({ data: t, sortValue: Math.random() }))
			.sort((t, o) => t.sortValue - o.sortValue)
			.map(({ data: t }) => t),
	m = (s, t) => {
		const o = t.split(":")[0];
		return (s[o] || (s[o] = []), s[o].push(t), o);
	},
	w = (s, t) => {
		for (; t.length > 0; ) {
			const o = t.shift();
			if (!o) break;
			m(s, o);
		}
		return { supply: s, deck: t, additions: [] };
	},
	f = (s, t, o = 10) => {
		const r = [];
		for (; Object.values(s).filter((a) => a.length > 0).length < o; ) {
			const a = t.shift();
			if (!a) break;
			const i = m(s, a);
			r.push(i);
		}
		return { supply: s, deck: t, additions: r };
	},
	N = (s, t) => {
		const o = {},
			r = {},
			a = {};
		Object.entries(s).forEach(([e, c]) => {
			const n = u[e];
			if (!u) throw new Error(`No establishment reference ${e}`);
			n.tag === "major"
				? (a[e] = c)
				: Math.max(...n.activationNumbers) <= 6
					? (o[e] = c)
					: (r[e] = c);
		});
		const i = [],
			d = [],
			h = [];
		for (let e = 0; e < t.length; e++) {
			const [c] = t[e].split(":"),
				n = u[c];
			if (!n) {
				console.error("Invalid establishment key", t[e]);
				continue;
			}
			n.tag === "major"
				? h.push(t[e])
				: Math.max(...n.activationNumbers) <= 6
					? i.push(t[e])
					: d.push(t[e]);
		}
		const b = f(o, i, 5).additions,
			p = f(r, d, 5).additions,
			x = f(a, h, 2).additions;
		return {
			deck: [...i, ...d, ...h],
			supply: { ...o, ...r, ...a },
			additions: [...b, ...p, ...x],
		};
	},
	A = (s, t, o = "hybrid") => {
		switch (o) {
			case "total":
				return w(s, t);
			case "variable":
				return f(s, t);
			case "hybrid":
			default:
				return N(s, t);
		}
	};
function g({ establishment: s, count: t, className: o }) {
	if (t === 0) return null;
	const { activationNumbers: r, colour: a, cost: i, key: d } = s;
	return l.jsxs("div", {
		className: `border-default ${o || ""} p-0.5`,
		style: { transformBox: "content-box" },
		children: [
			Array(t - 1)
				.fill("")
				.map((h, b) =>
					l.jsx(
						"div",
						{
							className: "-mb-1 hidden h-4 w-full overflow-y-hidden  xl:block",
							children: l.jsxs("div", {
								className: `${v[a]} relative rounded-t border-x-2 border-t-2 border-x-gray-700 border-t-gray-700 text-center font-bold text-white dark:border-x-gray-300 dark:border-t-gray-300`,
								children: [
									r.join(" ~ "),
									l.jsx("div", {
										className: "coin absolute bottom-0 right-0.5 top-0 my-auto",
										children: i,
									}),
								],
							}),
						},
						`${d}-${b}`,
					),
				),
			l.jsxs("div", { className: "xl:hidden", children: ["×", t] }),
			l.jsx(j, { building: s }),
		],
	});
}
function B({ establishments: s, onChoose: t }) {
	const o = Object.keys(s)
		.map((r) => u[r])
		.filter((r) => r)
		.sort(y);
	return l.jsx("div", {
		className: "flex flex-row flex-wrap items-start",
		children: o.map((r) =>
			l.jsx(
				"button",
				{
					className: "inline-block w-min align-top",
					onClick: () => {
						t && t(r.key);
					},
					children: l.jsx(g, { establishment: r, count: s[r.key].length }),
				},
				r.key,
			),
		),
	});
}
export { B as E, A as g, $ as s };
