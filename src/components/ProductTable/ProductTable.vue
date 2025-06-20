<script lang="ts" setup>
import type { ProductSortingOption, SortOrder } from '@/data-models/enums';
import type { Product } from '@/data-models/product';

import ProductTableRow from './ProductTableRow/ProductTableRow.vue';

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
		<div class="product-table__row product-table__header">
			<div class="product-table__row-sell">id</div>
			<div class="product-table__row-sell">Status</div>
			<div class="product-table__row-sell" @click="emit('sort', 'quantity')">Quantity</div>
			<div class="product-table__row-sell" @click="emit('sort', 'name')">Product name</div>
			<div class="product-table__row-sell" @click="emit('sort', 'price')">Prices</div>
		</div>

		<ProductTableRow
			v-for="product in products"
			:key="product.id"
			:product="product"
			@select="emit('select', product)"
		/>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;
@use './ProductTableRow/_ProductTableRow';

.product-table {
	@include mixins.flex-column();

	width: 100%;
	border: 1px solid colors.$moon;
	border-radius: 8px;

	&__row.product-table__header {
		.product-table__row-sell {
			@include mixins.font-style(16px, colors.$primary-color, 700);

			&:nth-child(-n + 2):hover {
				cursor: default;
			}

			&:first-child {
				justify-content: flex-start;
				text-transform: uppercase;
			}

			&:nth-child(n + 4):nth-child(-n + 5) {
				align-items: center;
				justify-content: center;
			}
		}
	}
}
</style>
