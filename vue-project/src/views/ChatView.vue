<script setup lang="ts">
import { ref } from 'vue'
import ChatMessage from '../components/ChatMessage.vue';

const text = ref("");
const messages = ref([
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' },
  { id: 0, sender: 'Oscar AI', message: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!' }
]);

function appendMessage() {
  
}

function answerMessage(){

}

function sendMessage() {
}

</script>

<template>
  <div class="chat">
    <div class="output">
      <div>
        <ChatMessage
          v-for="messageObj in messages"
          :messageObj="messageObj"
          :key="messageObj.id"
        ></ChatMessage>
      </div>
    </div>
    <div class="input">
        <form>
          <input v-model="text">
          <input type="submit" @click.prevent="">
        </form>
      </div>
  </div>
</template>

<style scoped>

  .chat {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 600px;
    height: 100%;
    border: 1px solid #333;
    border-radius: 3px;
  }

  .output{
    max-width: fit-content;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: auto; /* Add vertical scrollbar */
  }

  .input{
    position: sticky;
    bottom: 0;
    width: 100%;
  }

  input{
    width: 50%;
  }

</style>
