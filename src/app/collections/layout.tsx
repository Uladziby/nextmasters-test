"use client";

import { type ReactNode } from "react";

export default function CollectionsProductLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <section className="flex flex-col gap-10 lg:px-8">{children}</section>;
}
