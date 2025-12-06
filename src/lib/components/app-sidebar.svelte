<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { theme } from '$lib/theme.svelte.js';
	import type { ComponentProps } from 'svelte';
	import GithubIcon from '@lucide/svelte/icons/github';
	import DribbbleIcon from '@lucide/svelte/icons/dribbble';
	import LinkedinIcon from '@lucide/svelte/icons/linkedin';
	import AtSignIcon from '@lucide/svelte/icons/at-sign';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Content
		class="p-8 md:p-12 font-mono text-xl md:text-2xl font-thin text-balance space-y-6 gap-6"
	>
		<p class="text-base md:text-lg m-0">Hello,</p>

		<p class="m-0">
			I'm <strong class="font-bold">Fernando Maclen</strong>, a Miami-based
			<strong class="font-bold">designer & software developer</strong>;
			<span class="text-yellow-400">truly full-stack.</span>
		</p>

		<p class="text-base md:text-lg m-0">
			This portfolio showcases my recent work across design & code.
		</p>

		<p class="text-base md:text-lg m-0">
			If you have an interesting project that could benefit from my end-to-end abilities,
			<a href="mailto:hello@fernando.is" class="text-yellow-400 underline hover:no-underline"
				>let's talk</a
			>.
		</p>

		<nav class="flex gap-6">
			<a
				href="https://x.com/fmaclen"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="X/Twitter"
				class="opacity-30 hover:opacity-100 transition-opacity"
			>
				<svg class="size-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M10.8423 15.1515L4.40655 22.5H0.841797L9.1773 12.978L10.8423 15.1515Z" />
					<path d="M12.7881 8.241L18.6808 1.5H22.2433L14.4381 10.4265L12.7881 8.241Z" />
					<path
						d="M23.6158 22.5H16.4465L0.383789 1.5H7.73454L23.6158 22.5ZM17.4298 20.3677H19.4038L6.66204 3.5205H4.54404L17.4298 20.3677Z"
					/>
				</svg>
			</a>
			<a
				href="https://github.com/fmaclen"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
				class="opacity-30 hover:opacity-100 transition-opacity"
			>
				<GithubIcon class="size-5" />
			</a>
			<a
				href="https://dribbble.com/fmaclen"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Dribbble"
				class="opacity-30 hover:opacity-100 transition-opacity"
			>
				<DribbbleIcon class="size-5" />
			</a>
			<a
				href="https://www.linkedin.com/in/fmaclen/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn"
				class="opacity-30 hover:opacity-100 transition-opacity"
			>
				<LinkedinIcon class="size-5" />
			</a>
			<a
				href="mailto:hello@fernando.is"
				aria-label="Email"
				class="opacity-30 hover:opacity-100 transition-opacity"
			>
				<AtSignIcon class="size-5" />
			</a>
		</nav>
	</Sidebar.Content>

	<Sidebar.Footer class="p-8 md:p-12">
		<button
			type="button"
			onclick={() => theme.toggle()}
			class="opacity-50 hover:opacity-100 transition-opacity"
			aria-label="Toggle theme"
		>
			{#if theme.current === 'dark'}
				<SunIcon class="size-4 text-yellow-400" />
			{:else}
				<MoonIcon class="size-4 text-gray-800" />
			{/if}
		</button>
	</Sidebar.Footer>

	<Sidebar.Rail />
</Sidebar.Root>
