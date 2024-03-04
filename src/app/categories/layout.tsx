import { type ReactNode } from "react";

export const generateStaticParams = async ({
	params,
}: {
	params: { category: string };
}) => {
	switch (params.category) {
		case "t-shirts":
			return [{ pageNumber: "1" }, { pageNumber: "2" }];
		case "shoes":
			return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
		default:
			return [];
	}
};

export default function CategoryProductLayout({
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
