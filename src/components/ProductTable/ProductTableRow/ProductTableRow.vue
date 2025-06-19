<script lang="ts" setup>
import type { Product } from '@/data-models/product';

defineProps<{
	product: Product;
}>();
defineEmits(['select']);
</script>

<template>
	<div class="product-table__row" @click="$emit('select', product)">
		<div class="product-table__row-sell">{{ product.id }}</div>
		<div class="product-table__row-sell">{{ product.status }}</div>
		<div class="product-table__row-sell">{{ product.quantity }}</div>
		<div class="product-table__row-sell">
			<p>{{ product.name }}</p>
			<p class="product-table__row-sell-subtitle">{{ product.serial }}</p>
		</div>
		<div class="product-table__row-sell">${{ product.price.toFixed(2) }}</div>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;
@use './_ProductTableRow';

.product-table__row-sell {
	&-subtitle {
		@include mixins.font-style(12px, colors.$secondary-color);

		line-height: 20px;
		letter-spacing: 0;
		vertical-align: middle;
	}
}
</style>
