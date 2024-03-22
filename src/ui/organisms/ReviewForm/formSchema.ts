import * as z from "zod";
import { formErrors } from "@/utils/errorMessages";
import { validationRegExp } from "@/utils/validationRegExp";
import { emailDomainNameValidator } from "@/utils/emailDomainNameValidator";

const { emptyField, tooLongName, tooShortName, incorrectEmail } = formErrors;

export const reviewFormSchema = z.object({
	title: z.string().min(1).max(20),
	author: z
		.string()
		.min(1, emptyField)
		.min(2, tooShortName)
		.max(50, tooLongName),
	email: z
		.string()
		.min(1, tooShortName)
		.regex(validationRegExp.EMAIL, incorrectEmail)
		.refine(emailDomainNameValidator, incorrectEmail),
	description: z
		.string()
		.min(1, emptyField)
		.min(2, tooShortName)
		.max(200, tooLongName),
	rating: z.number().int().min(1).max(5),
});

export type ReviewFormSchema = z.infer<typeof reviewFormSchema>;
