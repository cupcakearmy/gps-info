<script lang="ts">
  import Copy from './copy-outline.svelte'
  import Navigate from './navigate-outline.svelte'

  const Icons = {
    Copy,
    Navigate,
  }

  export let icon: keyof typeof Icons
</script>

<div on:click on:keypress><svelte:component this={Icons[icon]} /></div>

<style>
  div {
    display: inline-block;
  }

  div > :global(svg) {
    height: 1em;
    display: inline-block;
    aspect-ratio: 1/1;
  }
</style>
