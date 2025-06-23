<script lang="ts" setup>
import { ProductSortingOption, SortOrder } from '@/data-models/enums';
import type { Product } from '@/data-models/product';

import TableHeader from './Header/Header.vue';
import Row from './Row/Row.vue';

defineProps<{
	products: Product[];
	sortKey: ProductSortingOption | null;
	sortOrder: SortOrder;
}>();

const emit = defineEmits<{
	(e: 'sort', key: string): void;
	(e: 'select', selectedProduct: Product): void;
}>();
</script>

<template>
	<div class="product-table">
		<TableHeader :sortKey :sortOrder @sort="emit('sort', $event)" />

		<Row v-for="product in products" :key="product.id" :product @select="emit('select', product)" />
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;

.product-table {
	@include mixins.flex-column();

	width: 100%;
	border: 1px solid colors.$moon;
	border-radius: 8px;
	margin-bottom: 40px;
}
</style>
