import { executeGraphql } from "@/api/executeGraphQL";
import {
	ProductGetByIdDocument,
	type ProductListItemFragment,
	ProdutctsGetListDocument,
} from "@/gql/graphql";
import { type ProductItemType, type ProductResponseItem } from "@/ui/types";
import { URL_BASE } from "@/utils/constatnts";

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const response = await fetch(`${URL_BASE}/products/${id}`);
	const productResponse = (await response.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

export const getProductByIdGraphql = async (
	productId: ProductListItemFragment["id"],
) => {
	const response = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});

	const product = response.product;

	return product;
};

export const getProducts = async (
	numberItems: number,
	_skip: number,
): Promise<ProductListItemFragment[]> => {
	const graphqlResponse = await executeGraphql(ProdutctsGetListDocument, {
		take: numberItems,
		skip: _skip,
	});

	return graphqlResponse.products.data;
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
