<script lang="ts" setup>
import { defineProps } from 'vue';

import type { Product } from '@/data-models/product';

defineProps<{
	products: Product[];
}>();
</script>

<template>
	<div class="product-table">
		<div class="product-table__row product-table__header">
			<div class="product-table__row-sell">id</div>
			<div class="product-table__row-sell">Status</div>
			<div class="product-table__row-sell">Quantity</div>
			<div class="product-table__row-sell">Product name</div>
			<div class="product-table__row-sell">Prices</div>
		</div>

		<div class="product-table__row" v-for="product in products" :key="product.id">
			<div class="product-table__row-sell">{{ product.id }}</div>
			<div class="product-table__row-sell">{{ product.status }}</div>
			<div class="product-table__row-sell">{{ product.quantity }}</div>
			<div class="product-table__row-sell">{{ product.name }}</div>
			<div class="product-table__row-sell">${{ product.price.toFixed(2) }}</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;

.product-table {
	@include mixins.flex-column();

	width: 100%;
	border: 1px solid colors.$moon;
	border-radius: 16px;

	&__row {
		width: 100%;
		display: grid;
		grid-template-columns: 70px 144px 125px 1fr 171px;
		height: 56px;

		&:not(:last-child) {
			border-bottom: 1px solid colors.$moon;
		}

		&-sell {
			@include mixins.flex-row();
			@include mixins.font-style(14px, colors.$primary-color);

			padding: 18px 16px;

			line-height: 20px;
			letter-spacing: 0;
			vertical-align: middle;
		}

		&-sell:nth-child(4) {
			justify-content: flex-start;
		}

		&-sell:last-child {
			border-left: 1px solid colors.$moon;
			justify-content: flex-end;
		}
	}

	&__row.product-table__header {
		&:hover {
			cursor: pointer;
		}

		.product-table__row-sell {
			@include mixins.font-style(16px, colors.$primary-color, 700);

			&:first-child {
				justify-content: flex-start;
				text-transform: uppercase;
			}

			&:nth-child(4) {
				justify-content: center;
			}

			&:last-child {
				justify-content: center;
			}
		}
	}
}
</style>
