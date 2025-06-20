<script lang="ts" setup>
defineProps<{
	shownRows: number;
	totalRows: number;
}>();
</script>

<template>
	<div class="product-count">
		<p class="title">Products</p>
		<p class="rows-counter">{{ shownRows }} of {{ totalRows }} results</p>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;

.product-count {
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	.title {
		@include mixins.font-style(16px, colors.$primary-color, 700);

		line-height: 20px;
		letter-spacing: 0;
		vertical-align: middle;

		margin-right: 10px;
	}

	.rows-counter {
		@include mixins.font-style(12px, colors.$secondary-color, 400);

		line-height: 20px;
		letter-spacing: 0;
	}
}
</style>
