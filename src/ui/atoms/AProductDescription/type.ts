import { type ProductListItemFragment } from "@/gql/graphql";

export type ProductDescriptionProps = {
	product: ProductListItemFragment;
	dataTestId?: string;
};
