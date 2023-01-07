<script lang="ts">
  import { StatusBar, Style } from '@capacitor/status-bar'

  import '../app.css'
  import '../fonts.css'

  StatusBar.setStyle({ style: Style.Dark })
</script>

<div class="px-8 py-16">
  <slot />
</div>
