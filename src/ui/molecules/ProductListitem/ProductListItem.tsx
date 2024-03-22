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
		<li className="list-none">
			<Link href={`/product/${product.id}`}>
				<article className=" cursor-pointer">
					{product.images[0] && (
						<>
							<div className="overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-square">
								<NextImage
									src={product.images[0]?.url}
									alt={product.images[0]?.alt}
									width={150}
									height={150}
									className="h-full w-full object-cover object-center  transition-all duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<AProductDescription product={product} />
						</>
					)}
				</article>
			</Link>
		</li>
	);
};
