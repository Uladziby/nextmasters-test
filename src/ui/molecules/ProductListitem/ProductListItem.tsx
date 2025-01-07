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
		<Link href={`/product/${product.id}`} className="group">
			<article className="rounded-large relative flex aspect-[9/16] items-center overflow-hidden rounded-lg shadow-elevation-card-rest transition-shadow duration-150 ease-in-out group-hover:shadow-elevation-card-hover">
				{product.images[0] && (
					<>
						<NextImage
							src={product.images[0].url}
							alt={product.name}
							layout="fill"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							priority={false}
							className="object-cover object-center transition-all duration-300 ease-in-out hover:scale-105"
						/>
					</>
				)}
			</article>
			<AProductDescription product={product} />
		</Link>
	);
};
