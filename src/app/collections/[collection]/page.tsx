import { getCollectionProducts } from "@/api/collections";
import { ProductListItem } from "@/ui/molecules/ProductListitem/ProductListItem";

export default async function CollectionPage({
	params,
}: {
	params: { collection: string; collectionSlug: string };
}) {
	const data = await getCollectionProducts(params.collection);
	const products = data?.products;

	return (
		<div>
			<h1 className="my-4 flex justify-center text-xl">{data?.name}</h1>
			<ul className="flex items-center justify-center gap-4">
				{products &&
					products.map((product) => (
						<ProductListItem key={product.id} product={product} />
					))}
			</ul>
		</div>
	);
}
