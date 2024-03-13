import { getCartByIdFromCookies } from "@/api/cart";
import { formatCurrency } from "@/utils/formatCurrency";
import { CartSideBarList } from "@/ui/organisms/CartSideBarList/CartSideBarList";
import { Overlay } from "@/ui/atoms/Overlay/Overlay";

export default async function CartModalPage() {
	const cart = await getCartByIdFromCookies();

	if (!cart?.items) return null;

	const total = cart.items.reduce(
		(acc, item) => acc + (item?.quantity ?? 0) * (item?.product?.price ?? 0),
		0,
	);

	const totalPrice = formatCurrency(total / 100);

	return (
		<>
			<Overlay />
			<div className="animation-slide-from-right absolute bottom-0 right-0 top-0 z-30 flex h-full flex-col overflow-hidden bg-white shadow-xl sm:w-1/2 lg:w-1/3">
				<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium text-slate-900">
							Shopping cart
						</h3>
						<a href="/cart" className="text-sm text-blue-500">
							(open full view)
						</a>
					</div>
					<div className="mt-8">
						{cart?.items.length > 0 && <CartSideBarList cart={cart} />}
					</div>
				</div>
				<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
					<div className="flex justify-between text-base font-medium text-slate-900">
						<p>Total</p>
						<p className="small-caps">{totalPrice}</p>
					</div>
					<p className="mt-0.5 text-sm text-slate-500">
						Shipping and taxes will be added at the next step
					</p>
					<form className="mt-6">
						<button
							type="submit"
							className="w-full rounded border border-transparent bg-blue-500 px-6 py-3 font-medium text-slate-50 hover:bg-blue-600 disabled:bg-gray-300"
						>
							Checkout
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
