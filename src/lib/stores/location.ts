import { Coordinates, Heading } from '$lib/geo'
import { Geolocation } from '@capacitor/geolocation'
import { readable } from 'svelte/store'

type NullableNumber = number | null
type Location = {
  coords: Coordinates
  altitude: NullableNumber
  accuracy: {
    coords: NullableNumber
    altitude: NullableNumber
  }
  speed: NullableNumber
  heading: Heading | null
  time: {
    stamp: Date
    fix: number
  }
}

let last = Date.now()

export const location = readable<Location | null>(null, (set) => {
  let id: string
  Geolocation.watchPosition({ enableHighAccuracy: true }, (p) => {
    if (p) {
      const now = Date.now()
      const location: Location = {
        coords: new Coordinates(p.coords.latitude, p.coords.longitude),
        altitude: p.coords.altitude,
        accuracy: {
          altitude: p.coords.altitudeAccuracy ?? null,
          coords: p.coords.accuracy,
        },
        speed: p.coords.speed,
        heading: p.coords.heading ? new Heading(p.coords.heading) : null,
        time: {
          stamp: new Date(p.timestamp),
          fix: now - last,
        },
      }
      last = now
      set(location)
    }
  }).then((i) => (id = i))
  return () => {
    if (id) Geolocation.clearWatch({ id })
  }
})
