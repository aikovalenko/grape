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
    bg-gray-300
    font-display
    antialiased;
  }

  .wrapper {
    max-width: 900px;
    @apply
    mx-auto
    px-4;
  }
</style>
