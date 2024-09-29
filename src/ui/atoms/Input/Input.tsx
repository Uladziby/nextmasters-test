import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export const Input = ({
	name,
	label,
	isRequired = false,
	error,
	type = "text",
	placeholder,
	register,
}: {
	name: string;
	isRequired?: boolean;
	error?: string;
	type?: string;
	placeholder?: string;
	label?: string;
	register: any;
}) => {
	return (
		<>
			<label htmlFor={name}>
				{label && (
					<span className="text-md text-secondary">
						{capitalizeFirstLetter(label)}
					</span>
				)}
				<input
					{...register}
					id={name}
					type={type}
					name={name}
					placeholder={placeholder}
					required={isRequired}
					className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-lg text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600"
				/>
			</label>
			{error && error.length > 0 && (
				<span className="mt-1 block text-sm text-red-500">{error}</span>
			)}
		</>
	);
};
