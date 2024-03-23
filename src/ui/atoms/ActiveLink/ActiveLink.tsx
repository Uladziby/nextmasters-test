"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import { type ActiveLinkProps } from "@/ui/atoms/ActiveLink/types";

export const ActiveLink = ({
	href,
	name,
	children,
	className,
	activeClassName,
	typeAriaCurrent = "false",
}: ActiveLinkProps) => {
	const currentPathname = usePathname();
	const isActive = currentPathname.split("/").splice(1).includes(name);

	return (
		<Link
			href={`${href}` as Route}
			className={clsx(className, isActive && activeClassName)}
			aria-current={typeAriaCurrent}
			data-testid="link"
		>
			{children}
		</Link>
	);
};
