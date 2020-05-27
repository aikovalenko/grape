<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;

  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    @apply
    bg-white
    font-display
    antialiased;
  }

  .wrapper {
    max-width: 640px;
    @apply
    mx-auto
    px-2;
  }
</style>
