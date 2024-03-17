export enum SortDirection {
	ASC = "ASC",
	DESC = "DESC",
}

export enum ProductSortBy {
	DEFAULT = "DEFAULT",
	NAME = "NAME",
	PRICE = "PRICE",
	RATING = "RATING",
}

export type DropdownComponentProps = {
	handler: (value: DropdownComponentState) => void;
};

export type DropdownComponentState = {
	orderValue: SortDirection;
	sortValue: ProductSortBy;
};
