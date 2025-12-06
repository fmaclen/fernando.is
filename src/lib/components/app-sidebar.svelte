<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { theme } from '$lib/theme.svelte.js';
	import type { ComponentProps } from 'svelte';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Content class="p-12 font-mono text-2xl font-thin text-balance space-y-6">
		<p class="text-lg">Hello,</p>

		<p>
			I'm <strong class="font-bold">Fernando Maclen</strong>, a Miami-based
			<strong class="font-bold">designer & software developer</strong>;
			<span class="text-yellow-400">truly full-stack.</span>
		</p>

		<p class="text-lg">This portfolio showcases my recent work across design & code.</p>

		<p class="text-lg">
			If you have an interesting project that could benefit from my end-to-end abilities,
			<a href="mailto:hello@fernando.is" class="text-yellow-400 underline hover:no-underline"
				>let's talk</a
			>.
		</p>
	</Sidebar.Content>

	<Sidebar.Footer class="p-6">
		<button
			type="button"
			onclick={() => theme.toggle()}
			class="hover:opacity-70 transition-opacity"
			aria-label="Toggle theme"
		>
			{#if theme.current === 'dark'}
				<svg
					class="size-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<title>sun</title>
					<g fill="#fbbf24">
						<rect y="11" width="3" height="2" />
						<rect
							x="3.575"
							y="3.075"
							transform="matrix(0.7071 -0.7071 0.7071 0.7071 -1.8951 4.5752)"
							width="2"
							height="3"
						/>
						<rect x="11" width="2" height="3" />
						<rect
							x="17.925"
							y="3.575"
							transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.4542 15.0755)"
							width="3"
							height="2"
						/>
						<rect x="21" y="11" width="3" height="2" />
						<rect
							x="18.425"
							y="17.925"
							transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.046 19.4248)"
							width="2"
							height="3"
						/>
						<rect x="11" y="21" width="2" height="3" />
						<rect
							x="3.075"
							y="18.425"
							transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.3954 8.9245)"
							width="3"
							height="2"
						/>
						<circle fill="#fbbf24" cx="12" cy="12" r="7" />
					</g>
				</svg>
			{:else}
				<svg
					class="size-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<title>moon</title>
					<g fill="#1f2937">
						<path
							fill="#1f2937"
							d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
						/>
					</g>
				</svg>
			{/if}
		</button>
	</Sidebar.Footer>

	<Sidebar.Rail />
</Sidebar.Root>
