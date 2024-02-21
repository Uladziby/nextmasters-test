"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import { type ActiveLinkProps } from "@/ui/atoms/ActiveLink/types";

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
}: ActiveLinkProps) => {
	const currentPathname = usePathname();

	const isActive = currentPathname === href;

	return (
		<Link
			href={`${href}` as Route}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive && "page"}
		>
			{children}
		</Link>
	);
};
