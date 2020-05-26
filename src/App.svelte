<script>
  import { onMount } from 'svelte'
  import { itemIndex } from './functions'
  import {waitingResponse, menu, types, headerss} from './stores.js'
  import { getIp } from './api'

  import Tailwindcss from "./Tailwindcss.svelte"

  onMount(() => {
    getIp()
  })
</script>

<Tailwindcss />

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Overpass+Mono:400,600&display=swap" rel="stylesheet">
  <title>Grape Cafe</title>
</svelte:head>


{#each $types as i}
  <div class="mb-12 text-white">
    <div>{i}:</div>
    {#each $menu[i] as i}
      <div>{i[itemIndex('name-ru', $headerss)]}</div>
      <div>{i[itemIndex('description-ru', $headerss)]}</div>
    {/each}
  </div>
{/each}
