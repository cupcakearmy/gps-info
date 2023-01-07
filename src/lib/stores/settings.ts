import { CoordinateType } from '$lib/geo'
import { Preferences } from '@capacitor/preferences'
import { writable } from 'svelte/store'

export enum Unit {
  Metric = 'METRIC',
  Imperial = 'IMPERIAL',
}

const defaults = {
  bearings: true,
  type: CoordinateType.DMS,
  unit: Unit.Metric,
}
type Defaults = typeof defaults

export function setting<K extends keyof Defaults>(key: K) {
  const store = writable<Defaults[K]>(defaults[key])
  Preferences.get({ key }).then(({ value }) => {
    store.set(value ? JSON.parse(value) : defaults[key])
    store.subscribe((value) => {
      Preferences.set({ key, value: JSON.stringify(value) })
    })
  })
  return store
}

export const type = setting('type')
export const bearings = setting('bearings')
export const unit = setting('unit')
