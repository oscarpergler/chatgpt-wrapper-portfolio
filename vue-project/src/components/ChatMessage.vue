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
        <span v-html="messageObj.content"></span>
    </div>
</template>

<style scoped>

    .message {
        margin: 20px;
        padding-right: 20px;
        animation: typing 1s steps(40, end);
    }

    @keyframes typing {
        from { opacity: 0; }
        to { opacity: 1; }
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