<script lang="ts">
	import { onMount } from 'svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	import IconGithub from '$lib/components/icons/IconGithub.svg.svelte';
	import type { Project } from '$lib/stores/projectsStore';
	import Time from '$lib/components/Time.svelte';
	import IconClose from './icons/IconClose.svg.svelte';
	import IconPrevious from './icons/IconPrevious.svg.svelte';
	import IconNext from './icons/IconNext.svg.svelte';

	export let project: Project;
	let dialog: HTMLDialogElement;
	let dialogImageIndex: number;

	function imagePath(image: string) {
		return `/projects/${image}`;
	}

	function loadDialogGallery(index: number) {
		dialogImageIndex = index;
		dialog.showModal();
	}

	function previousImage() {
		if (!project.images) return;
		dialogImageIndex = dialogImageIndex === 0 ? project.images.length - 1 : dialogImageIndex - 1;
	}

	function nextImage() {
		if (!project.images) return;
		dialogImageIndex = dialogImageIndex === project.images.length - 1 ? 0 : dialogImageIndex + 1;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowLeft') {
			previousImage();
		} else if (event.key === 'ArrowRight') {
			nextImage();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{#if project.images}
	{@const indexOfTotal = `${dialogImageIndex + 1} of ${project.images.length}`}
	<dialog class="dialog" bind:this={dialog}>
		<header class="dialog__header">
			<h3 class="h3">{project.title}</h3>
			<p class="p p--in-dialog">{indexOfTotal}</p>
		</header>
		<div class="dialog__container">
			<img
				class="dialog__img"
				src={imagePath(project.images[dialogImageIndex])}
				alt="Screenshot of the project ({indexOfTotal})"
			/>
		</div>

		<nav class="dialog__nav">
			<button class="dialog__button" type="button" on:click={previousImage}>
				<IconPrevious />
			</button>
			<button class="dialog__button" type="button" on:click={() => dialog.close()}>
				<IconClose />
			</button>
			<button class="dialog__button" type="button" on:click={nextImage}>
				<IconNext />
			</button>
		</nav>
	</dialog>
{/if}

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
				{#each project.images as image, index}
					<button class="gallery__button" on:click={() => loadDialogGallery(index)}>
						<img
							class="gallery__img {project.images.length === 1 ? 'gallery__img--single-image' : ''}"
							src={imagePath(image)}
							alt={`A screenshot of ${project.title}`}
						/>
					</button>
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

		&--in-dialog {
			width: 100%;
			opacity: .5;
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

	button.gallery__button {
		display: block;
		background: unset;
		border: unset;
		padding: unset;
		outline: unset;
		cursor: pointer;
	}

	// Don't scale on touch devices
	@media (hover: hover) {
		button.gallery__button {
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

	.dialog {
		max-width: unset;
		max-height: unset;
		width: 100dvw;
		height: 100dvh;
		border: unset;
		margin: unset;
		padding: unset;

		&:modal {
			display: grid;
			grid-template-rows: max-content auto max-content;
		}

		&__header {
			display: flex;
			align-items: center;
			justify-content: center;
			width: max-content;
			flex-direction: column;
			gap: 4px;
			padding: 40px;
			text-align: center;
			margin-inline: auto;
		}

		&__container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 8px;
			box-sizing: border-box;
			padding-inline: 16px;
		}

		&__img {
			max-width: 100%;
			max-height: 90dvh;
			object-fit: contain;
			margin-inline: auto;
			border-radius: 8px;
			box-shadow: 0 calc(18px / 2) 18px rgba(0, 0, 0, 0.1);
		}

		&__nav {
			display: flex;
			margin-top: auto;
			padding: 40px;
			gap: 40px;
			margin-inline: auto;
		}

		&__button {
			border: unset;
			padding: unset;
			background: unset;
			opacity: 0.33;
			filter: invert(1); // Logo is black, so invert it to white in "light mode"
			outline: unset;
			cursor: pointer;

			@media (prefers-color-scheme: dark) {
				filter: unset;
			}

			&:hover {
				opacity: 1;
			}
		}
	}
</style>
