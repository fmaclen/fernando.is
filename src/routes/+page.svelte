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
	@import '$lib/mixins';

	ul.ul {
		@include layout-padding-block;
		padding-inline: unset;
		position: relative;
		list-style: none;
		margin-block: unset;
		box-sizing: border-box;
		margin-inline: auto;
		column-count: 2;
		min-height: 100dvh;
		column-gap: var(--size-2);
		max-width: $breakpoint-xl;

		&::before {
			content: '';
			z-index: 0;
			position: absolute;
			top: 0;
			left: 50%;
			bottom: 0;
			width: calc(50% - var(--size-8));
			transform: translateX(-50%);
			border-left: var(--border-size-1) solid var(--border-1);
			border-right: var(--border-size-1) solid var(--border-1);
			transition: border-color 1000ms;
		}

		@media (max-width: $breakpoint-xl) {
			column-count: 1;
			width: 100%;
			max-width: $breakpoint-md;

			&::before {
				width: unset;
				border-right: unset;
			}
		}
	}

	li.ul__li {
		position: relative;
		z-index: 1;
		display: inline-block;
		width: 100%;
		margin-bottom: var(--size-2);
		transition: filter 500ms;
	}
</style>
