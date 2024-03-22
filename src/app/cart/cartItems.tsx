import { Link } from "lucide-react";
import NextImage from "next/image";
import { ItemCartQuantityComponent } from "@/app/cart/ItemCartQuantityComponent";
import { RemoveButton } from "@/app/cart/RemoveButton";
import { formattedPrice } from "@/utils/formatCurrency";

type CartItemsProps = {
	id: string;
	items: {
		quantity: number;
		product: {
			id: string;
			name: string;
			price: number;
			images: {
				url: string;
				alt: string;
			}[];
		};
	}[];
};

export const CartItems = ({ cart }: { cart: CartItemsProps }) => {
	return (
		<>
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
		</>
	);
};
