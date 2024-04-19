import React from "react";
import { CartPart } from "@/app/cart/CartPart";

export default async function CartPage() {
	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<CartPart />
		</div>
	);
}
