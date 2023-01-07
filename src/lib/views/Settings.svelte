<script lang="ts">
  import Card from '$lib/components/Card.svelte'
  import Select from '$lib/components/Select.svelte'
  import Toggle from '$lib/components/Toggle.svelte'
  import VerticalGrid from '$lib/components/VerticalGrid.svelte'
  import { CoordinateType } from '$lib/geo'
  import { bearings, type } from '$lib/stores/settings'
</script>

<Card>
  <span class="text-sm italic">Settings</span>
  <VerticalGrid>
    <div class="flex items-center">
      <div class="flex-auto">GPS format</div>
      <div>
        <Select bind:value={$type} values={Object.values(CoordinateType).map((v) => ({ label: v, value: v }))} />
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex-auto">Use bearings</div>
      <Toggle bind:value={$bearings} />
    </div>
  </VerticalGrid>
</Card>
