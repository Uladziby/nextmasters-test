import { type Metadata } from "next/types";
import { notFound } from "next/navigation";
import { PlusCircle } from "lucide-react";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";
import {
	getCollectionBySlug,
	getProductsByCollection,
} from "@/api/collections";
import { SectionHeader } from "@/ui/molecules/SectionHeader/SectionHeader";
import { CardNewElementComponent } from "@/ui/molecules/CardNewElementComponent/CardNewElementComponent";

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
	params: { collection: string };
}) {
	const { data } = await getProductsByCollection(params.collection);

	const collection = await getCollectionBySlug(params.collection);

	return (
		<div className="small:flex-row small:items-start content-container flex flex-col justify-center py-6">
			<SectionHeader subtitle={collection.name} />
			<ul className="grid w-full grid-cols-2  gap-x-4 py-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{data &&
					data.map((product) => (
						<ProductListItem key={product.id} product={product} />
					))}
				<CardNewElementComponent link={`${params.collection}`}>
					<PlusCircle size={120} color="white" />
				</CardNewElementComponent>
			</ul>
		</div>
	);
}
