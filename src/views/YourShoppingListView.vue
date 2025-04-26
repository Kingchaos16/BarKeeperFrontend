<script setup lang="ts">
import ShoppingList from "@/components/ShoppingList.vue";
import EditShoppingList from "@/components/EditShoppingList.vue";
</script>

<template>
  <router-link to="/edit-shopping-list">
    <button>Edit Shopping List</button>
  </router-link>
</template>

<style scoped>
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
