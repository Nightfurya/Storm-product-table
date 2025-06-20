import type { Severity } from '../shared/helpers/getSeverityClassName';

export interface Product {
	id: number;
	name: string;
	keyFeatures: string[];
	description: string;
	serial: string;
	status: string;
	statusSeverity: Severity;
	quantity: number;
	price: number;
	image?: string;
}
