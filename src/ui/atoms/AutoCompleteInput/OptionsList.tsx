export const OptionsList = ({
	options,
	handler,
}: {
	options: string[];
	handler: (option: unknown) => void;
}) => {
	return (
		<ul className="absolute z-10 mt-1 w-64 rounded-b-md border border-gray-300 bg-white">
			{options.map((option) => (
				<li
					key={option}
					onClick={() => handler(option)}
					className="cursor-pointer px-4 py-2 hover:bg-gray-100"
				>
					{option}
				</li>
			))}
		</ul>
	);
};
