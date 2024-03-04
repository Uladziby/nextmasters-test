import { executeGraphql } from "@/api/executeGraphQL";
import { ProductsByCategoryDocument } from "@/gql/graphql";

export const getProductsByCategory = async (categorySlug: string) => {
	const data = await executeGraphql(ProductsByCategoryDocument, {
		slug: categorySlug,
	});

	const products = data.category?.products;

	return products;
};
