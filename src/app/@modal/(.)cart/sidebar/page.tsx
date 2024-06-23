import { getCartProductsById } from "@/api/cart";
import { formatCurrency } from "@/utils/formatCurrency";
import { CartSideBarList } from "@/ui/organisms/CartSideBarList/CartSideBarList";
import { Overlay } from "@/ui/atoms/Overlay/Overlay";
import { SidebarTitle } from "@/app/@modal/(.)cart/sidebar/parts/SideBarTitle";
import { SideBarTotalPart } from "@/app/@modal/(.)cart/sidebar/parts/SideBarTotalPart";
import { SideBarButton } from "@/app/@modal/(.)cart/sidebar/parts/SideBarButton";
import { SideBarContainer } from "@/app/@modal/(.)cart/sidebar/parts/SideBarContainer";

export default async function CartModalPage() {
	const cart = await getCartProductsById();

	const total = cart?.products.reduce(
		(acc, item) => acc + (item?.quantity ?? 0) * (item?.price ?? 0),
		0,
	);

	const totalPrice = formatCurrency(total ?? 0 / 100);

	return (
		<>
			<Overlay />
			<SideBarContainer>
				<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
					<SidebarTitle />
					{cart?.products.length ? (
						<CartSideBarList />
					) : (
						<p className="text-center">No items in cart</p>
					)}
				</div>
				<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
					<SideBarTotalPart totalPrice={totalPrice} />
					<SideBarButton />
				</div>
			</SideBarContainer>
		</>
	);
}
