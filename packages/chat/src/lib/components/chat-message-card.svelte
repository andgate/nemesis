<script lang="ts">
  import { ChatMessage } from '../models/chat'
  import { Card } from 'flowbite-svelte'

  export let message: ChatMessage
</script>

<Card>
  <div>
    <h2>{message.participant}</h2>
    <p>
      {message.content}
    </p>
  </div>
</Card>
