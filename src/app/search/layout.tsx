import { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<section className="flex h-full w-full flex-col p-12">{children}</section>
	);
}
