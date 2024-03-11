"use client";

import { Minus, Plus } from "lucide-react";
import { useOptimistic } from "react";
import { Button } from "@/ui/atoms/Button/Button";
import { changeItemQuantity } from "@/app/cart/actions";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
	cartId,
}: {
	quantity: number;
	itemId: string;
	cartId: string;
}) => {
	const [optimisticQuntity, setOptimisticQuantity] = useOptimistic(quantity);

	const increment = async () => {
		setOptimisticQuantity(optimisticQuntity + 1);
		await changeItemQuantity(cartId, itemId, optimisticQuntity + 1);
	};

	const decrement = async () => {
		setOptimisticQuantity(optimisticQuntity - 1);
		await changeItemQuantity(cartId, itemId, optimisticQuntity - 1);
	};

	return (
		<form className="flex justify-center gap-2">
			<Button
				className="hover:bg-slate-100"
				type="submit"
				formAction={decrement}
			>
				<Minus color="black" size={16} />
			</Button>
			<span className="flex items-center justify-center">{quantity}</span>
			<Button
				type="submit"
				className="hover:bg-slate-100"
				formAction={increment}
			>
				<Plus color="black" size={16} />
			</Button>
		</form>
	);
};
