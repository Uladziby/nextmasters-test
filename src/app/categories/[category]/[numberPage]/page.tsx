import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/api/category";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { Pagination } from "@/ui/organisms/Pagination/Pagination";
import { NUMBER_ITEMS_ON_PAGE } from "@/utils/constatnts";

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; numberPage: string };
}) {
	const products = await getProductsByCategory(params.category);
	if (!products) return notFound();

	const currentPage = Number(params.numberPage);
	const startProductIndex = (currentPage - 1) * NUMBER_ITEMS_ON_PAGE;
	const endProductIndex = NUMBER_ITEMS_ON_PAGE * currentPage;

	return (
		<>
			<h1 className="text-center text-3xl text-slate-600">
				{capitalizeFirstLetter(params.category)}
			</h1>

			<div className="mx-auto grid max-w-4xl grid-cols-4 gap-4">
				{products &&
					products
						?.slice(startProductIndex, endProductIndex)
						.map((p) => <ProductListItem key={p.id} product={p} />)}
			</div>
			<Pagination
				lengthArray={products.length}
				page={currentPage}
				itemsOnPage={NUMBER_ITEMS_ON_PAGE}
			/>
		</>
	);
}
