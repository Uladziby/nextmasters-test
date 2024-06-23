import { executeGraphql } from "@/api/executeGraphQL";
import {
	type ProductListItemFragment,
	ProductGetByIdDocument,
	ProductReviewsByIdDocument,
	ProductCreateReviewDocument,
	ProductsSortByOrderDocument,
	type SortDirection,
	type ProductSortBy,
	ProductsGetListDocument,
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

	const reviews = response.reviews;
	return reviews;
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
			title: data.headline,
			description: data.content,
			author: data.name,
		},
		next: { tags: ["product"] },
	});

	return response;
};

export const getProducts = async (numberItems: number, _skip: number) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take: numberItems,
			skip: _skip,
		},
	});
	return graphqlResponse.products.data;
};

export const getProductsByOrder = async (
	numberItems: number,
	_skip: number,
	sortValue: string = "DEFAULT_ASC",
) => {
	const orderByValue = sortValue.split("_")[0] as ProductSortBy;
	const orderValue = sortValue.split("_")[1] as SortDirection;

	const graphqlResponse = await executeGraphql({
		query: ProductsSortByOrderDocument,
		variables: {
			take: numberItems,
			skip: _skip,
			order: orderValue,
			orderBy: orderByValue,
		},
	});
	return graphqlResponse.products;
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
