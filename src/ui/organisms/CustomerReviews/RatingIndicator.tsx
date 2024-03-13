import { Star } from "lucide-react";

export const RatingIndicator = ({ rating }: { rating: number }) => {
	const stars = Array.from({ length: rating }).map((_, index) => (
		<Star key={index} size={16} color="#6366f1" strokeWidth={3} />
	));

	return <div className="flex items-center justify-center">{stars}</div>;
};
