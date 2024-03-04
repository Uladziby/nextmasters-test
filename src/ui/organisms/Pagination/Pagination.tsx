/** @format */
"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

export interface PaginationProps {
	lengthArray: number;
	page: number;
	itemsOnPage: number;
}

export const Pagination = ({
	lengthArray = 0,
	page,
	itemsOnPage,
}: PaginationProps) => {
	const pages = Math.ceil(lengthArray / itemsOnPage);
	const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

	return (
		<div className="flex flex-none items-center justify-center bg-transparent px-4 sm:px-6">
			<nav
				className="isolate inline-flex -space-x-px rounded-md shadow-sm"
				aria-label="pagination"
			>
				<ActiveLink
					href={`/products/${page - 1}` as Route}
					className={`${page === 1 ? "invisible" : "visible"} relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
					activeClassName={""}
				>
					<span className="sr-only">Previous</span>

					<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
				</ActiveLink>
				{pageNumbers.map((number) => {
					return (
						<ActiveLink
							key={number}
							href={`/products/${number}` as Route}
							className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
								page === number
									? "bg-amber-800 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									: " text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
							}`}
							activeClassName={""}
						>
							{number}
						</ActiveLink>
					);
				})}
				<ActiveLink
					href={`/task/${page + 1}` as Route}
					className={`${page < pages ? "visible" : "invisible"} relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
					activeClassName={""}
				>
					<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
				</ActiveLink>
			</nav>
		</div>
	);
};
