<template>
    <div class="container">
        <RouterLink 
            class="title"
            :to="{ name: 'forum', params: { id: forum.id } }"
        >
            {{ forumTitle }}
        </RouterLink>
        <div class="description">{{ forum.description }}</div>
    </div>
</template>

<script setup lang="ts">
import type { Forum } from '@/api/models/Forum';
import { computed } from 'vue';

const props = defineProps<{
    forum: Forum
}>();

const forumTitle = computed(() => props.forum.id ?? 'Don\'t have name');
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