import { SuggestedProductList } from "@/ui/organisms/SuggestedProductsList/SuggestedProductList";

export default function Home() {
	return (
		<section className="mx-auto w-full max-w-7xl p-8">
			<h1>MY SHOP</h1>
			<SuggestedProductList />
		</section>
	);
}
