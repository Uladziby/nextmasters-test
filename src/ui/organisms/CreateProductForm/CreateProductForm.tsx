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

	const errors = state?.errors;

	return (
		<form ref={formRef} action={action}>
			<div className="container flex max-w-2xl flex-col gap-8">
				<Input
					name="name"
					label="Product Name"
					error={errors?.name?.join(", ")}
					placeholder={EXAMPLE_NAME}
					register={undefined}
				/>
				<Input
					name="description"
					label="Description"
					error={errors?.description?.join(", ")}
					placeholder="exp: This is a great product"
					register={undefined}
				/>
				<Input
					name="price"
					type="number"
					label="Price"
					isRequired
					error={errors?.price?.join(", ")}
					placeholder={EXAMPLE_PRICE}
					register={undefined}
				/>
				<Input
					name="image"
					label="Image URL"
					isRequired
					error={errors?.image?.join(", ")}
					placeholder={EXAMPLE_URL_IMAGE}
					register={undefined}
				/>
				<Input
					name="category"
					label="Category"
					placeholder="exp : models"
					isRequired
					error={errors?.category?.join(", ")}
					register={undefined}
				/>
				<SubmitButton />
			</div>
		</form>
	);
}
