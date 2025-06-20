<script lang="ts" setup>
defineProps<{
	modelValue: string;
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'applySearch'): void;
}>();
</script>

<template>
	<header class="app-header">
		<div class="app-header__title">
			<img src="@/assets/icons/logo.svg" alt="LOGO" />
			<img src="@/assets/icons/storm-logo.svg" alt="STORM" />
		</div>

		<div class="app-header__actions">
			<div class="app-header__search">
				<div class="app-header__input-wrapper">
					<input
						id="header-search-input"
						class="search-control"
						type="text"
						placeholder="Search"
						:value="modelValue"
						@input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
					/>
					<img class="search-icon" src="../../assets/icons/search-icon.svg" alt="search-icon" />
				</div>

				<button class="app-header__search-button" aria-label="Search" @click="emit('applySearch')">Search</button>
			</div>

			<div class="app-header__icons">
				<button aria-label="Settings">
					<img class="app-header__icons-control" src="../../assets/icons/settings-icon.svg" alt="settings-icon" />
				</button>
				<button aria-label="Notifications">
					<img
						class="app-header__icons-control"
						src="../../assets/icons/notifications-icon.svg"
						alt="notifications-icon"
					/>
				</button>
				<div class="app-header__profile">
					<img class="app-header__icons-control" src="../../assets/icons/user.svg" alt="user-icon" />
					<span class="app-header__profile-name">Adriana Arias</span>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;

.app-header {
	@include mixins.flex-row(center, space-between);
	margin: 80px 0 76px;

	&__title {
		display: flex;
		align-items: center;

		img:first-child {
			width: 47px;
			height: 44px;
			margin-right: 6px;
		}

		img:nth-child(2) {
			width: 155px;
			height: 32px;
		}
	}

	&__actions {
		display: flex;
		align-items: center;

		.app-header__search {
			display: flex;
			margin-right: 30px;

			.app-header__input-wrapper {
				position: relative;

				.search-control {
					@include mixins.font-style(14px, rgba(colors.$black, 0.87), 400, 'Inter');

					position: relative;
					width: 260px;
					height: 44px;
					border: 1px solid colors.$cloud;
					border-radius: 0 4px 4px 0;
					padding: 12px 16px 12px 48px;
					margin-right: 16px;

					&::placeholder {
						@include mixins.font-style(14px, rgba(colors.$black, 0.3), 400, 'Inter');

						line-height: 20px;
						letter-spacing: 0%;
					}
				}

				.search-icon {
					position: absolute;
					width: 24px;
					height: 24px;
					top: 10px;
					left: 16px;
				}
			}

			&-button {
				@include mixins.font-style(14px, rgba(colors.$snow, 0.87), 500, 'Inter');

				width: 97px;
				height: 44px;
				padding: 12px 24px;
				border: none;
				border-radius: 4px;
				background-color: colors.$maim;

				line-height: 20px;
				letter-spacing: 0.02em;
				vertical-align: middle;

				&:hover {
					cursor: pointer;
				}
			}
		}

		.app-header__icons {
			display: flex;
			align-items: center;

			button {
				height: 44px;
				margin-right: 8px;
				padding: 0;
				background: none;
				border: none;
				cursor: pointer;
			}

			&-control {
				width: 44px;
				height: 44px;
			}
		}

		.app-header__profile {
			display: flex;
			align-items: center;

			&:hover {
				cursor: pointer;
			}

			&-name {
				@include mixins.font-style(14px, colors.$maim, 400, 'Inter');

				line-height: 20px;
				letter-spacing: 0.02em;
				vertical-align: middle;
			}
		}
	}
}
</style>
