"use server";

import { getProductsByOrder } from "@/api/products";

export const getProductsByOrderAction = async (
	numberPage: number,
	skipItems: number,
	value: string,
) => {
	await getProductsByOrder(numberPage, skipItems, value);
};
