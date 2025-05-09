import { z } from "zod";

const securityTabShema = z.object({
	email: z
		.string()
		.trim()
		.min(1, "Question is empty")
		.min(2, "Question is too short")
		.max(400, "Question is too long"),
	question: z
		.string()
		.trim()
		.min(1, "Question is empty")
		.min(2, "Question is too short")
		.max(400, "Question is too long"),
});

export type ContactUsFormShemaType = z.infer<typeof securityTabShema>;
