import { type Metadata } from "next/types";
import { getProductsByOrder } from "@/api/products";
import { DropdownComponent } from "@/ui/molecules/ProductListitem/DropdownComponent/DropdownComponent";
import { Pagination } from "@/ui/organisms/Pagination/Pagination";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { NUMBER_ITEMS_ON_PAGE } from "@/utils/constatnts";
import { SectionHeader } from "@/ui/molecules/SectionHeader/SectionHeader";

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

export async function generateMetadata({
	params,
}: {
	params: string;
}): Promise<Metadata> {
	return {
		title: "All products",
		description: `All products, page number: ${params}`,
	};
}

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { sort: string; take: string };
}) {
	const currentPage = Number(params.pageNumber);
	const skipItems = (currentPage - 1) * NUMBER_ITEMS_ON_PAGE;
	const takeItems = Number(searchParams.take) || NUMBER_ITEMS_ON_PAGE;
	const { data, meta } = await getProductsByOrder(
		takeItems,
		skipItems,
		searchParams.sort,
	);
	if (!meta) return null;

	return (
		<>
			<SectionHeader subtitle="All products" />
			<DropdownComponent />
			<ProductList products={data} />
			<Pagination
				lengthArray={meta.total}
				page={currentPage}
				itemsOnPage={NUMBER_ITEMS_ON_PAGE}
			/>
		</>
	);
}
