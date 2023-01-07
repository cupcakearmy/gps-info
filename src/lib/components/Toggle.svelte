<script lang="ts">
  export let value: boolean
</script>

<label class="switch">
  <input type="checkbox" bind:checked={value} />
  <span class="slider" />
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius);
    border: 2px solid var(--clr-bg-1);
    background-color: var(--clr-bg-0);
    transition: var(--anim);
  }
  .slider:before {
    position: absolute;
    content: '';
    height: calc(100% - 0.25rem);
    aspect-ratio: 1/1;
    left: 0.125rem;
    bottom: 0.125rem;
    background-color: var(--clr-bg-1);
    transition: var(--anim);
    border-radius: var(--radius);
  }
  input:checked + .slider:before {
    transform: translateX(calc(1.5rem));
  }
</style>
