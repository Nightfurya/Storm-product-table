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
		@include mixins.font-style(1rem, colors.$primary-color, 700);

		margin-right: 10px;
	}

	.rows-counter {
		@include mixins.font-style(0.75rem, colors.$secondary-color, 400);
	}
}
</style>
