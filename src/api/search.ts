import { executeGraphql } from "@/api/executeGraphQL";
import { ProductsGetListByQueryDocument } from "@/gql/graphql";

export const getProductsByQuery = async (searchValue: string) => {
	"use server";
	if (!searchValue || searchValue.length < 2) return;
	console.log(
		searchValue,
		searchValue && searchValue.length < 3,
		"searchValue",
	);
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListByQueryDocument,
		variables: {
			search: searchValue,
		},
	});

	return graphqlResponse.products;
};
