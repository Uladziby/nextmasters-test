"use client";

import { useRef } from "react";
import { reviewFormAction } from "@/app/product/[productId]/actions";
import { ARatingInput } from "@/ui/atoms/ARatingInput/ARatingInput";
import { useTypeSafeFormState } from "@/ui/organisms/ReviewForm/typesafeForm";
import {
	reviewFormSchema,
	type ReviewFormSchema,
} from "@/ui/organisms/ReviewForm/formSchema";
import { Input } from "@/ui/atoms/Input/Input";

export const ReviewForm = ({ productId }: { productId: string }) => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [_, action] = useTypeSafeFormState(
		reviewFormSchema,
		async (formData: ReviewFormSchema) => {
			await reviewFormAction(productId, formData);
			formRef.current?.reset();
		},
	);

	return (
		<div className="lg:col-span-4">
			<h2>Leave your opinion</h2>
			<form
				ref={formRef}
				action={action}
				data-testid="add-review-form"
				className="mt-2 flex flex-col  gap-y-6"
			>
				<Input name="headline" label="Title" isRequired register={undefined} />
				<Input name="email" label="Email" isRequired register={undefined} />
				<Input name="name" isRequired label="Name" register={undefined} />
				<Input
					name="description"
					isRequired
					label="Text"
					register={undefined}
				/>
				<ARatingInput name="rating" label="Rating" initialStars={5} />
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-4 py-2 text-white"
				>
					Submit
				</button>
			</form>
		</div>
	);
};
