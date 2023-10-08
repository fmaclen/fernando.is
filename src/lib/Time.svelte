<script lang="ts">
  export let date: Date;
</script>

<time class="time">Last updated {date}</time>

<style lang="scss">
  time.time {
    font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.3);
		text-transform: uppercase;
  }
</style>
