import { executeGraphql } from "@/api/executeGraphQL";
import {
	CategoriestGetItemsDocument,
	ProductsByCategoryDocument,
} from "@/gql/graphql";

export const getProductsByCategory = async (categorySlug: string) => {
	const data = await executeGraphql({
		query: ProductsByCategoryDocument,
		variables: { slug: categorySlug },
	});

	const products = data.category?.products;
	return products;
};

export const getCategories = async (_take: number = 10, _skip: number = 0) => {
	const data = await executeGraphql({
		query: CategoriestGetItemsDocument,
		variables: {
			skip: _skip,
			take: _take,
		},
	});

	const categories = data.categories.data;

	return categories;
};
