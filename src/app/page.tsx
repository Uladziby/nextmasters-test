import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { type ProductItemType } from "@/ui/types";

const products  : ProductItemType[] = [
	{
		id: "1",
		name: "Product 0",
		category: "Category 1",
		price: 1700,
		coverImage: {
			src: "/product1.jpg",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Product 1",
		category: "Category 1",
		price: 100,
		coverImage: {
			src: "/product1.jpg",
			alt: "Product 1",
		},
	},
	{
		id: "3",
		name: "Product 1",
		category: "Category 2",
		price: 100,
		coverImage: {
			src: "/product1.jpg",
			alt: "Product 1",
		},
	},
	{
		id: "4",
		name: "Product 1",
		category: "Category 3",
		price: 100,
		coverImage: {
			src: "/product1.jpg",
			alt: "Product 1",
		},
	}
]

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Products</h1>
			<ProductList products={products}/>
		</main>
	);
}
