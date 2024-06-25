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
				"new-arrivals": "url('../public/collections/new_arrival.jpg')",
				"summer-vibes": "url('../public/collections/summer_vibes.jpg')",
				"elegant-extras": "url('../public/collections/elegant_extras.jpg')",
			},
			backgroundColor: {
				"loader-color":
					"linear-gradient(45deg, transparent, transparent 40%, #ee55ff)",
			},
			boxShadow: {
				"elevation-card-rest":
					"0 0 rgba(0, 0, 0, 0), 0 0 rgba(0, 0, 0, 0), var(--tw-shadoww)",
				"elevation-card-hover": "var(--elevation-card-hover)",
			},
			minHeight: {
				"70vh": "70vh",
			},
			borderRadius: {
				"50%": "50%",
			},
			fontFamily: {
				sans: ["var(--font-gilroy)"],
				gilroy: ["var(--font-gilroy)"],
			},
			keyframes: {
				spinny: {
					"0%": { transform: "rotate(0)", filter: "hue-rotate(0)" },
					"100%": {
						transform: "rotate(360deg)",
						filter: "hue-rotate(360deg)",
					},
				},
				rotating: {
					"0%": {
						"--r": "0deg",
					},
					"32.82275711%": {
						"--r": "0deg",
					},
					"50%": {
						"--r": "180deg",
					},
					"82.82275711%": {
						"--r": "1800deg",
					},
					"100%": {
						"--r": "360deg",
					},
				},
				x: {
					"0%": {
						"--x": "80px",
					},
					"32.82275711%": {
						"--x": "520px",
					},
					"50%": {
						"--x": "520px",
					},
					"82.82275711%": {
						"--x": "80px",
					},
					"100%": {
						"--x": "80px",
					},
				},
			},
			animation: {
				spinny: "spinny 1.5s linear infinite",
				rotating:
					"-0.64s rotating 3s linear infinite, -0.64s x 3s linear infinite;",
			},
		},
	},

	plugins: [require("@tailwindcss/typography")],
};

export default config;
