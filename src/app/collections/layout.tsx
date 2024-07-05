import { type ReactNode } from "react";

export default function CategoryProductLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<section className="flex h-full w-full flex-1 flex-col gap-10 lg:px-8">
			{children}
		</section>
	);
}
