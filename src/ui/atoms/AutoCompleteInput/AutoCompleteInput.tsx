"use client";
import { Loader, Search, X } from "lucide-react";
import { type ChangeEvent, useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import clsx from "clsx";

const activeClassName =
	" w-40 h-10 rounded-xl text-black -left-[100px] -top-[4px] opacity-100 [transition:inset_300ms_ease,_padding_300ms_ease,_color_200ms_ease_50ms,_opacity_300ms_ease]";
const activeClassButton =
	"-top-[-6px] -left-[105px] rounded-sm opacity-100 [transition:inset_300ms_ease,_padding_300ms_ease,_color_200ms_ease_50ms,_opacity_300ms_ease]";

export const AutoCompleteInput = () => {
	const [isOpened, setIsOpened] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const router = useRouter();
	const [valueInput, setValueInput] = useState<string>(
		searchParams.get("query") || "",
	);

	useEffect(() => {
		if (valueInput.trim() === "") {
			return;
		}
		delayDebounceFn(valueInput);
		return () => {
			delayDebounceFn.cancel();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [valueInput]);

	const delayDebounceFn = useDebouncedCallback((valueInput: string) => {
		handleSearch(valueInput);
	}, 1000);

	const handleSearch = (term: string) => {
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		router.replace(`/search?${params.toString()}`);
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setValueInput(inputValue);
	};

	const clearInput = () => {
		setValueInput("");
		params.delete("query");
		router.replace(`/`);
	};

	const handlerSearch = () => {
		if (!isOpened) {
			inputRef.current?.focus();
		}
		setIsOpened(!isOpened);
	};

	return (
		<div className="flex items-center justify-center">
			<div className="relative flex h-10 w-16 place-content-center text-center text-[1.5rem] text-black [transition:width_300ms_ease,_flex-grow_300ms_ease]">
				<input
					role="searchbox"
					ref={inputRef}
					name="search"
					value={valueInput}
					className={clsx(
						"searchbox border bg-slate-100 px-10",
						isOpened && activeClassName,
					)}
					onChange={onChangeHandler}
				/>
				{delayDebounceFn.isPending() ? (
					<div className="absolute -left-[145%] z-10 flex animate-spinny items-center  hover:scale-125 focus:bg-transparent">
						<Loader color="black" size={18} />
					</div>
				) : (
					<button
						onClick={clearInput}
						className={clsx("searchbox ", isOpened && activeClassButton)}
					>
						<X color="black" size={18} />
					</button>
				)}
				<div
					onClick={handlerSearch}
					className="absolute grid cursor-pointer place-content-center rounded p-2 [transition:width_300ms_ease] hover:bg-slate-100"
				>
					<Search color="black" size={isOpened ? 18 : 22} />
				</div>
			</div>
		</div>
	);
};
