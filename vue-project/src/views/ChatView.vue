<script setup lang="ts">
import { ref } from 'vue'
import ChatMessage from '../components/ChatMessage.vue';

const messages = ref([
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'Oscar (AI)', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { sender: 'You', message: 'whatafak' }
]);

function answerMessage(message: String){

}

function sendMessage(e: Event) {
  if (!e.target) return;
  const target = e.target as HTMLTextAreaElement;
  const value = target.value.trim();
  if (value) {
    messages.value.push({
      sender: 'You',
      message: value
    })
    target.value = '';
    answerMessage(value);
  }
}

</script>

<template>
  <div class="chat">
    <div class="output">
      <div class="scroll">
        <ChatMessage
          v-for="messageObj in messages"
          :messageObj="messageObj"
        ></ChatMessage>
      </div>
    </div>
    <div class="input">
      <input
        class="input-field"
        autofocus
        placeholder="Write here..."
        @keyup.enter="sendMessage"
      >
    </div>
  </div>
</template>

<style scoped>

  .chat {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 100%;
    border-radius: 3px;
  }

  .output{
    display: flex;
    flex-direction: column-reverse;
    overflow-anchor: auto;
    gap: 30px;
    max-width: fit-content;
    overflow-x: hidden; 
    overflow-y: auto; 
  }

  .input{
    margin-top: 50px;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 20%;
  }

  .input-field{
    font-size: 1.1rem;
    padding: 15px;
    border-radius: 10px;
    color: white;
    background-color: #333;
    border: none;
    width: 100%;
    height: 100%;
  }

  input{
    width: 50%;
  }

</style>
