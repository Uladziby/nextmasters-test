import { useFormStatus } from "react-dom";

export function SubmitButton(): JSX.Element {
	const { pending } = useFormStatus();

	return (
		<button
			aria-disabled={pending}
			disabled={pending}
			type="submit"
			className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-400 disabled:cursor-wait disabled:bg-slate-300"
		>
			{pending ? "Sending..." : "Submit"}
		</button>
	);
}
