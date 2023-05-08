<template>
    Here be forums list

    <ForumItem 
        v-for="forum in forums" 
        :key="forum.id"
        :forum="forum"
    />
</template>

<script setup lang="ts">
import type { Forum } from '@/api/models/Forum';
import ForumItem from './ForumItem.vue';

const forums: Forum[] = [
    { id: 'Main', description: 'We speak here about everething' },
    { id: 'Mistakes', description: 'Report of bags' },
    { id: 'Complaints', description: 'Complaints for moderators' }
]
</script>

<style scoped>

</style>