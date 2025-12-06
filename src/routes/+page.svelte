<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	import GalleryLightbox from '$lib/components/gallery-lightbox.svelte';
	import { projectsStore } from '$lib/data/projects.svelte.js';
</script>

<GalleryLightbox />

<div class="p-2">
	<div class="columns-1 lg:columns-2 2xl:columns-3 gap-2 w-fit mx-auto">
		{#each projectsStore.list as project (project.title)}
			<div class="break-inside-avoid mb-2">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
</div>
