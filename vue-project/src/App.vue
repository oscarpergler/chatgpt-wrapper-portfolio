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
    width: 100vw; 
    height: 100vh; 
    padding: 10%;
    align-items: center; 
    display: flex; 
    gap: 100px;
  }

  .view{
    flex: 1; 
    height: 100%; 
  }

</style>
