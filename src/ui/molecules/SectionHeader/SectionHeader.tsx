export const SectionHeader = ({
	title,
	subtitle,
}: {
	title?: string;
	subtitle: string;
}) => {
	return (
		<div className="flex w-full items-center space-x-1">
			<span className="text-3xl font-semibold uppercase tracking-wide text-secondary">
				{title}
			</span>
			<div className="text-3xl  font-heavy uppercase tracking-wide text-secondary">
				{subtitle}
			</div>
			<div className="h-[2px] flex-grow bg-secondary"></div>
		</div>
	);
};
