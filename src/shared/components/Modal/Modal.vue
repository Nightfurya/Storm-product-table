<script lang="ts" setup>
import type { Product } from '@/data-models/product';

defineProps<{
	selectedItem: Product | null;
}>();
</script>

<template>
	<div v-if="selectedItem" class="modal-overlay">
		<div class="modal">
			<slot name="header"></slot>
			<slot name="content"></slot>
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;

.modal-overlay {
	@include mixins.flex-row();

	position: fixed;
	inset: 0;
	z-index: 1000;

	width: 100%;
	height: 100%;

	@media (min-width: 669px) {
		background: rgba(colors.$black, 0.4);
	}
}

.modal {
	background-color: colors.$snow;
	border-radius: 8px;
	padding: 40px;

	width: 100%;
	max-width: 684px;
	max-height: 616px;

	@include mixins.flex-column();

	@media (max-width: 768px) {
		width: 96vw;
		padding: 24px;
	}

	@media (max-width: 668px) {
		width: 100%;
		height: calc(100% - 148px);
		max-height: calc(100% - 148px);
		position: absolute;
		bottom: 0;
		border-radius: 0px;
	}

	@media (max-width: 560px) {
		padding: 16px;
	}

	@media (max-width: 480px) {
		padding: 12px;
	}
}
</style>
