<script>
  import { onMount } from 'svelte'
  import {waitingResponse} from './stores.js'
  import { getIp } from './api'

  onMount(() => {
    getIp()
  })
</script>

<Tailwindcss />

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Overpass+Mono:400,600&display=swap" rel="stylesheet">
  <title>Grape Cafe</title>
</svelte:head>

<div>sdsdsd</div>
