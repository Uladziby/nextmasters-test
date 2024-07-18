"use client";

import { useRef } from "react";
import { Input } from "@/ui/atoms/Input/Input";

export function CreateProductForm() {
	const formRef = useRef<HTMLFormElement | null>(null);

	return (
		<form ref={formRef}>
			<div className="flex max-w-2xl flex-col gap-8">
				<Input name={"name"} isRequired={false} />
				<Input name={"description"} isRequired={false} />
				<Input name={"price"} isRequired={true} />
				<Input name={"image"} isRequired={true} />
				<Input name={"category"} isRequired={true} />
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-4 py-2 text-white"
				>
					Send
				</button>
			</div>
		</form>
	);
}
