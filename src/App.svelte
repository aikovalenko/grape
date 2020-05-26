<script>
  import { onMount } from 'svelte'
  import { itemIndex } from './functions'
  import {waitingResponse, menu, types, headerss} from './stores.js'
  import { getIp } from './api'

  import Tailwindcss from "./Tailwindcss.svelte"

  export const lang = 'ru'

  onMount(() => {
    getIp()
  })
</script>

<Tailwindcss />

<svelte:head>
<!--  <link href="https://fonts.googleapis.com/css?family=Overpass+Mono:400,600&display=swap" rel="stylesheet">-->
  <title>Grape Cafe</title>
</svelte:head>

<div class="wrapper py-8 text-black">
  {#each $types as i}
    {#if $menu[i].length !== 0}
      <div class="mb-12">
        <div class="mb-4">{i}:</div>
        {#each $menu[i] as i}
          {i}
          <div class="mb-8">
            <div>{i[itemIndex('name-' + lang, $headerss)]}</div>
            <div>{i[itemIndex('description-' + lang, $headerss)]}</div>
          </div>
        {/each}
      </div>
    {/if}
  {/each}
</div>

