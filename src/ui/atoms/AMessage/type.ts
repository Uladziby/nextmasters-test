import { type ReactNode } from "react";

export interface AMessageProps {
	children: string | ReactNode;
	type: "warning" | "error" | "info";
	classNames?: string;
}
