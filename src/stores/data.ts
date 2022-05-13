import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

export type KeyInfo = {
  name: string
  code: number
  width?: number
  height?: number
}

export type KeyRow = {
  row: KeyInfo[]
}

export type DataGroup = {
  [name: string]: KeyRow[]
}

export const dataMeta = writable({
  name: 'English',
  code: 'en_us',
})

export const dataGroups: Writable<DataGroup> = writable({
  basic: [],
  extra: [],
  mouse: [],
  numpad: [],
})

export const dataGroupHistory: Writable<DataGroup[]> = writable([])

export const MAX_HISTORY = 20

// export const addHistory = () => {
//   dataGroupHistory.update(history => {
//     const newHistory = [...history, JSON.parse(JSON.stringify(dataGroups))]
//     return newHistory.slice(0, MAX_HISTORY)
//   })
// }