<script lang="ts" setup>
import { ProductSortingOption, SortOrder } from '@/data-models/enums';

defineProps<{
	sortKey: ProductSortingOption | null;
	sortOrder: SortOrder;
}>();

const emit = defineEmits<{
	(e: 'sort', key: string): void;
}>();

function tableHeaderSortHandler(key: ProductSortingOption) {
	emit('sort', key);
}
</script>

<template>
	<div class="product-table__row product-table__header">
		<div class="product-table__row-sell">
			<p>id</p>
		</div>
		<div class="product-table__row-sell">
			<p>Status</p>
		</div>

		<div class="product-table__row-sell" @click="tableHeaderSortHandler(ProductSortingOption.QUANTITY)">
			<p>Quantity</p>

			<img
				v-if="sortKey === ProductSortingOption.QUANTITY && sortOrder !== SortOrder.DEFAULT"
				class="product-table__row-sell-sort-icon"
				:class="{ 'narrow-cell': true, 'descending-order': sortOrder === SortOrder.DESC }"
				src="@/assets/icons/arrow-down.svg"
			/>
		</div>

		<div class="product-table__row-sell" @click="tableHeaderSortHandler(ProductSortingOption.NAME)">
			<p>Product name</p>

			<img
				v-if="sortKey === ProductSortingOption.NAME && sortOrder !== SortOrder.DEFAULT"
				class="product-table__row-sell-sort-icon"
				:class="{ 'descending-order': sortOrder === SortOrder.DESC }"
				src="@/assets/icons/arrow-down.svg"
			/>
		</div>

		<div class="product-table__row-sell" @click="tableHeaderSortHandler(ProductSortingOption.PRICE)">
			<p>Prices</p>

			<img
				v-if="sortKey === ProductSortingOption.PRICE && sortOrder !== SortOrder.DEFAULT"
				class="product-table__row-sell-sort-icon"
				:class="{ 'descending-order': sortOrder === SortOrder.DESC }"
				src="@/assets/icons/arrow-down.svg"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;
@use '../Row/_Row';

.product-table__row.product-table__header {
	.product-table__row-sell {
		@include mixins.font-style(1rem, colors.$primary-color, 700);

		position: relative;

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

		&-sort-icon {
			width: 20px;
			height: 20px;
			transition: transform 0.3s ease;

			position: absolute;
			top: 18px;
			right: 16px;

			&.narrow-cell {
				right: 8px;
			}

			&.descending-order {
				transform: rotate(180deg);
			}
		}
	}
}
</style>
