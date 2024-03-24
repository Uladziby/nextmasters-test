"use client";

import { Minus, Plus } from "lucide-react";
import { useOptimistic } from "react";
import { Button } from "@/ui/atoms/Button/Button";
import { changeItemQuantity } from "@/app/cart/actions";

export const ItemCartQuantityComponent = ({
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
				className="bg-white hover:bg-slate-100"
				type="submit"
				formAction={decrement}
				dataTestId="decrement"
			>
				<Minus color="black" size={18} />
			</Button>
			<span
				className="text-md items-center justify-center"
				data-testid="quantity"
			>
				{quantity}
			</span>
			<Button
				type="submit"
				className="bg-white hover:bg-slate-100"
				formAction={increment}
				dataTestId="increment"
			>
				<Plus color="black" size={18} />
			</Button>
		</form>
	);
};
