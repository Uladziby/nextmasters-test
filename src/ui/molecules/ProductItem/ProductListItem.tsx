import { AImage } from "@/ui/atoms/AImage/AImage";
import { AProductDescription } from "@/ui/atoms/AProductDescription/AProductDescription";
import { type ProductListItemProps } from "@/ui/molecules/ProductItem/type";

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<AImage
					src={product.coverImage.src}
					alt={product.coverImage.alt}
					width={200}
					height={200}
				/>
				<AProductDescription product={product} />
			</article>
		</li>
	);
};
