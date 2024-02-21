import Link from "next/link";
import { AImage } from "@/ui/atoms/AImage/AImage";
import { AProductDescription } from "@/ui/atoms/AProductDescription/AProductDescription";
import { type ProductListItemProps } from "@/ui/molecules/ProductListitem/type";

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article className="cursor-pointer ">
					<AImage
						src={product.coverImage.src}
						alt={product.coverImage.alt}
						width={200}
						height={200}
					/>
					<AProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
