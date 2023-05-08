<template>
    <div>Forum {{ forum.id }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const router = useRoute();
const forum = { id: router.params.id };
</script>

<style scoped>

</style>