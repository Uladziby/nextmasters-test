import { getProductsByOrder } from "@/api/products";
import { ATitle } from "@/ui/atoms/ATitle/ATitle";
import { DropdownComponent } from "@/ui/molecules/ProductListitem/DropdownComponent/DropdownComponent";
import { Pagination } from "@/ui/organisms/Pagination/Pagination";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { NUMBER_ITEMS_ON_PAGE } from "@/utils/constatnts";

export const generateStaticParams = async ({
	params,
}: {
	params: { pageNumber: number };
}) => {
	if (params.pageNumber === 1) {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
	}
};

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { sort: string; take: string };
}) {
	const currentPage = Number(params.pageNumber);
	const skipItems = (currentPage - 1) * NUMBER_ITEMS_ON_PAGE;
	const takeItems = Number(searchParams.take);
	const { data, meta } = await getProductsByOrder(
		NUMBER_ITEMS_ON_PAGE,
		skipItems,
		searchParams.sort,
	);

	const products = data.slice(0, takeItems - skipItems || meta.total);

	return (
		<>
			<ATitle className="text-center text-4xl">All products</ATitle>
			<DropdownComponent />
			<ProductList products={products} />
			<Pagination
				lengthArray={takeItems || meta.total}
				page={currentPage}
				itemsOnPage={NUMBER_ITEMS_ON_PAGE}
			/>
		</>
	);
}
