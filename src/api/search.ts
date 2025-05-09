import { executeGraphql } from "@/api/executeGraphQL";
import { ProductsGetListByQueryDocument } from "@/gql/graphql";

export const getProductsByQuery = async (searchValue: string) => {
	"use server";
	if (!searchValue || searchValue.length < 2) return;

	const graphqlResponse = await executeGraphql({
		query: ProductsGetListByQueryDocument,
		variables: {
			search: searchValue,
		},
	});

	return graphqlResponse.products;
};
