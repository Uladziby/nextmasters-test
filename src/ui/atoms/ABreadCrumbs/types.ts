import { type ReactNode } from "react";

export type ABreadCrumbsProps = {
	homeElement: ReactNode;
	separator: ReactNode;
	containerClasses?: string;
	listClasses?: string;
	activeClasses?: string;
	capitalizeLinks?: boolean;
};
