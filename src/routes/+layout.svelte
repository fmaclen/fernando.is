<script lang="ts">
	import 'open-props/open-props.min.css';
	import { onMount } from 'svelte';

	import IconDribbble from '$lib/components/icons/IconDribbble.svg.svelte';
	import IconGithub from '$lib/components/icons/IconGithub.svg.svelte';
	import IconX from '$lib/components/icons/IconX.svg.svelte';
	import IconEmail from '$lib/components/icons/IconEmail.svg.svelte';
	import IconLinkedin from '$lib/components/icons/IconLinkedin.svg.svelte';
	import IconDark from '$lib/components/icons/IconDark.svg.svelte';
	import IconLight from '$lib/components/icons/IconLight.svg.svelte';

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
				<IconX />
			</a>
			<a class="icons__a" target="_blank" href="https://github.com/fmaclen">
				<IconGithub />
			</a>
			<a class="icons__a" target="_blank" href="https://dribbble.com/fmaclen">
				<IconDribbble />
			</a>
			<a class="icons__a" target="_blank" href="https://www.linkedin.com/in/fmaclen/">
				<IconLinkedin />
			</a>
			<a class="icons__a" target="_blank" href="mailto:hello@fernando.is">
				<IconEmail />
			</a>
		</nav>

		<nav class="icons icons--theme-toggle">
			<button class="icons__button" on:click={toggleTheme}>
				{#if isDarkMode}
					<IconLight />
				{:else}
					<IconDark />
				{/if}
			</button>
		</nav>
	</aside>

	<main class="main">
		<slot />
	</main>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;400&display=swap');

	:global(html) {
		--font-family: 'JetBrains Mono', monospace;

		// Dark theme is the default
		color-scheme: dark;

		--dark-accent: var(--yellow-4);
		--dark-border-1: var(--stone-10);
		--dark-background-1: var(--stone-12);
		--dark-text-1: var(--stone-0);
		--dark-text-2: var(--stone-5);

		--accent: var(--dark-accent);
		--border-1: var(--dark-border-1);
		--background-1: var(--dark-background-1);
		--text-1: var(--dark-text-1);
		--text-2: var(--dark-text-2);
	}

	:global(html[data-theme='light']) {
		color-scheme: light;

		--light-accent: var(--indigo-8);
		--light-border-1: var(--stone-4);
		--light-background-1: var(--stone-1);
		--light-text-1: var(--stone-12);
		--light-text-2: var(--stone-8);

		--accent: var(--light-accent);
		--border-1: var(--light-border-1);
		--background-1: var(--light-background-1);
		--text-1: var(--light-text-1);
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

	:global(svg.svg-icon) {
		width: 20px;
		height: 20px;
		padding: var(--size-2);
	}

	:global(svg.svg-icon--themable path) {
		fill: var(--text-1);
	}

	:global(svg.svg-icon--light g, svg.svg-icon--light circle) {
		fill: var(--dark-accent);
	}

	:global(svg.svg-icon--dark path) {
		fill: var(--light-accent);
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
	}

	.aside {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
		padding: var(--size-9);
		border-right: var(--border-size-1) solid var(--border-1);
		gap: var(--size-8);
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: var(--size-5);

		&__h1,
		&__p {
			margin: 0;
			font-weight: var(--font-weight-1);
			color: var(--text-2);
			line-height: var(--font-lineheight-2);
			font-size: var(--size-5);
			text-wrap: balance;
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
		transform: translate(calc(var(--size-2) * -1), var(--size-2));

		:not(.icons--theme-toggle) {
			margin-top: auto;
		}

		&--theme-toggle {
			margin-top: auto;
			height: max-content;

			button.icons__button,
			a.icons__a {
				opacity: 0.66;

				&:hover {
					opacity: 1;
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

		@media (max-width: 880px) {
			justify-content: center;
			max-height: unset;
			overflow-y: unset;
		}
	}
</style>
