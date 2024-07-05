export const SectionHeader = ({
	title,
	subtitle,
}: {
	title: string;
	subtitle: string;
}) => {
	return (
		<div className="flex w-full items-center space-x-1">
			<span className="text-secondary text-3xl font-semibold uppercase tracking-wide">
				{title}
			</span>
			<div className="font-heavy  text-secondary text-3xl uppercase tracking-wide">
				{subtitle}
			</div>
			<div className="h-[2px] flex-grow bg-gray-400"></div>
		</div>
	);
};
