"use client";
import { type ReactElement } from "react";
import Link from "next/link";

export const CardNewElementComponent = ({
	children,
	link,
}: {
	children: ReactElement;
	link: string;
}) => {
	return (
		<article className="rounded-large relative flex aspect-[9/16] w-full  items-center overflow-hidden rounded-lg bg-slate-300 shadow-elevation-card-rest transition-shadow duration-150 ease-in-out group-hover:shadow-elevation-card-hover">
			<Link
				href={`/collections/${link}/createProduct`}
				className="flex h-full w-full items-center justify-center hover:bg-secondary"
			>
				{children}
			</Link>
		</article>
	);
};
