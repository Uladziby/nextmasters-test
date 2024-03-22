"use client";

import { useFormState } from "react-dom";
import { type TypeOf, type ZodType } from "zod";

type FormReview<
	TData = unknown,
	TErrors extends Partial<Record<keyof TData, string[]>> = Partial<
		Record<keyof TData, string[]>
	>,
> =
	| {
			success: true;
			errors: TErrors;
			response: TData;
	  }
	| { success: false; errors: TErrors };

export const useTypeSafeFormState = <FormSchema extends ZodType>(
	schema: FormSchema,
	action: (data: TypeOf<FormSchema>) => Promise<unknown>,
) => {
	return useFormState(
		async (
			_prevState: unknown,
			formData: FormData,
		): Promise<FormReview<TypeOf<FormSchema>>> => {
			//todo refactor this
			const updatedData = {
				...Object.fromEntries(formData.entries()),
				rating: parseInt(formData.get("rating") as string, 10),
			};

			const data = await schema.safeParseAsync(updatedData);
			if (!data.success) {
				return {
					success: false as const,
					errors: data.error.flatten().fieldErrors as Partial<
						Record<keyof TypeOf<FormSchema>, string[]>
					>,
				};
			}

			const newState = {
				success: true as const,
				errors: {},
				response: data.data as unknown,
			};
			await action(data.data as unknown);
			return newState;
		},
		null,
	);
};
