"use client";

import { Minus, Plus } from "lucide-react";
import { useOptimistic } from "react";
import { Button } from "@/ui/atoms/Button/Button";
import { changeItemQuantity } from "@/app/cart/actions";

export const ItemCartQuantityComponent = ({
	quantity,
	itemId,
	cartId,
	isDisabled,
}: {
	quantity: number;
	itemId: string;
	cartId: string;
	isDisabled: boolean;
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
		<form className="flex justify-center gap-8">
			<Button
				className="bg-white hover:bg-slate-100"
				type="submit"
				formAction={decrement}
				dataTestId="decrement"
				isDisabled={isDisabled}
			>
				<Minus color={isDisabled ? "grey" : "black"} size={18} />
			</Button>
			<span
				className="items-center justify-center text-xl"
				data-testid="quantity"
			>
				{quantity}
			</span>
			<Button
				type="submit"
				className="bg-white hover:bg-slate-100"
				formAction={increment}
				dataTestId="increment"
				isDisabled={isDisabled}
			>
				<Plus color={isDisabled ? "grey" : "black"} size={18} />
			</Button>
		</form>
	);
};
