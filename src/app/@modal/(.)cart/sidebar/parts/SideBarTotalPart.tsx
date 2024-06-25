export const SideBarTotalPart = ({ totalPrice }: { totalPrice: string }) => {
	return (
		<>
			<div className="flex justify-between text-base font-medium text-slate-900">
				<p>Total</p>
				<p className="small-caps">{totalPrice}</p>
			</div>
			<p className="mt-0.5 text-sm text-slate-500">
				Shipping and taxes will be added at the next step
			</p>
		</>
	);
};
