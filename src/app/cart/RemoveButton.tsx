"use client";

import { Trash } from "lucide-react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/ui/atoms/Button/Button";
import { removeItemFromCart } from "@/app/cart/actions";

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
			await removeItemFromCart(cartId, productId);
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
