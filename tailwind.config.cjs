/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src-front/**/*.{html,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			screens: {
				"can-hover": { raw: "(hover: hover)" },
				"cannot-hover": { raw: "(hover: none)" },
			},
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
				"attention-light-once": {
					"0%, 50%, 100%": {
						backgroundColor: "rgb(255, 255, 255)",
					},
					"25%, 75%": {
						backgroundColor: "rgb(209, 213, 219)",
					},
				},
				"attention-dark-once": {
					"0%, 50%, 100%": {
						backgroundColor: "rgb(31, 41, 55)",
					},
					"25%, 75%": {
						backgroundColor: "rgb(107, 114, 128)",
					},
				},
				"dice-roll-move": {
					"0%": {
						"margin-right": "40vw",
						"margin-top": "50vh",
						transform: "scale(2)",
					},
					"100%": {
						"margin-right": "0vw",
						"margin-top": "0vh",
						transform: "scale(1)",
					},
				},
			},
			animation: {
				"spin-loading": "spin-loading 5s ease-in-out infinite alternate",
				"attention-light": "attention-light 5s linear infinite",
				"attention-dark": "attention-dark 5s linear infinite",
				"attention-light": "attention-light 5s linear infinite",
				"attention-dark": "attention-dark 5s linear infinite",
				"dice-roll-move": "dice-roll-move 1s cubic-bezier(0.3, 0.4, 0.3, 1.2)",
				"dice-roll-move-b": "dice-roll-move 1s ",
				"dice-roll-attention-light":
					"dice-roll-move 1s cubic-bezier(0.3, 0.4, 0.3, 1.2) 0s, attention-light-once 0.5s linear 0.8s",
				"dice-roll-attention-dark":
					"dice-roll-move 1s cubic-bezier(0.3, 0.4, 0.3, 1.2) 0s, attention-dark-once 0.5s linear 0.8s",
			},
		},
	},
	plugins: [],
};
