"use server";

import { revalidatePath } from "next/cache";
import { createNewProduct } from "@/api/products";
import {
	newProductFormSchema,
	type NewProductFormSchema,
} from "@/ui/organisms/CreateProductForm/formSchema";

export async function createProductFormAction(
	data: NewProductFormSchema,
	collectionSlug: string,
) {
	const parsedData = await newProductFormSchema.parseAsync(data);

	await createNewProduct({ ...parsedData }, collectionSlug);

	revalidatePath(`/collections/${collectionSlug}`);

	return parsedData;
}
