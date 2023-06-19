/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src-front/**/*.{html,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			keyframes: {
				"spin-loading": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(2880deg)" },
				},
				"attention-light": {
					"0%, 14%, 28%, 100%": {
						backgroundColor: "transparent",
					},
					"7%, 21%": {
						backgroundColor: "rgb(209, 213, 219)",
					},
				},
				"attention-dark": {
					"0%, 14%, 28%, 100%": {
						backgroundColor: "transparent",
					},
					"7%, 21%": {
						backgroundColor: "rgb(107, 114, 128)",
					},
				},
			},
			animation: {
				"spin-loading": "spin-loading 5s ease-in-out infinite alternate",
				"attention-light": "attention-light 5s linear infinite",
				"attention-dark": "attention-dark 5s linear infinite",
			},
		},
	},
	plugins: [],
};
