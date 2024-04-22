<script setup lang="ts">
const props = defineProps(["name"]);
</script>

<template>
  <div>
    <h1>Resource Library</h1>
    <h2 v-if="name">User: {{ props.name }}</h2>
    <h2 v-else>User: Anonymous</h2>
    <p>Someone who ❤️ Vue can throw in a sample grid here 😅</p>
  </div>
</template>

<style scoped></style>
