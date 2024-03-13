import { executeGraphql } from "@/api/executeGraphQL";
import {
	type ProductListItemFragment,
	ProductGetByIdDocument,
	ProductReviewsByIdDocument,
	ProductCreateReviewDocument,
	ProdutctsGetListDocument,
} from "@/gql/graphql";
import { type ReviewFormSchema } from "@/ui/organisms/ReviewForm/formSchema";
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
	const response = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
		next: { tags: ["cart"] },
	});

	const product = response.product!;

	return product;
};

export const getProductReviewByIdGraphql = async (
	productId: ProductListItemFragment["id"],
) => {
	const response = await executeGraphql({
		query: ProductReviewsByIdDocument,
		variables: {
			id: productId,
		},
		next: { tags: ["product"] },
	});

	const product = response.product!;

	return product.reviews;
};

export const createProductReviewGraphql = async (
	productId: ProductListItemFragment["id"],
	data: ReviewFormSchema,
) => {
	const response = await executeGraphql({
		query: ProductCreateReviewDocument,
		variables: {
			productId,
			...data,
		},
		next: { tags: ["product"] },
	});

	return response.reviewCreate.id;
};

export const getProducts = async (
	numberItems: number,
	_skip: number,
): Promise<ProductListItemFragment[]> => {
	const graphqlResponse = await executeGraphql({
		query: ProdutctsGetListDocument,
		variables: {
			take: numberItems,
			skip: _skip,
		},
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
