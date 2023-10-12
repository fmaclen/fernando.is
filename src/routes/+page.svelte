<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import projectsStore from '$lib/stores/projectsStore';
</script>

<ul class="ul">
	{#each $projectsStore as project}
		<li class="ul__li">
			<ProjectCard {project} />
		</li>
	{/each}
</ul>

<style lang="scss">
	ul.ul {
		position: relative;
		column-count: 2;
		column-gap: 16px;
		list-style: none;
		margin-block: unset;
		padding: 64px;
		min-height: 100dvh;
		box-sizing: border-box;
		max-width: 1366px;
		margin-inline: auto;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			bottom: 0;
			width: calc(50% - 32px);
			transform: translateX(-50%);
			border-left: 1px solid hsl(0, 0%, 20%);
			border-right: 1px solid hsl(0, 0%, 20%);
			z-index: -1;
		}

		@media (max-width: 1366px) {
			column-count: 1;
			max-width: 768px;

			&::before {
				width: unset;
				border-right: unset;
			}
		}
	}

	li.ul__li {
		display: inline-block;
		width: 100%;
		margin-bottom: 16px;
	}
</style>
