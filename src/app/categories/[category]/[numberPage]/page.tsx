import { notFound } from "next/navigation";
import { type Metadata } from "next/types";
import { getProductsByCategory } from "@/api/category";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { Pagination } from "@/ui/organisms/Pagination/Pagination";
import { NUMBER_ITEMS_ON_PAGE } from "@/utils/constatnts";

type CategoriesPageProps = {
	params: {
		category: string;
		pageNumber: string;
	};
};

export async function generateMetadata({
	params,
}: CategoriesPageProps): Promise<Metadata> {
	const response = await getProductsByCategory(params.category);
	if (!response) {
		return notFound();
	}
	return {
		title: response.data[0]?.category?.name,
	};
}

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; numberPage: string };
}) {
	const { data } = await getProductsByCategory(params.category);

	const products = data;

	if (!products) return notFound();

	const currentPage = Number(params.numberPage);
	const startProductIndex = (currentPage - 1) * NUMBER_ITEMS_ON_PAGE;
	const endProductIndex = NUMBER_ITEMS_ON_PAGE * currentPage;

	return (
		<>
			<h1 className="mx-20 border-b-2 pb-4 text-center text-3xl text-slate-600">
				{capitalizeFirstLetter(params.category)}
			</h1>
			<ul
				className="mx-auto grid max-w-4xl grid-cols-4 gap-4 "
				data-testid="products-list"
			>
				{products &&
					products?.slice(startProductIndex, endProductIndex).map((p) => (
						<li key={p.id} className="list-none">
							<ProductListItem product={p} />
						</li>
					))}
			</ul>
			<Pagination
				lengthArray={products.length}
				page={currentPage}
				itemsOnPage={NUMBER_ITEMS_ON_PAGE}
			/>
		</>
	);
}
