<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

import AppHeader from '@/components/AppHeader/AppHeader.vue';
import ProductDetailedInfoModal from '@/components/ProductDetailedInfoModal/ProductDetailedInfoModal.vue';
import ProductTable from '@/components/ProductTable/ProductTable.vue';
import ProductTablePagination from '@/components/ProductTable/ProductTablePagination/ProductTablePagination.vue';

import type { Product } from '@/data-models/product';

import productsData from '@/data/products.json';

const products = ref<Product[]>([]);

onMounted(() => {
	products.value = productsData;
});

const selectedProduct = ref<Product | null>(null);

const searchInputValue = ref<string>('');
const confirmedSearchInputValue = ref<string>('');

const filteredProducts = computed((): Product[] =>
	products.value.filter(({ name, serial }) => {
		const searchValue = confirmedSearchInputValue.value.toLowerCase();

		return name.toLowerCase().includes(searchValue) || serial.toLowerCase().includes(searchValue);
	}),
);

function applySearch(): void {
	confirmedSearchInputValue.value = searchInputValue.value;
}
</script>

<template>
	<AppHeader v-model="searchInputValue" @applySearch="applySearch" />

	<main>
		<ProductTablePagination :shownRows="filteredProducts.length" :totalRows="products.length" />
		<ProductTable :products="filteredProducts" @select="selectedProduct = $event" />
	</main>

	<ProductDetailedInfoModal :selectedProduct="selectedProduct" @close="selectedProduct = null" />
</template>

<style scoped lang="scss">
main {
	width: 100%;
}
</style>
