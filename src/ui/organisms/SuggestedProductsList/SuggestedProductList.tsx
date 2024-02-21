import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { NUMBER_SUGGESTED_ITEMS } from "@/utils/constatnts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductList = async () => {
	const products = await getProducts(NUMBER_SUGGESTED_ITEMS, 1);
	await sleep(5000);
	return <ProductList products={products.slice(-4)} />;
};
