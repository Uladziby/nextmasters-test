"use server";
import { cookies } from "next/headers";

export async function removeCookieCartId() {
	cookies().delete("cartId");
}
