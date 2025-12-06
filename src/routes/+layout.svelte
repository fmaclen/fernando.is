<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="flex h-12 items-center border-b">
			<div class="flex flex-1 items-center gap-2 px-3">
				<Sidebar.Trigger />
				<Separator orientation="vertical" class="mr-2 !h-4 bg-foreground/20" />
				<nav aria-label="breadcrumb">
					<span class="font-mono text-sm font-thin text-muted-foreground"
						>What I've been building</span
					>
				</nav>
			</div>
		</header>
		<main class="p-4">
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
