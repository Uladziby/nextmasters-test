"use client";

import { useFormState } from "react-dom";
import { type TypeOf, type ZodType } from "zod";

export type FormCreateNewProduct<
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
		): Promise<FormCreateNewProduct<TypeOf<FormSchema>>> => {
			const plainObject: Record<string, unknown> = {};

			formData.forEach((value, key) => {
				if (key === "price") {
					plainObject[key] = Number(value);
				} else {
					plainObject[key] = value;
				}
			});

			const validatedData = await schema.safeParseAsync(plainObject);

			if (!validatedData.success) {
				return {
					success: false as const,
					errors: validatedData.error.flatten().fieldErrors as Partial<
						Record<keyof TypeOf<FormSchema>, string[]>
					>,
				};
			}

			const newState = {
				success: true as const,
				errors: {},
				response: validatedData.data as unknown,
			};

			await action(validatedData.data as unknown);

			return newState;
		},
		null,
	);
};
