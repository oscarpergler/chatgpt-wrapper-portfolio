<script setup lang="ts">
import { ref, type Ref } from 'vue';
import axios from 'axios';
import ChatMessage from '../components/ChatMessage.vue';

/*
 TODO: send the entire messages list as a parameter after appending the user query
       make sure the format is the same as the format handled by the ai-json.
*/

let messages = [
  { role: 'assistant', content: "Hello, I'm Dave! I'm here to answer any questions you may have about Oscar." },
];


const API_URL: string = "http://localhost:8080";
let currentMessage: Ref = ref(messages);
let loadingAnswer: Ref = ref(false);


const answerMessage = async (message: String) => {
  if (!message) throw new Error("No message paramater provided for answerMessage()");
  await axios.post(`${API_URL}/query`, messages) 
    .then(response => { 
      const {_, content} = response.data;
      currentMessage.value.push({
        role: 'assistant',
        content: content
      })
    }) 
    .catch(error => { 
      throw new Error(error);
    });
}


const sendMessage = (e: Event) => {
  if (!e.target) throw new Error("Parameter 'e.target' is falsy");
  const target = e.target as HTMLTextAreaElement;
  const value = target.value.trim();
  if (value) {
    currentMessage.value.push({
      role: 'user',
      content: value
    })
    target.value = '';
    answerMessage(value);
  }
  console.log(currentMessage.value);
  console.log(messages);
}

</script>

<template>
  <div class="chat">
    <div class="output">
      <ChatMessage
        v-for="messageObj in currentMessage"
        :messageObj="messageObj"
      ></ChatMessage>
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
    height: 80%;
  }

  .output{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    overflow-x: wrap; 
    overflow-y: scroll; 
    border: 1px solid #333;
    border-radius: 5px;
    padding: 10px;
  }

  .input{
    margin-top: 10px;
    position: sticky;
    bottom: 0;
    width: 100%;
  }

  .input-field{
    font-size: 1.1rem;
    padding: 10px;
    border-radius: 10px;
    color: rgb(156, 156, 156);
    background-color: #333;
    border: none;
    width: 100%;
  }

</style>
