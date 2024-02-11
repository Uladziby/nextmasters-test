import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import { type ProductItemType } from "@/ui/types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul className="grid grid-cols-4 gap-4" data-testid="products-list">
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
