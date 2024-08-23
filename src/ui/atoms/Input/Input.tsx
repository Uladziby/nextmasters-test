import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export const Input = ({
	name,
	label,
	isRequired = false,
	error,
	type = "text",
	placeholder,
}: {
	name: string;
	isRequired?: boolean;
	error?: string[];
	type?: string;
	placeholder?: string;
	label?: string;
}) => {
	return (
		<>
			<label htmlFor={name}>
				<span className="text-md text-secondary">
					{capitalizeFirstLetter(label || name)}
				</span>
				<input
					id={name}
					type={type}
					name={name}
					placeholder={placeholder}
					required={isRequired}
					className="mt-1 block h-12 w-full rounded-md border-gray-300 px-4 text-lg shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</label>
			{error && error.length > 0 && (
				<span className="mt-1 block text-sm text-red-500">
					{error.join(", ")}
				</span>
			)}
		</>
	);
};
