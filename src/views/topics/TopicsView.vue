<template>
    <div>Forum {{ store.selectedForum?.id }}</div>
</template>

<script setup lang="ts">
import { useForumStore } from '@/stores/forum';
import { useRoute } from 'vue-router';

const router = useRoute();
const forumId = router.params.id as string;

const store = useForumStore();
store.fetchForums();
store.selectForum(forumId);
</script>

<style scoped>

</style>