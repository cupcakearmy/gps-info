<button class="px-4 py-1 text-sm">
  <slot />
</button>

<style>
  button {
    display: block;
    border-radius: calc(var(--radius) / 2);
    border: 2px solid var(--clr-bg-1);
    background: hsla(0, 0%, 100%, 0.1);
    box-shadow: 0 0 24px -12px #ffffff36;
    width: max-content;
  }
</style>
