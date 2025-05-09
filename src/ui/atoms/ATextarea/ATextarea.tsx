import { useEffect, useRef, useState } from "react";
import { useController } from "react-hook-form";
import { AlertTriangle } from "lucide-react";
import { type IATextarea } from "./type";

export const ATextarea = ({
	name,
	placeholder,
	label,
	isDisabled,
	maxLength,
	rows = 1,
	defaultValue,
}: IATextarea) => {
	const [isShowCounter, setIsShowCounter] = useState(false);

	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const handleFocus = () => {
		if (maxLength) {
			setIsShowCounter((prevState) => !prevState);
		}
	};

	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		shouldUnregister: true,
		defaultValue: defaultValue || "",
	});

	useEffect(() => {
		if (!textAreaRef.current) return;

		const initTextareaHeight = rows * 20 + 20;

		textAreaRef.current.style.height = initTextareaHeight + "px";

		textAreaRef.current.style.height =
			textAreaRef.current.scrollHeight + 16 + "px";
	}, [field.value, rows]);

	const value = field.value as string;

	return (
		<div
			className="relative flex  flex-col"
			onFocus={handleFocus}
			onBlur={handleFocus}
		>
			{label && (
				<label
					className="cursor-pointer text-left text-secondary "
					htmlFor={name}
				>
					{label}
				</label>
			)}

			<textarea
				className="w-96 rounded-md border-0 px-3.5 py-2 text-lg text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600"
				{...field}
				id={name}
				placeholder={placeholder}
				disabled={isDisabled}
				rows={rows}
				ref={textAreaRef}
			/>
			{error && (
				<span className="absolute right-4 top-1/2 h-4 w-4 translate-y-1/2 fill-red-600">
					<AlertTriangle />
				</span>
			)}
			{field.value && !error && isShowCounter && (
				<span className="self-end text-sm font-bold text-secondary">
					{value.length}/{maxLength}
				</span>
			)}
			{error && (
				<span className="mt-1 block text-sm text-red-500">{error.message}</span>
			)}
		</div>
	);
};
