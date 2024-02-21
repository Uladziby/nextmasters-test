import { type ProductItemType, type ProductResponseItem } from "@/ui/types";
import { URL_BASE } from "@/utils/constatnts";

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const response = await fetch(`${URL_BASE}/products/${id}`);
	const productResponse = (await response.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

export const getProducts = async (numberItems: number, currentPage: number) => {
	console.log(numberItems, currentPage);
	const res = await fetch(
		`${URL_BASE}/products?take=${numberItems}&offset=${numberItems * currentPage === 0 ? 1 : currentPage}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(
		(product): ProductItemType => ({
			id: product.id,
			name: product.title,
			category: product.category,
			price: product.price,
			coverImage: {
				src: product.image,
				alt: product.title,
			},
			description: product.description,
		}),
	);

	return products;
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	const { id, category, price, description, title, image } = product;

	return {
		id,
		category,
		price,
		name: title,
		description,
		coverImage: { alt: title, src: image },
	};
};
