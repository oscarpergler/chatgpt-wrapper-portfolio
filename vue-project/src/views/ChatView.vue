<script setup lang="ts">
import { ref } from 'vue'
import ChatMessage from '../components/ChatMessage.vue';

/*
 TODO: send the entire messages list as a parameter after appending the user query
       make sure the format is the same as the format handled by the ai-json.
*/

// Why are we using a ref instead of a normal array?
const messages = ref([
  { role: 'assistant', message: "Hello, I'm Dave! I'm here to answer any questions you may have about Oscar." },
]);

function answerMessage(message: String){

}

function sendMessage(e: Event) {
  if (!e.target) return;
  const target = e.target as HTMLTextAreaElement;
  const value = target.value.trim();
  if (value) {
    messages.value.push({
      role: 'user',
      message: value
    })
    target.value = '';
    answerMessage(value);
  }
  console.log(messages); // gives Object(__v_isRef, __v_isShallow, _rawValue, _value, dep), we want to be able to extract the array. Again, why are we using ref?
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
