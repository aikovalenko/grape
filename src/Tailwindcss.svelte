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
    @apply bg-main;
    @apply font-display;
    @apply antialiased;
  }

  .wrapper {
    max-width: 480px;
    @apply mx-auto;
    @apply px-4;
  }

  @keyframes move {
    0% {
      left: -10%;
    }

    100% {
      left: 110%;
    }
  }

  @keyframes move-reverse {
    0% {
      right: -10%;
    }

    100% {
      right: 110%;
    }
  }

  .animation {
    animation-name: move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .animation-reverse {
    animation-name: move-reverse;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

</style>
