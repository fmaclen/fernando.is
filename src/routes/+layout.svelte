<script>
	import IconDribbble from '$lib/components/icons/IconDribbble.svg.svelte';
	import IconGithub from '$lib/components/icons/IconGithub.svg.svelte';
	import IconX from '$lib/components/icons/IconX.svg.svelte';
	import IconEmail from '$lib/components/icons/IconEmail.svg.svelte';
</script>

<div class="layout">
	<aside class="aside">
		<section class="aside__section aside__section--profile">
			<header class="aside__header">
				<h2 class="h2">Fernando Maclen</h2>
				<p class="p p--in-aside">Designer & software developer</p>
			</header>

			<nav class="social">
				<a class="social__a" href="https://x.com/fmaclen">
					<IconX />
				</a>
				<a class="social__a" href="https://github.com/fmaclen">
					<IconGithub />
				</a>
				<a class="social__a" href="https://dribbble.com/fmaclen">
					<IconDribbble />
				</a>
				<a class="social__a" href="mailto:hello@fernando.is">
					<IconEmail />
				</a>
			</nav>
		</section>

		<section class="aside__section aside__section--call-to-action">
			<h1 class="h1">
				If you are working on an interesting problem and my skillset can be useful,
				<a class="a" href="mailto:hello@fernando.is">talk to me</a>.
			</h1>
		</section>
	</aside>

	<main class="main">
		<slot />
	</main>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600&family=JetBrains+Mono:wght@100&display=swap');

	:root {
		// Light mode (default)
		color-scheme: light;

		--color-neutral-10: hsl(0, 0%, 91%);
		--color-neutral-13: hsl(0, 0%, 87%);
		--color-neutral-50: hsl(0, 0%, 40%);
		--color-neutral-75: hsl(0, 0%, 25%);
		--color-neutral-95: hsl(0, 0%, 5%);
		--color-neutral-100: hsl(0, 0%, 0%);

		--color-accent: #0439d9;
		--color-border: hsl(0, 0%, 80%);

		@media (prefers-color-scheme: dark) {
			color-scheme: dark;

			--color-neutral-10: hsl(0, 0%, 10%);
			--color-neutral-13: hsl(0, 0%, 13%);
			--color-neutral-50: hsl(0, 0%, 60%);
			--color-neutral-75: hsl(0, 0%, 75%);
			--color-neutral-95: hsl(0, 0%, 95%);
			--color-neutral-100: hsl(0, 0%, 100%);

			--color-accent: #02f2ce;
			--color-border: hsl(0, 0%, 20%);
		}
	}

	:global(body.body) {
		color: var(--color-neutral-75);
		background-color: var(--color-neutral-10);
		margin: unset;
		font-family: 'Inter', sans-serif;
		font-weight: 300;
	}

	div.layout {
		display: flex;
		width: 100dvw;
		height: 100dvh;

		@media (max-width: 880px) {
			flex-direction: column;
		}
	}

	aside.aside {
		display: grid;
		grid-template-rows: max-content auto;
		box-sizing: border-box;
		height: 100%;
		width: clamp(384px, 100%, 512px);
		border-right: 1px solid var(--color-border);

		@media (max-width: 880px) {
			width: unset;
			height: max-content;
			border-right: unset;
		}
	}

	section.aside__section {
		padding-inline: 56px;
		padding-block: 56px;

		@media (max-width: 1366px) {
			padding-inline: 48px;
			padding-block: 48px;
		}

		@media (max-width: 1024px) {
			padding-inline: 32px;
		}

		@media (max-width: 880px) {
			padding-block: 32px;
			padding-inline: 24px;
		}

		&--call-to-action {
			height: auto;
			place-self: flex-start;

			@media (max-width: 880px) {
				border-bottom: 1px solid var(--color-border);
			}
		}

		&--profile {
			display: flex;
			flex-direction: column;
			row-gap: 64px;
			border-bottom: 1px solid var(--color-border);

			@media (max-width: 1024px) {
				row-gap: 32px;
			}

			@media (max-width: 880px) {
				row-gap: 20px;
			}
		}
	}

	header.aside__header {
		display: flex;
		flex-direction: column;
		row-gap: 8px;
	}

	a.a {
		color: var(--color-accent);
		text-decoration: none;
		transition: box-shadow 0.1s ease-in-out;
		box-shadow: inset 0 -1px 0 var(--color-accent);

		&:hover {
			color: var(--color-neutral-10);
			box-shadow: inset 0 -40px 0 var(--color-accent);
		}
	}

	h1.h1,
	h2.h2,
	p.p {
		margin: unset;
	}

	h1.h1 {
		font-family: 'JetBrains Mono', monospace;
		font-weight: 100;
		font-size: 24px;
		line-height: 135%;
		color: var(--color-neutral-50);

		@media (max-width: 880px) {
			font-size: 18px;
		}
	}

	h2.h2 {
		font-size: 32px;
		line-height: 1.1em;
		letter-spacing: -0.05em;
		font-weight: 600;
		color: var(--color-neutral-95);

		@media (max-width: 880px) {
			font-size: 26px;
		}
	}

	p.p {
		font-size: 16px;
		line-height: 120%;

		@media (max-width: 880px) {
			font-size: 14px;
		}

		&--in-aside {
			color: var(--color-accent);
		}
	}

	nav.social {
		display: flex;
		gap: 12px;
		transform: translate(-6px, 6px);
	}

	a.social__a {
		display: flex;
		align-items: center;
		opacity: 0.25;
		padding: 6px;
		filter: invert(1); // Logo is black, so invert it to white in "light mode"

		@media (prefers-color-scheme: dark) {
			filter: unset;
		}

		&:hover {
			opacity: 1;
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
