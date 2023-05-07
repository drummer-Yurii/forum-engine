<template>
    Here be forums list

    <div class="forum_item">
        <div class="forum_item-title">{{ title }}</div>
        <div class="forum_item-description">{{ description }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Main Forum');
const description = 'Speak here about all!';
</script>

<style scoped>
.forum_item {
    margin: 20px 0;
}

.forum_item-title {
    font-size: larger;
}

.forum_item-description {
    font-size: smaller;
}
</style>