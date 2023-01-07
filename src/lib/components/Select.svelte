<script lang="ts">
  export let value: string
  export let values: { label: string; value: string }[]
</script>

<select bind:value class="px-4 py-1 text-sm">
  {#each values as { label, value }}
    <option {value}>{label}</option>
  {/each}
</select>

<style>
  select {
    display: block;
    border-radius: calc(var(--radius) / 2);
    border: 2px solid var(--clr-bg-1);
    background: hsla(0, 0%, 100%, 0.1);
    box-shadow: 0 0 24px -12px #ffffff36;
    width: max-content;
  }
</style>
