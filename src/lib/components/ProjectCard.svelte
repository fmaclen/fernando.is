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

    @media (max-width: 1366px) {
      width: 75%;
    }

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  article.article {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    border-radius: 8px;
    padding: 24px;
    background-color: var(--color-neutral-10);
    transition: scale 0.1s ease-in-out;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);

    &--canutin { background-color: #1347FF; }
    &--fernando-is { background-color: #191919; }
    &--svelte-currency-input { background-color: #E25F36; }
    &--julia-sanfrancisco { background-color: #67403a; }
    &--auto-garden { background-color: #488E3C }
    &--promptspree { background-color: #2F2F2F }
    &--rule-of-three { background-color: #57B0E5 }
    &--oak-hall { background-color: #A28B67 }

    &:hover {
      scale: 1.025;
    }
  }

  nav.article__nav {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  a.article__a {
    display: flex;
    flex-direction: column;
    text-decoration: unset;
    color: #FFF;
    transition: opacity 0.1s ease-in-out;
    row-gap: 6px;
    opacity: 0.9;

    &--repo {
      opacity: 0.4;
    }

    &:hover {
      color: #FFF;
      opacity: 1;
    }
  }
</style>
