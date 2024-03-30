<script setup lang="ts">
import { ref, type Ref } from 'vue';
import dontenv from 'dotenv';
import axios from 'axios';
import ChatMessage from '../components/ChatMessage.vue';

let messages = [
  { role: 'assistant', content: "Hello, I'm Dave! I'm here to answer any questions you may have about Oscar." },
];

const API_URL: string = "https://chatgpt-wrapper-portfolio-zr9p.vercel.app";
let currentMessage: Ref = ref(messages);
let loadingAnswer: Ref = ref(false);

const answerMessage = async (message: String) => {
  if (!message) throw new Error("No message paramater provided for answerMessage()");
  loadingAnswer.value = true;
  if (messages.length > 10) messages.splice(0, 2);
  console.log(messages);
  await axios.post(`${API_URL}/query`, messages) 
    .then(response => { 
      loadingAnswer.value = false;
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

// TODO: rewrite sendMessage to recieve a string
const exampleQuestion = (s: String) => {
  if (s) {
    currentMessage.value.push({
      role: 'user',
      content: s
    })
    answerMessage(s);
  }
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
}

</script>

<template>
  <div class="chat">
    <div class="output">
      <div class="scroller">
        <ChatMessage
          v-for="messageObj in currentMessage"
          :messageObj="messageObj"
        ></ChatMessage>
        <ChatMessage
          v-if="loadingAnswer"
          :messageObj="{ 'role': 'assistant', 'content': 'Thinking...'}"
        ></ChatMessage>
      </div>
    </div>
    <div class="input">
      <input
        class="input-field"
        autofocus
        :placeholder="loadingAnswer ? 'Waiting for answer...' : 'Write here...'"
        :disabled="loadingAnswer"
        @keyup.enter="sendMessage"
      >
    </div>
  </div>
  <div class="examples-header">Try any of the examples:</div>
  <div class="examples">
    <button class="button" :disabled="loadingAnswer" @click="exampleQuestion('Tell me about his academic background.')">Academic background</button>
    <button class="button" :disabled="loadingAnswer" @click="exampleQuestion('Does he prefer frontend or backend development?')">Backend or frontend</button>
    <button class="button" :disabled="loadingAnswer" @click="exampleQuestion('Give me a list of his achievements')">Achievements</button>
    <button class="button" :disabled="loadingAnswer" @click="exampleQuestion('Tell me about his thesis project')">Thesis project</button>
  </div>
</template>

<style scoped>

  .chat {
    display: flex;
    flex-direction: column;
    height: 80%;
  }

  .output{
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
    overflow-y: scroll; 
    overflow-x: wrap;
    border-radius: 5px;
  }

  .input{
    width: 100%;
  }

  .input-field{
    font-size: 1.1rem;
    padding: 10px;
    color: rgb(156, 156, 156);
    background-color: #333;
    border-radius: 10px;
    border: none;
    width: 100%;
  }

  .examples{
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-row: auto auto;
    grid-column-gap: 10%;
    grid-row-gap: 20px;
  }

  .examples-header{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .examples .button{
    text-align: center;
    color: hsla(160, 100%, 37%, 1);
    background-color: var(--background-color);
    border: hsla(160, 100%, 37%, 1) solid 1px;
    padding: 5px;
    border-radius: 5px;
  }

  .examples .button:disabled{
    border-color: gray;
    color: gray;
  }

  .button:hover{
    color: black;
    background-color: hsla(160, 100%, 37%, 1);
    cursor: pointer;
    transition: 0.3s;
  }

  .input-field:disabled{
    cursor: wait;
  }

  .button:disabled:hover{
    background-color: var(--background-color);
    cursor: wait;
  }

  .answerLoading{
    padding-left: 10px;
    margin: 10px;
    font-weight: bold;
    width: 100%;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.3s;
  }

  @media screen and (min-width: 1200px) and (min-height: 800px){

    .output{
      display: flex;
      flex-direction: column-reverse;
      width: 50vw;
      height: 100%;
      overflow-y: scroll; 
      overflow-x: wrap;
      border: 1px solid #333;
      border-radius: 5px;
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

    .examples .button{
      border: hsla(160, 100%, 37%, 1) solid 1px;
      padding: 5px;
      border-radius: 5px;
      font-size: 1rem;
    }

    .button:hover{
      color: black;
      background-color: hsla(160, 100%, 37%, 1);
      cursor: pointer;
      transition: 0.3s;
    }

    .answerLoading{
      padding-left: 10px;
      margin: 10px;
      font-weight: bold;
      width: 100%;
      color: hsla(160, 100%, 37%, 1);
      transition: 0.3s;
    }
  }

</style>
