<script lang="ts" setup>
import Status from '@/shared/components/Status/Status.vue';

import type { Product } from '@/data-models/product';

defineProps<{
	product: Product;
}>();

const emit = defineEmits<{
	(e: 'select', selectedProduct: Product): void;
}>();
</script>

<template>
	<div class="product-table__row" @click="emit('select', product)">
		<div class="product-table__row-sell">{{ product.id }}</div>
		<div class="product-table__row-sell padding--small">
			<Status :status-message="product.status" :severity="product.statusSeverity" />
		</div>
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
@use './_Row';

.product-table__row-sell {
	&.padding--small {
		padding: 14px 16px;
	}

	&-subtitle {
		@include mixins.font-style(12px, colors.$secondary-color);

		line-height: 20px;
		letter-spacing: 0;
		vertical-align: middle;
	}
}
</style>
