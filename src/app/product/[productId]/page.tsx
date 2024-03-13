import { Suspense } from "react";
import { type Metadata } from "next";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { getProductByIdGraphql } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductsList/SuggestedProductList";
import { addItemToCart, getOrCreateCart } from "@/api/cart";
import { AddToCartButton } from "@/app/product/[productId]/AddToCartButton";
import { ReviewForm } from "@/ui/organisms/ReviewForm/ReviewForm";
import { CustomerReviews } from "@/ui/organisms/CustomerReviews/CustomerReviews";

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

	async function addToCartAction(/* formData: FormData */) {
		"use server";

		const cart = await getOrCreateCart();

		cookies().set("cartId", cart.id, {
			httpOnly: true,
			sameSite: "lax",
		});

		await addItemToCart(cart.id, params.productId);

		revalidateTag("cart");
	}

	return (
		<>
			<article className="body-font overflow-hidden text-gray-600">
				<div className="container mx-auto my-8 px-5">
					{product && (
						<>
							<h2>{product.name}</h2>
							<ProductListItem product={product} />
							<span>{product.description}</span>
						</>
					)}
					{refferal && <p>Refferal: {refferal}</p>}
					<form action={addToCartAction}>
						<AddToCartButton />
					</form>
				</div>
			</article>
			<aside className="max-w-2xs mx-auto px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
				<Suspense>
					<SuggestedProductList />
				</Suspense>
			</aside>
			<section className="mx-auto max-w-2xl px-4 py-4 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-8">
				<ReviewForm productId={product.id} />
				<CustomerReviews productId={product.id} />
			</section>
		</>
	);
}
