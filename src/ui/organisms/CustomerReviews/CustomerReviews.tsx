import { getProductReviewByIdGraphql } from "@/api/products";
import { RatingIndicator } from "@/ui/organisms/CustomerReviews/RatingIndicator";
import { formatDate } from "@/utils/formatDate";

export const CustomerReviews = async ({ productId }: { productId: string }) => {
	const reviews = await getProductReviewByIdGraphql(productId);

	return (
		<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
			<h3>Recent reviews</h3>
			{reviews
				.reverse()
				.slice(0, 10)
				.map(({ id, author, title, updatedAt, rating, description }) => {
					return (
						<div className="my-12" key={id}>
							<h4 className="text-sm font-bold text-gray-900">{author}</h4>
							<div className="mt-1 flex flex-row items-center justify-between gap-2">
								<div className="flex gap-2">
									<RatingIndicator rating={rating} />
									<span>{rating}/5</span>
								</div>
								<span className="text-sm text-gray-400">
									{formatDate(String(updatedAt))}
								</span>
							</div>
							<div>
								<p className="mb-2 mt-4 space-y-6 text-sm font-bold text-gray-600">
									{title}
								</p>
								<p className="mt-2 text-sm italic text-gray-600">
									{description}
								</p>
							</div>
						</div>
					);
				})}
		</div>
	);
};
