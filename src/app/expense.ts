import { SafeResourceUrl } from '@angular/platform-browser';

export interface Expense {
		timestamp: string;
		photo: SafeResourceUrl;
		amount: number;
		description: string;
		status: string;
}