<script lang="ts">
  import { ChatMessage } from '../models/chat'

  export let message: ChatMessage
</script>

<div id="chat-message" class="card card-compact bg-base-100 w-96 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{message.participant}</h2>
    <p>
      {message.content}
    </p>
  </div>
</div>
