import { type Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				"loader-color":
					"linear-gradient(45deg, transparent, transparent 40%, #ee55ff)",
			},
			minHeight: {
				"70vh": "70vh",
			},
			borderRadius: {
				"50%": "50%",
			},
			fontFamily: {
				serif: ["var(--font-montserrat)"],
			},
			keyframes: {
				spinny: {
					"0%": { transform: "rotate(0)", filter: "hue-rotate(0)" },
					"100%": {
						transform: "rotate(360deg)",
						filter: "hue-rotate(360deg)",
					},
				},
			},
			animation: {
				spinny: "spinny 1.5s linear infinite",
			},
		},
	},

	plugins: [require("@tailwindcss/typography")],
};

export default config;
