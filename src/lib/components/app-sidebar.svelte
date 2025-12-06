<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { theme } from '$lib/theme.svelte.js';
	import type { ComponentProps } from 'svelte';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Content class="p-6">
		<p>Sidebar content goes here</p>
	</Sidebar.Content>

	<Sidebar.Footer class="p-4">
		<button
			type="button"
			onclick={() => theme.toggle()}
			class="size-6 rounded-full border border-sidebar-border flex items-center justify-center hover:bg-sidebar-accent transition-colors"
			aria-label="Toggle theme"
		>
			{#if theme.current === 'dark'}
				<svg class="size-3" viewBox="0 0 24 24" fill="currentColor">
					<circle cx="12" cy="12" r="4" />
					<path
						d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			{:else}
				<svg class="size-3" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
				</svg>
			{/if}
		</button>
	</Sidebar.Footer>

	<Sidebar.Rail />
</Sidebar.Root>
