"use client";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import { useGetTestIdBySortValue } from "@/customHooks/useGetTestIdBySortValue";

export const ProductList = ({
	products,
}: {
	products: ProductListItemFragment[];
}) => {
	const data_test_id = useGetTestIdBySortValue();

	return (
		<div className="flex justify-center">
			<ul
				className="grid max-w-4xl gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => {
					return (
						<li
							className="max-w-80 list-none"
							key={product.id}
							data-testid={data_test_id}
						>
							<ProductListItem product={product} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
