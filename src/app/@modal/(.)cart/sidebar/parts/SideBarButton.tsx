export const SideBarButton = () => {
	return (
		<form className="mt-6">
			<a
				href="/cart"
				className="block w-full rounded border border-transparent bg-slate-600 px-6 py-3 text-center font-medium text-slate-50 hover:bg-blue-600 disabled:bg-gray-300"
			>
				Go to Cart
			</a>
		</form>
	);
};
