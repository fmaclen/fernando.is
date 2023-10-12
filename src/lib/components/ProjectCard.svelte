<script lang="ts">
	import IconGithub from '$lib/components/icons/IconGithub.svg.svelte';
	import type { Project } from "$lib/stores/projectsStore";
	import Time from '$lib/components/Time.svelte';

  export let project: Project
</script>

<article class="article {project.theme ? `article--${project.theme}` : ''}">
  <nav class="article__nav">
    {#if project.repo}
      <a href={`https://github.com/${project.repo}`} class="article__a article__a--repo" target="_blank">
        <IconGithub />
      </a>
    {/if}
    <Time date={project.updatedAt} />
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
    width: 50%;

    @media (min-width: 1366px) {
      width: 75%;
    }
  }

  article.article {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    border-radius: 8px;
    padding: 24px;
    background-color: hsl(0, 0%, 10%);
    transition: transform 0.1s ease-in-out;

    &--canutin { background-color: #1347FF; }
    &--fernando-is { background-color: #191919; }
    &--svelte-currency-input { background-color: #E25F36; }
    &--julia-sanfrancisco { background-color: #67403a; }
    &--auto-garden { background-color: #488E3C }
    &--promptspree { background-color: #2F2F2F }
    &--rule-of-three { background-color: #57B0E5 }
    &--oak-hall { background-color: #A28B67 }
  }

  nav.article__nav {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  a.article__a {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    text-decoration: unset;
    color: hsl(0, 0%, 100%);
    transition: opacity 0.1s ease-in-out;
    opacity: .9;

    &--repo {
      opacity: 0.4;
    }

    &:hover {
      opacity: 1;
    }
  }
</style>
