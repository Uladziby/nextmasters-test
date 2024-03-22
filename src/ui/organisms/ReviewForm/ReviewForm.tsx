"use client";

import { useRef } from "react";
import { reviewFormAction } from "@/app/product/[productId]/actions";
import { ARatingInput } from "@/ui/atoms/ARatingInput/ARatingInput";
import { useTypeSafeFormState } from "@/ui/organisms/ReviewForm/typesafeForm";
import {
	reviewFormSchema,
	type ReviewFormSchema,
} from "@/ui/organisms/ReviewForm/formSchema";

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
				className="mt-2 flex-col gap-y-2"
			>
				<label htmlFor="title">
					<span className="text-xs">Title</span>
					<input
						type="text"
						name="headline"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</label>
				<label htmlFor="email">
					<span className="text-xs">Email</span>
					<input
						type="text"
						name="email"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</label>
				<label htmlFor="author">
					<span className="text-xs">Name</span>
					<input
						type="text"
						name="author"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</label>
				<label htmlFor="description">
					<span className="text-xs">Description</span>
					<textarea
						rows={5}
						name="description"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</label>
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
