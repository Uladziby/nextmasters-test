export type ProductListProps = {
    products : {
        category : string;
        price : number;
        name : string;
        coverImage :{
            src: string;
            alt: string;
        }
    }[];
    dataTestId?: string;
}