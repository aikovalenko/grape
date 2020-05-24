import { writable } from 'svelte/store'

export const waitingResponse = writable(true)
export const menu = writable('Connecting')
