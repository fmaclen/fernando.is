<script lang="ts">
	import 'open-props/open-props.min.css';
	import { onMount } from 'svelte';

	import Icon from '$lib/components/icons/Icon.svelte';
	import { Icons, IconModifier } from '$lib/components/icons/icons';

	const THEME_KEY = 'fernando.is-colorTheme';
	const THEME_DARK = 'dark';
	const THEME_LIGHT = 'light';

	let html: HTMLElement | null = null;
	let isDarkMode = true;

	function setTheme() {
		if (!html) return;
		html.dataset.theme = isDarkMode ? THEME_DARK : THEME_LIGHT;
	}

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		// Store the user's preference in localStorage
		localStorage.setItem(THEME_KEY, isDarkMode ? THEME_DARK : THEME_LIGHT);
		setTheme();
	}

	onMount(() => {
		// Check the browser's preferred color scheme
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			isDarkMode = false;
		}

		// Check if a user preference is stored in localStorage
		const userPreference = localStorage.getItem(THEME_KEY);
		if (userPreference === THEME_DARK) {
			isDarkMode = true;
		} else if (userPreference === THEME_LIGHT) {
			isDarkMode = false;
		}

		html = document.querySelector('html');
		setTheme();
	});
</script>

<div class="layout">
	<aside class="aside">
		<header class="header">
			<p class="header__p">Hello,</p>
			<h1 class="header__h1">
				I'm <strong>Fernando Maclen</strong>, a Miami-based
				<strong>designer & software developer</strong>; <em>truly full-stack.</em>
			</h1>
			<p class="header__p">
				This portfolio showcases my
				<a class="header__a header__a--mobile-only" href="/#recent-work"> recent work </a>
				across design & code.
			</p>
			<p class="header__p">
				If you have an interesting project that could benefit from my end-to-end abilities,
				<a class="header__a" href="mailto:hello@fernando.is">let's talk</a>.
			</p>
		</header>

		<div class="icons">
			<nav class="icons__nav">
				<a class="icons__a" target="_blank" href="https://x.com/fmaclen">
					<Icon icon={Icons.X} modifier={IconModifier.THEMABLE} />
				</a>
				<a class="icons__a" target="_blank" href="https://github.com/fmaclen">
					<Icon icon={Icons.GITHUB} modifier={IconModifier.THEMABLE} />
				</a>
				<a class="icons__a" target="_blank" href="https://dribbble.com/fmaclen">
					<Icon icon={Icons.DRIBBBLE} modifier={IconModifier.THEMABLE} />
				</a>
				<a class="icons__a" target="_blank" href="https://www.linkedin.com/in/fmaclen/">
					<Icon icon={Icons.LINKEDIN} modifier={IconModifier.THEMABLE} />
				</a>
				<a class="icons__a" target="_blank" href="mailto:hello@fernando.is">
					<Icon icon={Icons.EMAIL} modifier={IconModifier.THEMABLE} />
				</a>
			</nav>

			<nav class="icons__nav icons--theme-toggle">
				<button class="icons__button" on:click={toggleTheme}>
					{#if isDarkMode}
						<Icon icon={Icons.LIGHT} modifier={IconModifier.DARK_MODE} />
					{:else}
						<Icon icon={Icons.DARK} modifier={IconModifier.LIGHT_MODE} />
					{/if}
				</button>
			</nav>
		</div>
	</aside>

	<main id="recent-work" class="main">
		<div class="main__container">
			<slot />
		</div>
	</main>
</div>

<style lang="scss">
	@import '$lib/mixins';
	@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;700&display=swap');

	:global(html) {
		--font-family: 'JetBrains Mono', monospace;

		// Dark theme is the default
		color-scheme: dark;

		--dark-accent: var(--yellow-4);
		--accent: var(--dark-accent);

		--dark-border-1: var(--stone-10);
		--border-1: var(--dark-border-1);

		--dark-background-1: var(--stone-12);
		--background-1: var(--dark-background-1);
		--dark-background-2: var(--stone-11);
		--background-2: var(--dark-background-2);

		--dark-text-1: var(--stone-0);
		--text-1: var(--dark-text-1);
		--dark-text-2: var(--stone-5);
		--text-2: var(--dark-text-2);

		background-color: var(--background-1);

		@media (max-width: $breakpoint-sm) {
			scroll-behavior: smooth;
		}
	}

	:global(html[data-theme='light']) {
		color-scheme: light;

		--light-accent: var(--indigo-8);
		--accent: var(--light-accent);

		--light-border-1: var(--stone-4);
		--border-1: var(--light-border-1);

		--light-background-1: var(--stone-1);
		--background-1: var(--light-background-1);
		--light-background-2: var(--stone-2);
		--background-2: var(--light-background-2);

		--light-text-1: var(--stone-12);
		--text-1: var(--light-text-1);
		--light-text-2: var(--stone-8);
		--text-2: var(--light-text-2);
	}

	:global(*) {
		// Makes the transition between dark/light modes smooth
		transition:
			color 150ms,
			background-color 500ms,
			border-color 500ms,
			fill 500ms;
	}

	:global(body.body) {
		margin: unset;
		font-family: var(--font-family);
	}

	div.layout {
		display: grid;
		grid-template-columns: max-content 3fr;
		width: 100dvw;
		height: 100dvh;
		background-color: var(--background-1);

		@media (max-width: $breakpoint-lg) {
			grid-template-columns: 1.5fr 2.5fr;
		}

		@media (max-width: $breakpoint-md) {
			grid-template-columns: unset;
			grid-template-rows: max-content auto;
		}
	}

	.aside {
		@include layout-padding-inline;
		@include layout-padding-block;

		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		border-right: var(--border-size-1) solid var(--border-1);
		gap: var(--size-8);
		max-height: 100dvh;

		@media (max-width: $breakpoint-md) {
			max-height: max-content;
			border: unset;
		}
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: var(--size-5);
		max-width: var(--size-header-3);

		&__h1,
		&__p {
			margin: 0;
			text-wrap: balance;
			font-weight: var(--font-weight-1);
			color: var(--text-2);
			line-height: var(--font-lineheight-2);
			font-size: var(--size-5);
			max-width: var(--size-content-3);

			@media (max-width: $breakpoint-lg) {
				font-size: var(--size-4);
			}

			@media (max-width: $breakpoint-sm) {
				font-size: var(--size-3);
			}
		}

		strong {
			color: var(--text-1);
			letter-spacing: var(--font-letterspacing-0);
		}

		em {
			font-style: unset;
			color: var(--accent);
		}

		@mixin header-a {
			@include a;
		}

		&__a {
			&:not(.header__a--mobile-only) {
				@include header-a;
			}

			&--mobile-only {
				@media (min-width: $breakpoint-md) {
					text-decoration: unset;
					color: inherit;
					pointer-events: none;
				}

				@media (max-width: $breakpoint-md) {
					@include header-a;
				}
			}
		}
	}

	.icons {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		height: 100%;
		gap: var(--size-4);

		@media (max-width: $breakpoint-md) {
			flex-direction: unset;
		}

		&__nav {
			display: flex;
			gap: var(--size-4);

			&:first-child {
				@media (max-width: $breakpoint-sm) {
					width: 100%;
					justify-content: space-between;
				}
			}

			&:last-child {
				@media (max-width: $breakpoint-sm) {
					border-left: 1px solid var(--border-1);
					padding-left: var(--size-4);
				}
			}
		}

		&__button {
			background-color: transparent;
			border: none;
			padding: unset;
			cursor: pointer;
		}

		&__button,
		&__a {
			display: flex;
			align-items: center;
			opacity: 0.5;
			transition: opacity 250ms;

			&:hover {
				opacity: 1;
			}
		}
	}

	.main {
		display: flex;
		width: 100%;
		height: 100%;
		max-height: 100dvh;
		overflow-y: auto;
		background-color: var(--background-2);

		@media (max-width: $breakpoint-md) {
			justify-content: center;
			max-height: unset;
			overflow-y: unset;
		}

		&__container {
			@include layout-padding-inline;

			margin-inline: auto;
			box-sizing: border-box;
		}
	}
</style>
