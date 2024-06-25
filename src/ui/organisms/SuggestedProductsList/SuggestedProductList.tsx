import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { NUMBER_SUGGESTED_ITEMS } from "@/utils/constatnts";
import { randomNumber } from "@/utils/randomNumber";

export const SuggestedProductList = async () => {
	const products = await getProducts(NUMBER_SUGGESTED_ITEMS, randomNumber(10));

	return (
		<div data-testid="related-products">
			<ProductList products={products.slice(-4)} />
		</div>
	);
};
