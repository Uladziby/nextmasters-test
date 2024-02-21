import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductsList/SuggestedProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - Shop online`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Shop online`,
			description: product.description,
			images: [
				{
					url: product.coverImage.src,
				},
			],
		},
	};
};

export default async function SingleProductPage({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	let refferal: string | undefined;

	if (searchParams.referral) {
		refferal = searchParams.referral.toString();
	}

	const product = await getProductById(params.productId);

	return (
		<>
			<article className="prose flex max-w-xs flex-col justify-center">
				<h1>{product.name}</h1>
				<ProductListItem product={product} />
				{refferal && <p>Refferal: {refferal}</p>}
			</article>
			<aside>
				<Suspense>
					<SuggestedProductList />
				</Suspense>
			</aside>
		</>
	);
}
