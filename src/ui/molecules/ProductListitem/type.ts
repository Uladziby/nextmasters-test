export type ProductListItemProps = {
	product: {
		id: string;
		category: string;
		price: number;
		name: string;
		coverImage: {
			src: string;
			alt: string;
		};
	};
};
