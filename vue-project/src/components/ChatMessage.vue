<script setup lang="ts">

const props = defineProps({
    messageObj: Object
});

function firstLetterUpperCase(role:string) {
    let firstLetter = role.split('')[0].toUpperCase();
    return firstLetter + role.slice(1);
}

</script>

<template>
    <div v-if="messageObj != null" class="message">
        <div :class="messageObj.role === 'assistant' ? 'assistant' : 'user'"> {{ firstLetterUpperCase(messageObj.role) }}: </div> 
        {{ messageObj.message }} 
    </div>
</template>

<style scoped>

    .message{
        word-wrap: break-word;
        padding-right: 20px;
    }

    .assistant{
        color: hsla(160, 100%, 37%, 1);
        font-weight: bold;
    }

    .user{
        color: rgb(43, 141, 233);
        font-weight: bold;
    }

</style>