import React from "react";
import { getCartByIdFromCookies } from "@/api/cart";
import { Button } from "@/ui/atoms/Button/Button";
import { handlePaymentAction } from "@/app/cart/actions";
import { CartItems } from "@/app/cart/cartItems";

export default async function CartPage() {
	const cart = await getCartByIdFromCookies();

	const headers = ["Product", "Quantity", "Price", "Subtotal"];

	return (
		<>
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead className="bg-gray-50">
							<tr>
								{headers.map((header, idx) => (
									<th
										key={idx}
										className="py-3.5 pl-8 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
									>
										{header}
									</th>
								))}
								<th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"></th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 bg-white">
							{cart ? <CartItems cart={cart} /> : <tr>Cart is empty</tr>}
						</tbody>
					</table>
				</div>
				<form action={handlePaymentAction}>
					<div className="flex w-full justify-end">
						<Button className="mt-4 w-full max-w-40 justify-center rounded-sm bg-slate-400 py-2 text-center transition-colors hover:bg-slate-800">
							Pay
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
