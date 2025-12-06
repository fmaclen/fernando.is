<script lang="ts">
	import type { Project } from '$lib/data/projects.svelte.js';
	import { getProjectImage } from '$lib/assets/project-images.js';
	import LinkIcon from '@lucide/svelte/icons/link';
	import GithubIcon from '@lucide/svelte/icons/github';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { gallery } from './gallery.svelte.js';
	import { Image } from '@unpic/svelte';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

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
		'palfrey-press': 'bg-[hsl(32,15%,30%)]',
		'merchant-discoverers': 'bg-[#10282f]'
	};

	let themeClass = $derived(project.theme ? themeClasses[project.theme] : 'bg-zinc-800');
</script>

<article class="rounded-lg shadow-lg overflow-hidden font-mono max-w-2xl {themeClass}">
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<nav
		class="flex items-center gap-3 px-5 xl:px-6 pt-4 xl:pt-5 {project.images &&
		project.images.length > 0
			? ''
			: 'pb-4 xl:pb-5'}"
	>
		<a
			href={project.url}
			target="_blank"
			rel="noopener noreferrer"
			class="opacity-40 hover:opacity-100 hover:text-indigo-500 dark:hover:text-yellow-400 transition-opacity text-white"
			aria-label="Visit project"
		>
			<LinkIcon class="size-4" />
		</a>
		{#if project.repo}
			<a
				href={`https://github.com/${project.repo}`}
				target="_blank"
				rel="noopener noreferrer"
				class="opacity-40 hover:opacity-100 hover:text-indigo-500 dark:hover:text-yellow-400 transition-opacity text-white"
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
			class="overflow-hidden p-5 xl:p-6 cursor-grab"
			use:emblaCarouselSvelte={{ options: { skipSnaps: true, align: 'start' }, plugins: [] }}
		>
			<div class="flex gap-2">
				{#each project.images as image, index (image)}
					{@const src = getProjectImage(image)}
					{#if src}
						<button
							type="button"
							onclick={() => gallery.open(project, index)}
							class="flex-shrink-0 hover:scale-[1.02] transition-transform cursor-pointer"
							aria-label={`View screenshot ${index + 1} of ${project.title}`}
						>
							<Image
								{src}
								alt={`Screenshot of ${project.title}`}
								class="h-96 w-auto rounded shadow-md"
								layout="constrained"
							/>
						</button>
					{/if}
				{/each}
			</div>
		</div>
	{/if}

	<header class="px-5 xl:px-6 py-4 xl:py-5 border-t border-white/15">
		<h3 class="text-white font-bold text-sm text-balance">{project.title}</h3>
		<p class="text-white/65 font-thin text-sm text-balance">{project.description}</p>
	</header>
</article>
