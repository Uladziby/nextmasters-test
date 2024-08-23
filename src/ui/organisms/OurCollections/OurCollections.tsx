import { getCollections } from "@/api/collections";
import { WrapperSection } from "@/ui/atoms/WrapperSection/WrapperSection";
import { CollectionListItem } from "@/ui/organisms/OurCollections/CollectionListItem";

export const OurCollections = async () => {
	const collections = await getCollections();

	return (
		<WrapperSection>
			<div className="grid items-center gap-4 rounded sm:grid-cols-1 lg:grid-cols-[70%_30%] ">
				<ul className="grid w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2">
					<li className="our-collections-item group rounded-tl-lg">
						<CollectionListItem
							data={collections[5]!}
							className="collection-common-styles"
						/>
					</li>
					<li className="our-collections-item group col-start-1 row-start-2 justify-center rounded-bl-lg ">
						<CollectionListItem
							data={collections[4]!}
							className=" collection-common-styles"
						/>
					</li>
					<li className="our-collections-item group md:col-start-1 md:row-start-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
						<CollectionListItem
							data={collections[3]!}
							className="collection-common-styles"
						/>
					</li>
				</ul>
				<div className=" break-keep py-12 text-4xl font-heavy text-secondary sm:text-center md:text-4xl lg:py-0 lg:text-start lg:text-4xl xl:text-6xl">
					Discover our collections.
				</div>
			</div>
		</WrapperSection>
	);
};
