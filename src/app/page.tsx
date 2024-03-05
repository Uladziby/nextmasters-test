import { CollectionsPage } from "@/ui/organisms/CollectionsPage/CollectionsPage";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductsList/SuggestedProductList";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center p-24">
			<CollectionsPage />
			<SuggestedProductList />
		</main>
	);
}
