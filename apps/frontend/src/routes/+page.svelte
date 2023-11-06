<script lang="ts">
  import { Chat } from '@nemesis/chat'
</script>

<svelte:head>
  <title>My App</title>
</svelte:head>

<main
  id="app-main"
  class="relative m-0 block h-full w-full overflow-hidden p-0"
>
  <Chat />
</main>

<style global lang="postcss">
  @import '../styles.css';
</style>
