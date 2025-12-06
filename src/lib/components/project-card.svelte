<script lang="ts">
	import type { Project } from '$lib/data/projects.svelte.js';
	import LinkIcon from '@lucide/svelte/icons/link';
	import GithubIcon from '@lucide/svelte/icons/github';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import XIcon from '@lucide/svelte/icons/x';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
	let dialog: HTMLDialogElement | undefined = $state();
	let dialogImageIndex = $state(0);

	function imagePath(image: string) {
		return `/projects/${image}`;
	}

	function getRelativeTime(date: string): string {
		const now = new Date();
		const then = new Date(date);
		const diffInMs = now.getTime() - then.getTime();
		const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

		if (diffInDays < 1) return 'Today';
		if (diffInDays === 1) return 'Yesterday';
		if (diffInDays < 7) return `${diffInDays} days ago`;
		if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
		if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
		return `${Math.floor(diffInDays / 365)} years ago`;
	}

	function openGallery(index: number) {
		dialogImageIndex = index;
		dialog?.showModal();
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
		if (!dialog?.open) return;
		if (event.key === 'ArrowLeft') previousImage();
		if (event.key === 'ArrowRight') nextImage();
	}

	const themeClasses: Record<string, string> = {
		canutin: 'bg-[#1347ff]',
		'fernando-is': 'bg-[#111]',
		hollama: 'bg-[#333]',
		'svelte-currency-input': 'bg-[#e25f36]',
		'julia-sanfrancisco': 'bg-[#9b554b]',
		'auto-garden': 'bg-[#488e3c]',
		chromabox: 'bg-gradient-to-br from-[#4c5eff] via-[#f25e5e] to-[#f2c65e]',
		promptspree: 'bg-[#8f9f40]',
		'rule-of-three': 'bg-[#35325a]',
		'oak-hall': 'bg-[#a28b67]',
		pantai: 'bg-[hsl(222,33%,45%)]',
		'palfrey-press': 'bg-[hsl(32,15%,30%)]'
	};

	const themeClass = project.theme ? themeClasses[project.theme] : 'bg-zinc-800';
</script>

<svelte:window onkeydown={handleKeydown} />

{#if project.images && project.images.length > 0}
	<dialog
		bind:this={dialog}
		class="fixed inset-0 w-screen h-screen max-w-none max-h-none m-0 p-0 bg-background/95 backdrop-blur-sm backdrop:bg-black/50"
	>
		<div class="flex flex-col h-full">
			<header class="flex items-center justify-center gap-2 p-6 text-center">
				<div>
					<h3 class="font-mono font-bold text-sm">{project.title}</h3>
					<p class="font-mono text-xs text-muted-foreground">
						{dialogImageIndex + 1} of {project.images.length}
					</p>
				</div>
			</header>

			<div class="flex-1 flex items-center justify-center px-4 pb-4 overflow-hidden">
				<img
					src={imagePath(project.images[dialogImageIndex])}
					alt={`Screenshot ${dialogImageIndex + 1} of ${project.title}`}
					class="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
				/>
			</div>

			<nav class="flex items-center justify-center gap-8 p-6">
				<button
					type="button"
					onclick={previousImage}
					class="p-2 opacity-50 hover:opacity-100 transition-opacity"
					aria-label="Previous image"
				>
					<ChevronLeftIcon class="size-6" />
				</button>
				<button
					type="button"
					onclick={() => dialog?.close()}
					class="p-2 opacity-50 hover:opacity-100 transition-opacity"
					aria-label="Close gallery"
				>
					<XIcon class="size-6" />
				</button>
				<button
					type="button"
					onclick={nextImage}
					class="p-2 opacity-50 hover:opacity-100 transition-opacity"
					aria-label="Next image"
				>
					<ChevronRightIcon class="size-6" />
				</button>
			</nav>
		</div>
	</dialog>
{/if}

<article class="rounded-lg shadow-lg overflow-hidden font-mono max-w-2xl {themeClass}">
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<nav class="flex items-center gap-3 px-5 xl:px-6 py-4 xl:py-5">
		<a
			href={project.url}
			target="_blank"
			rel="noopener noreferrer"
			class="opacity-40 hover:opacity-100 transition-opacity text-white"
			aria-label="Visit project"
		>
			<LinkIcon class="size-4" />
		</a>
		{#if project.repo}
			<a
				href={`https://github.com/${project.repo}`}
				target="_blank"
				rel="noopener noreferrer"
				class="opacity-40 hover:opacity-100 transition-opacity text-white"
				aria-label="View on GitHub"
			>
				<GithubIcon class="size-4" />
			</a>
		{/if}
		{#if project.updatedAt}
			<span class="ml-auto text-xs text-white/50 text-balance uppercase tracking-wide">
				{getRelativeTime(project.updatedAt)}
			</span>
		{/if}
	</nav>

	{#if project.images && project.images.length > 0}
		<div
			class="overflow-hidden px-5 xl:px-6 pb-5 xl:pb-6 cursor-grab"
			use:emblaCarouselSvelte={{ options: { skipSnaps: true, align: 'start' }, plugins: [] }}
		>
			<div class="flex gap-2">
				{#each project.images as image, index (image)}
					<button
						type="button"
						onclick={() => openGallery(index)}
						class="flex-shrink-0 hover:scale-[1.02] transition-transform"
					>
						<img
							src={imagePath(image)}
							alt={`Screenshot of ${project.title}`}
							class="max-h-80 rounded shadow-md object-cover"
						/>
					</button>
				{/each}
			</div>
		</div>
	{/if}

	<header class="px-5 xl:px-6 py-4 xl:py-5 border-t border-white/15">
		<h3 class="text-white font-bold text-sm text-balance">{project.title}</h3>
		<p class="text-white/65 font-thin text-sm text-balance">{project.description}</p>
	</header>
</article>
