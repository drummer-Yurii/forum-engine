<template>
    <div class="container">
        <div class="title">{{ forum.id ?? 'Don\'t have name' }}</div>
        <div class="description">{{ forum.description }}</div>
    </div>
</template>

<script setup lang="ts">
import type { Forum } from '@/api/models/Forum';

defineProps<{
    forum: Forum
}>();
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