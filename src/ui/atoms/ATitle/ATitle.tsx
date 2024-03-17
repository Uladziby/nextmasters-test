import { type ReactNode } from "react";

export const ATitle = ({
	children,
	className,
}: {
	children: ReactNode;
	className: string;
}) => {
	return <h2 className={className}>{children}</h2>;
};
