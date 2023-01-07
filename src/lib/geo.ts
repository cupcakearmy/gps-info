export enum CoordinateType {
  Decimal = 'DECIMAL',
  DMS = 'DMS',
}

export enum CoordinateLink {
  GoogleMaps = 'GOOGLE_MAPS',
  OpenStreetMap = 'OpenStreetMap',
}

export class Coordinates {
  constructor(private lat: number, private lon: number) {}

  private static format(value: number, type: CoordinateType): string {
    switch (type) {
      case CoordinateType.DMS: {
        // https://en.wikipedia.org/wiki/Decimal_degrees#Example
        const degree = Math.trunc(value)
        const remainder = Math.abs(value - degree)
        const minute = Math.trunc(60 * remainder)
        const second = 3600 * remainder - 60 * minute

        const d = degree.toFixed(0).padStart(3, '0')
        const m = minute.toFixed(0).padStart(2, '0')
        const s = second.toFixed(6).padStart(2, '0')
        return `${d}°${m}’${s}”`
      }
      case CoordinateType.Decimal: {
        return value.toFixed(7)
      }
    }
  }

  format(type: CoordinateType, bearing: boolean): { lat: string; lon: string } {
    const lat = Coordinates.format(this.lat, type)
    const lon = Coordinates.format(this.lon, type)

    if (bearing) {
      return {
        lat: `${lat.replace('-', '')} ${this.lat < 0 ? 'S' : 'N'}`,
        lon: `${lon.replace('-', '')} ${this.lon < 0 ? 'W' : 'E'}`,
      }
    }

    return { lat, lon }
  }

  link(type: CoordinateLink): string {
    switch (type) {
      case CoordinateLink.GoogleMaps:
        return `https://www.google.com/maps/place/${this.lat},${this.lon}`
      case CoordinateLink.OpenStreetMap:
        return `https://www.openstreetmap.org/?mlat=${this.lat}&mlon=${this.lon}`
    }
  }
}

export class Heading {
  private static Bearings = {
    N: 0,
    NE: 45,
    E: 90,
    SE: 135,
    S: 180,
    SW: 225,
    W: 270,
    NW: 315,
  }

  constructor(public heading: number) {}

  format(): string {
    return `${this.heading.toFixed(0)}° ${this.bearing()}`
  }

  bearing(): string {
    let bearing = ''
    let min = 360
    for (const [b, degree] of Object.entries(Heading.Bearings)) {
      const diff = Math.abs(this.heading - degree)
      if (diff < min) {
        min = diff
        bearing = b
      }
    }
    return bearing
  }
}
