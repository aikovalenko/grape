<script>
  import { onMount } from 'svelte'
  import {waitingResponse, menu} from './stores.js'
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

<div class="text-white">{$menu}</div>
