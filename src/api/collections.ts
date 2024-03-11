import { executeGraphql } from "@/api/executeGraphQL";
import { type CollectionsList } from "@/api/types";
import {
	CollectionProductsDocument,
	CollectionsGetListDocument,
} from "@/gql/graphql";

export const getCollections = async (): Promise<CollectionsList[]> => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: {},
	});

	const collections = graphqlResponse.collections.data.map((p) => {
		return {
			id: p.id,
			name: p.name,
			description: p.description,
			slug: p.slug,
		};
	});

	return collections;
};

export const getCollectionProducts = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionProductsDocument,
		variables: { slug: collectionSlug, id: "" },
	});
	return graphqlResponse.collection;
};
