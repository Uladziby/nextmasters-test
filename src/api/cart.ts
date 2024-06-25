import { cookies } from "next/headers";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartDataProductsForStripeDocument,
	CartGetByIdDocument,
	CartProductsByIdDocument,
} from "./../gql/graphql";
import { executeGraphql } from "@/api/executeGraphQL";

export async function getOrCreateCart() {
	const existingCart = await getCartByIdFromCookies();

	if (existingCart) {
		return existingCart;
	}

	const { cartCreate } = await сreateCart();

	if (!cartCreate) {
		throw new Error("Failed to create cart");
	}

	return cartCreate;
}

export async function getCartByIdFromCookies() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const { cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { cartId: cartId },
		});

		if (cart._id) {
			return cart;
		}
	}
}

export async function getCartDataForStripe() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const products = await executeGraphql({
			query: CartDataProductsForStripeDocument,
			variables: { cartId: cartId },
		});
		if (products.cartDataProductsForStripe) {
			return {
				products: [...products.cartDataProductsForStripe],
				cartId: cartId,
			};
		}
	}
}

export async function getCartProductsById() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const { cartProductsById } = await executeGraphql({
			query: CartProductsByIdDocument,
			variables: { cartId: cartId },
		});

		if (cartProductsById) {
			return { products: [...cartProductsById], cartId };
		}
	}
}

export async function сreateCart() {
	return executeGraphql({
		query: CartCreateDocument,
		variables: {
			input: {},
		},
	});
}

export async function addItemToCart(cartId: string, _productId: string) {
	return executeGraphql({
		query: CartAddItemDocument,
		variables: {
			cartId: cartId,
			input: { productId: _productId, quantity: 1 },
		},
	});
}
