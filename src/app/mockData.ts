//import product1 from "/public/product_1.jpg";
import { type ProductItemType } from "@/ui/types";

export const products  : ProductItemType[] = [
	{
		id: "1",
		name: "Product 1",
		category: "Category 1",
		price: 1700,
		coverImage: {
			src:'/product_1.jpg',
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Product 2",
		category: "Category 2",
		price: 800,
		coverImage: {
			src: "/product_2.jpg",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		name: "Product 3",
		category: "Category 3",
		price: 100,
		coverImage: {
			src: "/product_3.jpg",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		name: "Product 4",
		category: "Category 4",
		price: 600,
		coverImage: {
			src: "/product_1.jpg",
			alt: "Product 4",
		},
	}
]
