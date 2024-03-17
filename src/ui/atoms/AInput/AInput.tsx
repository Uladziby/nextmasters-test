import { useController } from "react-hook-form";
import { type AInputProps } from "@/ui/atoms/AInput/type";

export const AInput = ({
	placeholder,
	label,
	type,
	name,
	dataTestId,
}: AInputProps) => {
	const {
		field,
		fieldState: { error },
		formState: {},
	} = useController({
		name,
		shouldUnregister: true,
		defaultValue: "",
		rules: { required: true },
	});

	return (
		<div className="mx-8 my-4 flex flex-col">
			<label
				className="mb-3 cursor-pointer text-left text-sm"
				aria-label={name}
			>
				{label}
			</label>
			<input
				{...field}
				data-testid={dataTestId}
				name={name}
				placeholder={placeholder}
				type={type}
			/>
			{error && (
				<strong className="block bg-red-700 text-left text-xs">
					{String(error.message)}
				</strong>
			)}
		</div>
	);
};
