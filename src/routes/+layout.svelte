<script lang="ts">
	import 'open-props/open-props.min.css';
	import { onMount } from 'svelte';

	import Icon from '$lib/components/icons/Icon.svelte';
	import { Icons, IconModifier } from "$lib/components/icons/icons";

	const THEME_KEY = 'colorTheme';
	const THEME_DARK = 'dark';
	const THEME_LIGHT = 'light';

	let html: HTMLElement | null = null;
	let isDarkMode = true;

	function toggleTheme() {
		if (!html) return;

		isDarkMode = !isDarkMode;
		html.dataset.theme = isDarkMode ? THEME_DARK : THEME_LIGHT;

		// Store the user's preference in localStorage
		localStorage.setItem(THEME_KEY, isDarkMode ? THEME_DARK : THEME_LIGHT);
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
			<p class="header__p">This portfolio showcases my recent work across design & code.</p>
			<p class="header__p">
				If you have an interesting project that could benefit from my end-to-end abilities, <a
					class="header__a"
					href="mailto:hello@fernando.is">let's talk</a
				>.
			</p>
		</header>

		<nav class="icons">
			<a class="icons__a" target="_blank" href="https://x.com/fmaclen">
				<Icon icon={Icons.X} />
			</a>
			<a class="icons__a" target="_blank" href="https://github.com/fmaclen">
				<Icon icon={Icons.GITHUB} />
			</a>
			<a class="icons__a" target="_blank" href="https://dribbble.com/fmaclen">
				<Icon icon={Icons.DRIBBBLE} />
			</a>
			<a class="icons__a" target="_blank" href="https://www.linkedin.com/in/fmaclen/">
				<Icon icon={Icons.LINKEDIN} />
			</a>
			<a class="icons__a" target="_blank" href="mailto:hello@fernando.is">
				<Icon icon={Icons.EMAIL} />
			</a>
		</nav>

		<nav class="icons icons--theme-toggle">
			<button class="icons__button" on:click={toggleTheme}>
				{#if isDarkMode}
					<Icon icon={Icons.LIGHT} modifier={IconModifier.DARK_MODE} />
				{:else}
					<Icon icon={Icons.DARK} modifier={IconModifier.LIGHT_MODE} />
				{/if}
			</button>
		</nav>
	</aside>

	<main class="main">
		<slot />
	</main>
</div>

<style lang="scss">
	@import "$lib/mixins";
	@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;400&display=swap');

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
		grid-template-columns: 1fr 3fr;
		width: 100dvw;
		height: 100dvh;
		background-color: var(--background-1);

		@media (max-width: $breakpoint-4) {
			grid-template-columns: unset;
			grid-auto-flow: rows;
		}
	}

	.aside {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
		padding: var(--size-fluid-4);
		border-right: var(--border-size-1) solid var(--border-1);
		gap: var(--size-8);

		@media (max-width: $breakpoint-2) {
			padding: var(--size-7);
		}
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: var(--size-5);

		&__h1,
		&__p {
			margin: 0;
			text-wrap: balance;
			font-weight: var(--font-weight-1);
			color: var(--text-2);
			line-height: var(--font-lineheight-2);
			font-size: var(--size-5);
			max-width: var(--size-content-3);

			@media (max-width: $breakpoint-2) {
				font-size: var(--size-4);
			}
		}

		strong {
			color: var(--text-1);
		}

		em {
			font-style: unset;
			color: var(--accent);
		}

		&__a {
			--link-theme: var(--accent);
			color: var(--link-theme);
			text-decoration: unset;
			border-bottom: var(--border-size-2) solid var(--link-theme);
			transition:
				color 250ms,
				border-color 250ms;

			&:hover {
				--link-theme: var(--text-1);
			}
		}
	}

	.icons {
		display: flex;
		gap: var(--size-4);

		:not(.icons--theme-toggle) {
			margin-top: auto;
		}

		&--theme-toggle {
			margin-top: auto;
			height: max-content;
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
			opacity: 0.33;
			transition: opacity 250ms;

			&:hover {
				opacity: 1;
			}
		}
	}

	main.main {
		width: 100%;
		height: 100%;
		max-height: 100dvh;
		overflow-y: auto;
		background-color: var(--background-2);

		@media (max-width: 880px) {
			justify-content: center;
			max-height: unset;
			overflow-y: unset;
		}
	}
</style>
