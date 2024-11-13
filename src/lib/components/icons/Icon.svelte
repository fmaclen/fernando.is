<script lang="ts">
	import IconDark from './IconDark.svg.svelte';
	import IconDribbble from './IconDribbble.svg.svelte';
	import IconEmail from './IconEmail.svg.svelte';
	import IconGithub from './IconGithub.svg.svelte';
	import IconLight from './IconLight.svg.svelte';
	import IconLinkedin from './IconLinkedin.svg.svelte';
	import IconX from './IconX.svg.svelte';
	import IconLink from './IconLink.svg.svelte';
	import IconClose from './IconClose.svg.svelte';
	import IconNext from './IconNext.svg.svelte';
	import IconPrevious from './IconPrevious.svg.svelte';
	import { Icons, IconModifier } from './icons';

	interface Props {
		icon: Icons;
		modifier?: IconModifier | undefined;
	}

	let { icon, modifier = undefined }: Props = $props();
</script>

<span class="icon {modifier ? `icon--${modifier}` : ''}">
	{#if icon === Icons.X}
		<IconX />
	{:else if icon === Icons.DRIBBBLE}
		<IconDribbble />
	{:else if icon === Icons.GITHUB}
		<IconGithub />
	{:else if icon === Icons.EMAIL}
		<IconEmail />
	{:else if icon === Icons.LINKEDIN}
		<IconLinkedin />
	{:else if icon === Icons.DARK}
		<IconDark />
	{:else if icon === Icons.LIGHT}
		<IconLight />
	{:else if icon == Icons.EXTERNAL_LINK}
		<IconLink />
  {:else if icon == Icons.PREVIOUS}
    <IconPrevious />
  {:else if icon == Icons.CLOSE}
    <IconClose />
  {:else if icon == Icons.NEXT}
    <IconNext />
	{/if}
</span>

<style lang="scss">
	.icon {
		display: flex;
		align-items: center;

		:global(.svg-icon) {
			width: var(--size-4);
			height: var(--size-4);
		}

		&--themable,
		&--dark-mode,
		&--light-mode {
			padding: var(--size-2);
		}

		&--themable {
      :global(.svg-icon path) {
        fill: var(--text-1);
      }
		}

    &--dark-mode {
      :global(.svg-icon g),
      :global(.svg-icon circle) {
        fill: var(--dark-accent);
      }
    }

    &--light-mode {
      :global(.svg-icon path) {
        fill: var(--light-accent);
      }
    }

		&--in-dialog {
			width: var(--size-6);
			height: var(--size-6);

      :global(.svg-icon line),
      :global(.svg-icon g) {
        stroke: var(--text-1);
      }
		}
	}
</style>
