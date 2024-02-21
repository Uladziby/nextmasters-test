import { type ReactNode } from "react";

export default function ProductsPageLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div>
			<h1>CategoryProductLayout</h1>
			{children}
		</div>
	);
}
