import { type ProductDescriptionProps } from "@/ui/atoms/AProductDescription/type";
import { RatingIndicator } from "@/ui/organisms/CustomerReviews/RatingIndicator";
import { formatCurrency } from "@/utils/formatCurrency";

export const AProductDescription = ({
	product: { price, name, category, rating },
}: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex flex-col">
			<h3 className="text-l ">{name}</h3>
			<p className="font-extralight">{(category as { name: string }).name}</p>
			<div className="flex justify-between ">
				<span className="font-extralight" data-testid="product-price">
					{formatCurrency(price / 100)}
				</span>
				{rating && (
					<div className="flex items-center justify-between gap-2 font-extralight">
						<span>{rating.toFixed(2)}/5</span>
						<RatingIndicator rating={rating} />
					</div>
				)}
			</div>
		</div>
	);
};
