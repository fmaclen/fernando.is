<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	import IconGithub from '$lib/components/icons/IconGithub.svg.svelte';
	import type { Project } from '$lib/stores/projectsStore';
	import Time from '$lib/components/Time.svelte';

	export let project: Project;
</script>

<article class="article {project.theme ? `article--${project.theme}` : ''}">
	<nav class="article__nav {project.images ? 'article__nav--with-gallery' : ''}">
		{#if project.repo}
			<a href={`https://github.com/${project.repo}`} class="article__repo" target="_blank">
				<IconGithub />
			</a>
		{/if}

		<Time date={project.updatedAt} />
	</nav>

	{#if project.images}
		<nav
			class="gallery"
			use:emblaCarouselSvelte={{
				options: { skipSnaps: true, align: 'center' },
				plugins: []
			}}
		>
			<div class="gallery__container">
				{#each project.images as image}
					{@const imagePath = `/projects/${image}`}

					<a class="gallery__a" href={imagePath}>
						<img class="gallery__img {project.images.length === 1 ? 'gallery__img--single-image' : ''}" src={imagePath} alt={`A screenshot of ${project.title}`} />
					</a>
				{/each}
			</div>
		</nav>
	{/if}

	<a href={project.url} class="article__a">
		<h3 class="h3">{project.title}</h3>
		<p class="p">{project.description}</p>
	</a>
</article>

<style lang="scss">
	p.p,
	h3.h3 {
		margin: unset;
	}

	p.p {
		text-wrap: balance;
		width: 75%;

		@media (max-width: 1024px) {
			width: 100%;
		}
	}

	article.article {
		--article-inner-spacing: 24px;

		@media (max-width: 1024px) {
			font-size: 15px;
			--article-inner-spacing: 20px;
		}

		@media (max-width: 800px) {
			font-size: 14px;
			--article-inner-spacing: 18px;
		}

		@media (max-width: 640px) {
			font-size: 13px;
			--article-inner-spacing: 16px;
		}

		display: grid;
		grid-template-columns: auto;
		border-radius: 8px;
		background-color: var(--color-neutral-10);
		box-shadow: 0 calc(var(--article-inner-spacing) / 2) var(--article-inner-spacing)
			rgba(0, 0, 0, 0.1);

		&--canutin {
			background-color: #1347ff;
		}

		&--fernando-is {
			background-color: #000;
		}

		&--svelte-currency-input {
			background-color: #e25f36;
		}

		&--julia-sanfrancisco {
			background-color: #67403a;
		}

		&--auto-garden {
			background-color: #488e3c;
		}

		&--promptspree {
			background-image: linear-gradient(45deg, #4c5eff 4.62%, #f25e5e 54.67%, #f2c65e 99.78%);
			background-color: #4c5eff;
		}

		&--rule-of-three {
			background-color: #35325a;
		}

		&--oak-hall {
			background-color: #a28b67;
		}
	}

	nav.article__nav {
		display: flex;
		align-items: center;
		gap: calc(var(--article-inner-spacing) / 2);
		margin-block: var(--article-inner-spacing);
		margin-inline: var(--article-inner-spacing);

		&--with-gallery {
			margin-bottom: unset;
		}

		@media (max-width: 880px) {
			gap: var(--article-inner-spacing);
		}
	}

	a.article__repo {
		padding-inline: unset;
		transition: opacity 0.1s ease-in-out;
		opacity: 0.4;

		&:hover {
			opacity: 1;
		}
	}

	a.article__a {
		display: flex;
		flex-direction: column;
		text-decoration: unset;
		color: #fff;
		transition:
			opacity 0.1s ease-in-out,
			padding-left 0.1s ease-in-out;
		padding-inline: var(--article-inner-spacing);
		padding-block: var(--article-inner-spacing);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		border-left: 6px solid transparent;
		border-bottom-left-radius: 8px;
		row-gap: 6px;
		opacity: 0.9;

		// Don't apply hover styles on touch devices
		@media (hover: hover) {
			&:hover {
				color: #fff;
				opacity: 1;
				padding-left: calc(var(--article-inner-spacing) + 6px);
				border-left-color: rgba(255, 255, 255, 0.25);
			}
		}
	}

	.gallery {
		max-width: 100%;
		box-sizing: border-box;
		padding-block: var(--article-inner-spacing);
		padding-inline: var(--article-inner-spacing);
		overflow: hidden;
		cursor: grab;

		&__container {
			display: flex;
			gap: 8px;
		}
	}

	// Don't scale on touch devices
	@media (hover: hover) {
		a.gallery__a {
			scale: 1;

			transition: scale 0.1s ease-in-out;

			&:hover {
				scale: 1.025;
			}
		}
	}

	img.gallery__img {
		display: block;
		max-width: 640px;
		max-height: 320px;
		border-radius: 8px;
		box-shadow: 0 calc(var(--article-inner-spacing) / 2) var(--article-inner-spacing)
			rgba(0, 0, 0, 0.1);

			&--single-image {
				max-width: 100%;
			}
	}
</style>
