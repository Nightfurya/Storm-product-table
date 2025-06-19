<script lang="ts" setup>
import Modal from '@/shared/components/Modal/Modal.vue';

import { ModalPart } from '@/data-models/enums';
import type { Product } from '@/data-models/product';

defineProps<{
	selectedProduct: Product | null;
}>();

defineEmits(['close']);
</script>

<template>
	<Modal :selectedItem="selectedProduct">
		<template v-slot:[ModalPart.HEADER]>
			<button class="modal__close" @click="$emit('close')">✕</button>
		</template>
		<template v-slot:[ModalPart.CONTENT]>
			<h2>{{ selectedProduct.name }}</h2>
			<img :src="selectedProduct.image" alt="No image" class="modal__image" />
		</template>
		<template v-slot:[ModalPart.FOOTER]>
			<p>{{ selectedProduct.serial }}</p>
		</template>
	</Modal>
</template>
