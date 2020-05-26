import { writable } from 'svelte/store'

export const waitingResponse = writable(true)
export const menu = writable('Connecting')
export const types = writable([])
export const headerss = writable([])
