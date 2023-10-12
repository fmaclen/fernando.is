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
				<wbr><a class="a" href="mailto:hello@fernando.is">talk to me</a>.<wbr/>
			</h1>
		</section>
	</aside>

	<main class="main">
		<slot />
	</main>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600&family=JetBrains+Mono:wght@100&display=swap');

	:global(body.body) {
		color: hsl(0, 0%, 75%);
		background-color: hsl(0, 0%, 13%);
		margin: unset;
		font-family: 'Inter', sans-serif;
		font-weight: 300;
	}

	div.layout {
		display: grid;
		grid-template-columns: minmax(384px,1fr) 3fr;
		width: 100dvw;
		height: 100dvh;

		@media (max-width: 880px) {
			grid-template-columns: 1fr;
		}
	}

	aside.aside {
		display: grid;
		grid-template-rows: max-content auto;
		box-sizing: border-box;
		height: 100%;
		border-right: 1px solid hsl(0, 0%, 20%);
		background-color: hsl(0, 0%, 10%);
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
		}

		&--profile {
			display: flex;
			flex-direction: column;
			row-gap: 64px;
			border-bottom: 1px solid hsl(0, 0%, 20%);

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
		color: #23c88d;
		text-decoration: none;
		border-bottom: 1px solid rgba(35, 200, 141, 1);

		&:hover {
			border-bottom-color: transparent;
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
		color: hsl(0, 0%, 50%);

		@media (max-width: 880px) {
			font-size: 18px;
		}
	}

	h2.h2 {
		font-size: 32px;
		line-height: 1.1em;
		letter-spacing: -0.05em;
		font-weight: 600;
		color: hsl(0, 0%, 95%);

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
			color: #666;
		}
	}

	nav.social {
		display: flex;
		gap: 12px;
		transform: translate(-6px, 6px);
	}

	a.social__a {
		opacity: 0.25;
		padding: 6px;

		&:hover {
			opacity: 1;
		}
	}

	main.main {
		max-height: 100dvh;
		overflow-y: auto;

		@media (max-width: 880px) {
			max-height: unset;
			overflow-y: unset;
		}
	}
</style>
