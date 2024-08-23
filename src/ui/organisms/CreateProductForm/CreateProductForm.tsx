"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/ui/atoms/Input/Input";
import {
	type NewProductFormSchema,
	newProductFormSchema,
} from "@/ui/organisms/CreateProductForm/formSchema";
import { SubmitButton } from "@/ui/atoms/SubmitButton/SubmitButton";
import { useTypeSafeFormState } from "@/ui/organisms/CreateProductForm/typeSafeForm";
import { createProductFormAction } from "@/ui/organisms/CreateProductForm/actions";
import {
	EXAMPLE_NAME,
	EXAMPLE_PRICE,
	EXAMPLE_URL_IMAGE,
} from "@/utils/constatnts";

export function CreateProductForm({ collection }: { collection: string }) {
	const formRef = useRef<HTMLFormElement | null>(null);
	const route = useRouter();

	const [state, action] = useTypeSafeFormState(
		newProductFormSchema,
		async (formData: NewProductFormSchema) => {
			await createProductFormAction(formData, collection);
			formRef.current?.reset();
			route.back();
		},
	);

	return (
		<div className="container flex max-w-2xl flex-col gap-8">
			<form ref={formRef} action={action}>
				<Input
					name="name"
					error={state?.errors.name}
					placeholder={EXAMPLE_NAME}
				/>
				<Input name="description" error={state?.errors.description} />
				<Input
					name="price"
					type="number"
					isRequired
					error={state?.errors.price}
					placeholder={EXAMPLE_PRICE}
				/>
				<Input
					name="image"
					label="Image URL"
					isRequired
					error={state?.errors.image}
					placeholder={EXAMPLE_URL_IMAGE}
				/>
				<Input name="category" isRequired error={state?.errors.category} />
				<SubmitButton />
			</form>
		</div>
	);
}
