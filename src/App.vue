<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import ProductTable from '@/components/ProductTable.vue';

import type { Product } from '@/data-models/product';

import productsData from '@/data/products.json';

const products = ref<Product[]>([]);

onMounted(() => {
	products.value = productsData;
});
</script>

<template>
	<main>
		<h1>Products</h1>
		<ProductTable :products="products" />
	</main>
</template>
