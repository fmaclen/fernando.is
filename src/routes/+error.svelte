<section class="error">
  <h2 class="error__h2">Error 404</h2>
  <p class="error__p">No content found. Perhaps there's a typo in the address or followed a broken link.</p>
</section>

<style lang="scss">
  section.error {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding-inline: 64px;
    padding-block: 64px;
    height: 100%;
    box-sizing: border-box;
    margin-block: auto;

    @media (max-width: 1366px) {
      flex-direction: column;
      text-align: center;
      max-width: 50%;
      margin-inline: auto;
      gap: 12px;
			padding-inline: 48px;
			padding-block: 48px;
		}

		@media (max-width: 1024px) {
			padding-inline: 32px;
      max-width: 75%;
		}

		@media (max-width: 880px) {
			padding-block: 32px;
			padding-inline: 24px;
      max-width: 100%;
		}
  }

  h2.error__h2,
  p.error__p {
    margin-block: unset;
    place-self: center;
  }

  h2.error__h2 {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-neutral-100);

    @media (max-width: 880px) {
      font-size: 16px;
		}
  }

  p.error__p {
    font-size: 16px;
    color: var(--color-neutral-50);

    @media (max-width: 880px) {
      font-size: 14px;
		}
  }
</style>
