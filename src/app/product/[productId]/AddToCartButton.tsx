"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/ui/atoms/Button/Button";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<Button type="submit" isDisabled={formStatus.pending}>
			Add to cart
		</Button>
	);
};
