export interface Product {
	id: number;
	name: string;
	keyFeatures: string[];
	description: string;
	serial: string;
	status: string;
	quantity: number;
	price: number;
	image?: string;
}
