import { ProductListItem } from "@/ui/molecules/ProductItem/ProductListItem";
import { type ProductItemType } from "@/ui/types";

export const ProductList = ({ products }: {products :ProductItemType[] }) => {
    return (
        <ul className="grid grid-cols-1">
            {products.map((product) => {
                return (<ProductListItem key={product.id} product={product} />) 
            })}
            
        </ul>
    )
} ;  