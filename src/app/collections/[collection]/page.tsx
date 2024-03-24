import { type Metadata } from "next/types";
import { notFound } from "next/navigation";
import { getCollectionProducts } from "@/api/collections";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";

type CollectionPageProps = {
	params: {
		collection: string;
		pageNumber: string;
	};
};

export async function generateMetadata({
	params,
}: CollectionPageProps): Promise<Metadata> {
	const response = await getCollectionProducts(params.collection);
	if (!response) {
		return notFound();
	}

	return {
		title: response.name,
	};
}

export default async function CollectionPage({
	params,
}: {
	params: { collection: string; collectionSlug: string };
}) {
	const data = await getCollectionProducts(params.collection);
	const products = data?.products;

	return (
		<div>
			<h1 className="my-4 flex justify-center text-xl" role="heading">
				{data?.name}
			</h1>
			<ul className="flex items-center justify-center gap-4">
				{products &&
					products.map((product) => (
						<ProductListItem key={product.id} product={product} />
					))}
			</ul>
		</div>
	);
}
