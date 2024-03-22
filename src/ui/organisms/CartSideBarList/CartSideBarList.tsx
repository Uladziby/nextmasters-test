import Image from "next/image";

import { type CartGetByIdQuery } from "@/gql/graphql";
import { formatCurrency } from "@/utils/formatCurrency";

export const CartSideBarList = ({
	cart,
}: {
	cart: CartGetByIdQuery["cart"];
}) => {
	const items = cart?.items;
	if (!items) return null;
	return (
		<ul role="list" className="-my-6 divide-y divide-gray-200">
			{items.map((item, index) => {
				if (!item?.quantity || item?.quantity < 1) return null;
				return (
					<li key={`${item.product.id}-${index}`} className="flex py-6">
						<div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-gray-200">
							{!!item.product?.images &&
								item.product?.images[0] !== undefined && (
									<Image
										src={item.product?.images[0].url}
										alt={item.product?.name}
										width="64"
										height="64"
									/>
								)}
						</div>
						<div className="ml-4 flex flex-1 flex-col">
							<div className="flex justify-between text-base font-medium text-slate-900">
								<h3>{item.product?.name}</h3>
								{item.product?.price && (
									<p className="small-caps ml-4">
										{formatCurrency(item.product?.price / 100)}
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
	);
};
