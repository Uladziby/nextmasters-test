import { type ReactNode } from "react";
import CategoriesPage from "@/app/categories/page";

export const generateStaticParams = async ({
	params,
}: {
	params: { category: string };
}) => {
	switch (params.category) {
		case "t-shirts":
			return [{ pageNumber: "1" }, { pageNumber: "2" }];
		case "accessories":
			return [{ pageNumber: "1" }];
		case "hoodies":
			return [{ pageNumber: "1" }];
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
		<div className="flex h-full w-full flex-col p-12">
			{CategoriesPage()}
			<div className="flex min-h-70vh w-full flex-col justify-evenly gap-8">
				{children}
			</div>
		</div>
	);
}
