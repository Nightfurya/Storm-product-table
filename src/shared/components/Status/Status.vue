<script lang="ts" setup>
import { Severity, getSeverityClassName } from '../../helpers/getSeverityClassName';

defineProps<{
	statusMessage: string;
	severity: Severity;
}>();
</script>

<template>
	<div class="status" :class="getSeverityClassName(severity)">
		<p>{{ statusMessage }}</p>
	</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;

.status {
	@include mixins.flex-row();

	min-width: 84px;
	min-height: 28px;

	padding: 4px 24px;
	border: none;
	border-radius: 12px;

	@include mixins.font-style(12px, colors.$secondary-color);

	line-height: 20px;
	letter-spacing: 0;
	text-align: center;
	vertical-align: middle;

	&.severity {
		&--success {
			background-color: colors.$rain;
			color: colors.$grass;
		}

		&--danger {
			background-color: colors.$pigeon;
			color: colors.$rose;
		}

		&--warning {
			background-color: colors.$autumn;
			color: colors.$pumpkin;
		}

		&--primary {
			background-color: colors.$violet;
			color: colors.$maim;
		}
	}
}
</style>
