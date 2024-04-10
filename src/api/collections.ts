import { executeGraphql } from "@/api/executeGraphQL";
import { CollectionsGetListDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: {},
	});

	const collections = graphqlResponse.collections.data;

	return collections;
};
