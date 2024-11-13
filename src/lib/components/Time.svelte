<script lang="ts">
	import { formatDistance } from 'date-fns';

	interface Props {
		date: string | undefined;
	}

	let { date }: Props = $props();
	const currentDate = date ? new Date(date).toDateString() : undefined;
	const timeAgoInWords = date
		? formatDistance(new Date(date), new Date(), { addSuffix: true })
		: '';
</script>

{#if date}
	<time class="time" title={currentDate}>{timeAgoInWords}</time>
{/if}

<style lang="scss">
	@import '$lib/mixins';

	time.time {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.5);
		text-transform: uppercase;
		cursor: help;

		@media (max-width: $breakpoint-md) {
			font-size: 11px;
		}
	}
</style>
