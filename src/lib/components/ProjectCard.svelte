<script lang="ts">
	import IconGithub from '$lib/components/icons/IconGithub.svg.svelte';
	import type { Project } from '$lib/stores/projectsStore';
	import Time from '$lib/components/Time.svelte';

	export let project: Project;
</script>

<article class="article {project.theme ? `article--${project.theme}` : ''}">
	<nav class="article__nav">
		{#if project.repo}
			<a href={`https://github.com/${project.repo}`} class="article__repo" target="_blank">
				<IconGithub />
			</a>
		{/if}
		<Time date={project.updatedAt} />
	</nav>
	<nav class="gallery {!project.images ? 'gallery--no-gallery' : ''}">
		{#if project.images}
			{#each project.images as image}
				{@const imagePath = `/projects/${image}`}
				<a class="gallery__a" href={imagePath}>
					<img class="gallery__img" src={imagePath} alt={`A screenshot of ${project.title}`} />
				</a>
			{/each}
		{/if}
	</nav>
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
			background-color: #191919;
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
			background-color: #2f2f2f;
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
		margin-top: var(--article-inner-spacing);
		margin-inline: var(--article-inner-spacing);

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
		border-left: 4px solid transparent;
		transition: opacity 0.1s ease-in-out;
		padding-inline: var(--article-inner-spacing);
		margin-bottom: var(--article-inner-spacing);
		row-gap: 6px;
		opacity: 0.9;

		&:hover {
			color: #fff;
			opacity: 1;

			border-left-color: rgba(255, 255, 255, 0.25);
		}
	}

	nav.gallery {
		display: flex;
		gap: 8px;
		max-width: 100%;
		box-sizing: border-box;
		overflow-x: scroll;
		padding-block: var(--article-inner-spacing);
		padding-inline: var(--article-inner-spacing);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		margin-bottom: var(--article-inner-spacing);

		&--no-gallery {
			padding-bottom: unset;
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
	}
</style>
