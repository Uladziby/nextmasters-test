export const Loader = () => {
	return (
		<div
			aria-busy="true"
			className="absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-transparent"
		>
			<div
				aria-busy="true"
				className="flex h-full w-full items-center justify-center overflow-hidden bg-transparent"
			>
				<div
					className="spinny-thing animate-spinny before:bg-slate-100"
					role="status"
				></div>
			</div>
		</div>
	);
};
