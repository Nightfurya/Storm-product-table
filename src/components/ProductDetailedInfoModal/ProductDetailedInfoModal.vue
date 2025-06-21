<script lang="ts" setup>
import Modal from '@/shared/components/Modal/Modal.vue';

import { ModalPart } from '@/data-models/enums';
import type { Product } from '@/data-models/product';

defineProps<{
	selectedProduct: Product | null;
}>();

const emit = defineEmits<{
	(e: 'close'): void;
}>();
</script>

<template>
	<Modal :selectedItem="selectedProduct">
		<template v-slot:[ModalPart.HEADER]>
			<div class="product-modal__header">
				<h6 class="product-modal__header-title">{{ selectedProduct.name }}</h6>
				<button class="product-modal__header-close-button" @click="emit('close')" aria-label="Top control Close modal">
					<img src="@/assets/icons/x-close.svg" alt="Close" />
				</button>
			</div>
		</template>
		<template v-slot:[ModalPart.CONTENT]>
			<div class="product-modal__content">
				<div class="product-modal__content-image-wrapper">
					<img class="image" :src="selectedProduct.image" alt="No image" />
				</div>
				<div class="product-modal__content-description">
					<p class="title">Key features</p>
					<ul class="features-list">
						<li v-for="(feature, index) in selectedProduct.keyFeatures" :key="index">
							{{ feature }}
						</li>
					</ul>
					<p class="description">{{ selectedProduct.description }}</p>
				</div>
			</div>
		</template>
		<template v-slot:[ModalPart.FOOTER]>
			<div class="product-modal__footer">
				<button
					class="product-modal__footer-close-button"
					@click="emit('close')"
					aria-label="Bottom control Close modal"
				>
					Close
				</button>
			</div>
		</template>
	</Modal>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;

.product-modal {
	&__header {
		@include mixins.flex-row(center, space-between);

		width: 100%;

		&-title {
			@include mixins.font-style(1.25rem, colors.$primary-color, 700, $line-height: 120%);

			margin: 0;

			@media (max-width: 480px) {
				font-size: 1rem;
			}
		}

		&-close-button {
			@include mixins.flex-row();

			width: 40px;
			height: 40px;
			border: none;
			background-color: colors.$snow;

			&:hover {
				cursor: pointer;
			}
		}
	}

	&__content {
		@include mixins.flex-row(flex-start, space-between);
		flex-wrap: wrap;

		width: 100%;
		padding: 48px 0 80px;

		&-image-wrapper {
			@include mixins.flex-row();

			width: 314px;
			height: 303px;

			@media (max-width: 768px) {
				padding: 24px 0;
			}

			@media (max-width: 480px) {
				height: auto;
				padding: 12px 0;
				height: 160px;
				width: 160px;
			}

			.image {
				display: block;
				max-width: 100%;
				max-height: 100%;
				object-fit: contain;

				@media (max-width: 480px) {
					height: auto;
				}

				@media (max-width: 360px) {
					width: 88%;
				}
			}
		}

		&-description {
			@include mixins.flex-column(flex-start, center);

			max-width: 274px;

			.title,
			.features-list,
			.description {
				@include mixins.font-style(0.75rem, colors.$black, 400, $line-height: 1.5625rem);
			}

			.title {
				font-weight: 600;
			}

			.features-list {
				padding-left: 24px;
				margin: 12px 0;
			}
		}

		@media (max-width: 668px) {
			flex-direction: column;
			align-items: center;

			padding: 24px 0;
		}

		@media (max-width: 480px) {
			padding: 12px 0;
		}
	}

	&__footer {
		@include mixins.flex-row(center, flex-end);

		width: 100%;

		&-close-button {
			@include mixins.font-style(0.875rem, colors.$black, 500, $letter-spacing: 0.02em);

			width: 88px;
			height: 44px;
			padding: 12px 24px;
			gap: 4px;
			border: none;
			border-radius: 4px;
			background-color: colors.$alabaster;

			&:hover {
				cursor: pointer;
			}

			@media (max-width: 480px) {
				width: 100%;
				font-size: 0.75rem;
			}
		}

		@media (max-width: 668px) {
			margin-top: auto;
		}
	}
}
</style>
