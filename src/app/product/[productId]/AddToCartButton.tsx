"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/ui/atoms/Button/Button";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<Button
			type="submit"
			isDisabled={formStatus.pending}
			className="mt-2 w-full max-w-2xl justify-center py-2 text-center"
		>
			Add to cart
		</Button>
	);
};
