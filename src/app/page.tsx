import { ContactUsTemplate } from "@/ui/organisms/ContactUsTemplate/ContactUsTemplate";
import { OurCollections } from "@/ui/organisms/OurCollections/OurCollections";
import { SuggestedProductsAside } from "@/ui/organisms/SuggestedProductsAside/SuggestedProductsAside";
import { SUGGESTED_PRODUCTS_HEADLINE } from "@/utils/constatnts";

export default function Home() {
	return (
		<section className="flex w-full flex-col items-center justify-center gap-10 px-8">
			<OurCollections />
			<SuggestedProductsAside headline={SUGGESTED_PRODUCTS_HEADLINE} />
			<ContactUsTemplate />
		</section>
	);
}
