import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductByIdGraphql } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductsList/SuggestedProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string; productSlug: string };
}): Promise<Metadata> => {
	const product = await getProductByIdGraphql(params.productId);

	return {
		title: `${product.name} - Shop online`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Shop online`,
			description: product.description,
			images: [
				{
					url: product.images[0]?.url as string,
				},
			],
		},
	};
};

export default async function SingleProductPage({
	params,
	searchParams,
}: {
	params: { productId: string; productSlug: string };
	searchParams: { [key: string]: string | string[] };
}) {
	let refferal: string | undefined;

	if (searchParams.referral) {
		refferal = searchParams.referral.toString();
	}

	const product = await getProductByIdGraphql(params.productId);

	return (
		<>
			<article className="prose flex max-w-xs flex-col justify-center">
				{product && (
					<>
						<h1>{product.name}</h1>
						<ProductListItem product={product} />
						<span>{product.description}</span>
					</>
				)}
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
