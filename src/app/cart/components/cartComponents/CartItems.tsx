import NextImage from "next/image";
import Link from "next/link";
import { ItemCartQuantityComponent } from "@/app/cart/components/cartComponents/CartQuantityComponent";
import { RemoveButton } from "@/app/cart/components/cartComponents/CartRemoveButton";
import { formattedPrice } from "@/utils/formatCurrency";
import { type CartItemsType } from "@/app/cart/components/cartComponents/CartPart";

export const CartItems = async ({ cart }: { cart: CartItemsType | null }) => {
	if (!cart) return null;

	const items = cart.products;

	return (
		<>
			{items.map(({ _id, quantity, images, name, price }) => (
				<tr key={_id}>
					{_id && quantity && images[0] && (
						<>
							<td className="flex items-center gap-4 whitespace-nowrap py-8 pl-4 pr-3 font-medium text-gray-900 sm:pl-6">
								<NextImage
									width={60}
									height={60}
									src={images[0].url}
									alt={name}
								/>
								<Link
									href={`/product/${_id}`}
									className="text-wrap text-xl hover:text-slate-400"
								>
									{name}
								</Link>
							</td>

							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-lg font-medium text-gray-900 sm:pl-6">
								{formattedPrice(price, 1)}
							</td>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
								<ItemCartQuantityComponent
									quantity={quantity}
									itemId={_id}
									cartId={cart.cartId}
									isDisabled={true}
								/>
							</td>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-lg font-medium text-gray-900 sm:pl-6">
								{formattedPrice(price, quantity)}
							</td>
							<td className="items-center whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
								<RemoveButton cartId={cart.cartId} productId={_id} />
							</td>
						</>
					)}
				</tr>
			))}
		</>
	);
};
