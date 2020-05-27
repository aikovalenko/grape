import { writable } from 'svelte/store'

export const waitingResponse = writable(true)
export const menu = writable('Connecting')
export const types = writable([])
export const headers = writable([])
export const t = writable({
  'salad': {
    'ru': 'Салаты'
  },
  'grill': {
    'ru': 'Блюда на гриле'
  },
  'alcohol': {
    'ru': 'Алкогольные напитки'
  }
})
