import Link from "next/link";
import NextImage from "next/image";
import { AProductDescription } from "@/ui/atoms/AProductDescription/AProductDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductListItem = ({
	product,
}: {
	product: ProductListItemFragment;
}) => {
	return (
		<Link
			href={`/product/${product.id}`}
			className="group block transition-transform duration-200 hover:scale-[1.02]"
		>
			<article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
				{product.images[0] && (
					<div className="relative aspect-[4/5] w-full">
						<NextImage
							src={product.images[0].url}
							alt={product.name}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
						/>
					</div>
				)}
				<div className="p-4">
					<AProductDescription product={product} />
				</div>
			</article>
		</Link>
	);
};
