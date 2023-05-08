<template>
    <div>Forums</div>

    <TheLoader v-if="!store.forumsLoaded" />
    <ForumItem 
        v-else
        v-for="forum in store.forums" 
        :key="forum.id"
        :forum="forum"
    />
</template>

<script setup lang="ts">
import ForumItem from './ForumItem.vue';
import TheLoader from '@/components/TheLoader.vue';
import { useForumStore } from '@/stores/forum';

const store = useForumStore();

store.fetchForums();
</script>

<style scoped>

</style>