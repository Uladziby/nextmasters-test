"use client";

import { Trash } from "lucide-react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/ui/atoms/Button/Button";
import { removeItemFromCart } from "@/app/cart/actions";
import { CART_RESPONSE_MESSAGES } from "@/utils/constatnts";
import { removeCookieCartId } from "@/api/cookies";

export const RemoveButton = ({
	cartId,
	productId,
}: {
	cartId: string;
	productId: string;
}) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const handlerRemoveItem = () => {
		startTransition(async () => {
			const response = await removeItemFromCart(cartId, productId);

			const cartMessage = response.cartRemoveItem.cartMessage;

			if (cartMessage === CART_RESPONSE_MESSAGES.cartDeleted) {
				await removeCookieCartId();
			}
			router.refresh();
		});
	};

	return (
		<Button
			type="submit"
			className="bg-white hover:bg-slate-100"
			onClick={handlerRemoveItem}
			isDisabled={isPending}
		>
			<Trash color="black" />
		</Button>
	);
};
