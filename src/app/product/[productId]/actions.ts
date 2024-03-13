"use server";

import { revalidatePath } from "next/cache";
import { createProductReviewGraphql } from "@/api/products";
import {
	reviewFormSchema,
	type ReviewFormSchema,
} from "@/ui/organisms/ReviewForm/formSchema";

export const reviewFormAction = async (id: string, data: ReviewFormSchema) => {
	const parsedData = await reviewFormSchema.parseAsync(data);
	await createProductReviewGraphql(id, parsedData);
	revalidatePath(`/product/${id}`);
};
