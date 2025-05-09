import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		// Can be provided via env or parameters to Commerce Kit, thus optional
		STRIPE_SECRET_KEY: z.string().optional(),
		// Required in Commerce Kit
		STRIPE_CURRENCY: z.string(),
		STRIPE_WEBHOOK_SECRET: z.string().optional(),

		ENABLE_STRIPE_TAX: z
			.string()
			.optional()
			.transform((str) => !!str),
	},
	client: {
		// Can be provided via env or parameters to Commerce Kit, thus optional
		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
		NEXT_PUBLIC_URL: z.string().url().optional(),
	},
	runtimeEnv: {
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
		STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,

		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
			process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
		NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
		ENABLE_STRIPE_TAX: process.env.ENABLE_STRIPE_TAX,
		NEXT_EMAIL_EMAILJS: process.env.NEXT_EMAIL_EMAILJS,
		NEXT_SERVICEID_EMAILJS: process.env.NEXT_SERVICEID_EMAILJS,
		NEXT_TEMPLATEID_EMAILJS: process.env.NEXT_TEMPLATEID_EMAILJS,
	},
});
