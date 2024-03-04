export type ProductsGraphqlResponse = {
	products: {
		id: string;
		name: string;
		description: string;
		images: {
			url: string;
		}[];
		price: number;
	}[];
};

export type CollectionsList = {
	id: string;
	name: string;
	description: string;
	slug: string;
};

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };
