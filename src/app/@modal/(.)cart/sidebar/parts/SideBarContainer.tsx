export const SideBarContainer = ({ children }: { children: JSX.Element[] }) => {
	return (
		<div className="animation-slide-from-right absolute bottom-0 right-0 top-0 z-30 flex h-full flex-col overflow-hidden bg-white shadow-xl sm:w-1/2 lg:w-1/3">
			{children}
		</div>
	);
};
