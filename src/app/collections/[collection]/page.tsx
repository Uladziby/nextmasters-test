import { type Metadata } from "next/types";
import { notFound } from "next/navigation";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import {
	getCollectionBySlug,
	getProductsByCollection,
} from "@/api/collections";
import { SectionHeader } from "@/ui/molecules/SectionHeader/SectionHeader";

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
		<>
			<SectionHeader title={"Discover"} subtitle={collection.name} />
			<div className="flex h-full w-full items-center justify-center">
				<ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
					{data &&
						data.map((product) => (
							<ProductListItem key={product.id} product={product} />
						))}
				</ul>
			</div>
		</>
	);
}
