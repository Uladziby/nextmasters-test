import { type ProductDescriptionProps } from "@/ui/atoms/AProductDescription/type";
import { formatCurrency } from "@/utils/formatCurrency";

export const AProductDescription = ({ product : {name , category, price} }: ProductDescriptionProps) => {
    return <div className="flex flex-col">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{category}</p>
        <span>{formatCurrency(price/100)}</span>
    </div>;
};