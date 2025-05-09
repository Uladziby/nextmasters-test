export const TitleForm = ({ children }: { children: string }) => {
	return (
		<div className="flex w-full items-center justify-center space-x-1">
			<span className="text-3xl font-semibold uppercase tracking-wide text-secondary">
				{children}
			</span>
		</div>
	);
};
