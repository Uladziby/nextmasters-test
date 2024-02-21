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
	params: { numberPage: number };
}) => {
	if (params.numberPage === 1) {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
	}
};

export default async function ProductsPage({
	params,
}: {
	params: { numberPage: string };
}) {
	const currentPage = Number(params.numberPage);

	console.log(params);

	const products = await getProducts(
		NUMBER_ITEMS_ON_PAGE * NUMBER_RECIEVED_PAGES,
		currentPage,
	);

	const startIndex = (currentPage - 1) * NUMBER_ITEMS_ON_PAGE;

	return (
		<div className="prose">
			<h1 className="flex-center flex ">Products</h1>
			<ProductList
				products={products.slice(startIndex, NUMBER_ITEMS_ON_PAGE)}
			/>
			<Pagination
				lengthArray={products.length}
				page={1}
				itemsOnPage={NUMBER_ITEMS_ON_PAGE}
			/>
		</div>
	);
}
