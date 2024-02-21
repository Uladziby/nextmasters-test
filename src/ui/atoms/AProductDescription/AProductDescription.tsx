import { type ProductDescriptionProps } from "@/ui/atoms/AProductDescription/type";
import { formatCurrency } from "@/utils/formatCurrency";

export const AProductDescription = ({
	product: { category, price, coverImage },
}: ProductDescriptionProps) => {
	return (
		<div className="flex flex-col">
			<h2 className="text-l font-bold">{coverImage.alt}</h2>
			<p>{category}</p>
			<span>{formatCurrency(price / 100)}</span>
		</div>
	);
};
