<script lang="ts">
  import { ChatMessage } from '../models/chat'
  import ChatMessageList from './chat-message-list.svelte'

  let messages: ChatMessage[] = [
    {
      participant: 'Donald Trump',
      content: 'I am the best president ever!',
      role: 'human',
      timestamp: '2021-01-01T00:00:00.000Z'
    },
    {
      participant: 'Hatsune Miku',
      content: 'I am grateful for your support!',
      role: 'agent',
      timestamp: '2021-01-01T00:00:00.000Z'
    }
  ]
</script>

<ChatMessageList {messages} />
