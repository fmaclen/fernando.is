<section class="error">
  <h2 class="error__h2">Error 404</h2>
  <p class="error__p"><strong>No content found.</strong> Perhaps there's a typo in the address or followed a broken link. <a href="/" class="error__a">Try starting over</a>.</p>
</section>

<style lang="scss">
  @import '$lib/mixins';

  section.error {
    display: flex;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
    margin-block: auto;
    margin-inline: auto;
    gap: var(--size-fluid-4);

    @media (max-width: $breakpoint-xl) {
      flex-direction: column;
		}
  }

  h2.error__h2,
  p.error__p {
    margin-block: unset;
    place-self: center;

    @media (max-width: $breakpoint-xl) {
      place-self: unset;
    }
  }

  h2.error__h2 {
    text-wrap: nowrap;
    color: var(--text-1);
    font-size: var(--size-6);

    @media (max-width: $breakpoint-md) {
      font-size: var(--size-5);
		}

    @media (max-width: $breakpoint-sm) {
      font-size: var(--size-6);
      letter-spacing: var(--font-letterspacing-0);
		}
  }

  p.error__p {
    text-wrap: balance;
    color: var(--text-2);
    font-weight: var(--font-weight-1);
    max-width: var(--size-content-3);
    font-size: var(--size-4);

    strong {
      color: var(--text-1);
    }

    @media (max-width: $breakpoint-md) {
      font-size: var(--size-3);
		}
  }

  a.error__a {
    @include a;
  }
</style>
