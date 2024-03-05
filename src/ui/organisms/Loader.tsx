export default function loading() {
	return (
		<div
			aria-busy="true"
			className="absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-opacity-70"
		>
			<div
				className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
				role="status"
			>
				<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
					Loading...
				</span>
			</div>
		</div>
	);
}
