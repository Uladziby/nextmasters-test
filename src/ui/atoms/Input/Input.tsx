import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export const Input = ({
	name,
	isRequired,
}: {
	name: string;
	isRequired: boolean;
}) => {
	return (
		<label htmlFor={name}>
			<span className="text-md">{capitalizeFirstLetter(name)}</span>
			<input
				type="text"
				name={name}
				required={isRequired}
				className="mt-1 block h-12 w-full rounded-md border-gray-300 px-4 text-lg shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			/>
		</label>
	);
};
