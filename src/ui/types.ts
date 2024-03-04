export type ProductItemType = {
	id: string;
	category: string;
	name: string;
	price: number;
	description: string;
	coverImage?: {
		src: string;
		alt: string;
	};
};

export type ProductResponseItem = {
	id: string;
	category: string;
	price: number;
	title: string;
	name: string;
	image: string;
	description: string;
	longDescription: string;
	rating: {
		rate: number;
		count: number;
	};
	coverImage: {
		url: string;
		alt: string;
	};
};

export type CollectionsResponse = {
	id: string;
	name: string;
	slug: string;
	products: ProductResponseItem[];
};
