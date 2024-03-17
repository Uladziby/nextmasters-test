import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";

export const ProductList = ({
	products,
}: {
	products: ProductListItemFragment[];
}) => {
	return (
		<div className=" mx-auto flex flex-col justify-center">
			<ul
				className="grid max-w-4xl grid-cols-4 gap-4"
				data-testid="products-list"
			>
				{products.map((product) => {
					return <ProductListItem key={product.id} product={product} />;
				})}
			</ul>
		</div>
	);
};
