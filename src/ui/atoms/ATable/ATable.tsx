import { type ReactNode } from "react";

export function ATable({
	children,
	headers,
}: {
	children: ReactNode;
	headers: string[];
}) {
	return (
		<div className="mt-10 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
			<table className="min-w-full divide-y divide-gray-300">
				<thead className="bg-gray-50">
					<tr>
						{headers.map((header, idx) => (
							<th
								key={idx}
								className="py-3.5 pl-8 pr-3 text-center font-medium text-gray-900 sm:pl-6"
							>
								{header}
							</th>
						))}
						<th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"></th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
			</table>
		</div>
	);
}
