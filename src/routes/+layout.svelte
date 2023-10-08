<script>
	import IconDribbble from '$lib/icons/IconDribbble.svg.svelte';
	import IconGithub from '$lib/icons/IconGithub.svg.svelte';
	import IconX from '$lib/icons/IconX.svg.svelte';
	import IconEmail from '$lib/icons/IconEmail.svg.svelte';
</script>

<div class="layout">
	<aside class="aside">
		<section class="aside__section aside__section--last-updated">
			<time class="time">Last updated today</time>
		</section>

		<section class="aside__section aside__section--call-to-action">
			<h1 class="h1">
				If you are working on an interesting problem and my skillset can be useful,
				<wbr /><a class="a" href="mailto:hello@fernando.is">talk to me</a>.
			</h1>
		</section>

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
	</aside>

	<main class="main">
		<slot />
	</main>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=JetBrains+Mono:wght@100&display=swap');

	:global(body.body) {
		color: hsl(0, 0%, 75%);
		background-color: hsl(0, 0%, 13%);
		margin: unset;
		font-family: 'Inter', sans-serif;
		font-weight: 300;
	}

	div.layout {
		display: grid;
		grid-template-columns: 0.33fr 0.66fr;
		width: 100dvw;
		height: 100dvh;
	}

	aside.aside {
		display: grid;
		grid-template-rows: max-content auto max-content;
		box-sizing: border-box;
		row-gap: 64px;
		height: 100%;
		border-right: 1px solid hsl(0, 0%, 20%);
		background-color: hsl(0, 0%, 10%);
	}

	section.aside__section {
		padding-inline: 64px;
		padding-block: 64px;

		&--last-updated {
			padding-bottom: unset;
		}

		&--call-to-action {
			height: auto;
			place-self: center;
		}

		&--profile {
			display: flex;
			flex-direction: column;
			row-gap: 64px;
			border-top: 1px solid hsl(0, 0%, 20%);
		}
	}

	header.aside__header {
		display: flex;
		flex-direction: column;
		row-gap: 8px;
	}

	a.a {
		color: #23c88d;
	}

	h1.h1,
	h2.h2,
	p.p {
		margin: unset;
	}

	time.time,
	h1.h1 {
		font-family: 'JetBrains Mono', monospace;
	}

	h1.h1 {
		font-size: 40px;
		line-height: 135%;
		color: hsl(0, 0%, 50%);
	}

	h2.h2 {
		font-size: 32px;
		letter-spacing: -0.025em;
		font-weight: 500;
		color: hsl(0, 0%, 95%);
	}

	time.time {
		font-size: 12px;
		color: hsl(0, 0%, 40%);
		text-transform: uppercase;
	}

	p.p {
		font-size: 16px;
		line-height: 120%;

		&--in-aside {
			color: #23c88d;
		}
	}

	nav.social {
		display: flex;
		gap: 12px;
		transform: translate(-12px, 12px);
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
	}
</style>
