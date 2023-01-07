<script lang="ts">
  import { Clipboard } from '@capacitor/clipboard'

  import Button from '$lib/components/Button.svelte'
  import Card from '$lib/components/Card.svelte'
  import Compass from '$lib/components/Compass.svelte'
  import H1 from '$lib/components/H1.svelte'
  import Measurement from '$lib/components/Measurement.svelte'
  import VerticalGrid from '$lib/components/VerticalGrid.svelte'
  import { CoordinateLink } from '$lib/geo'
  import Icon from '$lib/icons/Icon.svelte'
  import { app } from '$lib/stores/app'
  import { location } from '$lib/stores/location'
  import { bearings, type } from '$lib/stores/settings'
  import Settings from './Settings.svelte'

  $: stamp = $location?.time.stamp
  $: date =
    stamp &&
    [stamp.getHours(), stamp.getMinutes(), stamp.getSeconds()].map((t) => t.toFixed(0).padStart(2, '0')).join(':')

  $: coords = $location?.coords.format($type, $bearings)
  $: fix = $location?.time.fix.toFixed(0)

  $: copy = () => {
    if (!coords) return
    const content = `${coords.lat}, ${coords.lon}`
    Clipboard.write({ string: content })
  }
</script>

<H1 text="GPS Info" />

<VerticalGrid>
  <Card>
    <VerticalGrid>
      <div class="flex items-center justify-between">
        <Measurement label="Heading" value={$location?.heading?.format()} />
        <Compass />
      </div>
      <Measurement label="Latitude" value={coords?.lat} />
      <div class="flex items-end justify-between">
        <Measurement label="Longitude" value={coords?.lon} />
        <button on:click={copy}>
          <Icon icon="Copy" />
        </button>
      </div>

      <div>
        <span class="text-sm italic">Open in:</span>
        <div class="mt-1 grid gap-2 grid-flow-col auto-cols-max overflow-auto">
          <a href={$location?.coords.link(CoordinateLink.GoogleMaps)} target="_blank" rel="noopener noreferrer">
            <Button>Google Maps</Button>
          </a>
          <a href={$location?.coords.link(CoordinateLink.OpenStreetMap)} target="_blank" rel="noopener noreferrer">
            <Button>OpenStreetMap</Button>
          </a>
        </div>
      </div>
    </VerticalGrid>
  </Card>

  <Card>
    <VerticalGrid>
      <div class="grid gap-4 grid-cols-2">
        <Measurement label="Altitude" value={$location?.altitude?.toFixed(2)} unit="m.a.s.l." />
        <Measurement label="Speed" value={$location?.speed?.toFixed(2)} unit="m/s" />
      </div>
      <div>
        <span class="text-sm italic">Accuracy</span>
        <div class="grid gap-4 grid-cols-2">
          <Measurement label="Vertical" value={$location?.accuracy.altitude?.toFixed(1)} unit="m" />
          <Measurement label="Horizontal" value={$location?.accuracy.coords?.toFixed(1)} unit="m" />
        </div>
      </div>
      <div>
        <span class="text-sm italic">Fixing</span>
        <div class="grid gap-4 grid-cols-2">
          <Measurement label="Time" value={fix} unit="ms" />
          <Measurement label="Last" value={date || undefined} />
        </div>
      </div>
    </VerticalGrid>
  </Card>

  <Settings />

  <Card>
    <VerticalGrid>
      <span class="text-sm italic">About</span>
      <p>
        This is Open Source software.
        <a class="italic" href="https://github.com/cupcakearmy/gps-info" target="_blank" rel="noopener noreferrer"
          >👉 Source code</a
        >
      </p>
      <p>
        If you have issues / suggestions feel free to report them <a
          class="italic"
          href="https://github.com/cupcakearmy/gps-info/issues"
          target="_blank"
          rel="noopener noreferrer">here</a
        >.
      </p>
      <p>Version: {$app?.version}</p>
    </VerticalGrid>
  </Card>
</VerticalGrid>
