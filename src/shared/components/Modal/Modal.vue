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
	background: rgba(0, 0, 0, 0.6);
	z-index: 1000;
}

.modal {
	background: white;
	padding: 24px;
	border-radius: 12px;
	width: 90%;
	max-width: 480px;
	text-align: center;
}
</style>
