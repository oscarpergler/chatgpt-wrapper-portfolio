<script setup lang="ts">
const props = defineProps({
    messageObj: Object
})
</script>

<template>
    <div v-if="messageObj != null" class="message">
        <div :class="messageObj.sender === 'Dave' ? 'ai' : 'user'"> {{ messageObj.sender }}: </div> 
        {{ messageObj.message }} 
    </div>
</template>

<style scoped>

    .message{
        word-wrap: break-word;
        padding-right: 20px;
    }

    .ai{
        color: hsla(160, 100%, 37%, 1);
        font-weight: bold;
    }

    .user{
        color: rgb(43, 141, 233);
        font-weight: bold;
    }

</style>