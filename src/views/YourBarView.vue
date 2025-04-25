<script setup lang="ts">
const isLoggedIn = true
</script>

<template>
  <div>
    <p v-if="isLoggedIn">Welcome back!</p>
    <p v-else>Please log in.</p>
  </div>
</template>

<style scoped>

</style>
