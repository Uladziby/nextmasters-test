export type ProductDescriptionProps = {
	product: {
		name: string;
		price: number;
		category: string;
		coverImage: {
			src: string;
			alt: string;
		};
	};
	dataTestId?: string;
};
