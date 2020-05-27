<script>
  import { onMount } from 'svelte'
  import { itemIndex } from './functions'
  import {waitingResponse, menu, types, headers, t} from './stores.js'
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
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Grape Cafe - Menu</h1>
  </div>
  {#each $types as j}
    {#if $menu[j].length !== 0}
      <div class="mb-12">
        <h3 class="mb-2 text-xl font-bold">{$t[j][lang]}:</h3>
        {#each $menu[j] as i}
          <div class="relative mb-4">
            <div
                class="{i[itemIndex('available', $headers)] === 'TRUE' ? '' : 'not-available'} flex justify-between"
            >
              <div class="pr-2">
                <div class="font-bold">{ i[itemIndex('name-' + lang, $headers)] }</div>
                {#if i[itemIndex('minimum', $headers)]}
                  <div class="text-sm text-gray-900">Минимальный заказ { i[itemIndex('minimum', $headers)] }г</div>
                {/if}
                <div>{ i[itemIndex('description-' + lang, $headers)] }</div>
              </div>
              <div class="text-right">
                <div class="font-bold">{ i[itemIndex('price', $headers)] }€</div>
                <div>
                  { i[itemIndex('portion', $headers)] }
                  {#if j === 'alcohol'}
                    л
                    {:else}г
                  {/if}
                </div>
              </div>
            </div>
            {#if i[itemIndex('available', $headers)] === 'FALSE'}
              <div class="">
                <div class="">Закончилось!</div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  {/each}
</div>

<style>
  .not-available {
    @apply opacity-25 relative;
  }
</style>
