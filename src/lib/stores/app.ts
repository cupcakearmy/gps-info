import { App, type AppInfo } from '@capacitor/app'
import { readable } from 'svelte/store'

export const app = readable<AppInfo | null>(null, (set) => {
  App.getInfo().then((info) => set(info))
})
