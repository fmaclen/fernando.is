<script lang="ts">
	import type { Project } from '$lib/data/projects.js';
	import LinkIcon from '@lucide/svelte/icons/link';
	import GithubIcon from '@lucide/svelte/icons/github';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

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
			<span class="ml-auto text-xs text-white/50 text-balance">
				{getRelativeTime(project.updatedAt)}
			</span>
		{/if}
	</nav>

	{#if project.images && project.images.length > 0}
		<div class="overflow-x-auto px-5 xl:px-6 pb-5 xl:pb-6">
			<div class="flex gap-2">
				{#each project.images as image (image)}
					<img
						src={imagePath(image)}
						alt={`Screenshot of ${project.title}`}
						class="max-h-80 rounded shadow-md object-cover"
					/>
				{/each}
			</div>
		</div>
	{/if}

	<header class="px-5 xl:px-6 py-4 xl:py-5 border-t border-white/15">
		<h3 class="text-white font-bold text-sm text-balance">{project.title}</h3>
		<p class="text-white/65 font-thin text-sm text-balance">{project.description}</p>
	</header>
</article>
