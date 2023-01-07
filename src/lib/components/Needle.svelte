<script lang="ts">
  import { location } from '$lib/stores/location'
  import IconNavigate from './IconNavigate.svelte'

  $: degree = ($location?.heading?.heading || 0) - 45
</script>

<div class="text-xl" style="transform: rotate({degree % 360}deg);">
  <IconNavigate />
</div>

<style>
  div {
    transition: var(--anim);
  }
</style>
