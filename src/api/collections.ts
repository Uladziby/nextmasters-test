import {
	CollectionBySlugDocument,
	CollectionProductsBySlugDocument,
	CollectionsGetListDocument,
} from "./../gql/graphql";
import { executeGraphql } from "@/api/executeGraphQL";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: {},
	});

	const collections = graphqlResponse.collections.data;

	return collections;
};

export const getProductsByCollection = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionProductsBySlugDocument,
		variables: {
			slug,
		},
	});

	const products = graphqlResponse.collectionProducts;

	return products;
};

export async function getCollectionBySlug(slug: string) {
	const graphqlResponse = await executeGraphql({
		query: CollectionBySlugDocument,
		variables: {
			slug,
		},
	});

	const collection = graphqlResponse.collection;

	return collection;
}
