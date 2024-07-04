import { getCartProductsById } from "@/api/cart";
import { CartItems } from "@/app/cart/components/cartComponents/CartItems";
import { AMessage } from "@/ui/atoms/AMessage/AMessage";
import { ATable } from "@/ui/atoms/ATable/ATable";
import { ATitle } from "@/ui/atoms/ATitle/ATitle";
import { CART_HEADERS as headers } from "@/utils/constatnts";
import { formatCurrency } from "@/utils/formatCurrency";

export type CartItemsType = {
	products: {
		_id?: string | null | undefined;
		quantity: number | null | undefined;
		images: { url: string }[];
		name: string;
		price: number;
		id: string;
	}[];
	cartId: string;
};

export const CartPart = async () => {
	const cart = (await getCartProductsById()) as CartItemsType | null;

	const totalAmount = cart?.products.reduce(
		(acc, item) => acc + (item.price * item.quantity! ?? 0),
		0,
	);

	return (
		<section className="w-full lg:w-7/12">
			<ATitle className="title-h2 border-b-0 text-left ">Your cart</ATitle>
			<ATable headers={headers}>{cart && <CartItems cart={cart} />}</ATable>
			<AMessage type="error" classNames="flex justify-end py-4">
				<span className="text-xl font-medium">
					Total : {formatCurrency(totalAmount! / 100)}
				</span>
			</AMessage>
		</section>
	);
};
