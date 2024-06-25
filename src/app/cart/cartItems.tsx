import NextImage from "next/image";
import Link from "next/link";
import { ItemCartQuantityComponent } from "@/app/cart/ItemCartQuantityComponent";
import { RemoveButton } from "@/app/cart/RemoveButton";
import { formattedPrice } from "@/utils/formatCurrency";
import { getCartProductsById } from "@/api/cart";

export const CartItems = async () => {
	const cart = await getCartProductsById();

	if (!cart) return null;

	return (
		<>
			{cart.products.map(({ _id, quantity, images, name, price }) => (
				<tr key={_id}>
					{_id && quantity && images[0] && (
						<>
							<td className="flex items-center gap-4 whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6">
								<NextImage
									width={60}
									height={60}
									src={images[0].url}
									alt={name}
								/>
								<Link href={`/product/${_id}`} className="hover:text-slate-400">
									{name}
								</Link>
							</td>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
								<ItemCartQuantityComponent
									quantity={quantity}
									itemId={_id}
									cartId={cart.cartId}
								/>
							</td>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
								{formattedPrice(price, 1)}
							</td>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
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
