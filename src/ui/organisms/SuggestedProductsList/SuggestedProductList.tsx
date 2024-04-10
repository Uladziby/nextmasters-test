import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { NUMBER_SUGGESTED_ITEMS } from "@/utils/constatnts";

export const SuggestedProductList = async () => {
	const products = await getProducts(NUMBER_SUGGESTED_ITEMS, 1);
	console.log(products.slice(-4), "SuggestedProductList");
	return (
		<div data-testid="related-products">
			<ProductList products={products.slice(-4)} />
		</div>
	);
};
