import { type ReactNode } from "react";

export default function ProductsPageLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="flex h-full w-full flex-col p-12">
			<h1>CategoryProductLayout</h1>
			{children}
		</div>
	);
}
