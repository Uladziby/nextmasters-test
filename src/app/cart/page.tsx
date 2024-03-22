import { redirect } from "next/navigation";
import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { getCartByIdFromCookies } from "@/api/cart";
import { ItemCartQuantityComponent } from "@/app/cart/ItemCartQuantityComponent";
import { formattedPrice } from "@/utils/formatCurrency";
import { Button } from "@/ui/atoms/Button/Button";
import { handlePaymentAction } from "@/app/cart/actions";
import { RemoveButton } from "@/app/cart/RemoveButton";

export default async function CartPage() {
	const cart = await getCartByIdFromCookies();

	if (!cart) {
		redirect("/");
	}

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
							{cart.items.map(({ product, quantity }) => (
								<tr key={product.name}>
									<td className="flex max-w-28 items-center gap-4 whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6">
										{product.images[0] && (
											<NextImage
												width={60}
												height={60}
												src={product.images[0]?.url}
												alt={product.images[0]?.alt}
											/>
										)}
										<Link
											href={`/product/${product.id}`}
											className="hover:text-slate-400"
										>
											{product.name}
										</Link>
									</td>
									<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
										<ItemCartQuantityComponent
											quantity={quantity}
											itemId={product.id}
											cartId={cart.id}
										/>
									</td>
									<td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
										{formattedPrice(product.price, 1)}
									</td>
									<td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
										{formattedPrice(product.price, quantity)}
									</td>
									<td className="items-center whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
										<RemoveButton cartId={cart.id} productId={product.id} />
									</td>
								</tr>
							))}
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
