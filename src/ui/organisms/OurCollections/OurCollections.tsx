import { getCollections } from "@/api/collections";
import { CollectionListItem } from "@/ui/organisms/OurCollections/CollectionListItem";

export const OurCollections = async () => {
	const collections = await getCollections();

	return (
		<ul className="grid grid-cols-1 md:w-3/4 md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2">
			<CollectionListItem data={collections[0]!} />
			<CollectionListItem
				data={collections[1]!}
				className="col-start-1 row-start-2"
			/>
			<CollectionListItem
				data={collections[2]!}
				className="md:col-start-1  md:row-start-3 lg:col-start-2 lg:row-span-2 lg:row-start-1"
			/>
		</ul>
	);
};
