<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

import { useFetch } from '@/api/useFetch';

import AppHeader from '@/components/AppHeader/AppHeader.vue';
import ProductDetailedInfoModal from '@/components/ProductDetailedInfoModal/ProductDetailedInfoModal.vue';
import ProductTable from '@/components/ProductTable/ProductTable.vue';
import ProductTablePagination from '@/components/ProductTable/ProductTablePagination/ProductTablePagination.vue';

import { ProductSortingOption, SortOrder } from '@/data-models/enums';
import type { Product } from '@/data-models/product';

// const { data: productsList, isLoading, fetchData } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
const { data: fetchedProductsList, isLoading, fetchData: fetchProductsList } = useFetch<Product[]>();

onMounted(() => {
	fetchProductsList();
});

const sortKey = ref<ProductSortingOption | null>(null);
const sortOrder = ref<SortOrder | null>(SortOrder.DEFAULT);

const selectedProduct = ref<Product | null>(null);

const searchInputValue = ref<string>('');
const confirmedSearchInputValue = ref<string>('');

const filteredAndSortedProductsList = computed((): Product[] => {
	let productsList: Product[] = [...fetchedProductsList.value];

	if (confirmedSearchInputValue.value.length) {
		productsList = productsList.filter(({ name, serial }) => {
			const searchValue = confirmedSearchInputValue.value.toLowerCase();

			return name.toLowerCase().includes(searchValue) || serial.toLowerCase().includes(searchValue);
		});
	}

	if (sortKey.value && sortOrder.value !== SortOrder.DEFAULT) {
		productsList.sort((a, b) => {
			const aValue: string | number = a[sortKey.value];
			const bValue: string | number = b[sortKey.value];

			if (typeof aValue === 'number' && typeof bValue === 'number') {
				return sortOrder.value === SortOrder.ASC ? aValue - bValue : bValue - aValue;
			}

			if (typeof aValue === 'string' && typeof bValue === 'string') {
				return sortOrder.value === SortOrder.ASC ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
			}

			return 0;
		});
	}

	return productsList;
});

function applySearch(): void {
	confirmedSearchInputValue.value = searchInputValue.value;
}

function sortHandler(key: ProductSortingOption) {
	if (sortKey.value !== key) {
		sortKey.value = key;
		sortOrder.value = SortOrder.ASC;

		return;
	}

	switch (sortOrder.value) {
		case SortOrder.ASC: {
			sortOrder.value = SortOrder.DESC;
			return;
		}
		case SortOrder.DESC: {
			sortOrder.value = SortOrder.DEFAULT;
			return;
		}
		default:
			sortOrder.value = SortOrder.ASC;
			break;
	}
}
</script>

<template>
	<AppHeader v-model="searchInputValue" @applySearch="applySearch" />

	<div v-if="isLoading" class="loader"><p>Data is loading... Considering adding fancy spinner :D</p></div>

	<main v-if="!isLoading">
		<ProductTablePagination :shownRows="filteredAndSortedProductsList.length" :totalRows="fetchedProductsList.length" />
		<ProductTable
			:products="filteredAndSortedProductsList"
			:sortKey="sortKey"
			:sortOrder="sortOrder"
			@select="selectedProduct = $event"
			@sort="sortHandler"
		/>
	</main>

	<ProductDetailedInfoModal :selectedProduct="selectedProduct" @close="selectedProduct = null" />
</template>

<style scoped lang="scss">
main {
	width: 100%;
}

.loader {
	text-align: center;
}
</style>
