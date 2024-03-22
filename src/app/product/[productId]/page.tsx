import { type Metadata } from "next";
import NextImage from "next/image";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { SuggestedProductsAside } from "@/ui/organisms/SuggestedProductsAside/SuggestedProductsAside";
import { getProductByIdGraphql } from "@/api/products";
import { addItemToCart, getOrCreateCart } from "@/api/cart";
import { AddToCartButton } from "@/app/product/[productId]/AddToCartButton";
import { ReviewForm } from "@/ui/organisms/ReviewForm/ReviewForm";
import { CustomerReviews } from "@/ui/organisms/CustomerReviews/CustomerReviews";
import { RatingIndicator } from "@/ui/organisms/CustomerReviews/RatingIndicator";
import { formatCurrency } from "@/utils/formatCurrency";
import { SUGGESTED_PRODUCTS_HEADLINE } from "@/utils/constatnts";

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

	const { images, id, name, categories, rating, description, price } =
		await getProductByIdGraphql(params.productId);

	async function addToCartAction() {
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
			<article className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
				<div>
					{images[0] && (
						<NextImage
							src={images[0]?.url}
							alt={images[0]?.alt}
							width={150}
							height={150}
							className="h-full w-full object-cover object-center "
						/>
					)}
				</div>

				<div className="body-font overflow-hidden text-gray-600">
					{name && (
						<>
							<div className="flex flex-col gap-4">
								<h1 className="text-4xl">{name}</h1>
								<p>{categories[0]?.name}</p>
								<div className="flex justify-between">
									{rating && (
										<div className="flex items-center justify-between gap-2">
											<span>{rating.toFixed(1)}/5</span>
											<RatingIndicator rating={rating} />
										</div>
									)}
								</div>
								<span>{description}</span>
								<span className="text-3xl" test-dataid="product-price">
									{formatCurrency(price / 100)}
								</span>
							</div>
						</>
					)}
					{refferal && <p>Refferal: {refferal}</p>}
					<form action={addToCartAction}>
						<AddToCartButton />
					</form>
				</div>
			</article>
			<SuggestedProductsAside headline={SUGGESTED_PRODUCTS_HEADLINE} />
			<section className="max-w-2xl px-4 py-4 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-8">
				<ReviewForm productId={id} />
				<CustomerReviews productId={id} />
			</section>
		</>
	);
}
