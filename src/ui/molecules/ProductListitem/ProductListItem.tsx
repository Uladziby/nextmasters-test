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
			<article className="shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover relative flex aspect-[9/16] w-full items-center overflow-hidden rounded-lg p-4 transition-shadow duration-150 ease-in-out">
				{product.images[0] && (
					<>
						<NextImage
							src={product.images[0].url}
							alt={product.name}
							width={200}
							height={200}
							loading="lazy"
							className="object-cover object-center transition-all duration-300 ease-in-out hover:scale-105"
						/>
						{/* <div className="overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-square">
						</div> */}
					</>
				)}
			</article>
			<AProductDescription product={product} />
		</Link>
	);
};
