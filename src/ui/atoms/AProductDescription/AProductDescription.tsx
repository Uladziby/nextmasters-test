import { type ProductDescriptionProps } from "@/ui/atoms/AProductDescription/type";
import { formatCurrency } from "@/utils/formatCurrency";

export const AProductDescription = ({
	product: { price, name, categories}
}: ProductDescriptionProps) => {
	return (
		<div className="flex flex-col">
			<h2 className="text-l font-bold">{name}</h2>
			<p>{categories[0]?.name}</p>
			<span>{formatCurrency(price / 100)}</span>
		</div>
	);
};
