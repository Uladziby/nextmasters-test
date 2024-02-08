import Image from "next/image";
import { type ImageType } from "@/ui/atoms/AImage/type";

export const AImage = ({ src, alt, width, height, dataTestId }: ImageType) => {
	return <Image src={src} alt={alt} width={width} height={height} data-testid={dataTestId} />;
};
