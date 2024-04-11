import { type Metadata } from "next/types";
import { notFound } from "next/navigation";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import {
	getCollectionBySlug,
	getProductsByCollection,
} from "@/api/collections";

type CollectionPageProps = {
	params: {
		collection: string;
		pageNumber: string;
	};
};

export async function generateMetadata({
	params,
}: CollectionPageProps): Promise<Metadata> {
	const response = await getCollectionBySlug(params.collection);
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
	const { data } = await getProductsByCollection(params.collection);
	const collection = await getCollectionBySlug(params.collection);

	return (
		<div>
			<h1 className="my-4 flex justify-center text-xl" role="heading">
				{collection.name}
			</h1>
			<ul className="grid grid-cols-2 grid-rows-5 gap-4 lg:grid-cols-3 xl:grid-cols-4">
				{data &&
					data.map((product) => (
						<ProductListItem key={product.id} product={product} />
					))}
			</ul>
		</div>
	);
}
