export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const formattedPrice = (value: number, quantity: number) => {
	return formatCurrency((value * quantity) / 100);
};
