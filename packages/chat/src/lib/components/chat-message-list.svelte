<script lang="ts">
  import { ChatMessage } from '../models/chat'
  import ChatMessageCard from './chat-message-card.svelte'

  export let messages: ChatMessage[]
</script>

{#each messages as message}
  <ChatMessageCard {message} />
{/each}
