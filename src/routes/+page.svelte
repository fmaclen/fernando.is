<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	import { projects } from '$lib/data/projects.js';
</script>

<div class="p-2">
	<div class="columns-1 md:columns-2 xl:columns-3 gap-2 w-fit mx-auto">
		{#each projects as project (project.title)}
			<div class="break-inside-avoid mb-2">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
</div>
