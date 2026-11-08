<script lang="ts">
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import XIcon from '@lucide/svelte/icons/x';
	import { getProjectImage } from '$lib/assets/project-images.js';
	import { gallery } from './gallery.svelte.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	function handleKeydown(event: KeyboardEvent) {
		if (!gallery.project) return;
		if (event.key === 'ArrowLeft') gallery.previous();
		if (event.key === 'ArrowRight') gallery.next();
		if (event.key === 'Escape') gallery.close();
	}

	let open = $derived(gallery.project !== null);
</script>

<svelte:window onkeydown={handleKeydown} />

<Dialog.Root {open} onOpenChange={(isOpen) => !isOpen && gallery.close()}>
	<Dialog.Content fullscreen showCloseButton={false}>
		{#if gallery.project && gallery.images.length > 0}
			{@const currentImage = gallery.images[gallery.index]}
			{@const src = getProjectImage(currentImage)}
			<div class="flex flex-col h-full bg-checkered text-foreground">
				<header class="flex items-center justify-center gap-2 p-6 text-center">
					<div>
						<h3 class="font-mono font-bold text-base">{gallery.project.title}</h3>
						<p class="font-mono text-sm text-muted-foreground">
							{gallery.index + 1} of {gallery.images.length}
						</p>
					</div>
				</header>

				<!-- `*:contents` flattens enhanced-img's <picture> wrapper so the <img> is the flex item and max-h-full resolves -->
				<div class="flex-1 flex items-center justify-center p-4 overflow-hidden *:contents">
					{#if src}
						<enhanced:img
							{src}
							alt={`Screenshot ${gallery.index + 1} of ${gallery.project.title}`}
							class="max-h-full max-w-full w-auto h-auto rounded shadow-2xl"
						/>
					{/if}
				</div>

				<nav class="flex items-center justify-center gap-8 p-6">
					<button
						type="button"
						onclick={() => gallery.previous()}
						class="p-2 text-foreground opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
						aria-label="Previous image"
					>
						<ChevronLeftIcon class="size-6" />
					</button>
					<button
						type="button"
						onclick={() => gallery.close()}
						class="p-2 text-foreground opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
						aria-label="Close gallery"
					>
						<XIcon class="size-6" />
					</button>
					<button
						type="button"
						onclick={() => gallery.next()}
						class="p-2 text-foreground opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
						aria-label="Next image"
					>
						<ChevronRightIcon class="size-6" />
					</button>
				</nav>
			</div>
		{/if}
	</Dialog.Content>
</Dialog.Root>
