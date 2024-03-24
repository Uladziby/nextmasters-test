import { notFound } from "next/navigation";
import { type Metadata } from "next/types";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { getProductsByQuery } from "@/api/search";

export async function generateMetadata({
	params,
}: {
	params: { pageNumber: string };
}): Promise<Metadata> {
	return {
		title: `Search - page ${params.pageNumber}`,
		openGraph: {
			title: `Search - page ${params.pageNumber}`,
		},
	};
}

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	if (!searchParams.query) return notFound();
	const products = await getProductsByQuery(searchParams.query);

	return (
		<div>{products?.data && <ProductList products={products.data} />}</div>
	);
}
