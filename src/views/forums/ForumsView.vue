<template>
    Here be forums list
    <ForumItem :forum="{ id: 'Main', description: 'We speak here about everething'}" />
    <ForumItem :forum="{ id: 'Mistakes', description: 'Report of bags'}" />
    <ForumItem :forum="{ id: 'Complaints', description: 'Complaints for moderators'}" />
</template>

<script setup lang="ts">
import ForumItem from './ForumItem.vue';
</script>

<style scoped>

</style>