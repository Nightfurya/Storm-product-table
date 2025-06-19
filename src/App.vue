<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import ProductDetailedInfoModal from '@/components/ProductDetailedInfoModal/ProductDetailedInfoModal.vue';
import ProductTable from '@/components/ProductTable.vue';

import type { Product } from '@/data-models/product';

import productsData from '@/data/products.json';

const products = ref<Product[]>([]);

onMounted(() => {
	products.value = productsData;
});

const selectedProduct = ref<Product | null>(null);

function productDetailedInfoModalCloseHandler() {
	selectedProduct.value = null;
}
</script>

<template>
	<main>
		<h1>Products</h1>
		<ProductTable :products="products" @select="selectedProduct = $event" />
	</main>

	<ProductDetailedInfoModal :selectedProduct="selectedProduct" @close="productDetailedInfoModalCloseHandler" />
</template>
