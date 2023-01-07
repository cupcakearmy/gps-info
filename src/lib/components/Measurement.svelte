<script lang="ts">
  export let label: string
  export let value: string | undefined
  export let unit: string | null = null
</script>

<div>
  <div class="text-sm opacity-80">{label}</div>
  <div class="text-base">
    {#if value === undefined}
      No data
    {:else}
      {value}
    {/if}
    {#if unit && value !== undefined}
      <span class="text-xs -ml-1">{unit}</span>
    {/if}
  </div>
</div>
