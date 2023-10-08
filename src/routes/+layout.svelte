<div class="layout">
	<aside class="aside">
		<time class="time">Last updated Oct 2023</time>

		<section class="call-to-action">
			<h1 class="call-to-action__h1">
				If you are working on an interesting problem and my skillset can be useful,
				<a class="a" href="mailto:hello@fernando.is">talk to me</a>.
			</h1>
		</section>

		<section class="profile">
			<h2 class="profile__h2">Fernando Maclen</h2>
			<h3 class="profile__h3">Designer & software developer</h3>
			<nav>
				<a href="https://x.com/fmaclen">X</a>
				<a href="https://github.com/fmaclen">Github</a>
				<a href="https://dribbble.com/fmaclen">Dribbble</a>
				<a href="mailto:hello@fernando.is">Email</a>
			</nav>
		</section>
	</aside>

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	:global(body.body) {
		color: hsl(0, 0%, 75%);
		background-color: hsl(0, 0%, 13%);
		margin: unset;
	}

	div.layout {
		display: grid;
		grid-template-columns: 0.33fr 0.66fr;
		width: 100dvw;
		height: 100dvh;
	}

	aside.aside {
		border-right: 1px solid hsl(0, 0%, 20%);
		background-color: hsl(0, 0%, 10%);
	}
</style>
