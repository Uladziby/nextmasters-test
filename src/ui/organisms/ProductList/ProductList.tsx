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
		<ul
			className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return (
					<li className="list-none" key={product.id} data-testid={data_test_id}>
						<ProductListItem product={product} />
					</li>
				);
			})}
		</ul>
	);
};
