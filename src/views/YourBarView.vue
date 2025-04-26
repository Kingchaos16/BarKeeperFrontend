<script setup lang="ts">
import YourBar  from "@/components/YourBar.vue";
import AddDrinks  from "@/components/AddDrinks.vue";
import CocktailSuggestions  from "@/components/CocktailSuggestions.vue";
import DrinkDetail from "@/components/DrinkDetail.vue";
import EditDrinks from "@/components/EditDrinks.vue";
import {ref} from "vue";


const isLoggedIn = ref(true);
function toggleLogin() {
  isLoggedIn.value = !isLoggedIn.value;
}
</script>

<template>
  <router-link to="/add-drinks">
    <button>Add Drinks</button>
  </router-link>
  <p v-if="isLoggedIn">Welcome back!</p>
  <p v-else>Please log in.</p>
  <button @click="toggleLogin">Toggle Login</button>

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


```
