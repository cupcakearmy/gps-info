<script lang="ts">
  import Icon from '$lib/icons/Icon.svelte'
  import { location } from '$lib/stores/location'

  $: degree = ($location?.heading?.heading || 0) - 45
</script>

<div class="text-xl" style="transform: rotate({degree % 360}deg);">
  <Icon icon="Navigate" />
  <!-- <IconNavigate /> -->
</div>

<style>
  div {
    transition: var(--anim);
  }
</style>
