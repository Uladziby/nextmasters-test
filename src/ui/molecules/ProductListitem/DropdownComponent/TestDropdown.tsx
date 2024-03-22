"use client";
import React, { useState } from "react";

interface InputProps {
	placeholder: string;
	options: string[];
}

export const InputWithDropdown: React.FC<InputProps> = ({
	placeholder,
	options,
}) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
		filterOptions(value);
		setShowDropdown(true);
	};

	const handleOptionClick = (option: string) => {
		setInputValue(option);
		setShowDropdown(false);
	};

	const filterOptions = (value: string) => {
		const filtered = options.filter((option) =>
			option.toLowerCase().includes(value.toLowerCase()),
		);
		setFilteredOptions(filtered);
	};

	return (
		<div className="relative">
			<input
				type="text"
				placeholder={placeholder}
				value={inputValue}
				onChange={handleInputChange}
				className="w-64 rounded-md border border-gray-300 px-4 py-2 text-black focus:border-blue-500 focus:outline-none"
			/>
			{showDropdown && (
				<ul className="absolute z-10 mt-1 w-64 rounded-b-md border border-gray-300 bg-white">
					{filteredOptions.map((option) => (
						<li
							key={option}
							onClick={() => handleOptionClick(option)}
							className="cursor-pointer px-4 py-2 hover:bg-gray-100"
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
