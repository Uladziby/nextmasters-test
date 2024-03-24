import { useSearchParams } from "next/navigation";

export const useGetTestIdBySortValue = () => {
	const searchParams = useSearchParams();
	const sort_value = new URLSearchParams(searchParams)
		.get("sort")
		?.split("_")[0];

	switch (sort_value) {
		case "RATING":
			return "product-rating";
		case "PRICE":
			return "product-price";
		case "NAME":
			return "product-name";
		default:
			return "";
	}
};
