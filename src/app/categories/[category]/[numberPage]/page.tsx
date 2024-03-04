import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/api/category";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsByCategory(params.category);

	if (!products) return notFound();

	return (
		<>
			{
				<div>
					<h1>CategoryProductPage {params.category}</h1>
					{products &&
						products?.map((p) => <ProductListItem key={p.id} product={p} />)}
				</div>
			}
			<pre>{JSON.stringify(products, null, 2)}</pre>
		</>
	);
}
