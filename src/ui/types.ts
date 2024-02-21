export type ProductItemType = {
	id: string;
	category: string;
	price: number;
	name: string;
	coverImage: {
		src: string;
		alt: string;
	};
	description: string;
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
		src: string;
		alt: string;
	};
};
