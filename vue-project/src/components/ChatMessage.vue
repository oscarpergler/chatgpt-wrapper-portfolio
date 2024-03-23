<script setup lang="ts">
const props = defineProps({
    messageObj: Object
})
</script>

<template>
  <div v-if="messageObj != null" class="message"><span class="sender">{{ messageObj.sender }}: </span>{{ messageObj.message }}</div>
</template>

<style scoped>

    .message{
        word-wrap: break-word;
        padding-right: 20px;
    }

    .sender{
        font-weight: bold;
    }

</style>