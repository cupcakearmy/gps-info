<div class="px-6 py-4 w-full overflow-hidden">
  <slot />
</div>

<style>
  div {
    border-radius: var(--radius);
    border: 2px solid var(--clr-bg-1);
    background: hsla(0, 0%, 100%, 0.1);
    box-shadow: 0 0 24px -8px #ffffff36;
  }
</style>
