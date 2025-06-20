export const ModalPart = {
	HEADER: 'header',
	CONTENT: 'content',
	FOOTER: 'footer',
} as const;

export type ModalPart = (typeof ModalPart)[keyof typeof ModalPart];

export const SortOrder = {
	DEFAULT: 'default',
	ASC: 'asc',
	DESC: 'desc',
} as const;

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

export const ProductSortingOption = {
	QUANTITY: 'quantity',
	NAME: 'name',
	PRICE: 'price',
} as const;

export type ProductSortingOption = (typeof ProductSortingOption)[keyof typeof ProductSortingOption];
