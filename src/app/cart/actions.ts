"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { revalidatePath } from "next/cache";
import {
	CartRemoveItemDocument,
	ChangeItemQuantityDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/executeGraphQL";
import { getCartByIdFromCookies } from "@/api/cart";

export const changeItemQuantity = async (
	cartId: string,
	itemId: string,
	quantity: number,
) => {
	await executeGraphql({
		query: ChangeItemQuantityDocument,
		variables: {
			cartId: cartId,
			quantity: quantity,
			productId: itemId,
		},
	});
	revalidatePath(`/cart`);
};

export const removeItemFromCart = (cartId: string, itemId: string) => {
	return executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			id: cartId,
			productId: itemId,
		},
	});
};

export async function handlePaymentAction() {
	console.log(`${process.env.STRIPE_SECRET_KEY}`);

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key not found");
	}

	const cart = await getCartByIdFromCookies();
	if (!cart) return;

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "blik"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items.map((item) => ({
			price_data: {
				currency: "pln",
				product_data: {
					name: item.product.name,
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url:
			"http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel",
	});

	if (!checkoutSession.url) {
		throw new Error("Checkout session url not found");
	}

	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
