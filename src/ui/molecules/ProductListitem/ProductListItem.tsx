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
				<article className="cursor-pointer">
					{product.images[0] && (
						<>
							<NextImage
								src={product.images[0]?.url}
								alt={product.images[0]?.alt}
								width={200}
								height={200}
							/>
							<AProductDescription product={product} />
						</>
					)}
				</article>
			</Link>
		</li>
	);
};
