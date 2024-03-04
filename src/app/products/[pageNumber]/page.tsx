import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination/Pagination";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import {
	NUMBER_ITEMS_ON_PAGE,
	NUMBER_RECIEVED_PAGES,
} from "@/utils/constatnts";

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
}: {
	params: { pageNumber: string };
}) {
	const currentPage = Number(params.pageNumber);

	const products = await getProducts(
		NUMBER_ITEMS_ON_PAGE * NUMBER_RECIEVED_PAGES,
		currentPage ? currentPage * NUMBER_ITEMS_ON_PAGE : 0,
	);

	const startIndex = (currentPage - 1) * NUMBER_ITEMS_ON_PAGE;

	return (
		<div className="min-h-70vh flex w-full flex-col justify-evenly">
			<h1 className="mb-10 flex flex-none justify-center">Products</h1>
			<div className="flex w-full flex-grow justify-center">
				<ProductList
					products={products.slice(startIndex, NUMBER_ITEMS_ON_PAGE)}
				/>
			</div>
			<Pagination
				lengthArray={products.length}
				page={1}
				itemsOnPage={NUMBER_ITEMS_ON_PAGE}
			/>
		</div>
	);
}
