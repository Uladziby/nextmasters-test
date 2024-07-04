import React from "react";
import { StripePart } from "@/app/cart/components/stripeComponents/StripePart";
import { CartPart } from "@/app/cart/components/cartComponents/CartPart";

export default async function CartPage() {
	return (
		<>
			<CartPart />
			<StripePart />
		</>
	);
}
