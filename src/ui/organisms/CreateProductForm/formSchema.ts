import * as z from "zod";
import { formErrors } from "@/utils/errorMessages";

const { emptyField, tooLongName, tooShortName } = formErrors;

export const newProductFormSchema = z.object({
	name: z.string().min(1, emptyField).min(2, tooShortName).max(50, tooLongName),
	description: z
		.string()
		.min(1, emptyField)
		.min(2, tooShortName)
		.max(600, tooLongName),
	price: z.number().int().min(1),
	image: z.string(),
	category: z
		.string()
		.min(1, emptyField)
		.min(2, tooShortName)
		.max(50, tooLongName),
});

export type NewProductFormSchema = z.infer<typeof newProductFormSchema>;
