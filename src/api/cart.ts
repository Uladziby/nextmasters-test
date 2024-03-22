import { cookies } from "next/headers";
import {
	CartAddItemDocument,
	CartFindOrCreateDocument,
	CartGetByIdDocument,
} from "./../gql/graphql";
import { executeGraphql } from "@/api/executeGraphQL";

export async function getOrCreateCart() {
	const existingCart = await getCartByIdFromCookies();

	if (existingCart) {
		return existingCart;
	}

	const cart = await сreateCart();

	if (!cart.cartFindOrCreate) {
		throw new Error("Failed to create cart");
	}

	return cart.cartFindOrCreate;
}

export async function getCartByIdFromCookies() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const { cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
		});
		if (cart?.id) {
			return cart;
		}
	}
}

export async function сreateCart() {
	return executeGraphql({
		query: CartFindOrCreateDocument,
		variables: {
			id: "",
			input: {},
		},
	});
}

export async function addItemToCart(cartId: string, _productId: string) {
	return executeGraphql({
		query: CartAddItemDocument,
		variables: {
			id: cartId,
			input: { item: { productId: _productId } },
		},
	});
}
