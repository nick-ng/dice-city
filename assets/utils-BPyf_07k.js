const c = {
		blue: "bg-blue-600",
		green: "bg-lime-600",
		red: "bg-rose-600",
		purple: "bg-purple-600",
	},
	r = {
		major: "🏛️",
		cup: "☕",
		bread: "🛒",
		wheat: "🌾",
		cow: "🐄",
		cog: "⚙️",
		factory: "🏭",
		fruit: "🍎",
		boat: "⛵",
	},
	b = (e) => r[e] || "",
	g = (e) =>
		Object.entries(r).reduce((t, [o, a]) => t.replaceAll(`%%${o}%`, a), e);
export { c as b, b as g, g as r };
