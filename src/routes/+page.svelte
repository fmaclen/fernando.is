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
		column-gap: var(--size-2);
		padding: var(--size-9);
		position: relative;
		list-style: none;
		margin-block: unset;
		box-sizing: border-box;
		margin-inline: auto;
		column-count: 2;
		min-height: 100dvh;
		max-width: 1366px;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			bottom: 0;
			width: calc(50% - var(--size-8));
			transform: translateX(-50%);
			border-left: var(--border-size-1) solid var(--border-1);
			border-right: var(--border-size-1) solid var(--border-1);
			z-index: 0;
		}

		// @media (max-width: 1366px) {
		// 	column-count: 1;
		// 	max-width: 768px;
		// 	padding-inline: 48px;
		// 	padding-block: 48px;

		// 	&::before {
		// 		width: unset;
		// 		border-right: unset;
		// 	}
		// }

		// @media (max-width: 1024px) {
		// 	padding-inline: 32px;
		// }

		// @media (max-width: 880px) {
		// 	padding-block: 32px;
		// 	padding-inline: 24px;
		// }
	}

	li.ul__li {
		position: relative;
		z-index: 1;
		display: inline-block;
		width: 100%;
		margin-bottom: var(--size-2);
	}
</style>
