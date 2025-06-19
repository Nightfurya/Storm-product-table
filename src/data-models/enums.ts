export const ModalPart = {
	HEADER: 'header',
	CONTENT: 'content',
	FOOTER: 'footer',
} as const;

export type ModalPart = (typeof ModalPart)[keyof typeof ModalPart];
