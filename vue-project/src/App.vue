<script setup lang="ts">
import ChatView from './views/ChatView.vue';
import IntroView from './views/IntroView.vue';
</script>

<template>
  <div class="app-container">
    <div class="view">
      <IntroView />
    </div>
    <div class="view">
      <ChatView />
    </div>
  </div>  
</template>

<style scoped>

  .app-container{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .view{
    padding: 5%;
    height: 100vh;
    width: 100vw;
  }

  @media screen and (min-width: 1024px){
    .app-container{ 
      height: 100vh;
      padding: 10%;
      flex-direction: row;
    }

    .view{
      flex: 1; 
      height: 100%; 
    }
  }
  

</style>
