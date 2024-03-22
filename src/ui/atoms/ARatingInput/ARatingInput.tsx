import { Star } from "lucide-react";
import React, { useState } from "react";

export const ARatingInput = ({
	name,
	label,
	initialStars,
}: {
	name: string;
	label: string;
	initialStars: number;
}) => {
	const [rating, setRating] = useState<number | null>(null);
	const [hover, setHover] = useState<number | null>(null);
	const [totalStars] = useState<number>(initialStars);

	return (
		<label className="my-4 flex flex-col">
			<span className="text-xs">{label}</span>
			<div className="flex">
				{Array.from({ length: totalStars }).map((_, index) => {
					const currentRating = index + 1;

					return (
						<label key={index}>
							<input
								aria-label={String(currentRating)}
								key={index}
								type="radio"
								name={name}
								value={currentRating}
								onChange={(event) => setRating(parseInt(event.target.value))}
							/>
							<span
								className="m-1 size-8 cursor-pointer"
								style={{
									color:
										currentRating <= (hover || rating!)
											? "#6366f1"
											: "#3e3f41af",
								}}
								onMouseEnter={() => setHover(currentRating)}
								onMouseLeave={() => setHover(null)}
							>
								<Star size={24} strokeWidth={3} />
							</span>
						</label>
					);
				})}
			</div>
		</label>
	);
};
