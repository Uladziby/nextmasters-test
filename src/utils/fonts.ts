import { Fira_Code, Fira_Sans, Montserrat } from "next/font/google";

export const firaCode = Fira_Code({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	variable: "--font-firaCode",
	display: "swap",
});
export const firaSans = Fira_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["300", "400", "700"],
	variable: "--font-firaSans",
	display: "swap",
});
export const montserrat = Montserrat({
	subsets: ["latin", "latin-ext"],
	weight: "variable",
	variable: "--font-montserrat",
	display: "swap",
});
