<script lang="ts" setup>
import { ref } from 'vue';

defineProps<{
	modelValue: string;
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'applySearch'): void;
}>();

const isBurgerMenuOpen = ref<boolean>(false);
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

		<div class="burger-menu__container">
			<img
				class="burger-menu__icon"
				src="@/assets/icons/burger-menu.svg"
				alt="burger-menu-icon"
				@click="isBurgerMenuOpen = !isBurgerMenuOpen"
			/>

			<div class="burger-menu" v-show="isBurgerMenuOpen">
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
		</div>
	</header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_color.vars' as colors;
@use '@/assets/styles/_mixins' as mixins;
@use '@/assets/styles/_variables' as vars;

.app-header {
	@include mixins.flex-row(center, space-between);

	flex-wrap: wrap;
	margin: 80px 0 76px;

	@media (max-width: 768px) {
		margin: 40px 0 38px;
	}

	@media (max-width: vars.$extra-wide-mobile-screen-breakpoint) {
		position: sticky;
		top: 0;
		z-index: vars.$sticky-header-z-index;
		background-color: colors.$snow;
		margin: 0;
		padding: 40px 0 38px;
	}

	@media (max-width: 480px) {
		padding-bottom: 18px;
	}

	&__title {
		display: flex;
		align-items: center;

		img:first-child {
			width: 47px;
			height: 44px;
			margin-right: 8px;
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
			margin: 0 30px;

			@media (max-width: 946px) {
				margin: 0 16px;
			}

			@media (min-width: 769px) and (max-width: 918px) {
				margin-left: 0;
			}

			@media (max-width: 688px) {
				margin: 0 4px;
				width: 100%;
			}

			@media (max-width: vars.$extra-wide-mobile-screen-breakpoint) {
				margin: 0;
			}

			@media (max-width: 480px) {
				display: flex;
				justify-content: space-between;
			}

			@media (max-width: 420px) {
				margin: 0;
				width: 100%;
			}

			.app-header__input-wrapper {
				position: relative;

				.search-control {
					@include mixins.font-style(0.875rem, rgba(colors.$black, 0.87), $font-family: 'Inter');

					position: relative;
					width: 260px;
					height: 44px;
					border: 1px solid colors.$cloud;
					border-radius: 0 4px 4px 0;
					padding: 12px 16px 12px 48px;
					margin-right: 16px;

					&::placeholder {
						@include mixins.font-style(0.875rem, rgba(colors.$black, 0.3), $font-family: 'Inter');
					}

					@media (max-width: 420px) {
						width: 220px;
					}

					@media (max-width: 368px) {
						width: 180px;
						padding-left: 40px;
						margin-right: 8px;
					}
				}

				.search-icon {
					position: absolute;
					width: 24px;
					height: 24px;
					top: 10px;
					left: 16px;

					@media (max-width: 368px) {
						width: 16px;
						height: 16px;
						top: 14px;
						left: 12px;
					}
				}
			}

			&-button {
				@include mixins.font-style(0.875rem, rgba(colors.$snow, 0.87), 500, 'Inter', $letter-spacing: 0.02em);

				width: 97px;
				height: 44px;
				padding: 12px 24px;
				border: none;
				border-radius: 4px;
				background-color: colors.$maim;

				&:hover {
					cursor: pointer;
				}
			}
		}

		@media (min-width: 769px) and (max-width: 902px) {
			margin-top: 16px;
			width: 100%;
		}

		@media (max-width: 660px) {
			order: 1;
			margin-top: 16px;
		}

		@media (max-width: 480px) {
			width: 100%;
		}
	}

	.app-header__icons {
		display: flex;
		align-items: center;
		margin-left: auto;

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

		@media (max-width: 768px) {
			display: none;
		}
	}

	.app-header__profile {
		display: flex;
		align-items: center;

		&:hover {
			cursor: pointer;
		}

		&-name {
			@include mixins.font-style(0.875rem, colors.$maim, $font-family: 'Inter', $letter-spacing: 0.02em);

			width: 108px;
		}
	}

	.burger-menu__container {
		$burger-menu-icon-width: 24px;

		display: none;
		position: relative;
		width: $burger-menu-icon-width;
		height: $burger-menu-icon-width;

		@media (max-width: 768px) {
			display: block;
		}

		@media (max-width: 680px) {
			margin-left: 6px;
		}

		.burger-menu__icon {
			width: 100%;
			height: 100%;

			&:hover {
				cursor: pointer;
			}
		}

		.burger-menu {
			position: absolute;
			z-index: vars.$navbar-modal-z-index;
			top: $burger-menu-icon-width + 4px;
			right: 0;

			width: 160px;
			height: 132px;
			border-radius: 8px;
			box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
			background-color: colors.$snow;

			.app-header__icons {
				@include mixins.flex-column(flex-start, flex-start);
			}

			.app-header__profile {
				.app-header__icons-control {
					margin-right: 8px;
				}
			}
		}
	}
}
</style>
