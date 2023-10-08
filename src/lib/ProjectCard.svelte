<script lang="ts">
	import IconGithub from '$lib/icons/IconGithub.svg.svelte';
	import type { Project } from "$lib/ProjectCard";
	import Time from './Time.svelte';

  export let project: Project
</script>

<article class="article {project.theme ? `article--${project.theme}` : ''}">
  <nav class="article__nav">
    <Time date={new Date()} />
    <a href={project.repo} class="article__a">
      <IconGithub />
    </a>
  </nav>
  <slot />
  <a href="{project.url}" class="article__a">
    <h3 class="h3">{project.title}</h3>
    <p class="p">{project.description}</p>
  </a>
</article>

<style lang="scss">
  p.p,
  h3.h3 {
    margin: unset;
  }

  p.p {
    width: 75%;

    @media (min-width: 1280px) {
      width: 50%;
    }
  }

  article.article {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    border-radius: 8px;
    padding: 24px;
    background-color: hsl(0, 0%, 10%);
    transition: transform 0.05s ease-in-out;

    &--canutin { background-color: #1347FF; }
    &--fernando-is { background-color: #191919; }
    &--svelte-currency-input { background-color: #E25F36; }
    &--julia-sanfrancisco { background-color: #A28B67; }
    &--auto-garden { background-color: #488E3C }
    &--promptspree { background-color: #2F2F2F }
    &--rule-of-three { background-color: #57B0E5 }

    &:hover {
      transform: scale(1.025);
    }
  }

  nav.article__nav {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  a.article__a {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    text-decoration: unset;
    color: hsl(0, 0%, 100%);
  }
</style>
