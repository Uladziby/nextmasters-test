"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const DropdownComponent = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [searchValue, setSearchValue] = useState(
		searchParams.get("sort") || "",
	);

	const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const params = new URLSearchParams(searchParams);
		const value = e.target.value;
		setSearchValue(value);
		params.set("sort", value);
		router.push(`?sort=${value}`);
	};

	return (
		<div className="flex flex-row justify-end gap-4 ">
			<select
				onChange={(e) => onChangeSelect(e)}
				id="sort"
				value={searchValue || ""}
				className="arrow-down-bg block w-48 cursor-pointer appearance-none rounded-md border-gray-300 px-2 py-1 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 lg:mt-1"
			>
				<option value="">Order by:</option>
				<option value="RATING_ASC" data-testid="sort-by-rating">
					Rating (Low to High)
				</option>
				<option value="RATING_DESC" data-testid="sort-by-rating">
					Rating (High to Low)
				</option>
				<option value="NAME_ASC">Name (A-Z)</option>
				<option value="NAME_DESC">Name (Z-A)</option>
				<option value="PRICE_ASC" data-testid="sort-by-price">
					Price (Low to High)
				</option>
				<option value="PRICE_DESC" data-testid="sort-by-price">
					Price (High to Low)
				</option>
			</select>
		</div>
	);
};
