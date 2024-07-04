import { getCollections } from "@/api/collections";
import { CollectionListItem } from "@/ui/organisms/OurCollections/CollectionListItem";

export const OurCollections = async () => {
	const collections = await getCollections();

	return (
		<ul className="grid w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2">
			<li className="our-collections-item">
				<CollectionListItem
					data={collections[5]!}
					className="collection-common-styles"
				/>
			</li>
			<li className="our-collections-item col-start-1 row-start-2 ">
				<CollectionListItem
					data={collections[4]!}
					className=" collection-common-styles"
				/>
			</li>
			<li className="our-collections-item md:col-start-1 md:row-start-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
				<CollectionListItem
					data={collections[3]!}
					className="collection-common-styles"
				/>
			</li>
		</ul>
	);
};
