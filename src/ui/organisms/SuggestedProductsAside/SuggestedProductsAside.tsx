import { Suspense } from "react";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductsList/SuggestedProductList";
import { Loader } from "@/ui/organisms/Loader";
import { WrapperSection } from "@/ui/atoms/WrapperSection/WrapperSection";

export const SuggestedProductsAside = ({ headline }: { headline: string }) => {
	return (
		<WrapperSection>
			<aside className="max-w-2xs relative flex min-h-60 flex-col px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
				<h2 className="mb-4 text-xl font-extrabold text-secondary">{headline}</h2>
				<Suspense fallback={<Loader />}>
					<SuggestedProductList />
				</Suspense>
			</aside>
		</WrapperSection>
	);
};
