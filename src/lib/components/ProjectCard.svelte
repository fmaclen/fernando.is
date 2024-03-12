<script lang="ts">
	import { onMount } from 'svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	import type { Project } from '$lib/stores/projectsStore';
	import Time from '$lib/components/Time.svelte';
	import Icon from '$lib/components/icons/Icon.svelte';
	import { Icons, IconModifier } from "$lib/components/icons/icons";

	export let project: Project;
	let dialog: HTMLDialogElement;
	let dialogImageIndex: number = 0;

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
			<h3 class="h3 h3--in-dialog">{project.title}</h3>
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
				<Icon icon={Icons.PREVIOUS} modifier={IconModifier.IN_DIALOG} />
			</button>
			<button class="dialog__button" type="button" on:click={() => dialog.close()}>
				<Icon icon={Icons.CLOSE} modifier={IconModifier.IN_DIALOG} />
			</button>
			<button class="dialog__button" type="button" on:click={nextImage}>
				<Icon icon={Icons.NEXT} modifier={IconModifier.IN_DIALOG} />
			</button>
		</nav>
	</dialog>
{/if}

<article class="article {project.theme ? `article--${project.theme}` : ''}">
	<nav class="article__nav {project.images ? 'article__nav--with-gallery' : ''}">
		<a href={project.url} class="article__repo" target="_blank">
			<Icon icon={Icons.EXTERNAL_LINK} />
		</a>
		{#if project.repo}
			<a href={`https://github.com/${project.repo}`} class="article__repo" target="_blank">
				<Icon icon={Icons.GITHUB} />
			</a>
		{/if}

		<div class="article__time">
			<Time date={project.updatedAt} />
		</div>
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

	<header class="article__header">
		<h3 class="h3">{project.title}</h3>
		<p class="p">{project.description}</p>
	</header>
</article>

<style lang="scss">
	p.p,
	h3.h3 {
		font-size: var(--font-size-fluid-0);
		margin: unset;

		&--in-dialog {
			color: var(--text-1);
		}
	}

	h3.h3 {
		letter-spacing: var(--font-letterspacing-0);
	}

	p.p {
		max-width: var(--size-header-3);
		font-weight: var(--font-weight-1);
		text-wrap: balance;
		opacity: 0.66;

		&--in-dialog {
			width: 100%;
			opacity: 0.5;
		}
	}

	.article {
		display: grid;
		grid-template-columns: auto;
		border-radius: 8px;
		background-color: var(--background-2);
		box-shadow: var(--shadow-2);

		&--canutin {
			background-color: #1347ff;
		}

		&--fernando-is {
			background-color: #111;
		}

		&--svelte-currency-input {
			background-color: #e25f36;
		}

		&--julia-sanfrancisco {
			background-color: #9b554b;
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

		&--pantai {
			background-color: hsl(222, 33%, 45%);;
		}

		&__time {
			margin-left: auto;
		}

		&__nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-items: center;
			gap: var(--size-3);
			margin-block: var(--size-3);
			margin-inline: var(--size-4);

			&--with-gallery {
				margin-bottom: unset;
			}

			:global(.svg-icon--themable) {
				padding: unset;
			}

			:global(.svg-icon--themable path) {
				fill: unset;
			}
		}

		&__header {
			display: flex;
			flex-direction: column;
			text-decoration: unset;
			color: #fff;
			row-gap: var(--size-1);
			padding-inline: var(--size-5);
			padding-block: var(--size-5);
			border-top: var(--border-size-1) solid rgba(255, 255, 255, 0.15);
			border-bottom-left-radius: var(--radius-1);
			transition:
				opacity 0.1s ease-in-out,
				padding-left 0.1s ease-in-out;
		}
	}

	a.article__repo {
		display: block;
		padding-inline: unset;
		transition: opacity 0.1s ease-in-out;
		opacity: 0.4;

		&:hover {
			opacity: 1;
		}
	}

	.gallery {
		max-width: 100%;
		box-sizing: border-box;
		padding-block: var(--size-5);
		padding-inline: var(--size-5);
		overflow: hidden;
		cursor: grab;

		&__container {
			display: flex;
			gap: var(--size-2);
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
		border-radius: var(--radius-2);
		box-shadow: 0 calc(var(--article-inner-spacing) / 2) var(--article-inner-spacing)
			rgba(0, 0, 0, 0.1);

		&--single-image {
			max-width: 100%;
		}
	}

	.dialog {
		max-width: unset;
		max-height: unset;
		border: unset;
		margin: unset;
		padding: unset;
		width: 100dvw;
		height: 100dvh;
		background-color: var(--background-1);

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background-image: url('/background-checkers.svg');
			background-size: var(--size-6);
			opacity: 0.025;
			z-index: var(--layer-1);
		}

		> * {
			z-index: var(--layer-2);
		}

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
			gap: var(--size-1);
			padding: var(--size-6);
			text-align: center;
			margin-inline: auto;
		}

		&__container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			box-sizing: border-box;
			padding-inline: var(--size-2);
			padding-block: var(--size-3);
			overflow-y: hidden;
			text-align: center;
		}

		&__img {
			max-height: 100%;
			max-width: 100%;
			// width: fit-content;
			// height: fit-content;
			object-fit: contain;
			margin-inline: auto;
			border-radius: var(--radius-3);
			box-shadow: var(--shadow-2);
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
			opacity: 0.5;
			outline: unset;
			cursor: pointer;

			&:hover {
				opacity: 1;
			}
		}
	}
</style>
