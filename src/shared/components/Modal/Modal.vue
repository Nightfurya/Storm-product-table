<script lang="ts" setup>
import { computed, watch } from 'vue';

import type { Product } from '@/data-models/product';

const props = defineProps<{
	selectedItem: Product | null;
}>();

const isModalOpen = computed(() => props.selectedItem !== null);

watch(isModalOpen, isOpen => {
	document.body.classList.toggle('body--modal-open', isOpen);
});
</script>

<template>
	<div v-if="isModalOpen" class="modal-overlay">
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
@use '@/assets/styles/_variables' as vars;

.modal-overlay {
	@include mixins.flex-row();

	position: fixed;
	inset: 0;
	z-index: vars.$detailed-info-modal-z-index;

	width: 100%;
	height: 100%;

	@media (min-width: calc(vars.$extra-wide-mobile-screen-breakpoint + 1px)) {
		background: rgba(colors.$black, 0.4);
	}

	@media (max-width: vars.$extra-wide-mobile-screen-breakpoint) {
		top: vars.$mobile-header-height;
		height: calc(100% - vars.$mobile-header-height);
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

	@media (max-width: vars.$extra-wide-mobile-screen-breakpoint) {
		width: 100%;
		height: 100%;
		max-height: 100%;
		position: absolute;
		bottom: 0;
		border-radius: 0px;
	}
}
</style>
