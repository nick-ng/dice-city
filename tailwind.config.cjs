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
				"attention-once-light": {
					"0%, 100%": {
						// backgroundColor: "rgb(255, 255, 255)",
					},
					"50%": {
						backgroundColor: "#9ca3af",
					},
				},
				"attention-once-dark": {
					"0% 100%": {
						// backgroundColor: "rgb(31, 41, 55)",
					},
					"50%": {
						backgroundColor: "#9ca3af",
					},
				},
				"dice-roll-move": {
					"0%": {
						"margin-right": "70vw",
						"margin-top": "0vh",
						transform: "scale(1)",
					},
					"50%": {
						"margin-right": "35vw",
						"margin-top": "10rem",
						transform: "scale(3)",
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
				"attention-once-light": "attention-once-light 0.8s linear 1",
				"attention-once-dark": "attention-once-dark 0.8s linear 1",
				"dice-roll-move": "dice-roll-move 1s cubic-bezier(0.3, 0.4, 0.3, 1.2)",
				"dice-roll-move-b": "dice-roll-move 1s ",
				"dice-roll-attention-light": "dice-roll-move 1s linear 0s",
				"dice-roll-attention-dark": "dice-roll-move 1s linear 0s",
			},
		},
	},
	plugins: [],
};
