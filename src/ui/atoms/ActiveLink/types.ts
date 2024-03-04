import { type Route } from "next/types";

export type ActiveLinkProps = {
	children: React.ReactNode;
	className: string;
	activeClassName: string;
	href: Route;
	typeAriaCurrent?:
		| "page"
		| "step"
		| "location"
		| "date"
		| "time"
		| "true"
		| "false";
};
