import { type ReactNode } from "react";

export default function ProductsPageLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="flex h-full w-full flex-col p-12">
			<div className="flex min-h-70vh w-full flex-col justify-evenly gap-8 px-20">
				{children}
			</div>
		</div>
	);
}
