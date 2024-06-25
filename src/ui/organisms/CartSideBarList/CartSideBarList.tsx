import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { getCartProductsById } from "@/api/cart";

export const CartSideBarList = async () => {
	const cart = await getCartProductsById();

	if (!cart) return null;

	return (
		<div className="mt-8">
			<ul role="list" className="-my-6 divide-y divide-gray-200">
				{cart.products.map((item, index) => {
					if (!item?.quantity || item?.quantity < 1) return null;
					return (
						<li key={`${item.id}-${index}`} className="flex py-6">
							<div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-gray-200">
								{!!item.images && item.images[0] !== undefined && (
									<Image
										src={item.images[0].url}
										alt={item.name}
										width="64"
										height="64"
									/>
								)}
							</div>
							<div className="ml-4 flex flex-1 flex-col">
								<div className="flex justify-between text-base font-medium text-slate-900">
									<h3>{item.name}</h3>
									{item.price && (
										<p className="small-caps ml-4">
											{formatCurrency(item.price / 100)}
										</p>
									)}
								</div>
								<div className="flex flex-1 items-end justify-between text-sm font-bold text-slate-500">
									Quantity:{item.quantity}
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
