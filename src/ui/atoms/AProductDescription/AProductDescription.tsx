import { type ProductDescriptionProps } from "@/ui/atoms/AProductDescription/type";
import { RatingIndicator } from "@/ui/organisms/CustomerReviews/RatingIndicator";
import { formatCurrency } from "@/utils/formatCurrency";

export const AProductDescription = ({
	product: { price, name, categories, rating },
}: ProductDescriptionProps) => {
	return (
		<div className="flex flex-col">
			<h3 className="text-l ">{name}</h3>
			<p className="font-extralight">{categories[0]?.name}</p>
			<div className="flex justify-between ">
				<span className="font-extralight" data-testid="product-price">
					{formatCurrency(price / 100)}
				</span>
				{rating && (
					<div className="flex items-center justify-between gap-2 font-extralight">
						<span>{rating.toFixed(1)}/5</span>
						<RatingIndicator rating={rating} />
					</div>
				)}
			</div>
		</div>
	);
};
