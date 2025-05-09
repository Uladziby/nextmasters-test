import clsx from "clsx";
import { type AMessageProps } from "@/ui/atoms/AMessage/type";

export const AMessage = ({ children, type, classNames }: AMessageProps) => {
	const classes = clsx({
		"text-error bg-transparent p-0": type === "error",
		"text-gray-900 bg-gray-150 p-2": type !== "error",
	});

	return (
		<div data-testid="aMessage" className={clsx(classes, classNames)}>
			{children}
		</div>
	);
};
