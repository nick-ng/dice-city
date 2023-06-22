export const bgColours = {
	blue: "bg-blue-600",
	green: "bg-lime-600",
	red: "bg-rose-600",
	purple: "bg-purple-600",
};

const TAGS: { [tag: string]: string } = {
	major: "🏛️",
	cup: "☕",
	bread: "🛒",
	wheat: "🌾",
	cow: "🐄",
	cog: "⚙️",
	factory: "🏭",
	fruit: "🍎",
};

export const getTag = (tag: string) => TAGS[tag] || "";

export const replaceTags = (s: string) => {
	return Object.entries(TAGS).reduce((acc, [tag, emoji]) => {
		return acc.replaceAll(`%%${tag}%`, emoji);
	}, s);
};
