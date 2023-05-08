<template>
    <div class="container">
        <div class="title">{{ title ?? 'Don\'t have name' }}</div>
        <div class="description" @click="doStuff">{{ description }}</div>
        <div v-if="!title">Realy don't have name!!!</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Main Forum');
const description = 'Speak here about all!';

function doStuff() {
    title.value = null;
    console.log('rename forum');
    
}
</script>

<style scoped>
.container {
    margin: 20px 0;
}

.title {
    font-size: larger;
}

.description {
    font-size: smaller;
}
</style>