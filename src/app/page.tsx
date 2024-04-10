import { OurCollections } from "@/ui/organisms/OurCollections/OurCollections";
import { SuggestedProductsAside } from "@/ui/organisms/SuggestedProductsAside/SuggestedProductsAside";
import { SUGGESTED_PRODUCTS_HEADLINE } from "@/utils/constatnts";

export default function Home() {
	return (
		<section className="mx-auto flex max-w-7xl flex-col items-center justify-center p-8">
			<OurCollections />
			<SuggestedProductsAside headline={SUGGESTED_PRODUCTS_HEADLINE} />
		</section>
	);
}
