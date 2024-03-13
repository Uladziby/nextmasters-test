"use client";
import { Star } from "lucide-react";

export const StarOption = ({ value }: { value: number }) => {
	const stars =
		value === 0 ? (
			<Star size={16} color="#4b4a49" strokeWidth={1.5} />
		) : (
			Array.from({ length: value + 1 }).map((_, index) => (
				<Star key={index} size={16} color="#e0b310" strokeWidth={1.5} />
			))
		);

	return <li value={value}>{stars}</li>;
};
