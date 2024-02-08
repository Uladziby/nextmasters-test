import { type ProductDescriptionProps } from "@/ui/atoms/AProductDescription/type";

export const AProductDescription = ({ product : {name , category, price} }: ProductDescriptionProps) => {
    return <div>
        <h2>{name}</h2>
        <p>{category}</p>
        <p>{price}</p>
    </div>;
};