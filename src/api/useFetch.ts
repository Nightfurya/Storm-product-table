import { type Ref, ref } from 'vue';

import products from '../data/products.json';

interface UseFetchHookResult<T> {
	isLoading: Ref<boolean>;
	data: Ref<T>;
	error: Ref<string | null>;
	fetchData: () => Promise<void>;
}

/**
 * Prepared fetch helper for further interaction with real API
 */
// export function useFetch<T>(url: string, init?: RequestInit): UseFetchHookResult<T> {
// 	const isLoading = ref<boolean>(false);
// 	const data = ref<T>([] as T);
// 	const error = ref<string | null>(null);

// 	async function fetchData(): Promise<void> {
// 		isLoading.value = true;
// 		data.value = [];
// 		error.value = null;

// 		try {
// 			const response = await fetch(url, init);

// 			if (!response.ok) {
// 				throw new Error('Failed to load data.');
// 			}

// 			data.value = (await response.json()) as T;
// 		} catch (e: any) {
// 			error.value = e.message;
// 		} finally {
// 			isLoading.value = false;
// 		}
// 	}

// 	return { isLoading, data: data as Ref<T>, error, fetchData };
// }

export function useFetch<T>(): UseFetchHookResult<T> {
	const isLoading = ref<boolean>(false);
	const data = ref<T>([] as T);
	const error = ref<string | null>(null);

	async function fetchData(): Promise<void> {
		isLoading.value = true;
		data.value = [];
		error.value = null;

		setTimeout(() => {
			try {
				data.value = products as T;
			} catch (e: any) {
				error.value = e.message;
			} finally {
				isLoading.value = false;
			}
		}, 2500);
	}

	return { isLoading, data: data as Ref<T>, error, fetchData };
}
