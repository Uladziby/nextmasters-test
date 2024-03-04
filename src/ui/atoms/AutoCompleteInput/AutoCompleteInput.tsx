"use client";
import { Search, X } from "lucide-react";
import { type ChangeEvent, useRef, useState } from "react";
import { OptionsList } from "@/ui/atoms/AutoCompleteInput/OptionsList";

type Timer = ReturnType<typeof setTimeout>;

export const AutoCompleteInput = () => {
	const [options, setOptions] = useState<string[]>([]);
	const controllerRef = useRef<AbortController | null>(null);
	const timerRef = useRef<Timer>();

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;

		//field.onChange(inputValue);
		makeRequest(inputValue);
	};

	const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		switch (e.key) {
			case "ArrowUp":
				break;
			case "ArrowDown":
				break;
			case "Enter":
		}
	};

	const makeRequest = (inputValue: string) => {
		if (inputValue.length < 1) {
			setOptions([]);
		} else {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			timerRef.current = setTimeout(() => {
				if (controllerRef.current) {
					controllerRef.current.abort();
				}

				controllerRef.current = new AbortController();

				setOptions([]);
			}, 300);
		}
	};

	return (
		<div className="relative flex w-44 border-b-neutral-950 ">
			<Search color="black" className="cursor-pointer" />
			<input
				type="text"
				className="h-6 w-full rounded-sm border-2 border-solid px-4 py-3 focus:border-l-stone-600 focus:outline-none"
				onKeyDown={keyDownHandler}
				onChange={onChangeHandler}
			/>
			<OptionsList options={options} />
			<X color="black" className=" hover:color cursor-pointer" />
		</div>
	);
};
