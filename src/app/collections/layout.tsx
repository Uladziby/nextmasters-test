import { type ReactNode } from "react";

export default function CategoryProductLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <div className="m-6 ">{children}</div>;
}
