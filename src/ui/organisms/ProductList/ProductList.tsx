"use client";
import { usePathname } from "next/navigation";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import { useGetTestIdBySortValue } from "@/customHooks/useGetTestIdBySortValue";

export const ProductList = ({
	products,
}: {
	products: ProductListItemFragment[];
}) => {
	const data_test_id = useGetTestIdBySortValue();
	const pathname = usePathname();

	const route = pathname.split("/").filter(Boolean)[0];

	const gridClass = route === "products" ? "xl:grid-cols-4" : "xl:grid-cols-6";

	return (
		<div className="mx-auto w-full max-w-screen-xl px-4 py-8">
			<ul
				className={`grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-2 ${gridClass}`}
				data-testid="products-list"
			>
				{products.map((product) => (
					<li key={product.id} data-testid={data_test_id}>
						<ProductListItem product={product} />
					</li>
				))}
			</ul>
		</div>
	);
};
