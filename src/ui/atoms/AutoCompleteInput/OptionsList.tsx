export const OptionsList = ({ options }: { options: string[] }) => {
	return (
		<ul className="border- absolute top-full z-10 max-h-48 w-full list-none overflow-y-auto">
			{options.map((option) => (
				<li
					key={option}
					className="heigh flex h-8 w-full cursor-pointer justify-center px-4 py-2 text-left leading-5 focus:hover:bg-yellow-700"
				>
					<div className="overflow-hidden text-ellipsis whitespace-nowrap">
						{option}
					</div>
				</li>
			))}
		</ul>
	);
};
